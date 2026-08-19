// Universal Text-to-Speech Engine for IELTS Learning Website
// Uses Google TTS via Vite proxy (bypasses CORS) for guaranteed audio on all platforms.
// Falls back to Web Speech API if the audio fetch fails.

declare global {
  interface Window {
    responsiveVoice?: {
      speak: (
        text: string,
        voice?: string,
        parameters?: {
          rate?: number;
          pitch?: number;
          volume?: number;
          onstart?: () => void;
          onend?: () => void;
          onerror?: (err: unknown) => void;
        }
      ) => void;
      cancel: () => void;
      isPlaying: () => boolean;
    };
  }
}

// Build the proxied TTS URL (Vite dev proxy at /api/tts → Google TTS)
const buildTtsUrl = (text: string): string => {
  const encoded = encodeURIComponent(text.slice(0, 200));
  return `/api/tts?ie=UTF-8&client=tw-ob&q=${encoded}&tl=en-US&ttsspeed=1`;
};

let activeAudio: HTMLAudioElement | null = null;

const cancelActiveAudio = () => {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.src = '';
    activeAudio = null;
  }
};

const cancelNativeSpeech = () => {
  if ('speechSynthesis' in window) {
    try { window.speechSynthesis.cancel(); } catch { /* Ignore */ }
  }
};

// ---- Native SpeechSynthesis (browser built-in) ----
const tryNativeSpeech = (
  text: string,
  rate: number,
  voiceName: string,
  onEnd: () => void,
  onFail: () => void
): void => {
  if (!('speechSynthesis' in window)) { onFail(); return; }

  try {
    cancelNativeSpeech();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.lang = 'en-US';

    const voices = window.speechSynthesis.getVoices();
    if (voiceName && voiceName !== 'default') {
      const found = voices.find(v => v.name === voiceName);
      if (found) { utterance.voice = found; utterance.lang = found.lang || 'en-US'; }
    } else {
      const preferred = voices.find(v => v.lang === 'en-US' || v.lang === 'en-GB') || voices.find(v => v.lang.startsWith('en'));
      if (preferred) { utterance.voice = preferred; utterance.lang = preferred.lang || 'en-US'; }
    }

    let didEnd = false;

    utterance.onend = () => {
      if (!didEnd) { didEnd = true; onEnd(); }
    };
    utterance.onerror = () => {
      if (!didEnd) { didEnd = true; onFail(); }
    };

    // Safety timeout — if no onend fires in 15 seconds, trigger onFail
    const timeout = setTimeout(() => {
      if (!didEnd) { didEnd = true; cancelNativeSpeech(); onFail(); }
    }, 15000);

    utterance.onend = () => {
      if (!didEnd) { didEnd = true; clearTimeout(timeout); onEnd(); }
    };
    utterance.onerror = () => {
      if (!didEnd) { didEnd = true; clearTimeout(timeout); onFail(); }
    };

    window.speechSynthesis.speak(utterance);
  } catch {
    onFail();
  }
};

// ---- Google TTS via Vite Proxy (bypasses CORS) ----
const tryGoogleTTS = (
  text: string,
  rate: number,
  onEnd: () => void,
  onFail: () => void
): void => {
  cancelActiveAudio();

  const audio = new Audio(buildTtsUrl(text));
  audio.playbackRate = Math.min(Math.max(rate, 0.5), 2.0);
  activeAudio = audio;

  audio.onended = () => {
    activeAudio = null;
    onEnd();
  };
  audio.onerror = () => {
    activeAudio = null;
    onFail();
  };

  audio.play().catch(() => {
    activeAudio = null;
    onFail();
  });
};

// ---- ResponsiveVoice CDN Fallback ----
let rvLoading: Promise<void> | null = null;

const loadResponsiveVoiceScript = (): Promise<void> => {
  if (window.responsiveVoice) return Promise.resolve();
  if (rvLoading) return rvLoading;

  rvLoading = new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://code.responsivevoice.org/responsivevoice.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => resolve(); // resolve anyway for graceful fallback
    document.head.appendChild(script);
  });

  return rvLoading;
};

const tryResponsiveVoice = (
  text: string,
  rate: number,
  onEnd: () => void,
  onFail: () => void
): void => {
  loadResponsiveVoiceScript().then(() => {
    if (window.responsiveVoice) {
      window.responsiveVoice.speak(text, 'UK English Male', {
        rate,
        onend: onEnd,
        onerror: onFail
      });
    } else {
      onFail();
    }
  });
};

// ---- Public preload helper ----
export const loadResponsiveVoice = (): Promise<void> => loadResponsiveVoiceScript();

// ---- Main public API ----
// Returns a cleanup function that cancels the current audio.
export const speakSentence = (
  text: string,
  rate: number = 1.0,
  voiceName: string = 'default',
  onEnd: () => void,
  onError: () => void
): (() => void) => {
  const cleanText = text
    .replace(/[*#_~`]/g, '')
    .replace(/⭐/g, '')
    .replace(/❌/g, 'Incorrect:')
    .replace(/✅/g, 'Correct:')
    .trim();

  if (!cleanText) { onEnd(); return () => {}; }

  let stopped = false;

  const safeOnEnd = () => { if (!stopped) onEnd(); };
  const safeOnError = () => { if (!stopped) onError(); };

  // Strategy: Google TTS proxy → Web Speech API → ResponsiveVoice
  tryGoogleTTS(
    cleanText,
    rate,
    safeOnEnd,
    () => {
      // Google TTS failed, try native Web Speech
      tryNativeSpeech(
        cleanText,
        rate,
        voiceName,
        safeOnEnd,
        () => {
          // Native failed too, try ResponsiveVoice
          tryResponsiveVoice(cleanText, rate, safeOnEnd, safeOnError);
        }
      );
    }
  );

  return () => {
    stopped = true;
    cancelActiveAudio();
    cancelNativeSpeech();
    if (window.responsiveVoice?.isPlaying()) {
      try { window.responsiveVoice.cancel(); } catch { /* Ignore */ }
    }
  };
};

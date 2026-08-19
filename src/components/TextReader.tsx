import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Pause, Play, Square, Gauge } from 'lucide-react';
import { speakSentence, loadResponsiveVoice } from '../utils/speechEngine';

interface TextReaderProps {
  textToRead: string;
  title: string;
}

export const TextReader: React.FC<TextReaderProps> = ({ textToRead, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>('default');
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState<number>(0);
  const [totalSentences, setTotalSentences] = useState<number>(0);

  const sentencesRef = useRef<string[]>([]);
  const currentIndexRef = useRef<number>(0);
  const isPlayingRef = useRef<boolean>(false);
  const stopCurrentSentenceRef = useRef<(() => void) | null>(null);

  // Split text into short natural sentence chunks (<150 characters)
  const prepareSentences = (rawText: string): string[] => {
    const clean = rawText
      .replace(/[*#_~`]/g, '')
      .replace(/⭐/g, '')
      .replace(/❌/g, 'Incorrect statement:')
      .replace(/✅/g, 'Correct statement:');

    const rawChunks = clean.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 0);
    const finalChunks: string[] = [];

    rawChunks.forEach((chunk) => {
      if (chunk.length > 160) {
        const subParts = chunk.split(/(?<=[,;])\s+/);
        let current = '';
        subParts.forEach((part) => {
          if ((current + ' ' + part).length > 160) {
            if (current.trim()) finalChunks.push(current.trim());
            current = part;
          } else {
            current += (current ? ' ' : '') + part;
          }
        });
        if (current.trim()) finalChunks.push(current.trim());
      } else {
        finalChunks.push(chunk.trim());
      }
    });

    return finalChunks.length > 0 ? finalChunks : [clean.slice(0, 160)];
  };

  useEffect(() => {
    // Preload ResponsiveVoice fallback script
    loadResponsiveVoice();

    if ('speechSynthesis' in window) {
      const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        if (availableVoices && availableVoices.length > 0) {
          const englishVoices = availableVoices.filter(v => v.lang.startsWith('en'));
          setVoices(englishVoices.length > 0 ? englishVoices : availableVoices);
        }
      };

      loadVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    }

    return () => {
      stopSpeech();
    };
  }, []);

  const speakNextSentence = () => {
    if (!isPlayingRef.current) return;

    if (currentIndexRef.current >= sentencesRef.current.length) {
      stopSpeech();
      return;
    }

    const sentenceText = sentencesRef.current[currentIndexRef.current];
    setCurrentSentenceIndex(currentIndexRef.current + 1);

    stopCurrentSentenceRef.current = speakSentence(
      sentenceText,
      playbackRate,
      selectedVoice,
      () => {
        if (isPlayingRef.current) {
          currentIndexRef.current += 1;
          speakNextSentence();
        }
      },
      () => {
        if (isPlayingRef.current && currentIndexRef.current < sentencesRef.current.length - 1) {
          currentIndexRef.current += 1;
          speakNextSentence();
        } else {
          stopSpeech();
        }
      }
    );
  };

  const handlePlay = () => {
    if (isPaused) {
      setIsPaused(false);
      setIsPlaying(true);
      isPlayingRef.current = true;
      speakNextSentence();
      return;
    }

    stopSpeech();

    const chunks = prepareSentences(`${title}. ${textToRead}`);
    sentencesRef.current = chunks;
    setTotalSentences(chunks.length);

    currentIndexRef.current = 0;
    isPlayingRef.current = true;
    setIsPlaying(true);
    setIsPaused(false);

    speakNextSentence();
  };

  const handlePause = () => {
    if (stopCurrentSentenceRef.current) {
      stopCurrentSentenceRef.current();
    }
    setIsPaused(true);
    setIsPlaying(false);
    isPlayingRef.current = false;
  };

  const stopSpeech = () => {
    isPlayingRef.current = false;
    if (stopCurrentSentenceRef.current) {
      stopCurrentSentenceRef.current();
      stopCurrentSentenceRef.current = null;
    }
    setIsPlaying(false);
    setIsPaused(false);
    currentIndexRef.current = 0;
    setCurrentSentenceIndex(0);
  };

  const handleRateChange = (rate: number) => {
    setPlaybackRate(rate);
    if (isPlaying) {
      stopSpeech();
      setTimeout(handlePlay, 50);
    }
  };

  return (
    <div style={{
      backgroundColor: 'var(--bg-secondary)',
      border: '1px solid var(--border-color)',
      borderRadius: 'var(--radius-lg)',
      padding: '0.875rem 1.25rem',
      marginBottom: '1.75rem',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: isPlaying ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
            color: isPlaying ? '#ffffff' : 'var(--accent-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all var(--transition-normal)'
          }}>
            {isPlaying ? <Volume2 size={20} className="pulse-animation" /> : <VolumeX size={20} />}
          </div>

          <div>
            <div style={{ fontWeight: 700, fontSize: '0.925rem', color: 'var(--text-primary)' }}>
              Listen to Lesson Audio (Read Aloud)
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              {isPlaying ? (
                <span>🔊 Reading sentence {currentSentenceIndex} of {totalSentences}</span>
              ) : isPaused ? (
                <span>⏸️ Paused (Sentence {currentSentenceIndex} of {totalSentences})</span>
              ) : (
                <span>Click Play to listen to full lesson or select any text to speak</span>
              )}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          {/* Play/Pause Button */}
          {!isPlaying ? (
            <button
              className="btn btn-primary"
              onClick={handlePlay}
              style={{ padding: '0.45rem 0.9rem', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <Play size={16} /> {isPaused ? 'Resume' : 'Play Audio'}
            </button>
          ) : (
            <button
              className="btn btn-secondary"
              onClick={handlePause}
              style={{ padding: '0.45rem 0.9rem', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <Pause size={16} /> Pause
            </button>
          )}

          {/* Stop Button */}
          {(isPlaying || isPaused) && (
            <button
              className="btn btn-secondary"
              onClick={stopSpeech}
              style={{ padding: '0.45rem 0.75rem', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
              title="Stop Audio"
            >
              <Square size={14} /> Stop
            </button>
          )}

          {/* Speed Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.825rem', backgroundColor: 'var(--bg-card)', padding: '0.25rem 0.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <Gauge size={14} style={{ color: 'var(--text-muted)' }} />
            {[0.8, 1.0, 1.2].map((rate) => (
              <button
                key={rate}
                onClick={() => handleRateChange(rate)}
                style={{
                  background: playbackRate === rate ? 'var(--accent-primary)' : 'transparent',
                  color: playbackRate === rate ? '#ffffff' : 'var(--text-secondary)',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '0.15rem 0.4rem',
                  fontSize: '0.775rem',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
              >
                {rate}x
              </button>
            ))}
          </div>

          {/* Voice Selector Dropdown */}
          <select
            value={selectedVoice}
            onChange={(e) => setSelectedVoice(e.target.value)}
            style={{
              padding: '0.35rem 0.5rem',
              fontSize: '0.8rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-card)',
              color: 'var(--text-primary)',
              maxWidth: '150px'
            }}
          >
            <option value="default">Default Voice</option>
            {voices.map((v, i) => (
              <option key={i} value={v.name}>
                {v.name.replace(/Google|Microsoft|Apple/g, '').trim()} ({v.lang})
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

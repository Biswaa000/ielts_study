import React, { useState, useEffect } from 'react';
import { Volume2, X } from 'lucide-react';
import { speakSentence } from '../utils/speechEngine';

export const SelectionSpeaker: React.FC = () => {
  const [selectedText, setSelectedText] = useState<string>('');
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseUp = () => {
      const selection = window.getSelection();
      if (selection && selection.toString().trim().length > 0) {
        const text = selection.toString().trim();
        if (text.length > 1) {
          const range = selection.getRangeAt(0);
          const rect = range.getBoundingClientRect();

          setSelectedText(text);
          setPosition({
            x: Math.max(80, Math.min(window.innerWidth - 80, rect.left + rect.width / 2)),
            y: rect.top - 45 + window.scrollY
          });
          return;
        }
      }
      if (!isSpeaking) {
        setPosition(null);
        setSelectedText('');
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, [isSpeaking]);

  const handleSpeakSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedText) return;

    setIsSpeaking(true);
    speakSentence(
      selectedText,
      1.0,
      'default',
      () => {
        setIsSpeaking(false);
        setPosition(null);
      },
      () => {
        setIsSpeaking(false);
        setPosition(null);
      }
    );
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSpeaking(false);
    setPosition(null);
    setSelectedText('');
  };

  if (!position || !selectedText) return null;

  return (
    <div
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translateX(-50%)',
        zIndex: 1000,
        backgroundColor: 'var(--text-primary)',
        color: 'var(--bg-primary)',
        padding: '0.35rem 0.75rem',
        borderRadius: 'var(--radius-full)',
        boxShadow: 'var(--shadow-md)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.825rem',
        fontWeight: 600,
        cursor: 'pointer'
      }}
      onClick={handleSpeakSelection}
    >
      <Volume2 size={16} style={{ color: 'var(--accent-primary)' }} />
      <span>{isSpeaking ? 'Speaking...' : 'Read Selection'}</span>
      <button
        onClick={handleClose}
        style={{
          background: 'none',
          border: 'none',
          color: 'inherit',
          cursor: 'pointer',
          padding: 0,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <X size={14} />
      </button>
    </div>
  );
};

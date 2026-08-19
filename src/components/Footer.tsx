import React from 'react';
import { GraduationCap } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand-info">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <GraduationCap size={24} style={{ color: 'var(--accent-primary)' }} />
              <span className="footer-brand-title">IELTS Study Journal</span>
            </div>
            <p className="footer-brand-desc">
              A personal, living IELTS study platform created to publicly track topics studied, grammar rules, vocabulary, and interactive practice exercises.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              Study Sections
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem' }}>
              <li>
                <a href="/grammar" onClick={(e) => { e.preventDefault(); onNavigate('/grammar'); }}>
                  Grammar (1 Topic)
                </a>
              </li>
              <li>
                <a href="/vocabulary" onClick={(e) => { e.preventDefault(); onNavigate('/vocabulary'); }}>
                  Vocabulary (Coming Soon)
                </a>
              </li>
              <li>
                <a href="/writing" onClick={(e) => { e.preventDefault(); onNavigate('/writing'); }}>
                  Writing (Coming Soon)
                </a>
              </li>
              <li>
                <a href="/speaking" onClick={(e) => { e.preventDefault(); onNavigate('/speaking'); }}>
                  Speaking (Coming Soon)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} IELTS Study Journal. Built for personal preparation & public learning.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <span>Made with precision for Band 8+ preparation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { IELTS_SECTIONS } from '../content/registry';
import { 
  BookOpen, 
  Sparkles, 
  FileText, 
  PenTool, 
  Headphones, 
  Mic, 
  ArrowRight, 
  Compass
} from 'lucide-react';

interface HomeProps {
  onNavigate: (path: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen size={24} />;
      case 'Sparkles': return <Sparkles size={24} />;
      case 'FileText': return <FileText size={24} />;
      case 'PenTool': return <PenTool size={24} />;
      case 'Headphones': return <Headphones size={24} />;
      case 'Mic': return <Mic size={24} />;
      default: return <BookOpen size={24} />;
    }
  };

  return (
    <div className="main-content">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-tag">
            <Compass size={16} /> Personal IELTS Preparation Journal
          </div>
          <h1 className="hero-title">
            Learn IELTS, One Topic at a Time.
          </h1>
          <p className="hero-subtitle">
            Welcome to my personal IELTS study platform. Here I document my study journey, transform rough notes into interactive educational lessons, and practice grammar, vocabulary, and exam strategies.
          </p>

          <div className="hero-actions">
            <button 
              className="btn btn-primary"
              onClick={() => onNavigate('/grammar/tenses')}
            >
              Start First Lesson: Tenses <ArrowRight size={18} />
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => onNavigate('/grammar')}
            >
              Browse Grammar Topics
            </button>
          </div>
        </div>
      </section>

      {/* Purpose & Study Journey Roadmap */}
      <section className="container" style={{ padding: '2rem 1.5rem 3rem' }}>
        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-xl)',
          padding: '2rem 2.5rem',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              How This Study Notebook Works
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              As I study new IELTS topics step by step, notes are transformed into structured web modules.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem' }}>1</span>
                <span>Study & Summarize</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Read official IELTS materials, grammar guides, and standard reference texts.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem' }}>2</span>
                <span>Organize & Format</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Convert raw notes into formulas, clear rules, real examples, and common mistake breakdowns.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem' }}>3</span>
                <span>Interactive Practice</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Build interactive quizzes with instant answer feedback and detailed reasoning.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem' }}>4</span>
                <span>Incremental Growth</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Continuously expand the site topic by topic without overwriting previous work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main IELTS Learning Modules */}
      <section className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>IELTS Learning Modules</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Explore available modules or check what's upcoming in my study sequence.
            </p>
          </div>
        </div>

        <div className="sections-grid">
          {IELTS_SECTIONS.map((section) => (
            <div
              key={section.id}
              className={`section-card ${section.isAvailable ? 'available' : ''}`}
              onClick={() => section.isAvailable && onNavigate(`/${section.id}`)}
              style={{ cursor: section.isAvailable ? 'pointer' : 'default' }}
            >
              <div className="section-card-header">
                <div className="section-icon-wrapper">
                  {getIcon(section.iconName)}
                </div>
                <span className={`status-badge ${section.isAvailable ? 'active' : 'coming-soon'}`}>
                  {section.isAvailable ? `${section.topicCount} Topic Available` : 'Coming Soon'}
                </span>
              </div>

              <h3 className="section-card-title">{section.title}</h3>
              <p className="section-card-desc">{section.description}</p>

              <div className="section-card-footer">
                {section.isAvailable ? (
                  <>
                    <span>Explore {section.title} Topics</span>
                    <ArrowRight size={16} />
                  </>
                ) : (
                  <span style={{ color: 'var(--text-muted)' }}>Awaiting study notes</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

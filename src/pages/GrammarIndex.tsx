import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { getTopicsBySection } from '../content/registry';
import { BookOpen, Clock, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface GrammarIndexProps {
  onNavigate: (path: string) => void;
}

export const GrammarIndex: React.FC<GrammarIndexProps> = ({ onNavigate }) => {
  const grammarTopics = getTopicsBySection('grammar');

  const breadcrumbItems = [{ label: 'Grammar' }];

  return (
    <div className="container">
      <Breadcrumb items={breadcrumbItems} onNavigate={onNavigate} />

      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          backgroundColor: 'var(--badge-bg)',
          color: 'var(--badge-text)',
          padding: '0.3rem 0.75rem',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.85rem',
          fontWeight: 700,
          marginBottom: '0.75rem'
        }}>
          <BookOpen size={16} /> Grammar Masterclass
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
          IELTS Grammar Topics
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '750px', lineHeight: 1.6 }}>
          Grammatical Range and Accuracy is essential for Band 7+ in IELTS Writing & Speaking. Below are the topics I have studied and summarized so far, ordered chronologically.
        </p>
      </div>

      {/* Available Topics List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
        {grammarTopics.map((topic, idx) => (
          <div
            key={topic.id}
            onClick={() => onNavigate(`/grammar/${topic.slug}`)}
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-xl)',
              padding: '1.75rem',
              cursor: 'pointer',
              transition: 'all var(--transition-normal)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
              boxShadow: 'var(--shadow-sm)'
            }}
            className="section-card available"
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-light)',
                color: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '1.1rem',
                flexShrink: 0
              }}>
                {idx + 1}
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {topic.title}
                  </h2>
                  <span className="status-badge active" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <CheckCircle2 size={12} /> Completed Lesson
                  </span>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '0.75rem', lineHeight: 1.5 }}>
                  {topic.description}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Clock size={14} /> {topic.readTime}
                  </span>
                  <span>•</span>
                  <span>{topic.subsections.length} Core Sub-sections</span>
                  <span>•</span>
                  <span>{topic.practice.length} Practice Questions</span>
                </div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--accent-primary)',
              fontWeight: 700,
              flexShrink: 0
            }}>
              <span>Start Learning</span>
              <ArrowRight size={18} />
            </div>
          </div>
        ))}
      </div>

      {/* Future Topics Placeholder Box */}
      <div style={{
        backgroundColor: 'var(--bg-secondary)',
        border: '2px dashed var(--border-color)',
        borderRadius: 'var(--radius-xl)',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          backgroundColor: 'var(--bg-tertiary)',
          color: 'var(--text-muted)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1rem'
        }}>
          <Sparkles size={24} />
        </div>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          Future Topics Slot
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', maxWidth: '540px', margin: '0 auto' }}>
          As I finish studying topics like <em>Articles</em>, <em>Subject-Verb Agreement</em>, <em>Prepositions</em>, and <em>Conditionals</em>, new lessons will automatically appear here in study order.
        </p>
      </div>
    </div>
  );
};

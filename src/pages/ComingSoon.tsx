import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { getSectionMeta } from '../content/registry';
import { TopicSectionId } from '../types/topic';
import { Hourglass, ArrowLeft, BookOpen } from 'lucide-react';

interface ComingSoonProps {
  sectionId: TopicSectionId;
  onNavigate: (path: string) => void;
}

export const ComingSoon: React.FC<ComingSoonProps> = ({ sectionId, onNavigate }) => {
  const meta = getSectionMeta(sectionId);
  const title = meta ? meta.title : sectionId;
  const description = meta ? meta.description : '';

  const breadcrumbItems = [{ label: title }];

  return (
    <div className="container">
      <Breadcrumb items={breadcrumbItems} onNavigate={onNavigate} />

      <div style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-xl)',
        padding: '4rem 2rem',
        textAlign: 'center',
        maxWidth: '720px',
        margin: '2rem auto',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          backgroundColor: 'var(--accent-light)',
          color: 'var(--accent-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem'
        }}>
          <Hourglass size={32} />
        </div>

        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '0.75rem' }}>
          {title} Module — Coming Soon
        </h1>

        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          {description}
        </p>

        <div style={{
          backgroundColor: 'var(--bg-tertiary)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-md)',
          padding: '1rem 1.25rem',
          fontSize: '0.9rem',
          color: 'var(--text-muted)',
          marginBottom: '2rem',
          textAlign: 'left'
        }}>
          📌 <strong>Study Note Workflow:</strong> I am currently studying IELTS topics one by one. Once I finish creating notes for {title}, the interactive lessons and practice exercises will be added directly to this section.
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            className="btn btn-primary"
            onClick={() => onNavigate('/grammar')}
          >
            <BookOpen size={18} /> Explore Grammar Topics
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => onNavigate('/')}
          >
            <ArrowLeft size={18} /> Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

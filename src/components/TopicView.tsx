import React, { useEffect, useState } from 'react';
import { Topic } from '../types/topic';
import { Breadcrumb } from './Breadcrumb';
import { PracticeQuiz } from './PracticeQuiz';
import { TextReader } from './TextReader';
import { SelectionSpeaker } from './SelectionSpeaker';
import { speakSentence } from '../utils/speechEngine';
import { 
  Clock, 
  BookOpen, 
  Sparkles, 
  List, 
  ArrowLeft, 
  ArrowRight,
  ShieldCheck,
  Volume2
} from 'lucide-react';

interface TopicViewProps {
  topic: Topic;
  onNavigate: (path: string) => void;
}

export const TopicView: React.FC<TopicViewProps> = ({ topic, onNavigate }) => {
  const [activeSectionId, setActiveSectionId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-toc-id]');
      let currentActive = '';

      sections.forEach((sec) => {
        const top = sec.getBoundingClientRect().top;
        if (top <= 120) {
          currentActive = sec.getAttribute('data-toc-id') || '';
        }
      });

      if (currentActive) {
        setActiveSectionId(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to extract full plain text of topic for full audio playback
  const getFullTopicText = (): string => {
    let fullText = `${topic.overview} `;
    topic.subsections.forEach((sub) => {
      fullText += `${sub.title}. ${sub.overview || ''} `;
      sub.tenses?.forEach((t) => {
        fullText += `${t.title}. ${t.rule}. Formula: ${t.formula}. Examples: ${t.examples.join('. ')}. `;
        t.commonMistakes?.forEach((m) => {
          fullText += `Incorrect: ${m.incorrect}. Correct: ${m.correct}. Reason: ${m.explanation}. `;
        });
      });
    });
    return fullText;
  };

  const handleSpeakSection = (text: string) => {
    const clean = text
      .replace(/[*#_~`]/g, '')
      .replace(/⭐/g, '')
      .replace(/❌/g, 'Incorrect:')
      .replace(/✅/g, 'Correct:');

    const sentences = clean.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 0);
    if (sentences.length === 0) return;

    let index = 0;
    const playNext = () => {
      if (index >= sentences.length) return;
      speakSentence(
        sentences[index],
        1.0,
        'default',
        () => {
          index += 1;
          playNext();
        },
        () => {
          index += 1;
          playNext();
        }
      );
    };

    playNext();
  };

  const breadcrumbItems = [
    { label: topic.sectionTitle, path: `/${topic.section}` },
    { label: topic.title }
  ];

  return (
    <div className="container" style={{ position: 'relative' }}>
      <Breadcrumb items={breadcrumbItems} onNavigate={onNavigate} />

      {/* Floating text selection reader */}
      <SelectionSpeaker />

      <div className="topic-layout">
        {/* Sidebar Table of Contents */}
        <aside className="toc-sidebar">
          <div className="toc-title">
            <List size={16} /> Table of Contents
          </div>
          <ul className="toc-list">
            <li>
              <a
                href="#overview"
                className={`toc-link ${activeSectionId === 'overview' ? 'active' : ''}`}
              >
                Overview
              </a>
            </li>
            {topic.subsections.map((sub) => (
              <React.Fragment key={sub.id}>
                <li>
                  <a
                    href={`#${sub.id}`}
                    className={`toc-link ${activeSectionId === sub.id ? 'active' : ''}`}
                  >
                    {sub.title}
                  </a>
                </li>
                {sub.tenses?.map((t) => (
                  <li key={t.id}>
                    <a
                      href={`#${t.id}`}
                      className={`toc-link toc-sublink ${activeSectionId === t.id ? 'active' : ''}`}
                    >
                      • {t.title}
                    </a>
                  </li>
                ))}
              </React.Fragment>
            ))}
            <li>
              <a
                href="#ielts-connection"
                className={`toc-link ${activeSectionId === 'ielts-connection' ? 'active' : ''}`}
              >
                IELTS Connection
              </a>
            </li>
            <li>
              <a
                href="#practice"
                className={`toc-link ${activeSectionId === 'practice' ? 'active' : ''}`}
              >
                Practice Quiz ({topic.practice.length})
              </a>
            </li>
          </ul>
        </aside>

        {/* Main Article Body */}
        <article className="topic-article">
          <header className="topic-header">
            <div className="topic-meta">
              <div className="topic-meta-item">
                <BookOpen size={16} />
                <span>{topic.sectionTitle}</span>
              </div>
              <span>•</span>
              <div className="topic-meta-item">
                <Clock size={16} />
                <span>{topic.readTime}</span>
              </div>
              <span>•</span>
              <div>Updated {topic.lastUpdated}</div>
            </div>

            <h1 className="topic-main-title">{topic.title}</h1>
            <p className="topic-lead">{topic.description}</p>
          </header>

          {/* Full Lesson Text-to-Speech Audio Player */}
          <TextReader textToRead={getFullTopicText()} title={topic.title} />

          {/* Overview Section */}
          <section id="overview" data-toc-id="overview" style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700 }}>
                Overview
              </h2>
              <button
                className="btn btn-secondary"
                onClick={() => handleSpeakSection(topic.overview)}
                style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                title="Speak overview"
              >
                <Volume2 size={14} /> Listen
              </button>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.025rem' }}>
              {topic.overview}
            </p>
          </section>

          {/* Subsections & Details */}
          {topic.subsections.map((subsection) => (
            <section
              key={subsection.id}
              id={subsection.id}
              data-toc-id={subsection.id}
              style={{ marginBottom: '3rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {subsection.title}
                </h2>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleSpeakSection(`${subsection.title}. ${subsection.overview || ''}`)}
                  style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                  title="Speak section overview"
                >
                  <Volume2 size={14} /> Listen
                </button>
              </div>

              {subsection.overview && (
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  {subsection.overview}
                </p>
              )}

              {subsection.tenses?.map((tense) => (
                <div
                  key={tense.id}
                  id={tense.id}
                  data-toc-id={tense.id}
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.75rem',
                    marginBottom: '1.75rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>
                      {tense.title}
                    </h3>
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleSpeakSection(`${tense.title}. Rule: ${tense.rule}. Formula: ${tense.formula}. Examples: ${tense.examples.join('. ')}`)}
                      style={{ padding: '0.2rem 0.45rem', fontSize: '0.775rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
                      title="Speak card details"
                    >
                      <Volume2 size={13} /> Listen Card
                    </button>
                  </div>

                  {/* Formula */}
                  <div className="formula-card">
                    <span className="formula-label">Formula</span>
                    <span>{tense.formula}</span>
                  </div>

                  {/* Rule */}
                  <div className="rule-box">
                    <div className="rule-box-header">
                      <ShieldCheck size={18} /> Rule & Usage
                    </div>
                    <div>{tense.rule}</div>
                  </div>

                  {/* Examples */}
                  <div className="example-box">
                    <div className="example-title">
                      <Sparkles size={16} /> Examples
                    </div>
                    <ul className="example-list">
                      {tense.examples.map((ex, i) => (
                        <li key={i} className="example-item">{ex}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Common Mistakes */}
                  {tense.commonMistakes && tense.commonMistakes.length > 0 && (
                    <div style={{ marginTop: '1.25rem' }}>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        Common Student Mistakes
                      </div>
                      <div className="mistakes-grid">
                        {tense.commonMistakes.map((m, idx) => (
                          <div key={idx}>
                            <div className="mistake-card mistake-wrong">
                              <div className="mistake-line">
                                <span>❌ Incorrect:</span>
                                <span>{m.incorrect}</span>
                              </div>
                            </div>
                            <div className="mistake-card mistake-correct" style={{ marginTop: '0.35rem' }}>
                              <div className="mistake-line">
                                <span>✅ Correct:</span>
                                <span>{m.correct}</span>
                              </div>
                              <div className="mistake-explanation">
                                <strong>Why:</strong> {m.explanation}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* IELTS Tips */}
                  {tense.ieltsTips && tense.ieltsTips.length > 0 && (
                    <div className="ielts-tip-box">
                      {tense.ieltsTips.map((tip, idx) => (
                        <div key={idx}>
                          <div className="ielts-tip-header">
                            <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>IELTS {tip.module} Tip</span>
                            <span className="ielts-tip-badge">Band 7+ Strategy</span>
                          </div>
                          <p style={{ fontSize: '0.925rem', marginBottom: tip.example ? '0.5rem' : '0' }}>
                            {tip.tip}
                          </p>
                          {tip.example && (
                            <div style={{ fontStyle: 'italic', fontSize: '0.9rem', opacity: 0.9 }}>
                              "{tip.example}"
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </section>
          ))}

          {/* IELTS Connection & Strategy */}
          <section id="ielts-connection" data-toc-id="ielts-connection" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>
              IELTS Exam Impact & Connection
            </h2>
            <div className="rule-box" style={{ backgroundColor: 'var(--badge-bg)', borderColor: 'var(--badge-text)', color: 'var(--text-primary)' }}>
              <p style={{ lineHeight: 1.7 }}>
                {topic.ieltsOverview}
              </p>
            </div>
            <div style={{ marginTop: '1rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>Key Takeaways to Remember:</h4>
              <ul className="example-list">
                {topic.summaryPoints.map((pt, i) => (
                  <li key={i} className="example-item">{pt}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Interactive Practice Quiz */}
          <PracticeQuiz questions={topic.practice} />

          {/* Previous / Next Topic Navigation */}
          <nav className="topic-nav-bar">
            {topic.prevTopic ? (
              <a
                href={`/${topic.section}/${topic.prevTopic.slug}`}
                className="topic-nav-card"
                onClick={(e) => { e.preventDefault(); onNavigate(`/${topic.section}/${topic.prevTopic!.slug}`); }}
              >
                <span className="topic-nav-label" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <ArrowLeft size={12} /> Previous Topic
                </span>
                <span className="topic-nav-title">{topic.prevTopic.title}</span>
              </a>
            ) : <div />}

            <a
              href={`/${topic.section}`}
              className="btn btn-secondary"
              onClick={(e) => { e.preventDefault(); onNavigate(`/${topic.section}`); }}
            >
              Back to {topic.sectionTitle}
            </a>

            {topic.nextTopic ? (
              <a
                href={`/${topic.section}/${topic.nextTopic.slug}`}
                className="topic-nav-card"
                style={{ textAlign: 'right' }}
                onClick={(e) => { e.preventDefault(); onNavigate(`/${topic.section}/${topic.nextTopic!.slug}`); }}
              >
                <span className="topic-nav-label" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.25rem' }}>
                  Next Topic <ArrowRight size={12} />
                </span>
                <span className="topic-nav-title">{topic.nextTopic.title}</span>
              </a>
            ) : <div />}
          </nav>
        </article>
      </div>
    </div>
  );
};

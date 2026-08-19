import React, { useState } from 'react';
import { PracticeQuestion } from '../types/topic';
import { CheckCircle2, XCircle, HelpCircle, RefreshCw, Award } from 'lucide-react';

interface PracticeQuizProps {
  questions: PracticeQuestion[];
}

export const PracticeQuiz: React.FC<PracticeQuizProps> = ({ questions }) => {
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});
  const [showHints, setShowHints] = useState<Record<string, boolean>>({});

  const handleSelectOption = (questionId: string, option: string) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleInputChange = (questionId: string, val: string) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: val }));
  };

  const handleCheckAnswer = (questionId: string) => {
    if (!userAnswers[questionId] || userAnswers[questionId].trim() === '') return;
    setSubmitted((prev) => ({ ...prev, [questionId]: true }));
  };

  const toggleHint = (questionId: string) => {
    setShowHints((prev) => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setSubmitted({});
    setShowHints({});
  };

  const totalAnswered = Object.keys(submitted).length;
  const totalCorrect = questions.filter((q) => {
    if (!submitted[q.id]) return false;
    const ans = (userAnswers[q.id] || '').trim().toLowerCase();
    const correct = q.correctAnswer.trim().toLowerCase();
    return ans === correct;
  }).length;

  return (
    <div className="practice-container" id="practice">
      <div className="practice-header">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 className="practice-title">
              <Award size={28} className="text-accent" style={{ color: 'var(--accent-primary)' }} />
              <span>Interactive Knowledge Check</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Test your understanding of these tenses. Get instant feedback and explanations.
            </p>
          </div>

          {totalAnswered > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                backgroundColor: 'var(--badge-bg)',
                color: 'var(--badge-text)',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-md)',
                fontWeight: 700,
                fontSize: '0.9rem'
              }}>
                Score: {totalCorrect} / {questions.length}
              </div>
              <button 
                className="btn btn-secondary" 
                onClick={handleResetQuiz}
                style={{ padding: '0.4rem 0.75rem', fontSize: '0.85rem' }}
              >
                <RefreshCw size={14} /> Reset
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="quiz-list">
        {questions.map((q, idx) => {
          const isSubmitted = submitted[q.id];
          const userAnswer = userAnswers[q.id] || '';
          const isCorrect = isSubmitted && userAnswer.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();

          return (
            <div key={q.id} className="quiz-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="quiz-question-number">Question {idx + 1} of {questions.length}</div>
                {q.hint && (
                  <button
                    onClick={() => toggleHint(q.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-muted)',
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}
                  >
                    <HelpCircle size={14} /> {showHints[q.id] ? 'Hide Hint' : 'Show Hint'}
                  </button>
                )}
              </div>

              {showHints[q.id] && q.hint && (
                <div style={{
                  backgroundColor: 'var(--ielts-bg)',
                  border: '1px solid var(--ielts-border)',
                  color: 'var(--ielts-text)',
                  padding: '0.65rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.85rem',
                  marginBottom: '1rem'
                }}>
                  💡 <strong>Hint:</strong> {q.hint}
                </div>
              )}

              <div className="quiz-question-text">{q.question}</div>

              {q.type === 'mcq' && q.options && (
                <div className="quiz-options">
                  {q.options.map((opt) => {
                    const isChosen = userAnswer === opt;
                    let optionClass = 'quiz-option-btn';

                    if (isSubmitted) {
                      if (opt.toLowerCase() === q.correctAnswer.toLowerCase()) {
                        optionClass += ' correct-choice';
                      } else if (isChosen) {
                        optionClass += ' wrong-choice';
                      }
                    } else if (isChosen) {
                      optionClass += ' selected';
                    }

                    return (
                      <button
                        key={opt}
                        className={optionClass}
                        onClick={() => !isSubmitted && handleSelectOption(q.id, opt)}
                        disabled={isSubmitted}
                      >
                        <span>{opt}</span>
                        {isSubmitted && opt.toLowerCase() === q.correctAnswer.toLowerCase() && (
                          <CheckCircle2 size={18} style={{ color: 'var(--correct-text)' }} />
                        )}
                        {isSubmitted && isChosen && opt.toLowerCase() !== q.correctAnswer.toLowerCase() && (
                          <XCircle size={18} style={{ color: 'var(--wrong-text)' }} />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {q.type === 'fill-blank' && (
                <div>
                  <input
                    type="text"
                    className="quiz-fill-input"
                    placeholder="Type your answer here..."
                    value={userAnswer}
                    onChange={(e) => !isSubmitted && handleInputChange(q.id, e.target.value)}
                    disabled={isSubmitted}
                  />
                </div>
              )}

              {!isSubmitted ? (
                <button
                  className="btn btn-primary"
                  onClick={() => handleCheckAnswer(q.id)}
                  disabled={!userAnswer.trim()}
                  style={{ opacity: !userAnswer.trim() ? 0.6 : 1, padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}
                >
                  Check Answer
                </button>
              ) : (
                <div className={`quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                    {isCorrect ? (
                      <>
                        <CheckCircle2 size={20} />
                        <span>Correct! Great job!</span>
                      </>
                    ) : (
                      <>
                        <XCircle size={20} />
                        <span>Not quite. Correct answer: "{q.correctAnswer}"</span>
                      </>
                    )}
                  </div>
                  <div>
                    <strong>Reasoning:</strong> {q.explanation}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

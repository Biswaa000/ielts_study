import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { GrammarIndex } from './pages/GrammarIndex';
import { TopicView } from './components/TopicView';
import { ComingSoon } from './pages/ComingSoon';
import { getTopicBySlug } from './content/registry';
import { TopicSectionId } from './types/topic';

export const App: React.FC = () => {
  // Theme state
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('ielts_theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Client path state
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ielts_theme', theme);
  }, [theme]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Route resolution
  const renderRoute = () => {
    const cleanPath = currentPath.toLowerCase().replace(/\/$/, '') || '/';

    if (cleanPath === '/') {
      return <Home onNavigate={handleNavigate} />;
    }

    if (cleanPath === '/grammar') {
      return <GrammarIndex onNavigate={handleNavigate} />;
    }

    // Topic page check e.g. /grammar/tenses
    if (cleanPath.startsWith('/grammar/')) {
      const slug = cleanPath.replace('/grammar/', '');
      const topic = getTopicBySlug(slug);
      if (topic) {
        return <TopicView topic={topic} onNavigate={handleNavigate} />;
      }
      return <GrammarIndex onNavigate={handleNavigate} />;
    }

    // Coming soon sections
    const validSections: TopicSectionId[] = ['vocabulary', 'reading', 'writing', 'listening', 'speaking'];
    const matchedSection = validSections.find((sec) => cleanPath === `/${sec}`);
    if (matchedSection) {
      return <ComingSoon sectionId={matchedSection} onNavigate={handleNavigate} />;
    }

    // Fallback
    return <Home onNavigate={handleNavigate} />;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main style={{ flex: 1 }}>
        {renderRoute()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;

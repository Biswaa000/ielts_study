import React, { useState } from 'react';
import { Moon, Sun, Menu, X, GraduationCap } from 'lucide-react';
import { TopicSectionId } from '../types/topic';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  theme,
  onToggleTheme
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; path: string; sectionId?: TopicSectionId }[] = [
    { label: 'Home', path: '/' },
    { label: 'Grammar', path: '/grammar', sectionId: 'grammar' },
    { label: 'Vocabulary', path: '/vocabulary', sectionId: 'vocabulary' },
    { label: 'Reading', path: '/reading', sectionId: 'reading' },
    { label: 'Writing', path: '/writing', sectionId: 'writing' },
    { label: 'Listening', path: '/listening', sectionId: 'listening' },
    { label: 'Speaking', path: '/speaking', sectionId: 'speaking' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a 
          href="/" 
          className="brand-logo" 
          onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }}
        >
          <GraduationCap size={28} style={{ color: 'var(--accent-primary)' }} />
          <span>IELTS Prep</span>
          <span className="brand-badge">Journal</span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <nav>
            <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              {navItems.map((item) => {
                const isActive = currentPath === item.path || 
                  (item.path !== '/' && currentPath.startsWith(item.path));
                return (
                  <li key={item.path}>
                    <a
                      href={item.path}
                      className={`nav-item-link ${isActive ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(item.path);
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

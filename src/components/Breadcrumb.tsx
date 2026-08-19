import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, onNavigate }) => {
  return (
    <nav className="breadcrumb-container" aria-label="Breadcrumb">
      <div className="breadcrumb-item">
        <a 
          href="/" 
          onClick={(e) => { e.preventDefault(); onNavigate('/'); }}
          title="Home"
        >
          <Home size={16} />
        </a>
      </div>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
            <ChevronRight size={14} />
            {item.path && !isLast ? (
              <a
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.path!);
                }}
              >
                {item.label}
              </a>
            ) : (
              <span>{item.label}</span>
            )}
          </div>
        );
      })}
    </nav>
  );
};

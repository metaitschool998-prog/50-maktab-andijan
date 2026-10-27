import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface BreadcrumbsProps {
  items: { label: string; path?: string }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { t } = useLanguage();

  return (
    <nav className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link to="/" className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
        <Home className="w-3.5 h-3.5 mr-1" />
        <span>{t.nav.home}</span>
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          {item.path ? (
            <Link to={item.path} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-900 dark:text-white font-medium truncate max-w-xs sm:max-w-md">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

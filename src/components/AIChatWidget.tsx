import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AIChatWidget: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();

  // Hide floating widget if already on the /ai page
  if (location.pathname === '/ai') {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      <Link
        to="/ai"
        className="flex items-center space-x-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-semibold shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105 active:scale-95 transition-all duration-200 border border-white/20"
        title="50 Maktab AI"
      >
        <div className="relative flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
        </div>
        <span className="text-xs sm:text-sm tracking-wide hidden sm:inline">
          50 Maktab AI
        </span>
        <Sparkles className="w-3.5 h-3.5 text-amber-300 hidden sm:inline" />
      </Link>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { 
  Sun, Moon, Globe, Menu, X, Bot, Phone, Mail, MapPin, 
  ChevronDown, GraduationCap, Award, BookOpen, Calendar, 
  Users, HelpCircle, Image, Sparkles 
} from 'lucide-react';
import { Language } from '../types';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setLangDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.news, path: '/news' },
    { name: t.nav.teachers, path: '/teachers' },
    { name: t.nav.students, path: '/students' },
    { name: t.nav.education, path: '/education' },
    { name: t.nav.schedule, path: '/schedule' },
    { name: t.nav.events, path: '/events' },
    { name: t.nav.gallery, path: '/gallery' },
    { name: t.nav.admissions, path: '/admissions' },
    { name: t.nav.contact, path: '/contact' },
  ];

  const secondaryLinks = [
    { name: t.nav.videos, path: '/videos' },
    { name: t.nav.parents, path: '/parents' },
    { name: t.nav.resources, path: '/resources' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.faq, path: '/faq' },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'uz', label: "O'zbekcha", flag: "🇺🇿" },
    { code: 'ru', label: "Русский", flag: "🇷🇺" },
    { code: 'en', label: "English", flag: "🇬🇧" },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-200">
      {/* Top utility bar */}
      <div className="bg-[#0b1627] text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>{t.common.address}</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <a href={`tel:${t.common.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                {t.common.phone}
              </a>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-400">{t.common.workingHours}</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              ● {t.common.systemStatus}
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-[#070c18]/95 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-slate-800 py-2.5' 
          : 'bg-white/90 dark:bg-[#0a1020]/90 backdrop-blur-sm border-b border-slate-200/60 dark:border-slate-800/60 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & School Name */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  50-MAKTAB
                </span>
                <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded border border-blue-200 dark:border-blue-800">
                  Andijon
                </span>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium line-clamp-1">
                {t.common.schoolFullName}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 text-sm font-medium">
            <Link 
              to="/" 
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                isActive('/') ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 font-semibold' : 'text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              {t.nav.home}
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                isActive('/about') ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 font-semibold' : 'text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              {t.nav.about}
            </Link>
            <Link 
              to="/news" 
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                isActive('/news') ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 font-semibold' : 'text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              {t.nav.news}
            </Link>
            <Link 
              to="/teachers" 
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                isActive('/teachers') ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 font-semibold' : 'text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              {t.nav.teachers}
            </Link>
            <Link 
              to="/students" 
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                isActive('/students') ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 font-semibold' : 'text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              {t.nav.students}
            </Link>
            <Link 
              to="/schedule" 
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                isActive('/schedule') ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 font-semibold' : 'text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              {t.nav.schedule}
            </Link>
            <Link 
              to="/admissions" 
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                isActive('/admissions') ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 font-semibold' : 'text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              {t.nav.admissions}
            </Link>
            <Link 
              to="/contact" 
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                isActive('/contact') ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 font-semibold' : 'text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              {t.nav.contact}
            </Link>
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* 50 Maktab AI Button */}
            <Link
              to="/ai"
              className={`relative inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all shadow-sm ${
                isActive('/ai')
                  ? 'bg-blue-600 text-white shadow-blue-500/30'
                  : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 text-white hover:brightness-110 shadow-blue-500/20 active:scale-95'
              }`}
            >
              <Bot className="w-4 h-4 animate-pulse" />
              <span>50 Maktab AI</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </Link>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-1 p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Change Language"
              >
                <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-semibold uppercase">{language}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-[#0f172a] rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 py-1.5 z-50">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLanguage(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-colors ${
                        language === l.code ? 'font-bold text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span className="flex items-center space-x-2">
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dark/Light Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Theme"
              title={theme === 'dark' ? "Kunduzgi rejim" : "Tungi rejim"}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform rotate-0 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-white/98 dark:bg-[#070c18]/98 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 overflow-y-auto px-4 py-6 z-40">
          <div className="space-y-1 mb-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isActive(link.path)
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="border-t border-slate-200 dark:border-slate-800 pt-4 mb-6">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-4 mb-2 block">
              {t.common.quickLinks}
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {secondaryLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-900 rounded-2xl p-4 space-y-3">
            <div className="flex items-center space-x-2 text-xs text-slate-600 dark:text-slate-400">
              <Phone className="w-3.5 h-3.5 text-blue-500" />
              <span>{t.common.phone}</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-slate-600 dark:text-slate-400">
              <Mail className="w-3.5 h-3.5 text-blue-500" />
              <span>{t.common.email}</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-slate-600 dark:text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-blue-500" />
              <span>{t.common.address}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

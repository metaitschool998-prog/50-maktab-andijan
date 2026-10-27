import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  GraduationCap, Phone, Mail, MapPin, Clock, Bot, 
  Send, ExternalLink, ShieldCheck, Heart 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#050a14] text-slate-400 border-t border-slate-800 text-sm">
      {/* Top Banner with AI prompt */}
      <div className="bg-gradient-to-r from-blue-950 via-[#0d1e38] to-[#071329] border-b border-white/5 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <Bot className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-white font-bold text-base sm:text-lg">
                {t.home.aiBannerTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                {t.home.aiBannerDesc}
              </p>
            </div>
          </div>
          <Link
            to="/ai"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-blue-600/30 shrink-0"
          >
            <span>{t.home.aiBannerBtn}</span>
            <Send className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Main Footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: School Identity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                50-MAKTAB
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t.footer.aboutText}
            </p>
            <div className="pt-2 text-xs text-slate-400 flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t.aboutPage.charter}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              {t.footer.quickMenu}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-blue-400 transition-colors">
                  {t.nav.news}
                </Link>
              </li>
              <li>
                <Link to="/teachers" className="hover:text-blue-400 transition-colors">
                  {t.nav.teachers}
                </Link>
              </li>
              <li>
                <Link to="/students" className="hover:text-blue-400 transition-colors">
                  {t.nav.students}
                </Link>
              </li>
              <li>
                <Link to="/education" className="hover:text-blue-400 transition-colors">
                  {t.nav.education}
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="hover:text-blue-400 transition-colors">
                  {t.nav.schedule}
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-blue-400 transition-colors font-medium text-blue-400">
                  {t.nav.admissions}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: For Parents & Students */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              {t.footer.infoFor}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/parents" className="hover:text-blue-400 transition-colors">
                  {t.nav.parents}
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-blue-400 transition-colors">
                  {t.nav.resources}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-blue-400 transition-colors">
                  {t.nav.events}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-blue-400 transition-colors">
                  {t.nav.gallery}
                </Link>
              </li>
              <li>
                <Link to="/videos" className="hover:text-blue-400 transition-colors">
                  {t.nav.videos}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-blue-400 transition-colors">
                  {t.nav.faq}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-blue-400 transition-colors">
                  {t.nav.privacy}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              {t.common.contactUs}
            </h4>
            <div className="flex items-start space-x-3 text-xs">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>{t.common.address}</span>
            </div>
            <div className="flex items-center space-x-3 text-xs">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href={`tel:${t.common.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                {t.common.phone}
              </a>
            </div>
            <div className="flex items-center space-x-3 text-xs">
              <Mail className="w-4 h-4 text-sky-400 shrink-0" />
              <a href={`mailto:${t.common.email}`} className="hover:text-white transition-colors">
                {t.common.email}
              </a>
            </div>
            <div className="flex items-center space-x-3 text-xs">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t.common.workingHours}</span>
            </div>
            <div className="pt-2">
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-[#229ED9]/20 hover:bg-[#229ED9]/30 text-[#229ED9] border border-[#229ED9]/40 text-xs transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{t.contactPage.telegramChannel}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center space-x-4">
            <Link to="/privacy" className="hover:text-slate-400 transition-colors">
              {t.nav.privacy}
            </Link>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <span>{t.common.region}, {t.common.country}</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

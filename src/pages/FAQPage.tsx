import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { mockFAQs } from '../data/mockData';
import { ChevronDown, HelpCircle, Bot, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FAQPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [category, setCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: t.common.viewAll },
    { key: 'admissions', label: "Qabul jarayoni" },
    { key: 'schedule', label: "Dars jadvali" },
    { key: 'education', label: "Ta'lim va to'garaklar" },
    { key: 'general', label: "Umumiy va AI yordamchi" },
  ];

  const filteredFaqs = mockFAQs.filter((faq) => {
    if (category === 'all') return true;
    return faq.category === category;
  });

  return (
    <div className="pb-24">
      <Breadcrumbs items={[{ label: t.nav.faq }]} />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 space-y-10">
        <div className="bg-gradient-to-r from-blue-950 to-[#071329] rounded-3xl p-8 sm:p-12 text-white border border-blue-500/20 shadow-xl text-center">
          <div className="max-w-2xl mx-auto space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t.home.faqSectionTitle}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              O'quvchilar va ota-onalar tomonidan eng ko'p beriladigan savollarga aniq javoblar.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="flex items-center space-x-2 overflow-x-auto justify-center pb-2">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setCategory(c.key)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                category === c.key
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-white dark:bg-[#0c1424] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-[#0c1424] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 dark:text-white"
                >
                  <span className="flex items-center space-x-3">
                    <HelpCircle className="w-5 h-5 text-blue-500 shrink-0" />
                    <span>{faq.question[language]}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-500' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80">
                    {faq.answer[language]}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* AI Callout */}
        <div className="p-6 rounded-3xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                Savolingizga javob topmadingizmi?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                50 Maktab AI 24/7 onlayn va har qanday savolingizga javob berishga tayyor.
              </p>
            </div>
          </div>
          <Link
            to="/ai"
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shrink-0 flex items-center space-x-1.5"
          >
            <span>{t.common.askAI}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

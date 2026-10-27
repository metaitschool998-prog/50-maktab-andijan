import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { mockTeachers } from '../data/mockData';
import { Mail, GraduationCap, Award, BookOpen, Clock, CheckCircle2 } from 'lucide-react';

export const TeachersPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { key: 'all', label: t.common.viewAll },
    { key: 'administration', label: "Rahbariyat" },
    { key: 'sciences', label: "Aniq va tabiiy fanlar" },
    { key: 'humanities', label: "Gumanitar va tillar" },
  ];

  const filteredTeachers = mockTeachers.filter((teach) => {
    if (filter === 'all') return true;
    return teach.category === filter;
  });

  return (
    <div className="pb-24">
      <Breadcrumbs items={[{ label: t.nav.teachers }]} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 space-y-10">
        <div className="bg-gradient-to-r from-blue-950 to-[#071329] rounded-3xl p-8 sm:p-12 text-white border border-blue-500/20 shadow-xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t.home.teachersSectionTitle}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
            {t.home.teachersSectionDesc}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                filter === c.key
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-white dark:bg-[#0c1424] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white dark:bg-[#0c1424] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm card-3d-hover flex flex-col"
            >
              <div className="relative h-64 bg-slate-100 dark:bg-slate-900 overflow-hidden">
                <img
                  src={teacher.imageUrl}
                  alt={teacher.name[language]}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-bold bg-[#0b1627]/80 text-blue-400 backdrop-blur-md border border-white/10">
                  {teacher.experienceYears} yil tajriba
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                      {teacher.name[language]}
                    </h2>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                      {teacher.subject[language]}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {teacher.role[language]}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="line-clamp-1">{teacher.education[language]}</span>
                    </div>
                    {teacher.email && (
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                        <a href={`mailto:${teacher.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                          {teacher.email}
                        </a>
                      </div>
                    )}
                  </div>

                  {teacher.achievements[language]?.length > 0 && (
                    <div className="pt-2">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Yutuqlari va unvonlari:
                      </span>
                      <ul className="space-y-1">
                        {teacher.achievements[language].map((ach, i) => (
                          <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start space-x-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

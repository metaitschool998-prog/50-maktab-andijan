import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { mockAchievements } from '../data/mockData';
import { Trophy, Award, Medal, Sparkles, Star } from 'lucide-react';

export const StudentsPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="pb-24">
      <Breadcrumbs items={[{ label: t.nav.students }]} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 space-y-10">
        <div className="bg-gradient-to-r from-blue-950 via-[#0a1835] to-[#050e20] rounded-3xl p-8 sm:p-12 text-white border border-blue-500/20 shadow-xl">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold">
              <Trophy className="w-3.5 h-3.5" />
              <span>Olimpiadalar & Sport & San'at</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t.home.achievementsTitle}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t.home.achievementsDesc}
            </p>
          </div>
        </div>

        {/* Hall of Fame Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockAchievements.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#0c1424] rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm card-3d-hover space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={item.imageUrl}
                      alt={item.studentName[language]}
                      className="w-16 h-16 rounded-full object-cover border-2 border-amber-400 shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs shadow-sm">
                      <Medal className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                      {item.studentName[language]}
                    </h2>
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      {item.grade} • {item.level[language]}
                    </span>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-700/60 space-y-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                    {item.badge[language]}
                  </span>
                  <p className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {item.title[language]}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.competition[language]} ({item.year})
                  </p>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                <span>50-Maktab faxri</span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

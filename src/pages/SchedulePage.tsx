import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { mockSchedule } from '../data/mockData';
import { Clock, Bell, Calendar, BookOpen, Sun, Moon } from 'lucide-react';

export const SchedulePage: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedDay, setSelectedDay] = useState<string>('Dushanba');

  const days = [
    { uz: 'Dushanba', ru: 'Понедельник', en: 'Monday' },
    { uz: 'Seshanba', ru: 'Вторник', en: 'Tuesday' },
    { uz: 'Chorshanba', ru: 'Среда', en: 'Wednesday' },
    { uz: 'Payshanba', ru: 'Четверг', en: 'Thursday' },
    { uz: 'Juma', ru: 'Пятница', en: 'Friday' },
    { uz: 'Shanba', ru: 'Суббота', en: 'Saturday' },
  ];

  return (
    <div className="pb-24">
      <Breadcrumbs items={[{ label: t.nav.schedule }]} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 space-y-10">
        <div className="bg-gradient-to-r from-blue-950 to-[#071329] rounded-3xl p-8 sm:p-12 text-white border border-blue-500/20 shadow-xl">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              2026/2027 O'quv yili
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t.nav.schedule} va Qo'ng'iroqlar tartibi
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Maktabda ta'lim 2 smenada tashkil etilgan. Qo'ng'iroqlar jadvali va darslar vaqti bilan tanishing.
            </p>
          </div>
        </div>

        {/* Bell Schedule Table */}
        <div className="bg-white dark:bg-[#0c1424] rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Qo'ng'iroqlar va dars vaqtlari
              </h2>
              <p className="text-xs text-slate-500">
                1-smena: 08:00 - 13:15 | 2-smena: 13:30 - 18:00
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 font-semibold uppercase text-[11px]">
                  <th className="py-3 px-4">Dars №</th>
                  <th className="py-3 px-4">Vaqti (1-smena)</th>
                  <th className="py-3 px-4">Izoh</th>
                  <th className="py-3 px-4">Vaqti (2-smena)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {mockSchedule.map((item) => (
                  <tr key={item.period} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-blue-600 dark:text-blue-400">
                      {item.period}-dars
                    </td>
                    <td className="py-3.5 px-4 font-medium text-slate-900 dark:text-white flex items-center space-x-2">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.time}</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">
                      {item.shift1}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">
                      {item.shift2}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Day selection tabs */}
        <div className="bg-white dark:bg-[#0c1424] rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Hafta kunlari bo'yicha namunaviy jadval
          </h2>

          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            {days.map((d) => (
              <button
                key={d.uz}
                onClick={() => setSelectedDay(d.uz)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedDay === d.uz
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {d[language] || d.uz}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/50 space-y-3">
              <div className="flex items-center space-x-2 text-sm font-bold text-blue-700 dark:text-blue-300">
                <Sun className="w-4 h-4 text-amber-500" />
                <span>1-smena namunaviy fanlari ({selectedDay})</span>
              </div>
              <ul className="text-xs space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex justify-between"><span>1. Matematika (Algebra)</span><span className="text-slate-400">08:00</span></li>
                <li className="flex justify-between"><span>2. Fizika</span><span className="text-slate-400">08:50</span></li>
                <li className="flex justify-between"><span>3. Ingliz tili</span><span className="text-slate-400">09:45</span></li>
                <li className="flex justify-between"><span>4. Kimyo / Biologiya</span><span className="text-slate-400">10:40</span></li>
                <li className="flex justify-between"><span>5. Ona tili va adabiyot</span><span className="text-slate-400">11:35</span></li>
                <li className="flex justify-between"><span>6. Informatika va axborot texnologiyalari</span><span className="text-slate-400">12:30</span></li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/50 space-y-3">
              <div className="flex items-center space-x-2 text-sm font-bold text-indigo-700 dark:text-indigo-300">
                <Moon className="w-4 h-4 text-indigo-400" />
                <span>2-smena namunaviy fanlari ({selectedDay})</span>
              </div>
              <ul className="text-xs space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex justify-between"><span>1. O'zbekiston tarixi</span><span className="text-slate-400">13:30</span></li>
                <li className="flex justify-between"><span>2. Geografiya</span><span className="text-slate-400">14:20</span></li>
                <li className="flex justify-between"><span>3. Rus tili</span><span className="text-slate-400">15:15</span></li>
                <li className="flex justify-between"><span>4. Jismoniy tarbiya</span><span className="text-slate-400">16:10</span></li>
                <li className="flex justify-between"><span>5. Geometriya</span><span className="text-slate-400">17:05</span></li>
                <li className="flex justify-between"><span>6. Robototexnika to'garagi</span><span className="text-slate-400">17:50</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

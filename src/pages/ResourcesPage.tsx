import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { mockResources } from '../data/mockData';
import { FileDown, BookOpen, ExternalLink, Download, Search } from 'lucide-react';

export const ResourcesPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="pb-24">
      <Breadcrumbs items={[{ label: t.nav.resources }]} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 space-y-10">
        <div className="bg-gradient-to-r from-blue-950 to-[#071329] rounded-3xl p-8 sm:p-12 text-white border border-blue-500/20 shadow-xl">
          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t.nav.resources} va Raqamli kutubxona
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Darsliklar, fan olimpiadalariga tayyorgarlik to'plamlari, elektron kitoblar va foydali ta'limiy manbalar.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockResources.map((res) => (
            <div
              key={res.id}
              className="bg-white dark:bg-[#0c1424] rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm card-3d-hover flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs uppercase">
                    {res.type}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {res.grade}-sinflar
                  </span>
                </div>

                <div>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                    {res.subject[language]}
                  </span>
                  <h2 className="font-bold text-slate-900 dark:text-white text-base mt-1">
                    {res.title[language]}
                  </h2>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">{res.fileSize}</span>
                <button
                  onClick={() => alert("Fayl yuklab olinmoqda...")}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-md shadow-blue-600/20"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Yuklab olish</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

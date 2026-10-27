import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  Building2, Award, Target, HeartHandshake, ShieldCheck, 
  Users, CheckCircle2, BookOpen, Lightbulb 
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { language, t } = useLanguage();

  const values = [
    { title: t.aboutPage.val1, desc: "Halol mehnat, ochiq muloqot va shaffof ta'lim jarayoni.", icon: ShieldCheck },
    { title: t.aboutPage.val2, desc: "Raqamli texnologiyalar va ilg'or pedagogik tajribalarni tatbiq etish.", icon: Lightbulb },
    { title: t.aboutPage.val3, desc: "O'quvchi, ota-ona va ustoz o'rtasidagi o'zaro ishonch va ehtirom.", icon: HeartHandshake },
    { title: t.aboutPage.val4, desc: "Har bir o'quvchining qobiliyatini yuksak darajaga olib chiqish.", icon: Target },
  ];

  const stats = [
    { num: "42", label: t.aboutPage.statsClassrooms },
    { num: "6", label: t.aboutPage.statsLaboratories },
    { num: "120+", label: t.aboutPage.statsComputers },
    { num: "2,400", label: t.aboutPage.statsSports },
  ];

  return (
    <div className="pb-20">
      <Breadcrumbs items={[{ label: t.nav.about }]} />

      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="bg-gradient-to-r from-blue-950 via-[#0b172a] to-[#050b14] rounded-3xl p-8 sm:p-14 text-white border border-blue-500/20 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30">
              {t.common.schoolFullName}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              {t.aboutPage.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t.aboutPage.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* History & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {t.aboutPage.historyTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.aboutPage.historyText}
            </p>
            <div className="pt-2">
              <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs sm:text-sm text-blue-900 dark:text-blue-200 flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  Maktabimiz 2026-yilgi umumta'lim maktablari reytingida Andijon viloyatida eng yuqori ko'rsatkichlarga ega maktablar safida e'tirof etilgan.
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 h-80">
            <img
              src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1000&q=80"
              alt="School Campus"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mission Card */}
        <div className="bg-gradient-to-br from-slate-900 to-[#0c1830] rounded-3xl p-8 sm:p-10 text-white shadow-xl border border-slate-800">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center space-x-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Target className="w-4 h-4" />
              <span>{t.aboutPage.missionTitle}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              {t.aboutPage.missionText}
            </h3>
          </div>
        </div>

        {/* Infrastructure Stats */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Maktab infratuzilmasi va moddiy-texnik bazasi
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#0c1424] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 text-center shadow-sm"
              >
                <div className="text-3xl sm:text-4xl font-black text-blue-600 dark:text-blue-400 mb-1">
                  {item.num}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            {t.aboutPage.valuesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="bg-white dark:bg-[#0c1424] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    {v.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

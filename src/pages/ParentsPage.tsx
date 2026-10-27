import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Users, BookOpen, Clock, HeartHandshake, Laptop, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ParentsPage: React.FC = () => {
  const { language, t } = useLanguage();

  const guidelines = [
    {
      title: "eMaktab (Elektron kundalik) tizimidan foydalanish",
      desc: "Farzandingizning baholari, davomati va uyga vazifalarini kunlik onlayn nazorat qilib boring.",
      icon: Laptop
    },
    {
      title: "Ota-onalar qo'mitasi va yig'ilishlari",
      desc: "Har chorakda kamida bir marotaba o'tkaziladigan ota-onalar majlislarida faol ishtirok eting.",
      icon: Users
    },
    {
      title: "Maktab psixologi va pedagoglar maslahati",
      desc: "O'quvchi xatti-harakati, qiziqishlari va kasb tanlash bo'yicha individual psixologik konsultatsiyalar mavjud.",
      icon: HeartHandshake
    },
    {
      title: "Uy vazifalari va kun tartibi",
      desc: "Bolaning sog'lom uyqusi, to'g'ri ovqatlanishi va dars tayyorlash muhitini birgalikda tashkil etamiz.",
      icon: Clock
    }
  ];

  return (
    <div className="pb-24">
      <Breadcrumbs items={[{ label: t.nav.parents }]} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 space-y-10">
        <div className="bg-gradient-to-r from-blue-950 to-[#071329] rounded-3xl p-8 sm:p-12 text-white border border-blue-500/20 shadow-xl">
          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t.nav.parents}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Oila va maktab hamkorligi — farzandimizning muvaffaqiyatli kelajagi garovidir.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guidelines.map((g, idx) => {
            const Icon = g.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#0c1424] rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  {g.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {g.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-100 dark:bg-slate-900/60 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-4">
          <h3 className="font-bold text-base text-slate-900 dark:text-white">
            Rahbariyatning ota-onalar uchun qabul soatlari
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <div className="p-4 rounded-2xl bg-white dark:bg-[#0c1424] border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-bold text-blue-600 dark:text-blue-400 block">Maktab direktori</span>
              <p>Har haftaning seshanba va juma kunlari: 14:00 - 17:00</p>
            </div>
            <div className="p-4 rounded-2xl bg-white dark:bg-[#0c1424] border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-bold text-blue-600 dark:text-blue-400 block">O'quv ishlari bo'yicha o'rinbosar</span>
              <p>Dushanba - Shanba kunlari: 09:00 - 16:00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Utensils, HeartPulse, Brain, Trophy, BookOpen, ShieldCheck } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { language, t } = useLanguage();

  const services = [
    {
      title: "Shinam va sog'lom maktab oshxonasi",
      desc: "Kunlik issiq ovqatlar, vitaminlarga boy sabzavot va mevalar hamda qat'iy sanitariya-gigiyena nazorati.",
      icon: Utensils,
      hours: "09:00 - 16:00"
    },
    {
      title: "Tibbiy kabinet va birinchi yordam",
      desc: "Malakali hamshira, profilaktik ko'riklar, mavsumiy emlash va o'quvchilar salomatligi monitoringi.",
      icon: HeartPulse,
      hours: "08:00 - 17:00"
    },
    {
      title: "Psixologik qo'llab-quvvatlash xizmati",
      desc: "O'quvchilarning psixoemotsional rivojlanishi, stressni boshqarish va kasbga yo'naltirish testlari.",
      icon: Brain,
      hours: "09:00 - 16:30"
    },
    {
      title: "Sport majmuasi va to'garaklar",
      desc: "Futbol, voleybol, basketbol, shaxmat va gimnastika seksiyalari bilan jihozlangan yopiq va ochiq stadionlar.",
      icon: Trophy,
      hours: "08:00 - 18:00"
    },
    {
      title: "Axborot-resurs markazi (Kutubxona)",
      desc: "25 000 dan ortiq o'quv, badiiy va elektron kitoblar fondi, Wi-Fi va planshetlar bilan ta'minlangan qiroatxona.",
      icon: BookOpen,
      hours: "08:30 - 17:30"
    },
    {
      title: "Xavfsizlik va qo'riqlash xizmati",
      desc: "24 soatlik videokuzatuv tizimi, turniketlar va doimiy xavfsizlik nazorati.",
      icon: ShieldCheck,
      hours: "24 / 7"
    }
  ];

  return (
    <div className="pb-24">
      <Breadcrumbs items={[{ label: t.nav.services }]} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 space-y-10">
        <div className="bg-gradient-to-r from-blue-950 to-[#071329] rounded-3xl p-8 sm:p-12 text-white border border-blue-500/20 shadow-xl">
          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Maktab xizmatlari va qulayliklar
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              O'quvchilarimizning salomatligi, xavfsizligi va har tomonlama kamol topishi uchun yaratilgan zamonaviy xizmatlar.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#0c1424] rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm card-3d-hover space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    {s.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Ish vaqti: {s.hours}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

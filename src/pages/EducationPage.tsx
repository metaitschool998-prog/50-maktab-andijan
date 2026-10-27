import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  BookOpen, Code2, Microscope, Languages, Calculator, 
  Palette, Dumbbell, Sparkles, CheckCircle2 
} from 'lucide-react';

export const EducationPage: React.FC = () => {
  const { language, t } = useLanguage();

  const programs = [
    {
      title: "Aniq fanlar va STEM yo'nalishi",
      grades: "5 - 11 sinflar",
      desc: "Matematika, fizika, kimyo va biologiya fanlarini chuqurlashtirilgan dasturlar asosida o'qitish.",
      icon: Microscope,
      skills: ["Laboratoriya tajribalari", "Olimpiada darajasidagi masalalar", "Ilmiy tadqiqot asoslari"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Raqamli texnologiyalar va Robototexnika",
      grades: "1 - 11 sinflar",
      desc: "Python, veb-dasturlash, Arduino mikrokontrollerlari va sun'iy intellekt asoslari.",
      icon: Code2,
      skills: ["Algoritmik fikrlash", "Robotlar konstruksiyasi", "3D modellashtirish"],
      color: "from-indigo-600 to-purple-600"
    },
    {
      title: "Xorijiy tillar (Ingliz va Nemis)",
      grades: "1 - 11 sinflar",
      desc: "CEFR va IELTS xalqaro standartlari bo'yicha interaktiv so'zlashuv va grammatika mashg'ulotlari.",
      icon: Languages,
      skills: ["Speaking clubs", "IELTS / CEFR tayyorgarlik", "Xalqaro test sinovlari"],
      color: "from-emerald-600 to-teal-600"
    },
    {
      title: "Ijtimoiy-gumanitar va milliy qadriyatlar",
      grades: "1 - 11 sinflar",
      desc: "Tarix, ona tili va adabiyot, huquq va falsafiy dunyoqarashni shakllantirish.",
      icon: BookOpen,
      skills: ["Munozara va notiqlik", "Adabiy tahlil", "Milliy merosni anglash"],
      color: "from-amber-600 to-orange-600"
    }
  ];

  return (
    <div className="pb-24">
      <Breadcrumbs items={[{ label: t.nav.education }]} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 space-y-12">
        <div className="bg-gradient-to-r from-blue-950 to-[#071329] rounded-3xl p-8 sm:p-12 text-white border border-blue-500/20 shadow-xl">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Davlat ta'lim standartlari
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ta'lim dasturlari va fanlar
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              O'quvchilarimizga chuqur nazariy bilim va amaliy ko'nikmalar uyg'unligini taqdim etuvchi zamonaviy o'quv dasturi.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="bg-white dark:bg-[#0c1424] rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm card-3d-hover space-y-6"
              >
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${p.color} text-white flex items-center justify-center shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
                    {p.grades}
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    {p.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Asosiy ko'nikmalar:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {p.skills.map((s, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-xl text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                        <span>{s}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

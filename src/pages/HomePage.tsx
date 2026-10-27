import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { mockNews, mockTeachers, mockAchievements, mockEvents, mockGallery } from '../data/mockData';
import { 
  GraduationCap, Sparkles, Bot, Users, Award, BookOpen, 
  ArrowRight, Calendar, MapPin, ChevronRight, CheckCircle2, 
  Microscope, Languages, Shield, Clock 
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { language, t } = useLanguage();

  const stats = [
    { value: '1,250+', label: t.hero.statsStudents, icon: Users, color: 'text-blue-500' },
    { value: '75+', label: t.hero.statsTeachers, icon: GraduationCap, color: 'text-emerald-500' },
    { value: '96%', label: t.hero.statsSuccess, icon: Award, color: 'text-indigo-500' },
    { value: '45+', label: t.hero.statsOlympiads, icon: Sparkles, color: 'text-amber-500' },
  ];

  const features = [
    {
      title: t.home.feature1Title,
      desc: t.home.feature1Desc,
      icon: Microscope,
      gradient: 'from-blue-600 to-cyan-500'
    },
    {
      title: t.home.feature2Title,
      desc: t.home.feature2Desc,
      icon: Languages,
      gradient: 'from-indigo-600 to-purple-500'
    },
    {
      title: t.home.feature3Title,
      desc: t.home.feature3Desc,
      icon: Award,
      gradient: 'from-emerald-600 to-teal-500'
    },
    {
      title: t.home.feature4Title,
      desc: t.home.feature4Desc,
      icon: Shield,
      gradient: 'from-amber-600 to-orange-500'
    },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 md:py-28 bg-[#030712] text-white">
        {/* Dynamic 3D-inspired background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30 text-xs font-semibold backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{t.hero.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                {t.hero.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link
                  to="/ai"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all"
                >
                  <Bot className="w-5 h-5 text-amber-300" />
                  <span>{t.hero.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 transition-all"
                >
                  <span>{t.hero.ctaSecondary}</span>
                </Link>
              </div>
            </div>

            {/* Right Column: 3D-inspired School Graphic Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md bg-gradient-to-br from-slate-900/90 to-[#0c1830]/90 rounded-3xl p-6 border border-slate-700/60 shadow-2xl backdrop-blur-xl">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
                    alt="50-Maktab Campus"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <div>
                      <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block">
                        Andijon viloyati
                      </span>
                      <h3 className="text-white font-bold text-lg">
                        50-Umumiy o'rta ta'lim maktabi
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-slate-400">Ta'lim tili:</span>
                    <span className="font-semibold text-white">O'zbek, Rus, Ingliz</span>
                  </div>
                  <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-slate-400">Ixtisoslashuv:</span>
                    <span className="font-semibold text-blue-400">STEM & Aniq fanlar</span>
                  </div>
                  <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-slate-400">AI Yordamchi:</span>
                    <span className="font-semibold text-emerald-400 flex items-center space-x-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping mr-1"></span>
                      <span>50 Maktab AI (Faol)</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 backdrop-blur-md flex flex-col items-center text-center hover:border-slate-700 transition-colors"
                >
                  <Icon className={`w-7 h-7 mb-2 ${s.color}`} />
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {s.value}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.home.featuresTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {t.home.featuresSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="bg-white dark:bg-[#0c1424] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm card-3d-hover space-y-4"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${f.gradient} flex items-center justify-center text-white shadow-md`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {f.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 50 Maktab AI Spotlight Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-[#0e2142] to-[#0a1628] rounded-3xl p-8 sm:p-12 text-white border border-blue-500/30 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold">
                <Bot className="w-4 h-4 text-emerald-400" />
                <span>Google Gemini bilan ishlaydi</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                {t.home.aiBannerTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {t.home.aiBannerDesc}
              </p>
              <div className="pt-2">
                <Link
                  to="/ai"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold text-sm shadow-lg shadow-blue-500/30 transition-all"
                >
                  <span>{t.home.aiBannerBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md space-y-3">
              <div className="flex items-center space-x-3 text-xs font-semibold text-slate-300 pb-2 border-b border-white/10">
                <Bot className="w-4 h-4 text-blue-400" />
                <span>Misol savollar:</span>
              </div>
              <p className="text-xs text-slate-300 italic">"1-sinfga qabul hujjatlari qanday?"</p>
              <p className="text-xs text-slate-300 italic">"Ertaga dars jadvali qaysi vaqtda?"</p>
              <p className="text-xs text-slate-300 italic">"Maktabda qanday to'garaklar bor?"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.home.newsSectionTitle}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              {t.home.newsSectionDesc}
            </p>
          </div>
          <Link
            to="/news"
            className="inline-flex items-center space-x-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            <span>{t.common.allNews}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockNews.map((news) => (
            <article
              key={news.id}
              className="bg-white dark:bg-[#0c1424] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm card-3d-hover flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={news.imageUrl}
                  alt={news.title[language]}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-blue-600 text-white shadow-md">
                  {news.category[language]}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] text-slate-400 flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{news.date}</span>
                  </span>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white line-clamp-2 hover:text-blue-600 transition-colors">
                    <Link to={`/news/${news.id}`}>{news.title[language]}</Link>
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {news.summary[language]}
                  </p>
                </div>

                <Link
                  to={`/news/${news.id}`}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 pt-2"
                >
                  <span>{t.common.readMore}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Student Achievements Preview */}
      <section className="bg-slate-100/60 dark:bg-[#080e1b] py-16 border-y border-slate-200 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {t.home.achievementsTitle}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                {t.home.achievementsDesc}
              </p>
            </div>
            <Link
              to="/students"
              className="inline-flex items-center space-x-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              <span>{t.common.viewAll}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockAchievements.map((ach) => (
              <div
                key={ach.id}
                className="bg-white dark:bg-[#0c1424] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm card-3d-hover space-y-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={ach.imageUrl}
                    alt={ach.studentName[language]}
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-500 shadow-md"
                  />
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                      {ach.studentName[language]}
                    </h3>
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                      {ach.grade} • {ach.level[language]}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/60 space-y-1">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-700 dark:text-amber-300">
                    {ach.badge[language]}
                  </span>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {ach.title[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.home.teachersSectionTitle}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              {t.home.teachersSectionDesc}
            </p>
          </div>
          <Link
            to="/teachers"
            className="inline-flex items-center space-x-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            <span>{t.common.viewAll}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white dark:bg-[#0c1424] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm card-3d-hover flex flex-col"
            >
              <div className="h-52 overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img
                  src={teacher.imageUrl}
                  alt={teacher.name[language]}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                    {teacher.name[language]}
                  </h3>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-0.5">
                    {teacher.subject[language]}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    {teacher.role[language]}
                  </p>
                </div>

                <div className="text-[10px] text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                  {teacher.experienceYears} yil pedagogik tajriba
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Highlights Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.home.galleryPreviewTitle}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              {t.home.galleryPreviewDesc}
            </p>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center space-x-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            <span>{t.common.viewAll}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {mockGallery.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden aspect-square border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <img
                src={item.imageUrl}
                alt={item.title[language]}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2 flex items-end">
                <span className="text-[10px] text-white font-medium line-clamp-2">
                  {item.title[language]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

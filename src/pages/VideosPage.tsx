import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { mockVideos } from '../data/mockData';
import { Play, Clock, Calendar } from 'lucide-react';

export const VideosPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="pb-24">
      <Breadcrumbs items={[{ label: t.nav.videos }]} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 space-y-10">
        <div className="bg-gradient-to-r from-blue-950 to-[#071329] rounded-3xl p-8 sm:p-12 text-white border border-blue-500/20 shadow-xl">
          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t.nav.videos}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Maktabimiz bo'ylab videoroliklar, ochiq darslar va maxsus ko'rsatuvlar.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white dark:bg-[#0c1424] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm card-3d-hover flex flex-col"
            >
              <div className="relative aspect-video bg-black overflow-hidden group">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 ml-0.5 fill-current" />
                  </div>
                </div>
                <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md text-xs font-bold bg-black/80 text-white flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{video.duration}</span>
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center space-x-2 text-xs text-slate-400 mb-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{video.date}</span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    {video.title[language]}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {video.description[language]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { mockGallery } from '../data/mockData';
import { GalleryItem } from '../types';
import { Image, X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const categories = [
    { key: 'all', label: t.common.viewAll },
    { key: 'lessons', label: "Dars jarayoni" },
    { key: 'campus', label: "Maktab binosi va sinflar" },
    { key: 'events', label: "Bayram va tadbirlar" },
    { key: 'competitions', label: "Sport va musobaqalar" },
  ];

  const filteredItems = mockGallery.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <div className="pb-24">
      <Breadcrumbs items={[{ label: t.nav.gallery }]} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 space-y-10">
        <div className="bg-gradient-to-r from-blue-950 to-[#071329] rounded-3xl p-8 sm:p-12 text-white border border-blue-500/20 shadow-xl">
          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t.nav.gallery}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              50-Maktabning faol o'quv jarayoni, madaniy tadbirlari va yorqin xotiralaridan fotogalereya.
            </p>
          </div>
        </div>

        {/* Categories */}
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm cursor-pointer card-3d-hover aspect-[4/3] bg-slate-900"
            >
              <img
                src={item.imageUrl}
                alt={item.title[language]}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity p-5 flex flex-col justify-end text-white">
                <span className="text-[10px] text-blue-300 font-bold uppercase tracking-wider mb-1 flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{item.date}</span>
                </span>
                <h3 className="font-bold text-sm leading-snug">
                  {item.title[language]}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeModalItem.imageUrl}
                alt={activeModalItem.title[language]}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-5 text-white flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base sm:text-lg">
                  {activeModalItem.title[language]}
                </h3>
                <span className="text-xs text-slate-400">{activeModalItem.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

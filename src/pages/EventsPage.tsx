import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { mockEvents } from '../data/mockData';
import { Calendar, Clock, MapPin, Tag } from 'lucide-react';

export const EventsPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="pb-24">
      <Breadcrumbs items={[{ label: t.nav.events }]} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 space-y-10">
        <div className="bg-gradient-to-r from-blue-950 to-[#071329] rounded-3xl p-8 sm:p-12 text-white border border-blue-500/20 shadow-xl">
          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Maktab tadbirlari va hayoti
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Ochiq eshiklar kunlari, ma'naviy-ma'rifiy kechalar, sport musobaqalari va olimpiadalar dasturi.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-[#0c1424] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm card-3d-hover flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={event.imageUrl}
                  alt={event.title[language]}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white shadow-md">
                  {event.category[language]}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center space-x-1 font-semibold text-blue-600 dark:text-blue-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{event.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{event.time}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{event.location[language]}</span>
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    {event.title[language]}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {event.description[language]}
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

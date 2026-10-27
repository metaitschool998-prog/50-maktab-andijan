import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { mockNews } from '../data/mockData';
import { Calendar, User, Eye, ArrowLeft, Share2 } from 'lucide-react';

export const NewsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();

  const news = mockNews.find((n) => n.id === id);

  if (!news) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Yangilik topilmadi</h1>
        <Link to="/news" className="inline-flex items-center space-x-2 text-blue-600 font-semibold">
          <ArrowLeft className="w-4 h-4" />
          <span>{t.common.allNews}</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-24">
      <Breadcrumbs
        items={[
          { label: t.nav.news, path: '/news' },
          { label: news.title[language] },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-xs">
            <span className="px-3 py-1 rounded-md bg-blue-600 text-white font-semibold">
              {news.category[language]}
            </span>
            <span className="text-slate-400 flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{news.date}</span>
            </span>
            <span className="text-slate-400 flex items-center space-x-1">
              <User className="w-3.5 h-3.5" />
              <span>{news.author[language]}</span>
            </span>
            <span className="text-slate-400 flex items-center space-x-1">
              <Eye className="w-3.5 h-3.5" />
              <span>{news.views}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {news.title[language]}
          </h1>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 h-80 sm:h-96 md:h-[480px]">
          <img
            src={news.imageUrl}
            alt={news.title[language]}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-5 text-sm sm:text-base leading-relaxed">
          {news.content[language].map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <Link
            to="/news"
            className="inline-flex items-center space-x-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.common.allNews}</span>
          </Link>
        </div>
      </article>
    </div>
  );
};

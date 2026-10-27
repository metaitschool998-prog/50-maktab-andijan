import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="pb-24">
      <Breadcrumbs items={[{ label: t.nav.privacy }]} />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 space-y-10">
        <div className="bg-gradient-to-r from-blue-950 to-[#071329] rounded-3xl p-8 sm:p-12 text-white border border-blue-500/20 shadow-xl">
          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t.nav.privacy}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              O'zbekiston Respublikasining «Shaxsga doir ma'lumotlar to'g'risida»gi Qonuniga muvofiq qabul qilingan.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-[#0c1424] rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-blue-500" />
              <span>1. Umumiy qoidalar</span>
            </h2>
            <p>
              Ushbu Maxfiylik siyosati Andijon viloyati 50-umumiy o'rta ta'lim maktabi rasmiy veb-saytidan foydalanuvchilarning shaxsiy ma'lumotlarini to'plash, qayta ishlash va himoya qilish tartibini belgilaydi.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
              <Lock className="w-5 h-5 text-blue-500" />
              <span>2. To'planadigan ma'lumotlar</span>
            </h2>
            <p>
              Veb-sayt orqali faqat qabul arizalari yoki qayta aloqa shakli to'ldirilganda ko'ngilli ravishda taqdim etilgan aloqa ma'lumotlari (F.I.SH, telefon raqami, elektron pochta manzili) qabul qilinadi.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
              <Eye className="w-5 h-5 text-blue-500" />
              <span>3. 50 Maktab AI va xavfsizlik</span>
            </h2>
            <p>
              50 Maktab AI bilan suhbatlar faqat ta'limiy axborot berish uchun ishlatiladi. Foydalanuvchilardan chat orqali maxfiy pasport seriyalari, parollar yoki moliyaviy ma'lumotlarni yozmaslik so'raladi.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
              <FileText className="w-5 h-5 text-blue-500" />
              <span>4. Ma'lumotlarni uchinchi shaxslarga bermaslik</span>
            </h2>
            <p>
              Foydalanuvchilarning ma'lumotlari qonunchilikda belgilangan hollar bundan mustasno, hech qachon uchinchi shaxslarga yoki tijoriy tashkilotlarga sotilmaydi va berilmaydi.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

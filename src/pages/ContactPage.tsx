import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, 
  ExternalLink, MessageSquare, AlertCircle 
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { language, t } = useLanguage();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg("Iltimos, barcha majburiy maydonlarni to'ldiring.");
      return;
    }
    setErrorMsg('');
    setSent(true);
  };

  return (
    <div className="pb-24">
      <Breadcrumbs items={[{ label: t.nav.contact }]} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 space-y-12">
        <div className="bg-gradient-to-r from-blue-950 to-[#071329] rounded-3xl p-8 sm:p-14 text-white border border-blue-500/20 shadow-xl">
          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              {t.contactPage.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t.contactPage.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-[#0c1424] rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Aloqa ma'lumotlari
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start space-x-3 text-slate-700 dark:text-slate-300">
                  <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-slate-900 dark:text-white">{t.contactPage.addressTitle}</span>
                    <span>{t.contactPage.addressText}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-700 dark:text-slate-300">
                  <Phone className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-slate-900 dark:text-white">{t.contactPage.phoneTitle}</span>
                    <p>{t.contactPage.receptionPhone}</p>
                    <p>{t.contactPage.directorPhone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-700 dark:text-slate-300">
                  <Mail className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-slate-900 dark:text-white">{t.contactPage.emailTitle}</span>
                    <a href={`mailto:${t.common.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                      {t.common.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-700 dark:text-slate-300">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-slate-900 dark:text-white">{t.contactPage.hoursTitle}</span>
                    <span>{t.common.workingHours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-[#229ED9] hover:bg-[#1f8fc4] text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-[#229ED9]/20"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.contactPage.telegramChannel}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Map Preview Card */}
            <div className="bg-white dark:bg-[#0c1424] rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>{t.contactPage.mapTitle}</span>
              </h3>
              <div className="rounded-2xl overflow-hidden h-48 border border-slate-200 dark:border-slate-800 relative bg-slate-900 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                  alt="Andijan Map"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-blue-950/40 flex flex-col items-center justify-center text-white p-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-lg animate-bounce mb-2">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-xs sm:text-sm">50-Maktab</span>
                  <span className="text-[11px] text-slate-300">Andijon tumani, Ma'rifat ko'chasi 50</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#0c1424] rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {t.contactPage.formTitle}
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Taklif, mulohaza yoki savollaringizni yozib qoldiring.
            </p>

            {sent ? (
              <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h3 className="font-bold text-xl">Xabaringiz muvaffaqiyatli yetkazildi!</h3>
                <p className="text-xs sm:text-sm leading-relaxed">
                  Maktab ma'muriyati xabaringizni ko'rib chiqib, ko'rsatilgan elektron pochta orqali javob yo'llaydi.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold"
                >
                  Yana xabar yuborish
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                {errorMsg && (
                  <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                    {errorMsg}
                  </div>
                )}

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 dark:text-slate-300 block">
                    {t.contactPage.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ism va familiyangiz"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 dark:text-slate-300 block">
                      {t.contactPage.emailLabel} *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nomingiz@mail.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 dark:text-slate-300 block">
                      {t.contactPage.subjectLabel}
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Xabar mavzusi"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 dark:text-slate-300 block">
                    {t.contactPage.messageLabel} *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Murojaat matnini yozing..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-98 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.contactPage.sendButton}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

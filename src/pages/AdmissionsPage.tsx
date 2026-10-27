import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  FileText, CheckCircle2, UserCheck, Send, Calendar, 
  HelpCircle, AlertCircle, ShieldCheck 
} from 'lucide-react';

export const AdmissionsPage: React.FC = () => {
  const { language, t } = useLanguage();

  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [phone, setPhone] = useState('');
  const [grade, setGrade] = useState('1');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const steps = [
    { title: t.admissionsPage.step1Title, desc: t.admissionsPage.step1Desc },
    { title: t.admissionsPage.step2Title, desc: t.admissionsPage.step2Desc },
    { title: t.admissionsPage.step3Title, desc: t.admissionsPage.step3Desc },
    { title: t.admissionsPage.step4Title, desc: t.admissionsPage.step4Desc },
  ];

  const docs = [
    t.admissionsPage.doc1,
    t.admissionsPage.doc2,
    t.admissionsPage.doc3,
    t.admissionsPage.doc4,
    t.admissionsPage.doc5,
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName.trim() || !childName.trim() || !phone.trim()) {
      setErrorMsg("Iltimos, barcha majburiy maydonlarni to'ldiring.");
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div className="pb-24">
      <Breadcrumbs items={[{ label: t.nav.admissions }]} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 space-y-12">
        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-950 via-[#0a1b38] to-[#061022] rounded-3xl p-8 sm:p-14 text-white border border-blue-500/20 shadow-xl">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Qabul — 2026/2027
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              {t.admissionsPage.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t.admissionsPage.subtitle}
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {t.admissionsPage.processTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#0c1424] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Documents & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Required Docs list */}
          <div className="lg:col-span-5 bg-white dark:bg-[#0c1424] rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>{t.admissionsPage.docsTitle}</span>
              </h3>
              <p className="text-xs text-slate-500">
                Hujjatlar to'liq va asliga to'g'ri holatda qabul komissiyasiga taqdim etiladi.
              </p>
            </div>

            <ul className="space-y-3">
              {docs.map((doc, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs text-blue-900 dark:text-blue-300 space-y-1">
              <span className="font-bold block">1-sinfga qabul yoshi:</span>
              <p>Bola o'quv yili boshlanadigan yili 7 yoshga to'lishi kerak.</p>
            </div>
          </div>

          {/* Inquiry Application Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#0c1424] rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {t.admissionsPage.formTitle}
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Ma'lumotlaringizni qoldiring, qabul komissiyamiz siz bilan bog'lanadi.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <h4 className="font-bold text-lg">Arizangiz muvaffaqiyatli qabul qilindi!</h4>
                <p className="text-xs leading-relaxed">
                  Maktabimiz mas'ul xodimi 24 soat ichida siz ko'rsatgan telefon raqami orqali bog'lanadi.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold"
                >
                  Yana ariza topshirish
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
                    {t.admissionsPage.parentName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="Masalan: Karimova Dilfuza"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 dark:text-slate-300 block">
                    {t.admissionsPage.childName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    placeholder="Masalan: Karimov Azizbek"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 dark:text-slate-300 block">
                      {t.admissionsPage.phoneLabel} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+998 90 123 45 67"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 dark:text-slate-300 block">
                      {t.admissionsPage.targetGrade} *
                    </label>
                    <select
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((g) => (
                        <option key={g} value={g}>
                          {g}-sinf
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 dark:text-slate-300 block">
                    {t.admissionsPage.notes}
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Qo'shimcha izoh yoki savollaringiz..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-98"
                >
                  {t.admissionsPage.submitApp}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

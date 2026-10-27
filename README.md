# 50-Maktab — Andijon viloyati umumiy o'rta ta'lim maktabi rasmiy portali

Andijon viloyati 50-umumiy o'rta ta'lim maktabi uchun maxsus ishlab chiqilgan rasmiy veb-sayt va **50 Maktab AI** aqlli assistenti.

---

## 🚀 Texnologiyalar to'plami (Tech Stack)

- **Frontend**: React 18, Vite 6, TypeScript, Tailwind CSS, Lucide React
- **Routing**: React Router v6 (SPA rewrites qo'llab-quvvatlanadi)
- **Backend / Serverless**: Node.js / Vercel Serverless Functions (`/api/chat`)
- **Sun'iy Intellekt**: Google Gemini API (`gemini-2.5-flash` / `gemini-1.5-flash`)
- **Ko'p tillilik (Multilingual)**: O'zbekcha (asosiy), Ruscha, Inglizcha
- **Mavzular (Themes)**: Qorong'i (Dark) va Yorug' (Light) rejimlari, avtomatik tizim aniqlash va eslab qolish bilan

---

## 📂 Sahifalar va Yo'nalishlar (Routes)

- `/` — Bosh sahifa (Hero, statistika, yangiliklar, yutuqlar, o'qituvchilar, 50 Maktab AI)
- `/about` — Maktab haqida (Tarix, missiya, moddiy-texnik baza, qadriyatlar)
- `/news` — Yangiliklar va e'lonlar (Qidiruv va toifalar)
- `/news/:id` — Yangilikning to'liq sahifasi
- `/teachers` — O'qituvchilar tarkibi (Kafedralar, ilmiy daraja, yutuqlar)
- `/students` — O'quvchilar va Yutuqlar (Olimpiadalar va faxriy yorliqlar)
- `/education` — Ta'lim dasturlari (STEM, robototexnika, xorijiy tillar)
- `/schedule` — Dars jadvali va qo'ng'iroqlar tartibi (1 va 2-smenalar)
- `/events` — Maktab tadbirlari va rejasi
- `/gallery` — Fotogalereya (Toifalar va modal ko'rish)
- `/videos` — Videogalereya (Maktab bo'ylab sayohat va darslar)
- `/admissions` — Qabul jarayoni (Hujjatlar ro'yxati va onlayn ariza)
- `/parents` — Ota-onalar burchagi (eMaktab, maslahatlar, qabul soatlari)
- `/resources` — O'quv resurslari va elektron darsliklar
- `/services` — Maktab xizmatlari (Oshxona, tibbiy xona, psixolog, sport)
- `/contact` — Bog'lanish (Manzil, telefonlar, qayta aloqa shakli, xarita)
- `/faq` — Ko'p so'raladigan savollar (Akkordeon)
- `/ai` — 50 Maktab AI yordamchisi (Google Gemini API bilan integratsiya)
- `/privacy` — Maxfiylik siyosati
- `*` — 404 xatolik sahifasi

---

## 🤖 50 Maktab AI Assistentini sozlash

1. [Google AI Studio](https://aistudio.google.com/app/apikey) sahifasiga kiring va bepul API kalit oling.
2. Vercel loyihangizning **Settings > Environment Variables** bo'limida:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: Olingan API kalit
3. Lokal muhitda ishlatish uchun `.env` fayl yarating:
   ```env
   GEMINI_API_KEY=sizning_gemini_api_kalitingiz
   ```

---

## 💻 Mahalliy ishga tushirish (Local Development)

```bash
# 1. Bog'liqliklarni o'rnatish
npm install

# 2. Rivojlantirish serverini ishga tushirish
npm run dev

# 3. Brauzerda ochish
# http://localhost:3000
```

---

## ☁️ Vercel-ga joylash (Vercel Deployment)

1. Loyihani GitHub-ga yuklang yoki Vercel CLI orqali joylang:
   ```bash
   npx vercel
   ```
2. Loyiha sozlamalarida `GEMINI_API_KEY` o'zgaruvchisini qo'shing.
3. Loyihani production-ga chiqaring:
   ```bash
   npx vercel --prod
   ```

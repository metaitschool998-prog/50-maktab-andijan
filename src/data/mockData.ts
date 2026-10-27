import { NewsItem, Teacher, StudentAchievement, EducationProgram, ScheduleItem, EventItem, GalleryItem, VideoItem, FAQItem, ResourceItem } from '../types';

export const mockNews: NewsItem[] = [
  {
    id: 'news-1',
    title: {
      uz: "Maktabimiz o'quvchilari viloyat fan olimpiadasida 5 ta oltin medalni qo'lga kiritishdi",
      ru: "Учащиеся нашей школы завоевали 5 золотых медалей на областной предметной олимпиаде",
      en: "School students won 5 gold medals at the regional academic Olympiad"
    },
    summary: {
      uz: "Fizika, matematika va kimyo fanlari bo'yicha o'tkazilgan viloyat bosqichida 50-maktab iqtidorli yoshlari mutlaq yetakchilikni saqlab qolishdi.",
      ru: "На областном этапе по физике, математике и химии талантливая молодежь школы №50 удержала абсолютное лидерство.",
      en: "In the regional stage for physics, mathematics, and chemistry, School 50's talented youths retained absolute leadership."
    },
    content: {
      uz: [
        "Andijon shahrida o'tkazilgan umumta'lim maktablari o'quvchilari o'rtasidagi asosiy fan olimpiadasining viloyat bosqichi yakunlandi.",
        "Unda 50-maktabimiz sharafini himoya qilgan 8 nafar o'quvchidan 5 nafari birinchi o'rinni egallab, respublika bosqichiga yo'llanmani qo'lga kiritdi.",
        "G'oliblarimizni, ularning ota-onalarini va fidoyi ustozlarimizni ushbu yuksak g'alaba bilan chin qalbimizdan muborakbod etamiz!"
      ],
      ru: [
        "Завершился областной этап предметной олимпиады среди учащихся школ в городе Андижане.",
        "Из 8 учащихся нашей школы №50 пятеро заняли первое место и завоевали путевки на республиканский финал.",
        "Поздравляем ребят, родителей и наставников с этим выдающимся триумфом!"
      ],
      en: [
        "The regional stage of the core subject Olympiad concluded in Andijan city.",
        "Out of 8 competing students representing School No. 50, five claimed first place and secured berths in the national finals.",
        "We wholeheartedly congratulate our champions, their families, and devoted mentors!"
      ]
    },
    category: {
      uz: "Yutuqlar",
      ru: "Достижения",
      en: "Achievements"
    },
    date: "2026-10-20",
    author: {
      uz: "Matbuot xizmati",
      ru: "Пресс-служба",
      en: "Press Office"
    },
    imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
    views: 342
  },
  {
    id: 'news-2',
    title: {
      uz: "Maktabimizda zamonaviy STEM va Robototexnika laboratoriyasi ochildi",
      ru: "В школе открылась современная лаборатория STEM и робототехники",
      en: "Modern STEM and Robotics Laboratory opened at our school"
    },
    summary: {
      uz: "Yangi laboratoriya 3D-printerlar, Arduino to'plamlari va dasturlash jihozlari bilan to'liq ta'minlangan.",
      ru: "Новая лаборатория полностью оснащена 3D-принтерами, наборами Arduino и оборудованием для программирования.",
      en: "The new laboratory is fully equipped with 3D printers, Arduino kits, and software programming workstations."
    },
    content: {
      uz: [
        "O'quvchilarning muhandislik va axborot texnologiyalari sohasidagi ko'nikmalarini oshirish maqsadida yangi STEM xonasi foydalanishga topshirildi.",
        "Bu yerda o'quvchilar sun'iy intellekt asoslari, robototexnika loyihalari va dasturlash tillarini bepul o'rganishlari mumkin.",
        "Ochilish marosimida viloyat xalq ta'limi boshqarmasi vakillari va IT mutaxassislari ishtirok etdilar."
      ],
      ru: [
        "Для развития инженерных и IT-навыков учащихся введена в эксплуатацию новая современная STEM-лаборатория.",
        "Здесь школьники смогут бесплатно осваивать основы искусственного интеллекта, робототехнику и программирование.",
        "В церемонии открытия приняли участие представители областного управления образования и IT-эксперты."
      ],
      en: [
        "A brand new STEM laboratory was inaugurated to accelerate students' engineering and digital programming skills.",
        "Here, learners can master fundamentals of artificial intelligence, robotics, and coding free of charge.",
        "Regional education board officials and IT industry leaders attended the opening ceremony."
      ]
    },
    category: {
      uz: "Innovatsiya",
      ru: "Инновации",
      en: "Innovation"
    },
    date: "2026-10-15",
    author: {
      uz: "Direktor o'rinbosari",
      ru: "Завуч по IT",
      en: "Vice Principal"
    },
    imageUrl: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
    views: 512
  },
  {
    id: 'news-3',
    title: {
      uz: "«Til bilgan — el biladi» haftaligi: Chet tillari bayrami",
      ru: "Неделя «Знание языков открывает мир»: Фестиваль иностранных языков",
      en: "'Language Opens the World' Week: Foreign Language Festival"
    },
    summary: {
      uz: "Maktabimizda ingliz va nemis tillari oyligi doirasida qiziqarli spektakllar, intellektual debatlar va viktorinalar o'tkazildi.",
      ru: "В рамках декады английского и немецкого языков прошли театрализованные постановки, дебаты и викторины.",
      en: "As part of English and German language month, interactive stage performances, debates, and quizzes took place."
    },
    content: {
      uz: [
        "Haftalik davomida barcha sinflar chet tilida o'z iqtidorlarini namoyish etdilar.",
        "IELTS va CEFR darajalariga ega bo'lgan bitiruvchilarimiz quyi sinf o'quvchilariga mahorat darslari o'tib berishdi.",
        "Faol ishtirok etgan o'quvchilar esdalik sovg'alari va faxriy yorliqlar bilan taqdirlandilar."
      ],
      ru: [
        "В течение недели учащиеся всех классов демонстрировали владение иностранными языками.",
        "Выпускники с сертификатами IELTS и CEFR провели мастер-классы для младших школьников.",
        "Самые активные участники награждены дипломами и памятными подарками."
      ],
      en: [
        "Throughout the festival week, students from all grade levels presented songs and skits in foreign languages.",
        "Graduates holding IELTS and CEFR certifications conducted peer workshops for younger cohorts.",
        "Outstanding participants were recognized with certificates and prizes."
      ]
    },
    category: {
      uz: "Tadbirlar",
      ru: "Мероприятия",
      en: "Events"
    },
    date: "2026-10-08",
    author: {
      uz: "Chet tillari kafedrasi",
      ru: "Кафедра иностранных языков",
      en: "Foreign Languages Dept"
    },
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    views: 289
  }
];

export const mockTeachers: Teacher[] = [
  {
    id: 't-1',
    name: {
      uz: "Akromov Bahodir Shokirovich",
      ru: "Акромов Баходир Шокирович",
      en: "Bakhodir Sh. Akromov"
    },
    role: {
      uz: "Maktab direktori, Oliy toifali fizika fani o'qituvchisi",
      ru: "Директор школы, Учитель физики высшей категории",
      en: "Principal, Master Teacher of Physics"
    },
    subject: {
      uz: "Fizika va Astronomiya",
      ru: "Физика и Астрономия",
      en: "Physics & Astronomy"
    },
    experienceYears: 24,
    education: {
      uz: "Andijon davlat universiteti (Magistratura)",
      ru: "Андижанский государственный университет (Магистратура)",
      en: "Andijan State University (M.Sc.)"
    },
    category: 'administration',
    achievements: {
      uz: ["Xalq ta'limi a'lochisi", "«Shuhrat» medali sohibi", "10 dan ortiq respublika olimpiada sovrindorlari ustozi"],
      ru: ["Отличник народного образования", "Медаль «Шухрат»", "Наставник более 10 призеров республиканских олимпиад"],
      en: ["Distinguished Educator Award", "State 'Shukhrat' Medal", "Mentor to 10+ National Olympiad winners"]
    },
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    email: "principal@50maktab.uz"
  },
  {
    id: 't-2',
    name: {
      uz: "Rahimova Nilufar Odilovna",
      ru: "Рахимова Нилюфар Одиловна",
      en: "Nilufar O. Rahimova"
    },
    role: {
      uz: "O'quv ishlari bo'yicha direktor o'rinbosari, Matematika ustozi",
      ru: "Заместитель директора по учебной части, Учитель математики",
      en: "Vice Principal of Academics, Mathematics Lead"
    },
    subject: {
      uz: "Matematika va Algebra",
      ru: "Математика и Алгебра",
      en: "Mathematics & Algebra"
    },
    experienceYears: 18,
    education: {
      uz: "O'zbekiston Milliy Universiteti",
      ru: "Национальный университет Узбекистана",
      en: "National University of Uzbekistan"
    },
    category: 'sciences',
    achievements: {
      uz: ["Oliy toifali pedagog", "«Yilning eng yaxshi matematika fani o'qituvchisi» viloyat g'olibi"],
      ru: ["Педагог высшей категории", "Победитель конкурса «Лучший учитель года»"],
      en: ["Highest Rank Educator", "Regional Teacher of the Year winner"]
    },
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    email: "n.rahimova@50maktab.uz"
  },
  {
    id: 't-3',
    name: {
      uz: "Qodirov Sardorbek Jasurovich",
      ru: "Кодиров Сардорбек Жасурович",
      en: "Sardorbek J. Qodirov"
    },
    role: {
      uz: "Informatika va Raqamli texnologiyalar ustozi",
      ru: "Учитель информатики и цифровых технологий",
      en: "Informatics & Digital Technologies Teacher"
    },
    subject: {
      uz: "Informatika, Dasturlash va Robototexnika",
      ru: "Информатика, Программирование и Робототехника",
      en: "Computer Science & Robotics"
    },
    experienceYears: 9,
    education: {
      uz: "Toshkent axborot texnologiyalari universiteti",
      ru: "Ташкентский университет информационных технологий",
      en: "Tashkent University of Information Technologies"
    },
    category: 'sciences',
    achievements: {
      uz: ["One Million Uzbek Coders mentori", "RoboSumo Andijon koordinatori", "Python va AI bo'yicha xalqaro sertifikatlar egasi"],
      ru: ["Наставник One Million Uzbek Coders", "Координатор RoboSumo Андижан", "Сертификация Python и AI"],
      en: ["One Million Uzbek Coders Mentor", "RoboSumo Regional Lead", "Certified in Python & AI"]
    },
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    email: "s.qodirov@50maktab.uz"
  },
  {
    id: 't-4',
    name: {
      uz: "Karimova Gulchehra Mamadaliyevna",
      ru: "Каримова Гульчехра Мамадалиевна",
      en: "Gulchehra M. Karimova"
    },
    role: {
      uz: "Ingliz tili ustozi, Xalqaro metodist",
      ru: "Учитель английского языка, Методист международного уровня",
      en: "English Language Master Teacher"
    },
    subject: {
      uz: "Ingliz tili (IELTS / CEFR)",
      ru: "Английский язык (IELTS / CEFR)",
      en: "English Language (IELTS / CEFR)"
    },
    experienceYears: 15,
    education: {
      uz: "O'zbekiston Davlat Jahon Tillari Universiteti",
      ru: "Узбекский государственный университет мировых языков",
      en: "Uzbekistan State World Languages University"
    },
    category: 'humanities',
    achievements: {
      uz: ["IELTS 8.5 sohibasi", "Fulbright TEA xalqaro dasturi ishtirokchisi (AQSh)", "TESOL xalqaro sertifikati"],
      ru: ["Обладательница IELTS 8.5", "Участник международной программы Fulbright TEA (США)", "Сертификат TESOL"],
      en: ["IELTS 8.5 Holder", "Fulbright TEA Fellow (USA)", "TESOL Certified"]
    },
    imageUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80",
    email: "g.karimova@50maktab.uz"
  }
];

export const mockAchievements: StudentAchievement[] = [
  {
    id: 'ach-1',
    studentName: {
      uz: "Rustamov Jasurbek",
      ru: "Рустамов Жасурбек",
      en: "Jasurbek Rustamov"
    },
    grade: "10-A",
    title: {
      uz: "Respublika Fizika olimpiadasi mutlaq g'olibi (1-o'rin)",
      ru: "Абсолютный победитель Республиканской олимпиады по физике (1 место)",
      en: "National Physics Olympiad Grand Winner (1st Place)"
    },
    competition: {
      uz: "Xalq ta'limi vazirligi asosiy fan olimpiadasi",
      ru: "Республиканская олимпиада Министерства образования",
      en: "National Academic Core Olympiad"
    },
    level: {
      uz: "Respublika",
      ru: "Республиканский",
      en: "National"
    },
    year: "2026",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    badge: {
      uz: "Oltin medal",
      ru: "Золотая медаль",
      en: "Gold Medal"
    }
  },
  {
    id: 'ach-2',
    studentName: {
      uz: "Xomidova Madinabonu",
      ru: "Хомидова Мадинабону",
      en: "Madinabonu Xomidova"
    },
    grade: "11-B",
    title: {
      uz: "IELTS 8.0 xalqaro sertifikati va grant sovrindori",
      ru: "Международный сертификат IELTS 8.0 и грант на обучение",
      en: "IELTS 8.0 International Certificate & Full University Scholarship"
    },
    competition: {
      uz: "British Council & Cambridge Assessment",
      ru: "British Council & Cambridge Assessment",
      en: "British Council & Cambridge Assessment"
    },
    level: {
      uz: "Xalqaro",
      ru: "Международный",
      en: "International"
    },
    year: "2026",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    badge: {
      uz: "Xalqaro daraja",
      ru: "Международный уровень",
      en: "International Honor"
    }
  },
  {
    id: 'ach-3',
    studentName: {
      uz: "Yo'ldoshev Shaxzodbek",
      ru: "Юлдашев Шахзодбек",
      en: "Shakhzodbek Yuldashev"
    },
    grade: "9-V",
    title: {
      uz: "Andijon viloyati Robototexnika birinchiligi g'olibi",
      ru: "Победитель первенства Андижанской области по робототехнике",
      en: "Regional Robotics Championship Winner"
    },
    competition: {
      uz: "RoboFest Andijon 2026",
      ru: "РобоФест Андижан 2026",
      en: "RoboFest Andijan 2026"
    },
    level: {
      uz: "Viloyat",
      ru: "Областной",
      en: "Regional"
    },
    year: "2026",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    badge: {
      uz: "1-o'rin Kubogi",
      ru: "Кубок 1-го места",
      en: "Champion Cup"
    }
  }
];

export const mockSchedule: ScheduleItem[] = [
  { period: 1, time: "08:00 - 08:45", shift1: "1-smena: 1-dars", shift2: "2-smena: 1-dars (13:30 - 14:15)" },
  { period: 2, time: "08:50 - 09:35", shift1: "1-smena: 2-dars", shift2: "2-smena: 2-dars (14:20 - 15:05)" },
  { period: 3, time: "09:45 - 10:30", shift1: "1-smena: 3-dars (Katta tanaffus)", shift2: "2-smena: 3-dars (15:15 - 16:00)" },
  { period: 4, time: "10:40 - 11:25", shift1: "1-smena: 4-dars", shift2: "2-smena: 4-dars (16:10 - 16:55)" },
  { period: 5, time: "11:35 - 12:20", shift1: "1-smena: 5-dars", shift2: "2-smena: 5-dars (17:05 - 17:50)" },
  { period: 6, time: "12:30 - 13:15", shift1: "1-smena: 6-dars", shift2: "2-smena: To'garaklar va fakultativ" },
];

export const mockEvents: EventItem[] = [
  {
    id: 'ev-1',
    title: {
      uz: "Ochiq eshiklar kuni va Kelajak kasblari festivali",
      ru: "День открытых дверей и Фестиваль профессий будущего",
      en: "Open Doors Day & Future Careers Festival"
    },
    description: {
      uz: "Ota-onalar va bo'lajak o'quvchilar uchun maktab bo'ylab ekskursiya, o'qituvchilar bilan suhbat va interaktiv ko'rgazmalar.",
      ru: "Экскурсия по школе для родителей и будущих учеников, встречи с учителями и интерактивные презентации.",
      en: "Campus tour for parents and prospective pupils, faculty meet-and-greets, and interactive showcases."
    },
    date: "2026-11-15",
    time: "10:00",
    location: {
      uz: "Maktab asosiy faollar zali",
      ru: "Главный актовый зал школы",
      en: "School Main Auditorium"
    },
    category: {
      uz: "Umumiy",
      ru: "Общее",
      en: "General"
    },
    status: 'upcoming',
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'ev-2',
    title: {
      uz: "«Navoiy va Bobur merosi» adabiy-badiiy kechasi",
      ru: "Литературно-художественный вечер «Наследие Навои и Бобура»",
      en: "Literary Gala: 'Legacy of Navoi and Babur'"
    },
    description: {
      uz: "Buyuk mutafakkirlar tavalludiga bag'ishlangan sahna ko'rinishlari, g'azalxonlik va milliy kuy-qo'shiqlar tanlovi.",
      ru: "Сценические постановки, декламация газелей и конкурс национального музыкального творчества.",
      en: "Drama reenactments, poetry recitations, and traditional musical performances dedicated to great poets."
    },
    date: "2026-11-28",
    time: "14:00",
    location: {
      uz: "Maktab madaniyat zali",
      ru: "Актовый зал",
      en: "Cultural Hall"
    },
    category: {
      uz: "Ma'naviyat",
      ru: "Культура",
      en: "Culture"
    },
    status: 'upcoming',
    imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
  }
];

export const mockGallery: GalleryItem[] = [
  {
    id: 'gal-1',
    title: {
      uz: "STEM va robototexnika sinfida amaliy mashg'ulot",
      ru: "Практическое занятие в лаборатории робототехники",
      en: "Hands-on session in robotics lab"
    },
    category: 'lessons',
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    date: "2026-10-18"
  },
  {
    id: 'gal-2',
    title: {
      uz: "Maktabimiz yangilangan zamonaviy kutubxonasi",
      ru: "Обновленная современная библиотека школы",
      en: "Our modern renovated school library"
    },
    category: 'campus',
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
    date: "2026-10-12"
  },
  {
    id: 'gal-3',
    title: {
      uz: "«Bilimlar kuni» birinchi qo'ng'iroq tantanasi",
      ru: "Торжественная линейка первого звонка «День знаний»",
      en: "Knowledge Day first bell ceremony"
    },
    category: 'events',
    imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    date: "2026-09-02"
  },
  {
    id: 'gal-4',
    title: {
      uz: "Sport majmuasida voleybol va minifutbol musobaqasi",
      ru: "Турнир по волейболу и мини-футболу в спортзале",
      en: "Volleyball & futsal tourney in sports arena"
    },
    category: 'competitions',
    imageUrl: "https://images.unsplash.com/photo-1519766304817-4f37bda74a29?auto=format&fit=crop&w=800&q=80",
    date: "2026-10-05"
  },
  {
    id: 'gal-5',
    title: {
      uz: "Kimyo laboratoriyasida qiziqarli tajribalar",
      ru: "Увлекательные опыты в кабинете химии",
      en: "Fascinating experiments in chemistry lab"
    },
    category: 'lessons',
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    date: "2026-09-28"
  },
  {
    id: 'gal-6',
    title: {
      uz: "Zamonaviy kompyuter sinfi va dasturlash darsi",
      ru: "Современный компьютерный класс и урок кодинга",
      en: "Modern computer classroom and coding lesson"
    },
    category: 'campus',
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    date: "2026-10-01"
  }
];

export const mockVideos: VideoItem[] = [
  {
    id: 'vid-1',
    title: {
      uz: "50-Maktab bo'ylab virtual video-sayohat",
      ru: "Виртуальный видеотур по Школе №50",
      en: "Virtual Video Tour of School No. 50"
    },
    description: {
      uz: "Maktabimiz binosi, zamonaviy sinfxonalar, sport zali, laboratoriyalar va shinam kutubxona bilan yaqindan tanishing.",
      ru: "Познакомьтесь с кампусом нашей школы, лабораториями, спорткомплексом и уютной библиотекой.",
      en: "Explore our school campus, classrooms, high-tech labs, sports complex, and modern library."
    },
    duration: "4:32",
    thumbnailUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "2026-09-10"
  },
  {
    id: 'vid-2',
    title: {
      uz: "Ochiq dars: Sun'iy intellekt va dasturlash asoslari",
      ru: "Открытый урок: Основы искусственного интеллекта и кодинга",
      en: "Open Lesson: Fundamentals of AI and Coding"
    },
    description: {
      uz: "9-sinf o'quvchilari uchun tashkil etilgan interaktiv seminar va amaliy dasturiy loyihalar namoyishi.",
      ru: "Интерактивный семинар для 9-х классов и презентация прикладных программных проектов.",
      en: "Interactive workshop for 9th graders and showcase of student coding projects."
    },
    duration: "6:15",
    thumbnailUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "2026-10-14"
  }
];

export const mockFAQs: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'admissions',
    question: {
      uz: "1-sinfga qabul qachon boshlanadi va qanday hujjatlar kerak?",
      ru: "Когда начинается прием в 1-й класс и какие документы требуются?",
      en: "When does 1st grade admission start and what documents are required?"
    },
    answer: {
      uz: "1-sinfga qabul har yili 20-iyundan boshlab my.maktab.uz portali orqali amalga oshiriladi. Bolaning tug'ilganlik to'g'risidagi guvohnomasi, ota-ona pasport nusxalari, 086-U shaklidagi tibbiy ma'lumotnoma va 4 dona 3x4 fotosurat talab etiladi.",
      ru: "Прием в 1-й класс начинается ежегодно с 20 июня через портал my.maktab.uz. Необходимы свидетельство о рождении ребенка, паспорта родителей, медицинская справка 086-У и 4 фотографии 3х4.",
      en: "Grade 1 admission begins annually on June 20 via the my.maktab.uz portal. Required documents include the birth certificate, parents' passports, medical form 086-U, and 4 passport photos (3x4 cm)."
    }
  },
  {
    id: 'faq-2',
    category: 'schedule',
    question: {
      uz: "Maktabda ta'lim necha smenada tashkil etilgan?",
      ru: "В сколько смен организовано обучение в школе?",
      en: "How many shifts are there in the school schedule?"
    },
    answer: {
      uz: "Maktabimizda o'quv jarayoni 2 smenada olib boriladi: 1-smena soat 08:00 dan 13:15 gacha (asosan 1-4 va 9-11 sinflar), 2-smena esa 13:30 dan 18:00 gacha davom etadi.",
      ru: "Обучение проходит в 2 смены: 1-я смена с 08:00 до 13:15 (1-4 и 9-11 классы), 2-я смена с 13:30 до 18:00.",
      en: "The school operates on two shifts: Shift 1 runs from 08:00 to 13:15 (grades 1-4 and 9-11), and Shift 2 runs from 13:30 to 18:00."
    }
  },
  {
    id: 'faq-3',
    category: 'education',
    question: {
      uz: "Darsdan tashqari qanday bepul to'garaklar mavjud?",
      ru: "Какие бесплатные кружки доступны во внеурочное время?",
      en: "What free extracurricular clubs are available after classes?"
    },
    answer: {
      uz: "Maktabimizda Robototexnika, Mental arifmetika, Yosh dasturchi (Python), Ingliz tili so'zlashuv klubi, Shaxmat, Voleybol va Rassomlik to'garaklari bepul faoliyat yuritadi.",
      ru: "В школе бесплатно работают секции робототехники, ментальной арифметики, клуб юных программистов (Python), разговорный английский, шахматы, волейбол и студия ИЗО.",
      en: "We offer complimentary clubs in Robotics, Mental Math, Young Programmers (Python), English Speaking Club, Chess, Volleyball, and Fine Arts."
    }
  },
  {
    id: 'faq-4',
    category: 'general',
    question: {
      uz: "50 Maktab AI aqlli yordamchisidan qanday foydalanish mumkin?",
      ru: "Как пользоваться интеллектуальным помощником 50 Maktab AI?",
      en: "How do I use the 50 Maktab AI assistant?"
    },
    answer: {
      uz: "Saytimizning yuqori menyusidagi «50 Maktab AI» bo'limiga o'ting yoki bosh sahifadagi suhbat tugmasini bosing. Siz o'zbek, rus yoki ingliz tillarida maktab haqidagi har qanday savolingizni berishingiz mumkin.",
      ru: "Перейдите в раздел «50 Maktab AI» в верхнем меню или нажмите кнопку чата на главной странице. Вы можете задать любой вопрос о школе на узбекском, русском или английском языках.",
      en: "Navigate to the '50 Maktab AI' page in the top menu or click the chat button on the homepage. You can ask any question about the school in Uzbek, Russian, or English."
    }
  }
];

export const mockResources: ResourceItem[] = [
  {
    id: 'res-1',
    title: {
      uz: "Matematika fanidan viloyat olimpiadasiga tayyorgarlik to'plami",
      ru: "Сборник олимпиадных задач по математике (областной уровень)",
      en: "Olympiad Math Problem Bank (Regional Level)"
    },
    subject: {
      uz: "Matematika",
      ru: "Математика",
      en: "Mathematics"
    },
    grade: "9-11",
    type: 'pdf',
    fileSize: "4.2 MB",
    downloadUrl: "#"
  },
  {
    id: 'res-2',
    title: {
      uz: "Ingliz tili: CEFR B2 darajasiga grammatik qo'llanma",
      ru: "Английский язык: Грамматическое пособие для уровня CEFR B2",
      en: "English: Complete Grammar Guide for CEFR B2"
    },
    subject: {
      uz: "Ingliz tili",
      ru: "Английский язык",
      en: "English"
    },
    grade: "10-11",
    type: 'pdf',
    fileSize: "3.8 MB",
    downloadUrl: "#"
  },
  {
    id: 'res-3',
    title: {
      uz: "Python dasturlash tili: boshlang'ich darslar va amaliy topshiriqlar",
      ru: "Язык программирования Python: уроки для начинающих и практикум",
      en: "Python Programming: Beginner Lessons & Practical Labs"
    },
    subject: {
      uz: "Informatika",
      ru: "Информатика",
      en: "Informatics"
    },
    grade: "7-11",
    type: 'pdf',
    fileSize: "5.1 MB",
    downloadUrl: "#"
  }
];

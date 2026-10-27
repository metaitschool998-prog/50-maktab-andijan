export type Language = 'uz' | 'ru' | 'en';

export type Theme = 'light' | 'dark';

export interface NewsItem {
  id: string;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  content: Record<Language, string[]>;
  category: Record<Language, string>;
  date: string;
  author: Record<Language, string>;
  imageUrl: string;
  views: number;
}

export interface Teacher {
  id: string;
  name: Record<Language, string>;
  role: Record<Language, string>;
  subject: Record<Language, string>;
  experienceYears: number;
  education: Record<Language, string>;
  category: 'administration' | 'sciences' | 'humanities' | 'primary' | 'sports';
  achievements: Record<Language, string[]>;
  imageUrl: string;
  email?: string;
}

export interface StudentAchievement {
  id: string;
  studentName: Record<Language, string>;
  grade: string;
  title: Record<Language, string>;
  competition: Record<Language, string>;
  level: Record<Language, string>; // District, Regional, Republican, International
  year: string;
  imageUrl: string;
  badge: Record<Language, string>;
}

export interface EducationProgram {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  grades: string;
  features: Record<Language, string[]>;
  icon: string;
}

export interface ScheduleItem {
  period: number;
  time: string;
  shift1: string;
  shift2: string;
}

export interface EventItem {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  date: string;
  time: string;
  location: Record<Language, string>;
  category: Record<Language, string>;
  status: 'upcoming' | 'ongoing' | 'past';
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  title: Record<Language, string>;
  category: 'events' | 'campus' | 'competitions' | 'lessons';
  imageUrl: string;
  date: string;
}

export interface VideoItem {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  duration: string;
  thumbnailUrl: string;
  embedUrl: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: Record<Language, string>;
  answer: Record<Language, string>;
  category: 'admissions' | 'education' | 'schedule' | 'general';
}

export interface ResourceItem {
  id: string;
  title: Record<Language, string>;
  subject: Record<Language, string>;
  grade: string;
  type: 'pdf' | 'link' | 'video';
  fileSize?: string;
  downloadUrl: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  error?: boolean;
}

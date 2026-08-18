export type Language = 'fa' | 'en';
export type Theme = 'light' | 'dark';

export interface SkillItem {
  name: string;
  badge?: string;
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  skills: string[];
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  deliverables: string[];
  bestFor: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  badge: string;
  problem: string;
  solution: string;
  result: string;
  techStack: string[];
  metrics?: { label: string; value: string }[];
}

export interface ContactInfo {
  location: string;
  phone: string;
  phoneRaw: string;
  whatsappUrl: string;
  telegram: string;
  telegramUrl: string;
  email: string;
  linkedin: string;
  linkedinUrl: string;
}

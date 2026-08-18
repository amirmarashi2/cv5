import { UserCheck, Wrench, FileText, Clock, ThumbsUp } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface AboutSectionProps {
  language: Language;
}

export default function AboutSection({ language }: AboutSectionProps) {
  const t = translations[language].aboutSection;

  const principleIcons = [
    <Wrench className="w-4 h-4" />,
    <FileText className="w-4 h-4" />,
    <Clock className="w-4 h-4" />,
    <ThumbsUp className="w-4 h-4" />,
  ];

  return (
    <section id="about" className="py-16 sm:py-24 border-b border-[#064E3B]/30 dark:border-[#059669]/40 bg-[#FBFDFB] dark:bg-[#050E09]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] text-xs font-mono font-bold bg-[#F0F7F3] dark:bg-[#0E2017] text-[#064E3B] dark:text-[#A7F3D0] border border-[#064E3B] dark:border-[#059669] mb-4">
          <UserCheck className="w-3.5 h-3.5 text-[#064E3B] dark:text-[#34D399]" />
          <span>{t.tag}</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#06261C] dark:text-[#ECFDF5] tracking-tight mb-6">
          {t.title}
        </h2>

        {/* Lead Quote */}
        <div className="p-5 sm:p-6 rounded-[2px] bg-[#F0F7F3] dark:bg-[#0E2017] border-s-4 border-[#064E3B] dark:border-[#059669] border-t border-b border-e border-[#064E3B]/20 dark:border-[#059669]/30 mb-8">
          <p className="text-base sm:text-lg font-medium text-[#06261C] dark:text-[#ECFDF5] leading-relaxed">
            "{t.lead}"
          </p>
        </div>

        {/* Narrative Paragraphs */}
        <div className="space-y-4 text-sm sm:text-base text-[#2D5043] dark:text-[#D1FAE5] leading-relaxed mb-12">
          {t.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* 4 Core Work Tenets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {t.principles.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-[2px] bg-[#FFFFFF] dark:bg-[#0E2017] border border-[#064E3B]/30 dark:border-[#059669]/40 flex items-start gap-3.5 hover:border-[#064E3B] dark:hover:border-[#34D399] transition-colors"
            >
              <div className="p-2 rounded-[2px] bg-[#F0F7F3] dark:bg-[#0A1710] text-[#064E3B] dark:text-[#34D399] border border-[#064E3B]/40 dark:border-[#059669]/40 shrink-0 mt-0.5">
                {principleIcons[idx]}
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#06261C] dark:text-[#ECFDF5] mb-1">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#2D5043] dark:text-[#A7F3D0] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Network, Server, PhoneCall, ShieldCheck, Cpu, Layers } from 'lucide-react';
import { Language, SkillCategory } from '../types';
import { translations } from '../data/translations';

interface SkillsMatrixProps {
  language: Language;
}

const iconMap: Record<string, React.ReactNode> = {
  Network: <Network className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  PhoneCall: <PhoneCall className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
};

export default function SkillsMatrix({ language }: SkillsMatrixProps) {
  const t = translations[language].skillsSection;
  const [activeCategory, setActiveCategory] = useState<string | 'all'>('all');

  const filteredCategories = activeCategory === 'all'
    ? t.categories
    : t.categories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-16 sm:py-24 border-b border-[#064E3B]/30 dark:border-[#059669]/40 bg-[#FBFDFB] dark:bg-[#050E09]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] text-xs font-mono font-bold bg-[#F0F7F3] dark:bg-[#0E2017] text-[#064E3B] dark:text-[#A7F3D0] border border-[#064E3B] dark:border-[#059669] mb-3">
            <Layers className="w-3.5 h-3.5 text-[#064E3B] dark:text-[#34D399]" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#06261C] dark:text-[#ECFDF5] tracking-tight mb-3">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#2D5043] dark:text-[#D1FAE5] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 rounded-[2px] text-xs sm:text-sm font-mono font-bold transition-colors cursor-pointer border ${
              activeCategory === 'all'
                ? 'bg-[#064E3B] text-white border-[#022C22] dark:bg-[#059669] dark:text-[#022C22] dark:border-[#34D399]'
                : 'bg-[#F0F7F3] text-[#064E3B] dark:bg-[#0A1710] dark:text-[#A7F3D0] border-[#064E3B]/40 dark:border-[#059669]/40 hover:bg-[#E1EFE7] dark:hover:bg-[#122B1E]'
            }`}
          >
            {language === 'fa' ? 'تمام تخصص‌ها' : 'All Domains'}
          </button>
          {t.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-[2px] text-xs sm:text-sm font-mono font-bold transition-colors cursor-pointer border ${
                activeCategory === cat.id
                  ? 'bg-[#064E3B] text-white border-[#022C22] dark:bg-[#059669] dark:text-[#022C22] dark:border-[#34D399]'
                  : 'bg-[#F0F7F3] text-[#064E3B] dark:bg-[#0A1710] dark:text-[#A7F3D0] border-[#064E3B]/40 dark:border-[#059669]/40 hover:bg-[#E1EFE7] dark:hover:bg-[#122B1E]'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((category: SkillCategory) => (
            <div
              key={category.id}
              className="rounded-[2px] p-5 sm:p-6 bg-[#FFFFFF] dark:bg-[#0E2017] border-t-4 border-t-[#064E3B] dark:border-t-[#059669] border-r border-b border-l border-[#064E3B]/30 dark:border-[#059669]/30 shadow-2xs hover:border-[#064E3B] dark:hover:border-[#34D399] transition-all duration-150 flex flex-col justify-between"
            >
              <div>
                {/* Card Top Title & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-[2px] bg-[#F0F7F3] dark:bg-[#0A1710] text-[#064E3B] dark:text-[#34D399] border border-[#064E3B]/40 dark:border-[#059669]/40">
                      {iconMap[category.iconName] || <Cpu className="w-5 h-5" />}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-mono text-[#06261C] dark:text-[#ECFDF5]">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#064E3B] dark:text-[#A7F3D0] px-2 py-0.5 rounded-[2px] bg-[#F0F7F3] dark:bg-[#0A1710] border border-[#064E3B]/30 dark:border-[#059669]/30">
                    {category.skills.length} Items
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#2D5043] dark:text-[#D1FAE5] mb-5 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills Tags List */}
              <div className="pt-4 border-t border-[#064E3B]/20 dark:border-[#059669]/30">
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="tech-tag"
                    >
                      <span className="w-1 h-1 rounded-[1px] bg-[#064E3B] dark:bg-[#34D399]"></span>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industrial Note */}
        <div className="mt-8 p-4 rounded-[2px] bg-[#F0F7F3] dark:bg-[#0A1710] border-s-4 border-s-[#064E3B] dark:border-s-[#059669] border-t border-r border-b border-[#064E3B]/30 dark:border-[#059669]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#2D5043] dark:text-[#A7F3D0]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#064E3B] dark:text-[#34D399] shrink-0" />
            <span>
              {language === 'fa'
                ? 'تمامی تنظیمات مطابق با Best Practices امنیتی شرکت‌های Cisco و MikroTik پیاده‌سازی می‌شوند.'
                : 'All configurations follow official Cisco & MikroTik security best-practice guidelines.'}
            </span>
          </div>
          <span className="font-mono text-[11px] font-bold text-[#064E3B] dark:text-[#34D399]">
            Standard SLA: 99.9% Uptime
          </span>
        </div>

      </div>
    </section>
  );
}

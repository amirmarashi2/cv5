import { AlertCircle, CheckCircle2, Award, TrendingUp } from 'lucide-react';
import { Language, CaseStudy } from '../types';
import { translations } from '../data/translations';

interface CaseStudiesSectionProps {
  language: Language;
}

export default function CaseStudiesSection({ language }: CaseStudiesSectionProps) {
  const t = translations[language].projectsSection;

  return (
    <section id="projects" className="py-16 sm:py-24 border-b border-[#064E3B]/30 dark:border-[#059669]/40 bg-[#FBFDFB] dark:bg-[#050E09]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] text-xs font-mono font-bold bg-[#F0F7F3] dark:bg-[#0E2017] text-[#064E3B] dark:text-[#A7F3D0] border border-[#064E3B] dark:border-[#059669] mb-3">
            <Award className="w-3.5 h-3.5 text-[#064E3B] dark:text-[#34D399]" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#06261C] dark:text-[#ECFDF5] tracking-tight mb-3">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base font-mono text-[#064E3B] dark:text-[#34D399] font-bold">
            {t.subtitle}
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-6">
          {t.caseStudies.map((cs: CaseStudy) => (
            <div
              key={cs.id}
              className="rounded-[2px] p-5 sm:p-7 bg-[#FFFFFF] dark:bg-[#0E2017] border-t-4 border-t-[#064E3B] dark:border-t-[#059669] border-r border-b border-l border-[#064E3B]/30 dark:border-[#059669]/30 shadow-2xs hover:border-[#064E3B] dark:hover:border-[#34D399] transition-all duration-150"
            >
              {/* Case Study Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#064E3B]/20 dark:border-[#059669]/30">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#064E3B] dark:text-[#6EE7B7] uppercase">
                    {cs.clientType}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#06261C] dark:text-[#ECFDF5] mt-0.5">
                    {cs.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-[2px] text-xs font-mono font-bold bg-[#F0F7F3] dark:bg-[#0A1710] text-[#064E3B] dark:text-[#34D399] border border-[#064E3B]/40 dark:border-[#059669]/40">
                    {cs.badge}
                  </span>
                </div>
              </div>

              {/* Problem → Solution → Result Stack */}
              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* 1. Problem */}
                <div className="p-3.5 rounded-[2px] bg-[#FDF2F2] dark:bg-[#1A0D0D] border-s-4 border-[#991B1B] dark:border-[#EF4444] border-t border-b border-e border-[#F87171]/20 dark:border-[#7F1D1D]/40 text-[#7F1D1D] dark:text-[#FCA5A5]">
                  <div className="flex items-center gap-2 font-mono font-bold text-xs text-[#991B1B] dark:text-[#F87171] mb-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>PROBLEM / چالش اولیه:</span>
                  </div>
                  <p className="leading-relaxed text-[#5C1414] dark:text-[#FEE2E2]">
                    {cs.problem}
                  </p>
                </div>

                {/* 2. Solution */}
                <div className="p-3.5 rounded-[2px] bg-[#F0F7F3] dark:bg-[#0A1710] border-s-4 border-[#064E3B] dark:border-[#059669] border-t border-b border-e border-[#064E3B]/20 dark:border-[#059669]/30 text-[#06261C] dark:text-[#D1FAE5]">
                  <div className="flex items-center gap-2 font-mono font-bold text-xs text-[#064E3B] dark:text-[#6EE7B7] mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#064E3B] dark:text-[#34D399] shrink-0" />
                    <span>SOLUTION / راهکار اجرا شده:</span>
                  </div>
                  <p className="leading-relaxed text-[#1F4135] dark:text-[#A7F3D0]">
                    {cs.solution}
                  </p>
                </div>

                {/* 3. Result */}
                <div className="p-3.5 rounded-[2px] bg-[#E6F4EA] dark:bg-[#062C1A] border-s-4 border-[#022C22] dark:border-[#34D399] border-t border-b border-e border-[#064E3B]/30 dark:border-[#059669]/40 text-[#06261C] dark:text-[#ECFDF5]">
                  <div className="flex items-center gap-2 font-mono font-bold text-xs text-[#022C22] dark:text-[#34D399] mb-1">
                    <TrendingUp className="w-3.5 h-3.5 text-[#064E3B] dark:text-[#34D399] shrink-0" />
                    <span>RESULT / دستاورد و نتیجه نهایی:</span>
                  </div>
                  <p className="leading-relaxed font-semibold text-[#06261C] dark:text-[#ECFDF5]">
                    {cs.result}
                  </p>
                </div>

              </div>

              {/* Footer: Tech Stack Pills & Metrics */}
              <div className="pt-4 mt-4 border-t border-[#064E3B]/20 dark:border-[#059669]/30 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  {cs.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {cs.metrics && (
                  <div className="flex items-center gap-3">
                    {cs.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-right">
                        <span className="text-[10px] text-[#2D5043] dark:text-[#A7F3D0] block font-mono">
                          {m.label}
                        </span>
                        <span className="text-xs sm:text-sm font-bold font-mono text-[#064E3B] dark:text-[#34D399]">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

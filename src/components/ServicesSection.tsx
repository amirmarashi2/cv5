import React from 'react';
import {
  Boxes,
  Wrench,
  Cpu,
  PhoneForwarded,
  HardDrive,
  Network,
  FileSpreadsheet,
  Headphones,
  CheckCircle,
  ArrowUpRight,
  Briefcase,
  ShieldCheck,
} from 'lucide-react';
import { Language, ServiceItem } from '../types';
import { translations } from '../data/translations';

interface ServicesSectionProps {
  language: Language;
  onSelectServiceForInquiry?: (serviceName: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Boxes: <Boxes className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  PhoneForwarded: <PhoneForwarded className="w-5 h-5" />,
  HardDrive: <HardDrive className="w-5 h-5" />,
  Network: <Network className="w-5 h-5" />,
  FileSpreadsheet: <FileSpreadsheet className="w-5 h-5" />,
  Headphones: <Headphones className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
};

export default function ServicesSection({ language, onSelectServiceForInquiry }: ServicesSectionProps) {
  const t = translations[language].servicesSection;

  return (
    <section id="services" className="py-16 sm:py-24 border-b border-[#064E3B]/30 dark:border-[#059669]/40 bg-[#F0F7F3] dark:bg-[#050E09]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] text-xs font-mono font-bold bg-[#FBFDFB] dark:bg-[#0E2017] text-[#064E3B] dark:text-[#A7F3D0] border border-[#064E3B] dark:border-[#059669] mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#064E3B] dark:text-[#34D399]" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#06261C] dark:text-[#ECFDF5] tracking-tight mb-3">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#2D5043] dark:text-[#D1FAE5] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.services.map((service: ServiceItem, idx: number) => (
            <div
              key={service.id}
              className="rounded-[2px] p-5 sm:p-6 bg-[#FFFFFF] dark:bg-[#0E2017] border-t-2 border-t-[#064E3B] dark:border-t-[#059669] border-r border-b border-l border-[#064E3B]/30 dark:border-[#059669]/30 shadow-2xs hover:border-[#064E3B] dark:hover:border-[#34D399] transition-all duration-150 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Icon & Index */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-[2px] bg-[#F0F7F3] dark:bg-[#0A1710] text-[#064E3B] dark:text-[#34D399] border border-[#064E3B]/40 dark:border-[#059669]/40 group-hover:bg-[#064E3B] group-hover:text-white dark:group-hover:bg-[#059669] dark:group-hover:text-[#022C22] transition-colors">
                    {iconMap[service.iconName] || <Boxes className="w-5 h-5" />}
                  </div>
                  <span className="font-mono text-xs text-[#064E3B] dark:text-[#6EE7B7] font-bold">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#06261C] dark:text-[#ECFDF5] mb-2 leading-snug">
                  {service.title}
                </h3>

                {/* Short Desc */}
                <p className="text-xs sm:text-sm text-[#2D5043] dark:text-[#A7F3D0] mb-4 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-1.5 mb-5">
                  <div className="text-[11px] font-mono font-bold uppercase text-[#064E3B] dark:text-[#6EE7B7]">
                    {language === 'fa' ? 'خروجی‌های کلیدی:' : 'Key Deliverables:'}
                  </div>
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="service-item-geo flex items-start gap-1.5 text-xs text-[#06261C] dark:text-[#D1FAE5]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#064E3B] dark:text-[#34D399] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best For & Quick Action */}
              <div className="pt-4 border-t border-[#064E3B]/20 dark:border-[#059669]/30 mt-2">
                <div className="text-[11px] text-[#2D5043] dark:text-[#A7F3D0] mb-3">
                  <span className="font-bold text-[#06261C] dark:text-[#ECFDF5]">
                    {language === 'fa' ? 'مناسب برای: ' : 'Best for: '}
                  </span>
                  {service.bestFor}
                </div>

                <a
                  href="#contact"
                  onClick={() => onSelectServiceForInquiry && onSelectServiceForInquiry(service.title)}
                  className="inline-flex items-center justify-between w-full px-3.5 py-2 text-xs font-bold rounded-[2px] bg-[#F0F7F3] dark:bg-[#0A1710] text-[#064E3B] dark:text-[#6EE7B7] hover:bg-[#064E3B] hover:text-white dark:hover:bg-[#059669] dark:hover:text-[#022C22] transition-colors border border-[#064E3B]/50 dark:border-[#059669] cursor-pointer"
                >
                  <span>{language === 'fa' ? 'مشاوره و اجرای این خدمت' : 'Consult & Request'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

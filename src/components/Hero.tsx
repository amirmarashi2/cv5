import { ArrowDown, PhoneCall, CheckCircle2, ShieldCheck, MapPin, MessageSquare, Send } from 'lucide-react';
import { Language } from '../types';
import { translations, contactDetails } from '../data/translations';

interface HeroProps {
  language: Language;
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language];

  return (
    <section
      id="hero-section"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-[#064E3B]/20 dark:border-[#059669]/30 bg-grid-geometric overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Availability & Location Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[4px] text-xs font-semibold bg-[#F0F7F3] text-[#064E3B] dark:bg-[#0E2017] dark:text-[#A7F3D0] border border-[#064E3B]/40 dark:border-[#059669]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#064E3B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#064E3B] dark:bg-[#34D399]"></span>
            </span>
            <span>{t.nav.status}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[4px] text-xs text-[#2D5043] dark:text-[#A7F3D0] bg-[#FBFDFB] dark:bg-[#0A1710] border border-[#064E3B]/25 dark:border-[#059669]/30">
            <MapPin className="w-3.5 h-3.5 text-[#064E3B] dark:text-[#34D399]" />
            <span>{t.hero.experiencePill}</span>
          </div>
        </div>

        {/* Large Name */}
        <h1
          id="hero-engineer-name"
          className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#06261C] dark:text-[#ECFDF5] leading-[1.25] mb-4"
        >
          {language === 'fa' ? 'سید امیرحسین مرعشی زاده' : 'Seyed Amir Hossein Marashi Zadeh'}
        </h1>

        {/* Secondary Title */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-1 w-8 sm:w-12 bg-[#064E3B] dark:bg-[#059669] rounded-full"></div>
          <h2
            id="hero-engineer-title"
            className="text-lg sm:text-2xl font-bold tracking-tight text-[#064E3B] dark:text-[#34D399]"
          >
            {t.hero.title}
          </h2>
        </div>

        {/* Core Narrative Pitch */}
        <p
          id="hero-pitch"
          className="text-base sm:text-lg text-[#1F4135] dark:text-[#D1FAE5] leading-relaxed max-w-3xl mb-8 font-normal"
        >
          {t.hero.bio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12">
          <a
            id="hero-btn-skills"
            href="#skills"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-bold text-white bg-[#064E3B] hover:bg-[#022C22] dark:bg-[#059669] dark:hover:bg-[#047857] rounded-[4px] transition-colors border border-[#022C22] dark:border-[#34D399] shadow-2xs cursor-pointer"
          >
            <span>{t.hero.btnSkills}</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            id="hero-btn-contact"
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-bold text-[#064E3B] dark:text-[#ECFDF5] bg-[#FBFDFB] dark:bg-[#0E2017] hover:bg-[#F0F7F3] dark:hover:bg-[#122B1E] rounded-[4px] transition-colors border-2 border-[#064E3B] dark:border-[#059669] shadow-2xs cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-[#064E3B] dark:text-[#6EE7B7]" />
            <span>{t.hero.btnContact}</span>
          </a>

          <a
            id="hero-btn-quick-inquiry"
            href="#quick-inquiry"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold text-[#064E3B] dark:text-[#34D399] hover:text-[#022C22] dark:hover:text-white rounded-[4px] transition-colors cursor-pointer border border-transparent hover:border-[#064E3B]/30"
          >
            <span>{t.hero.btnQuickAssessment}</span>
            <span>&larr;</span>
          </a>
        </div>

        {/* Professional Human Trust & Capabilities Card (Replaced fake terminal) */}
        <div
          id="hero-trust-card"
          className="rounded-[4px] border border-[#064E3B]/30 dark:border-[#059669]/40 bg-[#FFFFFF] dark:bg-[#0E2017] p-5 sm:p-6 shadow-sm overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 mb-4 border-b border-[#064E3B]/15 dark:border-[#059669]/25">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[4px] bg-[#064E3B] dark:bg-[#059669] text-white flex items-center justify-center font-bold text-sm">
                AM
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-[#06261C] dark:text-[#ECFDF5]">
                  {language === 'fa' ? 'سید امیرحسین مرعشی زاده' : 'Seyed Amir Hossein Marashi Zadeh'}
                </h3>
                <p className="text-xs text-[#2D5043] dark:text-[#A7F3D0]">
                  {language === 'fa' ? 'مهندس زیرساخت شبکه و فایروال • آماده ارزیابی و مشاوره' : 'Network & Firewall Infrastructure Engineer'}
                </p>
              </div>
            </div>

            {/* Quick Contact Chips */}
            <div className="flex items-center gap-2">
              <a
                href={`tel:${contactDetails.phoneRaw}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-[#064E3B] hover:bg-[#022C22] dark:bg-[#059669] dark:hover:bg-[#047857] rounded-[4px] transition-colors cursor-pointer"
              >
                <PhoneCall className="w-3 h-3" />
                <span>{contactDetails.phoneFormatted}</span>
              </a>
              <a
                href={contactDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-[#064E3B] dark:text-[#A7F3D0] bg-[#F0F7F3] dark:bg-[#0A1710] border border-[#064E3B]/30 dark:border-[#059669]/40 hover:bg-[#E1EFE7] rounded-[4px] transition-colors cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{language === 'fa' ? 'واتساپ' : 'WhatsApp'}</span>
              </a>
              <a
                href={contactDetails.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-[#064E3B] dark:text-[#A7F3D0] bg-[#F0F7F3] dark:bg-[#0A1710] border border-[#064E3B]/30 dark:border-[#059669]/40 hover:bg-[#E1EFE7] rounded-[4px] transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{language === 'fa' ? 'تلگرام' : 'Telegram'}</span>
              </a>
            </div>
          </div>

          {/* Key practical commitments */}
          <div className="space-y-2.5 text-xs sm:text-sm text-[#06261C] dark:text-[#ECFDF5]">
            {t.hero.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] dark:text-[#34D399] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Bottom Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6">
          {t.hero.badges.map((badge, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-4 rounded-[4px] bg-[#FFFFFF] dark:bg-[#0E2017] border border-[#064E3B]/25 dark:border-[#059669]/30 hover:border-[#064E3B] dark:hover:border-[#34D399] transition-colors shadow-2xs"
            >
              <div className="text-[11px] text-[#2D5043] dark:text-[#A7F3D0] mb-1 font-medium">
                {badge.label}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#064E3B] dark:text-[#34D399]">
                {badge.val}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

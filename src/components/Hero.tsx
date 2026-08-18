import { useState } from 'react';
import { ArrowDown, PhoneCall, Terminal, CheckCircle2, Activity } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeroProps {
  language: Language;
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language];
  const [terminalActive, setTerminalActive] = useState(false);
  const [simulatedPing, setSimulatedPing] = useState<{ count: number; latency: number; status: string }>({
    count: 4,
    latency: 14,
    status: '0% packet loss • RTT min/avg/max = 12/14/17 ms',
  });

  const handleTestPing = () => {
    setTerminalActive(true);
    const newLatency = Math.floor(Math.random() * 8) + 11;
    setSimulatedPing({
      count: 4,
      latency: newLatency,
      status: `0% packet loss • RTT min/avg/max = ${newLatency - 2}/${newLatency}/${newLatency + 3} ms`,
    });
  };

  return (
    <section
      id="hero-section"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-[#064E3B]/30 dark:border-[#059669]/40 bg-grid-geometric overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Availability & Location Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] text-xs font-mono font-bold bg-[#F0F7F3] text-[#064E3B] dark:bg-[#0E2017] dark:text-[#A7F3D0] border border-[#064E3B] dark:border-[#059669]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-[1px] bg-[#064E3B] opacity-75"></span>
              <span className="relative inline-flex rounded-[1px] h-2 w-2 bg-[#064E3B] dark:bg-[#34D399]"></span>
            </span>
            <span>{t.nav.status}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[2px] text-xs font-mono text-[#2D5043] dark:text-[#A7F3D0] bg-[#FBFDFB] dark:bg-[#0A1710] border border-[#064E3B]/30 dark:border-[#059669]/40">
            <Activity className="w-3 h-3 text-[#064E3B] dark:text-[#34D399]" />
            <span>{language === 'fa' ? 'اهواز، خوزستان • پروژه‌های محلی و ریموت' : 'Ahvaz, Khuzestan • Local & Remote SLA'}</span>
          </div>
        </div>

        {/* Large Name */}
        <h1
          id="hero-engineer-name"
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#06261C] dark:text-[#ECFDF5] leading-[1.15] mb-4 font-sans"
        >
          {language === 'fa' ? 'سید امیرحسین مرعشی زاده' : 'Seyed Amir Hossein Marashi Zadeh'}
        </h1>

        {/* Secondary Title / Tech Spec */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-0.5 w-6 sm:w-10 bg-[#064E3B] dark:bg-[#059669]"></div>
          <h2
            id="hero-engineer-title"
            className="text-lg sm:text-2xl font-bold font-mono tracking-tight text-[#064E3B] dark:text-[#34D399]"
          >
            {t.hero.title}
          </h2>
        </div>

        {/* Core Short Pitch */}
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
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-bold text-white bg-[#064E3B] hover:bg-[#022C22] dark:bg-[#059669] dark:hover:bg-[#047857] rounded-[2px] transition-colors border border-[#022C22] dark:border-[#34D399] shadow-2xs cursor-pointer"
          >
            <span>{t.hero.btnSkills}</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            id="hero-btn-contact"
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-bold text-[#064E3B] dark:text-[#ECFDF5] bg-[#FBFDFB] dark:bg-[#0E2017] hover:bg-[#F0F7F3] dark:hover:bg-[#122B1E] rounded-[2px] transition-colors border-2 border-[#064E3B] dark:border-[#059669] shadow-2xs cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-[#064E3B] dark:text-[#6EE7B7]" />
            <span>{t.hero.btnContact}</span>
          </a>

          <a
            id="hero-btn-quick-inquiry"
            href="#quick-inquiry"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-mono font-bold text-[#064E3B] dark:text-[#34D399] hover:text-[#022C22] dark:hover:text-white rounded-[2px] transition-colors cursor-pointer border border-transparent hover:border-[#064E3B]/30"
          >
            <span>{t.hero.btnQuickAssessment}</span>
            <span>&larr;</span>
          </a>
        </div>

        {/* Engineering Industrial Console Snippet */}
        <div
          id="hero-terminal-box"
          className="rounded-[2px] border-2 border-[#064E3B] dark:border-[#059669] bg-[#F0F7F3] dark:bg-[#0A1710] p-4 sm:p-5 shadow-2xs overflow-hidden"
        >
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#064E3B]/30 dark:border-[#059669]/40">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-[1px] bg-[#064E3B] dark:bg-[#059669]"></div>
              <div className="w-2.5 h-2.5 rounded-[1px] bg-[#064E3B]/60 dark:bg-[#059669]/60"></div>
              <div className="w-2.5 h-2.5 rounded-[1px] bg-[#064E3B]/30 dark:bg-[#059669]/30"></div>
              <span className="text-xs font-mono text-[#064E3B] dark:text-[#A7F3D0] font-bold ms-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#064E3B] dark:text-[#34D399]" />
                <span>infrastructure_telemetry.sh</span>
              </span>
            </div>

            <button
              onClick={handleTestPing}
              className="text-[11px] font-mono font-bold px-3 py-1 rounded-[2px] bg-[#064E3B] dark:bg-[#059669] text-white hover:bg-[#022C22] dark:hover:bg-[#047857] transition-colors cursor-pointer"
            >
              [ RUN DIAGNOSTIC PING ]
            </button>
          </div>

          <div className="font-mono text-xs sm:text-sm space-y-1.5 text-[#06261C] dark:text-[#D1FAE5] ltr text-left terminal-scroll overflow-x-auto">
            <div className="text-[#064E3B] dark:text-[#34D399] font-bold flex items-center gap-2">
              <span>&gt;</span>
              <span>marashi@infra-gateway:~$ ping -c 4 primary.corp-network.internal</span>
            </div>
            <div className="text-[#2D5043] dark:text-[#A7F3D0] ps-4">
              64 bytes from 10.50.0.1: icmp_seq=1 ttl=64 time={simulatedPing.latency}.2 ms
            </div>
            <div className="text-[#2D5043] dark:text-[#A7F3D0] ps-4">
              64 bytes from 10.50.0.1: icmp_seq=2 ttl=64 time={simulatedPing.latency - 1}.8 ms
            </div>
            <div className="text-[#2D5043] dark:text-[#A7F3D0] ps-4">
              64 bytes from 10.50.0.1: icmp_seq=3 ttl=64 time={simulatedPing.latency + 1}.1 ms
            </div>
            <div className="text-[#2D5043] dark:text-[#A7F3D0] ps-4">
              64 bytes from 10.50.0.1: icmp_seq=4 ttl=64 time={simulatedPing.latency}.0 ms
            </div>
            <div className="pt-1 text-[#064E3B] dark:text-[#34D399] font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#064E3B] dark:text-[#34D399]" />
              <span>--- {simulatedPing.status} ---</span>
            </div>
          </div>
        </div>

        {/* 4 Bottom Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6">
          {t.hero.badges.map((badge, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-4 rounded-[2px] bg-[#FBFDFB] dark:bg-[#0E2017] border-s-2 border-[#064E3B] dark:border-[#059669] border-t border-r border-b border-[#064E3B]/20 dark:border-[#059669]/30 shadow-2xs"
            >
              <div className="text-[11px] font-bold text-[#2D5043] dark:text-[#A7F3D0] mb-1">
                {badge.label}
              </div>
              <div className="text-xs sm:text-sm font-bold font-mono text-[#06261C] dark:text-[#ECFDF5]">
                {badge.val}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

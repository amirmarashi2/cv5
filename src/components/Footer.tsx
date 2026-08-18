import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Language } from '../types';
import { translations, contactDetails } from '../data/translations';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language].footer;
  const [iranTime, setIranTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('fa-IR', {
          timeZone: 'Asia/Tehran',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date());
        setIranTime(timeStr);
      } catch {
        setIranTime(new Date().toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="py-8 border-t-2 border-t-[#064E3B] dark:border-t-[#059669] bg-[#FBFDFB] dark:bg-[#050E09] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-[#064E3B]/20 dark:border-[#059669]/30">
          {/* Left / Identity */}
          <div className="flex items-center gap-3 text-[#064E3B] dark:text-[#A7F3D0]">
            <div className="w-2 h-2 rounded-[1px] bg-[#064E3B] dark:bg-[#34D399] animate-pulse"></div>
            <span className="font-mono font-bold">{t.uptimeBadge}</span>
            <span className="text-[#064E3B]/40 dark:text-[#059669]">•</span>
            <span className="font-mono">{t.timezone}: <span className="font-bold text-[#06261C] dark:text-[#ECFDF5]">{iranTime}</span></span>
          </div>

          {/* Right / Back to Top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] font-mono text-xs font-bold text-[#064E3B] dark:text-[#34D399] bg-[#F0F7F3] dark:bg-[#0A1710] hover:bg-[#E1EFE7] dark:hover:bg-[#122B1E] border border-[#064E3B]/40 dark:border-[#059669]/40 transition-colors cursor-pointer"
          >
            <span>{language === 'fa' ? 'بازگشت به بالا' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-start text-[#2D5043] dark:text-[#A7F3D0]">
          <div>
            © {new Date().getFullYear()} Seyed Amir Hossein Marashi Zadeh • {contactDetails.titleEn}
          </div>
          <div>
            {t.rights}
          </div>
        </div>

      </div>
    </footer>
  );
}

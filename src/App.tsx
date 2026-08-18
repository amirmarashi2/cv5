import { useState, useEffect } from 'react';
import { Language, Theme } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import SkillsMatrix from './components/SkillsMatrix';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import QuickInquiry from './components/QuickInquiry';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { MessageSquare, Phone } from 'lucide-react';
import { contactDetails } from './data/translations';

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('samz_lang');
    return (saved === 'fa' || saved === 'en') ? saved : 'fa';
  });

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('samz_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  const [preselectedNeed, setPreselectedNeed] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('samz_lang', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
    if (language === 'fa') {
      document.title = 'Seyed Amir Hossein Marashi Zadeh | مهندس شبکه و زیرساخت IT';
    } else {
      document.title = 'Seyed Amir Hossein Marashi Zadeh | Network & IT Infrastructure Engineer';
    }
  }, [language]);

  useEffect(() => {
    localStorage.setItem('samz_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSelectServiceForInquiry = (serviceName: string) => {
    setPreselectedNeed(serviceName);
    const elem = document.getElementById('quick-inquiry');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFDFB] text-[#06261C] dark:bg-[#050E09] dark:text-[#ECFDF5] font-sans selection:bg-[#064E3B] selection:text-white transition-colors duration-150">
      
      {/* Top Header Navigation */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onThemeToggle={toggleTheme}
      />

      {/* Main Content Sections */}
      <main>
        <Hero language={language} />
        <SkillsMatrix language={language} />
        <ServicesSection
          language={language}
          onSelectServiceForInquiry={handleSelectServiceForInquiry}
        />
        <AboutSection language={language} />
        <CaseStudiesSection language={language} />
        <QuickInquiry language={language} preselectedNeed={preselectedNeed} />
        <ContactSection language={language} />
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* Fixed Floating Mobile Contact Widget */}
      <aside aria-label="Floating quick contact actions" className="sm:hidden fixed bottom-3 start-3 end-3 z-40 flex items-center gap-2 p-1.5 rounded-[2px] bg-[#FBFDFB]/95 dark:bg-[#0E2017]/95 backdrop-blur-xs border-2 border-[#064E3B] dark:border-[#059669] shadow-md">
        <a
          href={contactDetails.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-[2px] text-xs font-bold text-white bg-[#064E3B] hover:bg-[#022C22] active:bg-[#011B15] transition-colors border border-[#022C22]"
        >
          <MessageSquare className="w-4 h-4 text-[#6EE7B7]" />
          <span>{language === 'fa' ? 'واتساپ' : 'WhatsApp'}</span>
        </a>

        <a
          href={`tel:${contactDetails.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-[2px] text-xs font-bold text-white bg-[#022C22] hover:bg-[#011B15] dark:bg-[#059669] dark:text-[#022C22] dark:hover:bg-[#047857] active:bg-[#011B15] transition-colors border border-[#011B15] dark:border-[#34D399]"
        >
          <Phone className="w-4 h-4 text-[#6EE7B7] dark:text-[#022C22]" />
          <span>{language === 'fa' ? 'تماس فوری' : 'Call'}</span>
        </a>
      </aside>

    </div>
  );
}

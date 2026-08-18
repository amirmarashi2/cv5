import { useState, useEffect } from 'react';
import { Moon, Sun, Phone, Menu, X, Activity } from 'lucide-react';
import { Language, Theme } from '../types';
import { translations, contactDetails } from '../data/translations';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  theme: Theme;
  onThemeToggle: () => void;
}

export default function Header({ language, onLanguageChange, theme, onThemeToggle }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#skills', label: t.nav.skills },
    { href: '#services', label: t.nav.services },
    { href: '#about', label: t.nav.about },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${
        isScrolled
          ? 'bg-[#FBFDFB]/95 dark:bg-[#050E09]/95 backdrop-blur-xs border-b border-[#064E3B] dark:border-[#059669] py-3 shadow-2xs'
          : 'bg-[#FBFDFB]/85 dark:bg-[#050E09]/85 border-b border-[#064E3B]/20 dark:border-[#059669]/30 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Identity / Engineer Status */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            id="brand-logo-link"
            className="flex items-center gap-3 group focus:outline-hidden"
          >
            <div className="w-9 h-9 rounded-[2px] bg-[#064E3B] text-white dark:bg-[#059669] dark:text-[#022C22] flex items-center justify-center font-mono font-bold text-sm tracking-tight border border-[#022C22] dark:border-[#34D399] shadow-2xs group-hover:bg-[#022C22] transition-colors">
              AM
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base text-[#06261C] dark:text-[#ECFDF5] leading-tight tracking-tight">
                {language === 'fa' ? 'سید امیرحسین مرعشی‌زاده' : 'Seyed Amir Hossein Marashi'}
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-[#064E3B] dark:text-[#6EE7B7] leading-tight flex items-center gap-1.5 font-semibold" dir="ltr">
                <span className="w-1.5 h-1.5 rounded-[1px] bg-[#064E3B] dark:bg-[#34D399] animate-pulse"></span>
                <span>Network & IT Infrastructure Engineer</span>
              </span>
            </div>
          </a>
        </div>

        {/* Center: Desktop Navigation */}
        <nav id="desktop-navigation" className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-[#06261C] dark:text-[#A7F3D0] hover:text-[#064E3B] dark:hover:text-white rounded-[2px] hover:bg-[#F0F7F3] dark:hover:bg-[#0E2017] transition-colors border border-transparent hover:border-[#064E3B]/30 dark:hover:border-[#059669]/40"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Controls & CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Geometric Language Switcher */}
          <div className="flex items-center border border-[#064E3B] dark:border-[#059669] rounded-[2px] p-0.5 bg-[#F0F7F3] dark:bg-[#0A1710] text-[11px] font-mono font-bold">
            <button
              onClick={() => onLanguageChange('fa')}
              className={`px-2 py-0.5 rounded-[1px] transition-colors cursor-pointer ${
                language === 'fa'
                  ? 'bg-[#064E3B] text-white dark:bg-[#059669] dark:text-[#022C22]'
                  : 'text-[#064E3B] dark:text-[#A7F3D0] hover:bg-[#E1EFE7] dark:hover:bg-[#122B1E]'
              }`}
            >
              FA
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-0.5 rounded-[1px] transition-colors cursor-pointer ${
                language === 'en'
                  ? 'bg-[#064E3B] text-white dark:bg-[#059669] dark:text-[#022C22]'
                  : 'text-[#064E3B] dark:text-[#A7F3D0] hover:bg-[#E1EFE7] dark:hover:bg-[#122B1E]'
              }`}
            >
              EN
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            id="theme-toggle-btn"
            onClick={onThemeToggle}
            className="p-1.5 text-[#064E3B] dark:text-[#A7F3D0] bg-[#F0F7F3] dark:bg-[#0A1710] border border-[#064E3B]/60 dark:border-[#059669] rounded-[2px] hover:bg-[#E1EFE7] dark:hover:bg-[#122B1E] transition-colors cursor-pointer"
            title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-3.5 h-3.5 text-amber-300" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-[#064E3B]" />
            )}
          </button>

          {/* Quick Call Button (Desktop) */}
          <a
            id="header-call-btn"
            href={`tel:${contactDetails.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold text-white bg-[#064E3B] hover:bg-[#022C22] dark:bg-[#059669] dark:hover:bg-[#047857] rounded-[2px] transition-colors border border-[#022C22] dark:border-[#34D399] shadow-2xs cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-[#6EE7B7]" />
            <span>{t.nav.quickCall}</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#064E3B] dark:text-[#A7F3D0] bg-[#F0F7F3] dark:bg-[#0A1710] border border-[#064E3B] dark:border-[#059669] rounded-[2px]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden border-b-2 border-[#064E3B] dark:border-[#059669] bg-[#FBFDFB] dark:bg-[#050E09] px-4 pt-3 pb-5 space-y-2 mt-2"
        >
          <div className="flex items-center gap-2 py-2 px-3 bg-[#F0F7F3] dark:bg-[#0A1710] border-s-2 border-[#064E3B] text-xs font-mono text-[#064E3B] dark:text-[#A7F3D0] mb-3">
            <Activity className="w-3.5 h-3.5 text-[#064E3B] dark:text-[#34D399]" />
            <span>{t.nav.status}</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-[#06261C] dark:text-[#ECFDF5] hover:bg-[#F0F7F3] dark:hover:bg-[#0E2017] rounded-[2px] border-s-2 border-transparent hover:border-[#064E3B]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <div className="flex items-center justify-between gap-2 p-2 rounded-[2px] bg-[#F0F7F3] dark:bg-[#0A1710] border border-[#064E3B]/30 dark:border-[#059669]/30">
              <span className="text-xs font-mono font-bold text-[#064E3B] dark:text-[#A7F3D0]">
                {language === 'fa' ? 'حالت نمایش / تم' : 'Theme Mode'}:
              </span>
              <button
                onClick={onThemeToggle}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold text-[#064E3B] dark:text-[#A7F3D0] bg-white dark:bg-[#0E2017] border border-[#064E3B]/60 dark:border-[#059669] rounded-[2px]"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-300" />
                    <span>{language === 'fa' ? 'روشن (روز)' : 'Light'}</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-[#064E3B]" />
                    <span>{language === 'fa' ? 'تاریک (شب)' : 'Dark'}</span>
                  </>
                )}
              </button>
            </div>
            <a
              href={`tel:${contactDetails.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-white bg-[#064E3B] dark:bg-[#059669] rounded-[2px]"
            >
              <Phone className="w-4 h-4 text-[#6EE7B7]" />
              <span>{t.nav.quickCall} ({contactDetails.phone})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

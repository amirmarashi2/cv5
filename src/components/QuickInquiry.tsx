import { useState, useEffect } from 'react';
import { MessageSquare, Send, PhoneCall, Sparkles, Check } from 'lucide-react';
import { Language } from '../types';
import { translations, contactDetails } from '../data/translations';

interface QuickInquiryProps {
  language: Language;
  preselectedNeed?: string;
}

export default function QuickInquiry({ language, preselectedNeed }: QuickInquiryProps) {
  const t = translations[language].inquiry;
  const [selectedNeed, setSelectedNeed] = useState<string>(t.options[0]);
  const [companyName, setCompanyName] = useState<string>('');
  const [extraDetails, setExtraDetails] = useState<string>('');

  useEffect(() => {
    if (preselectedNeed) {
      setSelectedNeed(preselectedNeed);
    }
  }, [preselectedNeed]);

  const generateMessageText = () => {
    const org = companyName.trim() ? ` از شرکت / مجموعه: ${companyName}` : '';
    const details = extraDetails.trim() ? `\nتوضیحات تکمیلی: ${extraDetails}` : '';

    if (language === 'fa') {
      return `سلام جناب مهندس مرعشی زاده${org}\nدرخواست مشاوره و خدمات در زمینه:\n🔹 "${selectedNeed}"${details}\nلطفاً در خصوص بررسی فنی و هماهنگی زمان راهنمایی بفرمایید.`;
    } else {
      return `Hello Mr. Marashi Zadeh${org ? ` from: ${companyName}` : ''},\nI am requesting network engineering consultation regarding:\n🔹 "${selectedNeed}"${extraDetails.trim() ? `\nDetails: ${extraDetails}` : ''}\nPlease let me know your availability for a technical review.`;
    }
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(generateMessageText());
    window.open(`https://wa.me/989307868818?text=${text}`, '_blank');
  };

  const handleSendTelegram = () => {
    const text = encodeURIComponent(generateMessageText());
    window.open(`https://t.me/amirmarashi?text=${text}`, '_blank');
  };

  return (
    <section id="quick-inquiry" className="py-14 sm:py-20 border-b border-[#064E3B]/30 dark:border-[#059669]/40 bg-[#F0F7F3] dark:bg-[#050E09]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-[2px] p-6 sm:p-8 bg-[#FFFFFF] dark:bg-[#0E2017] border-2 border-[#064E3B] dark:border-[#059669] shadow-2xs">
          
          <div className="flex items-center gap-2 px-3 py-1 rounded-[2px] text-xs font-mono font-bold bg-[#F0F7F3] dark:bg-[#0A1710] text-[#064E3B] dark:text-[#A7F3D0] border border-[#064E3B] dark:border-[#059669] mb-3 w-fit">
            <Sparkles className="w-3.5 h-3.5 text-[#064E3B] dark:text-[#34D399]" />
            <span>{language === 'fa' ? 'ابزار آنلاین نیازسنجی' : 'Quick Scope Estimator'}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-[#06261C] dark:text-[#ECFDF5] mb-2">
            {t.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#2D5043] dark:text-[#A7F3D0] mb-6">
            {t.desc}
          </p>

          {/* Need Selector Chips */}
          <div className="space-y-2 mb-6">
            <label className="block text-xs font-mono font-bold text-[#064E3B] dark:text-[#6EE7B7]">
              {language === 'fa' ? '۱. نوع نیاز یا چالش زیرساخت:' : '1. Select Network Requirement:'}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {t.options.map((opt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedNeed(opt)}
                  className={`p-3 text-start rounded-[2px] text-xs sm:text-sm font-semibold transition-all flex items-center justify-between cursor-pointer border ${
                    selectedNeed === opt
                      ? 'bg-[#064E3B] text-white border-[#022C22] dark:bg-[#059669] dark:text-[#022C22] dark:border-[#34D399] shadow-2xs'
                      : 'bg-[#FBFDFB] text-[#06261C] dark:bg-[#0A1710] dark:text-[#D1FAE5] border-[#064E3B]/30 dark:border-[#059669]/40 hover:bg-[#F0F7F3] dark:hover:bg-[#122B1E]'
                  }`}
                >
                  <span>{opt}</span>
                  {selectedNeed === opt && (
                    <Check className="w-4 h-4 text-[#A7F3D0] dark:text-[#022C22] shrink-0 ms-2" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Optional Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-xs font-mono font-bold text-[#064E3B] dark:text-[#6EE7B7] mb-1.5">
                {language === 'fa' ? '۲. نام شرکت / کسب‌وکار (اختیاری):' : '2. Company Name (Optional):'}
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder={t.placeholderCompany}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-[2px] bg-[#FBFDFB] dark:bg-[#0A1710] border border-[#064E3B]/50 dark:border-[#059669] text-[#06261C] dark:text-[#ECFDF5] placeholder-[#5A7C6E] focus:outline-hidden focus:border-[#064E3B] dark:focus:border-[#34D399]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-[#064E3B] dark:text-[#6EE7B7] mb-1.5">
                {language === 'fa' ? '۳. جزئیات کوتاه (تعداد کلاینت، تجهیزات و ...):' : '3. Quick notes (Endpoints, ISP, etc.):'}
              </label>
              <input
                type="text"
                value={extraDetails}
                onChange={(e) => setExtraDetails(e.target.value)}
                placeholder={language === 'fa' ? 'مثال: دارای ۲۰ سیستم و روتر میکروتیک' : 'e.g., 20 endpoints with MikroTik router'}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-[2px] bg-[#FBFDFB] dark:bg-[#0A1710] border border-[#064E3B]/50 dark:border-[#059669] text-[#06261C] dark:text-[#ECFDF5] placeholder-[#5A7C6E] focus:outline-hidden focus:border-[#064E3B] dark:focus:border-[#34D399]"
              />
            </div>
          </div>

          {/* Live Generated Message Preview */}
          <div className="mb-6 p-3.5 rounded-[2px] bg-[#F0F7F3] dark:bg-[#0A1710] border-s-4 border-[#064E3B] dark:border-[#059669] border-t border-b border-e border-[#064E3B]/30 dark:border-[#059669]/40">
            <div className="text-[10px] font-mono uppercase text-[#064E3B] dark:text-[#6EE7B7] font-bold mb-1">
              {language === 'fa' ? 'پیش‌نمایش پیام ارسالی:' : 'Generated Message Preview:'}
            </div>
            <p className="text-xs font-mono text-[#06261C] dark:text-[#D1FAE5] whitespace-pre-line leading-relaxed">
              {generateMessageText()}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleSendWhatsApp}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold rounded-[2px] text-white bg-[#064E3B] hover:bg-[#022C22] dark:bg-[#059669] dark:text-[#022C22] dark:hover:bg-[#047857] transition-colors border border-[#022C22] dark:border-[#34D399] shadow-2xs cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#A7F3D0] dark:text-[#022C22]" />
              <span>{t.btnSubmitWhatsapp}</span>
            </button>

            <button
              onClick={handleSendTelegram}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold rounded-[2px] text-white bg-[#022C22] hover:bg-[#011B15] dark:bg-[#064E3B] dark:hover:bg-[#043C2E] transition-colors border border-[#011B15] shadow-2xs cursor-pointer"
            >
              <Send className="w-4 h-4 text-[#6EE7B7]" />
              <span>{t.btnSubmitTelegram}</span>
            </button>

            <a
              href={`tel:${contactDetails.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold rounded-[2px] text-[#064E3B] dark:text-[#ECFDF5] bg-[#FBFDFB] dark:bg-[#0A1710] hover:bg-[#F0F7F3] dark:hover:bg-[#122B1E] border border-[#064E3B] dark:border-[#059669] transition-colors cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#064E3B] dark:text-[#34D399]" />
              <span>{t.btnDirectCall} ({contactDetails.phone})</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

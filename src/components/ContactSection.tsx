import { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageSquare,
  Send,
  Mail,
  Linkedin,
  Copy,
  Check,
  Download,
  PhoneCall,
  ExternalLink,
} from 'lucide-react';
import { Language } from '../types';
import { translations, contactDetails } from '../data/translations';
import { downloadVCard } from '../utils/vcard';

interface ContactSectionProps {
  language: Language;
}

export default function ContactSection({ language }: ContactSectionProps) {
  const t = translations[language].contactSection;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactDetails.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contactDetails.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FBFDFB] dark:bg-[#050E09] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header CTA */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] text-xs font-semibold bg-[#F0F7F3] dark:bg-[#0E2017] text-[#064E3B] dark:text-[#A7F3D0] border border-[#064E3B]/30 dark:border-[#059669] mb-4">
            <PhoneCall className="w-3.5 h-3.5 text-[#064E3B] dark:text-[#34D399]" />
            <span>{t.tag}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#06261C] dark:text-[#ECFDF5] tracking-tight leading-tight mb-4">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg text-[#2D5043] dark:text-[#D1FAE5] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          
          {/* Card 1: Phone & WhatsApp */}
          <div className="p-6 rounded-[4px] bg-[#FFFFFF] dark:bg-[#0E2017] border-t-4 border-t-[#064E3B] dark:border-t-[#059669] border-r border-b border-l border-[#064E3B]/20 dark:border-[#059669]/30 shadow-2xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-[4px] bg-[#F0F7F3] dark:bg-[#0A1710] text-[#064E3B] dark:text-[#34D399] border border-[#064E3B]/30 dark:border-[#059669]/40">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#064E3B] dark:text-[#A7F3D0]">
                  {t.infoTitles.phone}
                </span>
                <div className="text-lg font-bold text-[#06261C] dark:text-[#ECFDF5] font-mono tracking-normal" dir="ltr">
                  <a href={`tel:${contactDetails.phoneRaw}`} className="hover:text-[#064E3B] dark:hover:text-[#34D399] transition-colors">
                    {contactDetails.phoneFormatted}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[#064E3B]/15 dark:border-[#059669]/25">
              <a
                href={`tel:${contactDetails.phoneRaw}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] text-xs font-bold bg-[#064E3B] text-white hover:bg-[#022C22] dark:bg-[#059669] dark:text-[#022C22] dark:hover:bg-[#047857] transition-colors cursor-pointer border border-[#022C22] dark:border-[#34D399]"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#6EE7B7] dark:text-[#022C22]" />
                <span>{t.directActions.call}</span>
              </a>

              <a
                href={contactDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] text-xs font-bold bg-[#F0F7F3] dark:bg-[#0A1710] text-[#064E3B] dark:text-[#34D399] border border-[#064E3B]/40 dark:border-[#059669] hover:bg-[#064E3B] hover:text-white dark:hover:bg-[#059669] dark:hover:text-[#022C22] transition-colors cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{t.directActions.whatsapp}</span>
              </a>

              <button
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-[4px] text-xs text-[#064E3B] dark:text-[#A7F3D0] bg-[#F0F7F3] dark:bg-[#0A1710] border border-[#064E3B]/30 dark:border-[#059669]/40 hover:bg-[#E1EFE7] transition-colors cursor-pointer"
                title="Copy phone"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-[#064E3B] dark:text-[#34D399]" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Card 2: Telegram */}
          <div className="p-6 rounded-[4px] bg-[#FFFFFF] dark:bg-[#0E2017] border-t-4 border-t-[#064E3B] dark:border-t-[#059669] border-r border-b border-l border-[#064E3B]/20 dark:border-[#059669]/30 shadow-2xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-[4px] bg-[#F0F7F3] dark:bg-[#0A1710] text-[#064E3B] dark:text-[#34D399] border border-[#064E3B]/30 dark:border-[#059669]/40">
                <Send className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#064E3B] dark:text-[#A7F3D0]">
                  {t.infoTitles.telegram}
                </span>
                <div className="text-lg font-bold text-[#06261C] dark:text-[#ECFDF5] ltr text-left">
                  {contactDetails.telegram}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-[#064E3B]/15 dark:border-[#059669]/25">
              <a
                href={contactDetails.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[4px] text-xs font-bold bg-[#064E3B] text-white hover:bg-[#022C22] dark:bg-[#059669] dark:text-[#022C22] dark:hover:bg-[#047857] transition-colors cursor-pointer border border-[#022C22] dark:border-[#34D399]"
              >
                <Send className="w-3.5 h-3.5 text-[#6EE7B7] dark:text-[#022C22]" />
                <span>{t.directActions.telegram}</span>
                <ExternalLink className="w-3 h-3 ms-0.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="p-6 rounded-[4px] bg-[#FFFFFF] dark:bg-[#0E2017] border-t-4 border-t-[#064E3B] dark:border-t-[#059669] border-r border-b border-l border-[#064E3B]/20 dark:border-[#059669]/30 shadow-2xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-[4px] bg-[#F0F7F3] dark:bg-[#0A1710] text-[#064E3B] dark:text-[#34D399] border border-[#064E3B]/30 dark:border-[#059669]/40">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="text-xs font-semibold text-[#064E3B] dark:text-[#A7F3D0]">
                  {t.infoTitles.email}
                </span>
                <div className="text-sm sm:text-base font-bold text-[#06261C] dark:text-[#ECFDF5] truncate ltr text-left">
                  {contactDetails.email}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-[#064E3B]/15 dark:border-[#059669]/25">
              <a
                href={`mailto:${contactDetails.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] text-xs font-bold bg-[#F0F7F3] dark:bg-[#0A1710] text-[#064E3B] dark:text-[#34D399] hover:bg-[#064E3B] hover:text-white dark:hover:bg-[#059669] dark:hover:text-[#022C22] transition-colors border border-[#064E3B]/40 dark:border-[#059669] cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{language === 'fa' ? 'ارسال ایمیل' : 'Send Email'}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-[4px] text-xs font-semibold bg-[#F0F7F3] dark:bg-[#0A1710] text-[#064E3B] dark:text-[#34D399] hover:bg-[#E1EFE7] transition-colors border border-[#064E3B]/30 dark:border-[#059669]/40 cursor-pointer"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#064E3B] dark:text-[#34D399]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? t.directActions.copied : t.directActions.copyEmail}</span>
              </button>
            </div>
          </div>

          {/* Card 4: LinkedIn & Location */}
          <div className="p-6 rounded-[4px] bg-[#FFFFFF] dark:bg-[#0E2017] border-t-4 border-t-[#064E3B] dark:border-t-[#059669] border-r border-b border-l border-[#064E3B]/20 dark:border-[#059669]/30 shadow-2xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-[4px] bg-[#F0F7F3] dark:bg-[#0A1710] text-[#064E3B] dark:text-[#34D399] border border-[#064E3B]/30 dark:border-[#059669]/40">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#064E3B] dark:text-[#A7F3D0]">
                  {t.infoTitles.linkedin}
                </span>
                <div className="text-sm sm:text-base font-bold text-[#06261C] dark:text-[#ECFDF5] ltr text-left">
                  {contactDetails.linkedin}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2 pt-3 border-t border-[#064E3B]/15 dark:border-[#059669]/25">
              <a
                href={contactDetails.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] text-xs font-bold bg-[#F0F7F3] dark:bg-[#0A1710] text-[#064E3B] dark:text-[#34D399] hover:bg-[#064E3B] hover:text-white dark:hover:bg-[#059669] dark:hover:text-[#022C22] transition-colors border border-[#064E3B]/40 dark:border-[#059669] cursor-pointer"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>{language === 'fa' ? 'پروفایل لینکدین' : 'LinkedIn'}</span>
                <ExternalLink className="w-3 h-3 ms-0.5" />
              </a>

              <button
                onClick={downloadVCard}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] text-xs font-bold bg-[#064E3B] dark:bg-[#059669] text-white dark:text-[#022C22] hover:bg-[#022C22] dark:hover:bg-[#047857] transition-colors border border-[#022C22] dark:border-[#34D399] cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#6EE7B7] dark:text-[#022C22]" />
                <span>{t.directActions.saveVcard}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Location Banner */}
        <div className="p-4 sm:p-5 rounded-[4px] bg-[#F0F7F3] dark:bg-[#0A1710] border-s-4 border-[#064E3B] dark:border-[#059669] border-t border-r border-b border-[#064E3B]/20 dark:border-[#059669]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-[4px] bg-[#FFFFFF] dark:bg-[#0E2017] text-[#064E3B] dark:text-[#34D399] border border-[#064E3B]/20">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#064E3B] dark:text-[#A7F3D0]">
                {t.infoTitles.location}
              </div>
              <div className="text-sm font-bold text-[#06261C] dark:text-[#ECFDF5]">
                {language === 'fa' ? contactDetails.locationFa : contactDetails.locationEn}
              </div>
            </div>
          </div>

          <div className="text-xs font-bold text-[#064E3B] dark:text-[#34D399] bg-[#FFFFFF] dark:bg-[#0E2017] px-3.5 py-1.5 rounded-[4px] border border-[#064E3B]/25 dark:border-[#059669]/35">
            {language === 'fa' ? 'پشتیبانی حضوری در خوزستان و آنلاین سراسر کشور' : 'On-Site in Khuzestan & Remote Nationwide'}
          </div>
        </div>

      </div>
    </section>
  );
}

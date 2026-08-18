import { contactDetails } from '../data/translations';

export function downloadVCard() {
  const vcard = `BEGIN:VCARD
VERSION:3.0
N:Marashi Zadeh;Seyed Amir Hossein;;;
FN:Seyed Amir Hossein Marashi Zadeh
ORG:Network & IT Infrastructure Engineering
TITLE:Network & IT Infrastructure Engineer
TEL;TYPE=CELL,VOICE:${contactDetails.phoneRaw}
EMAIL;TYPE=INTERNET,PREF:${contactDetails.email}
URL:${contactDetails.linkedinUrl}
ADR;TYPE=WORK:;;Ahvaz;Khuzestan;;Iran
NOTE:Network Engineer | Cisco, MikroTik, VoIP, Linux, Virtualization
END:VCARD`;

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'AmirHossein_Marashi_Network_Engineer.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

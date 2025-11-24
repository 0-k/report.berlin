import { AlertCircle, Phone } from 'lucide-react';
import { Language } from '../types';

interface EmergencyBannerProps {
  lang: Language;
}

export default function EmergencyBanner({ lang }: EmergencyBannerProps) {
  return (
    <div className="mb-8">
      <div className="bg-red-600 rounded-lg p-6 text-white shadow-xl border-4 border-red-700">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="w-10 h-10 flex-shrink-0 animate-pulse" />
          <div>
            <h2 className="text-3xl font-bold">
              {lang === 'de' ? '🚨 NOTFALL?' : '🚨 EMERGENCY?'}
            </h2>
            <p className="text-xl mt-1">
              {lang === 'de'
                ? 'Diese Seite ist für nicht-dringende Anliegen. Bei Notfällen:'
                : 'This page is for non-emergency issues. In emergencies:'}
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="tel:112"
            className="bg-white text-red-600 p-6 rounded-lg hover:bg-gray-100 transition-colors text-center shadow-lg"
          >
            <Phone className="w-8 h-8 mx-auto mb-2" />
            <div className="text-3xl font-bold mb-1">112</div>
            <div className="text-lg font-semibold">
              {lang === 'de' ? 'Feuerwehr & Rettungsdienst' : 'Fire & Ambulance'}
            </div>
            <div className="text-sm mt-1">
              {lang === 'de' ? 'Bei Lebensgefahr' : 'Life-threatening situations'}
            </div>
          </a>
          <a
            href="tel:110"
            className="bg-white text-red-600 p-6 rounded-lg hover:bg-gray-100 transition-colors text-center shadow-lg"
          >
            <Phone className="w-8 h-8 mx-auto mb-2" />
            <div className="text-3xl font-bold mb-1">110</div>
            <div className="text-lg font-semibold">{lang === 'de' ? 'Polizei' : 'Police'}</div>
            <div className="text-sm mt-1">
              {lang === 'de' ? 'Straftaten & Gefahren' : 'Crimes & Dangerous Situations'}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

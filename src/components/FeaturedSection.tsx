import { MapPin } from 'lucide-react';
import { Language, Content } from '../types';

interface FeaturedSectionProps {
  lang: Language;
  t: Content;
}

export default function FeaturedSection({ lang, t }: FeaturedSectionProps) {
  return (
    <div className="mb-8">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <MapPin className="w-7 h-7" />
          {t.categories.featured}
        </h2>
        <div className="bg-white rounded-lg p-5 text-gray-900">
          <h3 className="font-bold text-xl mb-2">{t.services.ordnungsamt.name}</h3>
          <p className="text-gray-600 mb-4">{t.services.ordnungsamt.desc}</p>
          <p className="text-sm text-gray-700 mb-4 italic">
            {lang === 'de'
              ? 'Das Ordnungsamt-Portal ist eine zentrale Anlaufstelle für viele Meldungen in Berlin. Viele offizielle Stellen verlinken hierher.'
              : 'The Public Order Office portal is a central hub for many reports in Berlin. Many official sites link here.'}
          </p>
          <a
            href={t.services.ordnungsamt.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${lang === 'de' ? 'Jetzt melden bei' : 'Report now to'} ${t.services.ordnungsamt.name}`}
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow"
          >
            {lang === 'de' ? 'Jetzt melden →' : 'Report now →'}
          </a>
        </div>
      </div>
    </div>
  );
}

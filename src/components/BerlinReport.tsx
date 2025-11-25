import { useState } from 'react';
import {
  Train,
  Droplet,
  Zap,
  Phone,
  MapPin,
  Bus,
  Wrench,
  MessageCircle,
  Shield,
  FileText,
  Building,
  AlertCircle,
} from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';
import ServiceCard from './ServiceCard';
import EmergencyBanner from './EmergencyBanner';
import FeaturedSection from './FeaturedSection';

export default function BerlinReport() {
  const [lang, setLang] = useState<Language>('de');

  const t = content[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{t.title}</h1>
          <p className="text-gray-600 mb-4">{t.subtitle}</p>
          <button
            onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
            className="px-4 py-2 bg-white border-2 border-gray-300 rounded-lg hover:border-blue-500 transition-colors font-medium"
          >
            {t.toggleLang}
          </button>
        </div>

        {/* Emergency Banner */}
        <EmergencyBanner lang={lang} />

        {/* Featured: Ordnungsamt */}
        <FeaturedSection lang={lang} t={t} />

        {/* Infrastructure */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="w-7 h-7 text-blue-600" />
            {t.categories.infrastructure}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ServiceCard service={t.services.ordnungsamt} icon={Wrench} lang={lang} />
            <ServiceCard service={t.services.verkehr} icon={MapPin} lang={lang} />
            <ServiceCard service={t.services.signalanlagen} icon={MapPin} lang={lang} />
            <ServiceCard service={t.services.wegli} icon={AlertCircle} lang={lang} />
            <ServiceCard service={t.services.polizei} icon={FileText} lang={lang} />
            <ServiceCard service={t.services.polizeiabschnitt} icon={Shield} lang={lang} />
            <ServiceCard service={t.services.bussgeldstelle} icon={FileText} lang={lang} />
            <ServiceCard service={t.services.polizeihinweis} icon={Shield} lang={lang} />
          </div>
        </div>

        {/* Transport */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Train className="w-7 h-7 text-blue-600" />
            {t.categories.transport}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ServiceCard service={t.services.bvg} icon={Bus} lang={lang} />
            <ServiceCard service={t.services.bvgchatbot} icon={MessageCircle} lang={lang} />
            <ServiceCard service={t.services.brokenlifts} icon={Wrench} lang={lang} />
            <ServiceCard service={t.services.sbahn} icon={Train} lang={lang} />
            <ServiceCard service={t.services.sbahnwhatsapp} icon={MessageCircle} lang={lang} />
            <ServiceCard service={t.services.sbahnnotfall} icon={Phone} lang={lang} />
            <ServiceCard service={t.services.bahn} icon={Train} lang={lang} />
          </div>
        </div>

        {/* Utilities */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Droplet className="w-7 h-7 text-blue-600" />
            {t.categories.utilities}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ServiceCard service={t.services.wasser} icon={Droplet} lang={lang} />
            <ServiceCard service={t.services.strom} icon={Zap} lang={lang} />
            <ServiceCard service={t.services.strombeleuchtung} icon={Zap} lang={lang} />
            <ServiceCard service={t.services.bew} icon={Zap} lang={lang} />
            <ServiceCard service={t.services.gas} icon={Wrench} lang={lang} />
          </div>
        </div>

        {/* Housing */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Building className="w-7 h-7 text-blue-600" />
            {t.categories.housing}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ServiceCard service={t.services.degewo} icon={Building} lang={lang} />
            <ServiceCard service={t.services.gewobag} icon={Building} lang={lang} />
            <ServiceCard service={t.services.howoge} icon={Building} lang={lang} />
            <ServiceCard service={t.services.vonovia} icon={Building} lang={lang} />
            <ServiceCard service={t.services.buo} icon={Building} lang={lang} />
          </div>
        </div>

        {/* Other Services */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Wrench className="w-7 h-7 text-blue-600" />
            {t.categories.other}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ServiceCard service={t.services.bereitschaftsdienst} icon={Phone} lang={lang} />
            <ServiceCard service={t.services.datenschutz} icon={Shield} lang={lang} />
            <ServiceCard service={t.services.verbraucherschutz} icon={Shield} lang={lang} />
            <ServiceCard service={t.services.lads} icon={Shield} lang={lang} />
            <ServiceCard service={t.services.ladsmeldung} icon={Shield} lang={lang} />
            <ServiceCard service={t.services.aekb} icon={Shield} lang={lang} />
            <ServiceCard service={t.services.rak} icon={Shield} lang={lang} />
            <ServiceCard service={t.services.ihk} icon={Wrench} lang={lang} />
            <ServiceCard service={t.services.machmeldung} icon={MapPin} lang={lang} />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-12">
          <p>
            {lang === 'de'
              ? 'Keine offizielle Seite. Alle Angaben ohne Gewähr.'
              : 'Not an official page. All information without guarantee.'}
          </p>
        </div>
      </div>
    </div>
  );
}

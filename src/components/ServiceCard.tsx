import { LucideIcon } from 'lucide-react';
import { Service, Language } from '../types';

interface ServiceCardProps {
  service: Service;
  icon: LucideIcon;
  lang: Language;
  emergency?: boolean;
}

export default function ServiceCard({
  service,
  icon: Icon,
  lang,
  emergency = false,
}: ServiceCardProps) {
  return (
    <div
      className={`p-4 rounded-lg border-2 ${
        emergency ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white'
      } hover:shadow-md transition-shadow`}
    >
      <div className="flex items-start gap-3">
        <Icon
          className={`w-6 h-6 mt-1 flex-shrink-0 ${
            emergency ? 'text-red-600' : 'text-blue-600'
          }`}
        />
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1">{service.name}</h3>
          <p className="text-gray-600 text-sm mb-3">{service.desc}</p>
          {service.phone && (
            <a
              href={`tel:${service.phone}`}
              aria-label={`${lang === 'de' ? 'Anrufen' : 'Call'} ${service.name}: ${service.phone}`}
              className={`inline-block px-4 py-2 rounded font-medium ${
                emergency
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              } transition-colors`}
            >
              {lang === 'de' ? 'Anrufen' : 'Call'}: {service.phone}
            </a>
          )}
          {service.url && (
            <a
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${lang === 'de' ? 'Website öffnen für' : 'Open website for'} ${service.name}`}
              className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-colors"
            >
              {lang === 'de' ? 'Website öffnen' : 'Open Website'} →
            </a>
          )}
          {service.emergency && (
            <p className="text-red-700 font-medium mt-2 text-sm">{service.emergency}</p>
          )}
        </div>
      </div>
    </div>
  );
}

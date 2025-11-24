import React, { useState } from 'react';
import { AlertCircle, Train, Droplet, Zap, Phone, MapPin, Bus, Wrench, MessageCircle, Home, Shield, Bike, FileText, Building } from 'lucide-react';

export default function BerlinReport() {
  const [lang, setLang] = useState('de');

  const content = {
    de: {
      title: 'Probleme in Berlin melden',
      subtitle: 'Übersicht der wichtigsten Meldestellen',
      toggleLang: 'English',
      categories: {
        emergency: 'Notfälle',
        featured: '⭐ Empfohlen',
        infrastructure: 'Stadt & Ordnung',
        transport: 'Öffentlicher Verkehr',
        utilities: 'Versorgung',
        housing: 'Wohnen',
        other: 'Weitere Meldestellen'
      },
      services: {
        ordnungsamt: {
          name: 'Ordnungsamt Berlin (Online)',
          desc: 'Ruhestörung, wilder Müll, Falschparker, defekte Straßenbeleuchtung, kaputte Spielplätze, Schlaglöcher, Graffiti, illegale Müllentsorgung. Mit Foto-Upload und Standortangabe.',
          url: 'https://ordnungsamt.berlin.de/frontend/meldungNeu/wo'
        },
        verkehr: {
          name: 'Verkehrslenkung Berlin',
          desc: 'Straßenschäden, Verkehrsschilder',
          url: 'https://www.berlin.de/sen/uvk/verkehr/verkehrsmanagement/'
        },
        signalanlagen: {
          name: 'Signalanlagen (Ampeln)',
          desc: 'Ampelstörungen, defekte Verkehrssignale',
          url: 'https://infrasignal.de/stoerung-melden-modal'
        },
        wegli: {
          name: 'weg.li - Falschparker melden',
          desc: 'Gehweg-, Radweg-Blockierer und Falschparker mit Foto melden. App macht Foto, erfasst Kennzeichen und Standort, leitet zur Bußgeldstelle weiter.',
          url: 'https://www.weg.li'
        },
        bvg: {
          name: 'BVG',
          desc: 'U-Bahn, Tram, Bus - Verspätungen, Sauberkeit, defekte Anzeigen',
          url: 'https://www.bvg.de/de/service-und-kontakt/kontakt'
        },
        bvgchatbot: {
          name: 'BVG Chatbot',
          desc: 'Direkter Chat-Service für BVG-Anliegen',
          url: 'https://www.bvg.de/de/service-und-kontakt/chatbot'
        },
        brokenlifts: {
          name: 'BrokenLifts.org',
          desc: 'Defekte Aufzüge in U-Bahn und S-Bahn Stationen melden. Wichtig für Menschen mit Mobilitätseinschränkungen, Rollstuhlfahrer, Eltern mit Kinderwagen.',
          url: 'https://www.brokenlifts.org'
        },
        sbahn: {
          name: 'S-Bahn Berlin',
          desc: 'S-Bahn Störungen, Bahnhöfe, Sauberkeit',
          url: 'https://sbahn.berlin/fahrgastservice/kontakt/'
        },
        sbahnwhatsapp: {
          name: 'S-Bahn Sauberkeit (WhatsApp)',
          desc: 'Verschmutzungen direkt per WhatsApp melden',
          url: 'https://sbahn.berlin/das-unternehmen/sicherheit-sauberkeit/sauberkeit/whatsapp-schmutzmeldung/'
        },
        sbahnnotfall: {
          name: 'S-Bahn Notruf & Hotlines',
          desc: 'Notrufsäulen, Sicherheit, Fundservice',
          url: 'https://sbahn.berlin/fahren/hilfe-fuer-unterwegs/notruf-hotlines/'
        },
        bahn: {
          name: 'Deutsche Bahn',
          desc: 'Fernverkehr, Regionalverkehr, Bahnhöfe',
          url: 'https://www.bahn.de/service/kontakt'
        },
        wasser: {
          name: 'Berliner Wasserbetriebe',
          desc: 'Wasserrohrbruch, Wasserdruck, Abwasser',
          url: 'https://www.bwb.de/de/stoerung-melden.php'
        },
        strom: {
          name: 'Stromnetz Berlin - Stromausfall',
          desc: 'Stromausfall, Störungen im Stromnetz',
          url: 'https://www.stromnetz.berlin/technik-und-innovationen/storungsmanagement/'
        },
        strombeleuchtung: {
          name: 'Stromnetz Berlin - Beleuchtung',
          desc: 'Defekte Straßenbeleuchtung',
          url: 'https://www.stromnetz.berlin/technik-und-innovationen/stoerungsmanagement-beleuchtung/'
        },
        bew: {
          name: 'Berliner Energiewerke (BEW)',
          desc: 'Heizung, Fernwärme, Energieversorgung',
          url: 'https://www.bew.berlin/stoerungen/'
        },
        gas: {
          name: 'NBB Netzgesellschaft (Gas)',
          desc: 'Gasgeruch, Gasstörungen',
          url: 'https://www.nbb-netzgesellschaft.de/ueber-die-nbb/entstoerungsdienst/richtiges-verhalten-im-fall-von-stoerungen/',
          emergency: 'Notfall Gasgeruch: 030 6199 6199'
        },
        polizei: {
          name: 'Internetwache Polizei',
          desc: 'Online-Anzeige bei der Berliner Polizei. Für Straftaten wie Diebstahl, Betrug, Sachbeschädigung (wenn keine Gefahr besteht).',
          url: 'https://www.internetwache-polizei-berlin.de'
        },
        polizeiabschnitt: {
          name: 'Polizei-Abschnitt finden',
          desc: 'Zuständigen Polizei-Abschnitt für Ihr Gebiet finden. Für persönliche Beratung, Anzeigenerstattung vor Ort.',
          url: 'https://www.berlin.de/polizei/service/so-erreichen-sie-uns/abschnittssuche/'
        },
        bussgeldstelle: {
          name: 'Bußgeldstelle - Anzeigenerstattung',
          desc: 'Verkehrsverstöße und Ordnungswidrigkeiten anzeigen (z.B. Falschparker, Geschwindigkeitsüberschreitungen). Wird auch von weg.li genutzt.',
          url: 'https://www.berlin.de/polizei/aufgaben/bussgeldstelle/anzeigenerstattung/'
        },
        polizeihinweis: {
          name: 'Polizei - Anonymer Hinweis',
          desc: 'Anonyme Hinweise an die Polizei Berlin. Wenn Sie Informationen zu Straftaten haben, aber anonym bleiben möchten.',
          url: 'https://www.bkms-system.net/bkwebanon/report/clientInfo?cin=P5Xcl9&c=-1&language=ger'
        },
        datenschutz: {
          name: 'Datenschutzbeschwerde',
          desc: 'Beschwerde beim Berliner Datenschutzbeauftragten',
          url: 'https://www.datenschutz-berlin.de/buergerinnen-und-buerger/beschwerde/einreichen-einer-beschwerde/'
        },
        verbraucherschutz: {
          name: 'Verbraucherzentrale',
          desc: 'Verbraucherbeschwerde einreichen',
          url: 'https://www.vzbv.de/verbraucher/beschwerde-einreichen'
        },
        lads: {
          name: 'Antidiskriminierungsstelle',
          desc: 'Beratung und Meldung bei Diskriminierung',
          url: 'https://www.berlin.de/sen/lads/beratung/'
        },
        ladsmeldung: {
          name: 'Diskriminierung melden',
          desc: 'Meldestellen für Diskriminierung in Berlin',
          url: 'https://www.berlin.de/sen/lads/beratung/meldestellen-fuer-diskriminierung-1498255.php'
        },
        aekb: {
          name: 'Ärztekammer - Patientenbeschwerden',
          desc: 'Beschwerden über Ärzte und medizinische Behandlung',
          url: 'https://www.aekb.de/patient-innen/patientenbeschwerden'
        },
        rak: {
          name: 'Rechtsanwaltskammer - Beschwerden',
          desc: 'Beschwerden über Rechtsanwälte',
          url: 'https://www.rak-berlin.de/anwaltssuche/beschwerdeverfahren/'
        },
        ihk: {
          name: 'IHK - Ausbildungsprobleme',
          desc: 'Konflikte und Probleme in der Ausbildung melden',
          url: 'https://www.ihk.de/berlin/ausbildung/infos-fuer-ausbildungsbetriebe/rund-ums-ausbildungsverhaeltnis/konflikte-in-der-ausbildung/problem-melden-5776624'
        },
        machmeldung: {
          name: 'mach-meldung.org',
          desc: 'Übersicht aller Meldestellen in Berlin',
          url: 'https://www.mach-meldung.org/laender/meldestellen-berlin/'
        },
        bereitschaftsdienst: {
          name: 'Ärztlicher Bereitschaftsdienst 116117',
          desc: 'Ärztliche Hilfe außerhalb der Sprechzeiten (kein Notfall). NICHT bei Lebensgefahr! Bei Notfällen: 112',
          phone: '116117'
        },
        degewo: {
          name: 'Degewo',
          desc: 'Kundenservice für Degewo-Mieter (nur für Mieter dieser Wohnungsgesellschaft)',
          url: 'https://www.degewo.de/wohnen-service/zentrale-kundenberatung'
        },
        gewobag: {
          name: 'Gewobag',
          desc: 'Kontakt für Gewobag-Mieter (nur für Mieter dieser Wohnungsgesellschaft)',
          url: 'https://www.gewobag.de/ueber-uns/kontakte/fuer-unsere-mieter/'
        },
        howoge: {
          name: 'Howoge',
          desc: 'Mieterservice Howoge (nur für Mieter dieser Wohnungsgesellschaft)',
          url: 'https://www.howoge.de/mieterservice/kontakt.html'
        },
        vonovia: {
          name: 'Vonovia',
          desc: 'Kundenservice Vonovia (nur für Mieter dieser Wohnungsgesellschaft)',
          url: 'https://www.vonovia.de/mein-zuhause/kundenservice#kontakt'
        },
        buo: {
          name: 'Berliner Bau- und Wohnungsgenossenschaft',
          desc: 'Service für BUO-Mieter (nur für Mieter dieser Genossenschaft)',
          url: 'https://buo.de/service/mieter/'
        },
        emergency112: {
          name: 'Notruf 112',
          desc: 'Feuerwehr und Rettungsdienst - bei Lebensgefahr',
          phone: '112'
        },
        emergency110: {
          name: 'Polizei 110',
          desc: 'Bei Straftaten und Gefahrensituationen',
          phone: '110'
        }
      }
    },
    en: {
      title: 'Report Problems in Berlin',
      subtitle: 'Overview of the most important reporting services',
      toggleLang: 'Deutsch',
      categories: {
        emergency: 'Emergencies',
        featured: '⭐ Featured',
        infrastructure: 'City & Public Order',
        transport: 'Public Transport',
        utilities: 'Utilities',
        housing: 'Housing',
        other: 'Other Services'
      },
      services: {
        ordnungsamt: {
          name: 'Berlin Public Order Office (Online)',
          desc: 'Noise complaints, illegal dumping, parking violations, broken street lights, damaged playgrounds, potholes, graffiti. Upload photos and location.',
          url: 'https://ordnungsamt.berlin.de/frontend/meldungNeu/wo'
        },
        verkehr: {
          name: 'Berlin Traffic Management',
          desc: 'Road damage, traffic signs',
          url: 'https://www.berlin.de/sen/uvk/verkehr/verkehrsmanagement/'
        },
        signalanlagen: {
          name: 'Traffic Signals',
          desc: 'Traffic light malfunctions, broken signals',
          url: 'https://infrasignal.de/stoerung-melden-modal'
        },
        wegli: {
          name: 'weg.li - Report Parking Violations',
          desc: 'Report sidewalk/bike lane blockers with photo evidence. App captures photo, license plate, and location, forwards to traffic violations office.',
          url: 'https://www.weg.li'
        },
        bvg: {
          name: 'BVG',
          desc: 'Metro, tram, bus - delays, cleanliness, broken displays',
          url: 'https://www.bvg.de/en/service-and-contact/contact'
        },
        bvgchatbot: {
          name: 'BVG Chatbot',
          desc: 'Direct chat service for BVG inquiries',
          url: 'https://www.bvg.de/de/service-und-kontakt/chatbot'
        },
        brokenlifts: {
          name: 'BrokenLifts.org',
          desc: 'Report broken elevators in metro and S-Bahn stations. Critical for wheelchair users, people with mobility issues, and parents with strollers.',
          url: 'https://www.brokenlifts.org'
        },
        sbahn: {
          name: 'S-Bahn Berlin',
          desc: 'S-Bahn disruptions, stations, cleanliness',
          url: 'https://sbahn.berlin/en/passengers/customer-service/contact/'
        },
        sbahnwhatsapp: {
          name: 'S-Bahn Cleanliness (WhatsApp)',
          desc: 'Report dirt and mess directly via WhatsApp',
          url: 'https://sbahn.berlin/das-unternehmen/sicherheit-sauberkeit/sauberkeit/whatsapp-schmutzmeldung/'
        },
        sbahnnotfall: {
          name: 'S-Bahn Emergency & Hotlines',
          desc: 'Emergency call boxes, security, lost and found',
          url: 'https://sbahn.berlin/fahren/hilfe-fuer-unterwegs/notruf-hotlines/'
        },
        bahn: {
          name: 'Deutsche Bahn',
          desc: 'Long-distance, regional trains, stations',
          url: 'https://www.bahn.com/en/contact'
        },
        wasser: {
          name: 'Berlin Water Works',
          desc: 'Water pipe burst, water pressure, sewage',
          url: 'https://www.bwb.de/de/stoerung-melden.php'
        },
        strom: {
          name: 'Stromnetz Berlin - Power Outage',
          desc: 'Power outages, electricity grid disruptions',
          url: 'https://www.stromnetz.berlin/technik-und-innovationen/storungsmanagement/'
        },
        strombeleuchtung: {
          name: 'Stromnetz Berlin - Street Lighting',
          desc: 'Broken street lights',
          url: 'https://www.stromnetz.berlin/technik-und-innovationen/stoerungsmanagement-beleuchtung/'
        },
        bew: {
          name: 'Berlin Energy Works (BEW)',
          desc: 'Heating, district heating, energy supply',
          url: 'https://www.bew.berlin/stoerungen/'
        },
        gas: {
          name: 'NBB Network Company (Gas)',
          desc: 'Gas smell, gas disruptions',
          url: 'https://www.nbb-netzgesellschaft.de/ueber-die-nbb/entstoerungsdienst/richtiges-verhalten-im-fall-von-stoerungen/',
          emergency: 'Gas emergency: 030 6199 6199'
        },
        polizei: {
          name: 'Police Online Station',
          desc: 'File online reports with Berlin Police. For crimes like theft, fraud, property damage (when no immediate danger).',
          url: 'https://www.internetwache-polizei-berlin.de'
        },
        polizeiabschnitt: {
          name: 'Find Police Precinct',
          desc: 'Find your local police precinct. For in-person advice and filing reports at the station.',
          url: 'https://www.berlin.de/polizei/service/so-erreichen-sie-uns/abschnittssuche/'
        },
        bussgeldstelle: {
          name: 'Traffic Violations Office',
          desc: 'Report traffic violations and administrative offenses (e.g. illegal parking, speeding). Used by weg.li app.',
          url: 'https://www.berlin.de/polizei/aufgaben/bussgeldstelle/anzeigenerstattung/'
        },
        polizeihinweis: {
          name: 'Police - Anonymous Tip',
          desc: 'Submit anonymous tips to Berlin Police. When you have information about crimes but want to remain anonymous.',
          url: 'https://www.bkms-system.net/bkwebanon/report/clientInfo?cin=P5Xcl9&c=-1&language=ger'
        },
        datenschutz: {
          name: 'Data Protection Complaint',
          desc: 'File complaint with Berlin Data Protection Officer',
          url: 'https://www.datenschutz-berlin.de/buergerinnen-und-buerger/beschwerde/einreichen-einer-beschwerde/'
        },
        verbraucherschutz: {
          name: 'Consumer Protection',
          desc: 'File consumer complaint',
          url: 'https://www.vzbv.de/verbraucher/beschwerde-einreichen'
        },
        lads: {
          name: 'Anti-Discrimination Office',
          desc: 'Advice and reporting for discrimination',
          url: 'https://www.berlin.de/sen/lads/beratung/'
        },
        ladsmeldung: {
          name: 'Report Discrimination',
          desc: 'Discrimination reporting centers in Berlin',
          url: 'https://www.berlin.de/sen/lads/beratung/meldestellen-fuer-diskriminierung-1498255.php'
        },
        aekb: {
          name: 'Medical Chamber - Patient Complaints',
          desc: 'Complaints about doctors and medical treatment',
          url: 'https://www.aekb.de/patient-innen/patientenbeschwerden'
        },
        rak: {
          name: 'Bar Association - Complaints',
          desc: 'Complaints about lawyers',
          url: 'https://www.rak-berlin.de/anwaltssuche/beschwerdeverfahren/'
        },
        ihk: {
          name: 'Chamber of Commerce - Apprenticeship Issues',
          desc: 'Report conflicts and problems in vocational training',
          url: 'https://www.ihk.de/berlin/ausbildung/infos-fuer-ausbildungsbetriebe/rund-ums-ausbildungsverhaeltnis/konflikte-in-der-ausbildung/problem-melden-5776624'
        },
        machmeldung: {
          name: 'mach-meldung.org',
          desc: 'Overview of all reporting centers in Berlin',
          url: 'https://www.mach-meldung.org/laender/meldestellen-berlin/'
        },
        bereitschaftsdienst: {
          name: 'Medical On-Call Service 116117',
          desc: 'Medical help outside office hours (non-emergency). NOT for life-threatening situations! For emergencies: 112',
          phone: '116117'
        },
        degewo: {
          name: 'Degewo',
          desc: 'Customer service for Degewo tenants (only for tenants of this housing company)',
          url: 'https://www.degewo.de/wohnen-service/zentrale-kundenberatung'
        },
        gewobag: {
          name: 'Gewobag',
          desc: 'Contact for Gewobag tenants (only for tenants of this housing company)',
          url: 'https://www.gewobag.de/ueber-uns/kontakte/fuer-unsere-mieter/'
        },
        howoge: {
          name: 'Howoge',
          desc: 'Tenant service Howoge (only for tenants of this housing company)',
          url: 'https://www.howoge.de/mieterservice/kontakt.html'
        },
        vonovia: {
          name: 'Vonovia',
          desc: 'Customer service Vonovia (only for tenants of this housing company)',
          url: 'https://www.vonovia.de/mein-zuhause/kundenservice#kontakt'
        },
        buo: {
          name: 'Berlin Construction and Housing Cooperative',
          desc: 'Service for BUO tenants (only for members of this cooperative)',
          url: 'https://buo.de/service/mieter/'
        },
        emergency112: {
          name: 'Emergency 112',
          desc: 'Fire and ambulance - for life-threatening situations',
          phone: '112'
        },
        emergency110: {
          name: 'Police 110',
          desc: 'For crimes and dangerous situations',
          phone: '110'
        }
      }
    }
  };

  const t = content[lang];

  const ServiceCard = ({ service, icon: Icon, emergency = false }) => (
    <div className={`p-4 rounded-lg border-2 ${emergency ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white'} hover:shadow-md transition-shadow`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-6 h-6 mt-1 flex-shrink-0 ${emergency ? 'text-red-600' : 'text-blue-600'}`} />
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1">{service.name}</h3>
          <p className="text-gray-600 text-sm mb-3">{service.desc}</p>
          {service.phone && (
            <a 
              href={`tel:${service.phone}`}
              aria-label={`${lang === 'de' ? 'Anrufen' : 'Call'} ${service.name}: ${service.phone}`}
              className={`inline-block px-4 py-2 rounded font-medium ${emergency ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'} transition-colors`}
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
                <div className="text-lg font-semibold">
                  {lang === 'de' ? 'Polizei' : 'Police'}
                </div>
                <div className="text-sm mt-1">
                  {lang === 'de' ? 'Straftaten & Gefahren' : 'Crimes & Dangerous Situations'}
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Featured: Ordnungsamt */}
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

        {/* Infrastructure */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="w-7 h-7 text-blue-600" />
            {t.categories.infrastructure}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ServiceCard service={t.services.ordnungsamt} icon={Wrench} />
            <ServiceCard service={t.services.verkehr} icon={MapPin} />
            <ServiceCard service={t.services.signalanlagen} icon={MapPin} />
            <ServiceCard service={t.services.wegli} icon={AlertCircle} />
            <ServiceCard service={t.services.polizei} icon={FileText} />
            <ServiceCard service={t.services.polizeiabschnitt} icon={Shield} />
            <ServiceCard service={t.services.bussgeldstelle} icon={FileText} />
            <ServiceCard service={t.services.polizeihinweis} icon={Shield} />
          </div>
        </div>

        {/* Transport */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Train className="w-7 h-7 text-blue-600" />
            {t.categories.transport}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ServiceCard service={t.services.bvg} icon={Bus} />
            <ServiceCard service={t.services.bvgchatbot} icon={MessageCircle} />
            <ServiceCard service={t.services.brokenlifts} icon={Wrench} />
            <ServiceCard service={t.services.sbahn} icon={Train} />
            <ServiceCard service={t.services.sbahnwhatsapp} icon={MessageCircle} />
            <ServiceCard service={t.services.sbahnnotfall} icon={Phone} />
            <ServiceCard service={t.services.bahn} icon={Train} />
          </div>
        </div>

        {/* Utilities */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Droplet className="w-7 h-7 text-blue-600" />
            {t.categories.utilities}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ServiceCard service={t.services.wasser} icon={Droplet} />
            <ServiceCard service={t.services.strom} icon={Zap} />
            <ServiceCard service={t.services.strombeleuchtung} icon={Zap} />
            <ServiceCard service={t.services.bew} icon={Zap} />
            <ServiceCard service={t.services.gas} icon={Wrench} />
          </div>
        </div>

        {/* Housing */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Building className="w-7 h-7 text-blue-600" />
            {t.categories.housing}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ServiceCard service={t.services.degewo} icon={Building} />
            <ServiceCard service={t.services.gewobag} icon={Building} />
            <ServiceCard service={t.services.howoge} icon={Building} />
            <ServiceCard service={t.services.vonovia} icon={Building} />
            <ServiceCard service={t.services.buo} icon={Building} />
          </div>
        </div>

        {/* Other Services */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Wrench className="w-7 h-7 text-blue-600" />
            {t.categories.other}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ServiceCard service={t.services.bereitschaftsdienst} icon={Phone} />
            <ServiceCard service={t.services.datenschutz} icon={Shield} />
            <ServiceCard service={t.services.verbraucherschutz} icon={Shield} />
            <ServiceCard service={t.services.lads} icon={Shield} />
            <ServiceCard service={t.services.ladsmeldung} icon={Shield} />
            <ServiceCard service={t.services.aekb} icon={Shield} />
            <ServiceCard service={t.services.rak} icon={Shield} />
            <ServiceCard service={t.services.ihk} icon={Wrench} />
            <ServiceCard service={t.services.machmeldung} icon={MapPin} />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-12">
          <p>{lang === 'de' ? 'Keine offizielle Seite. Alle Angaben ohne Gewähr.' : 'Not an official page. All information without guarantee.'}</p>
        </div>
      </div>
    </div>
  );
}
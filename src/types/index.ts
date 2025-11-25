export type Language = 'de' | 'en';

export interface Service {
  name: string;
  desc: string;
  url?: string;
  phone?: string;
  emergency?: string;
}

export interface Services {
  ordnungsamt: Service;
  verkehr: Service;
  signalanlagen: Service;
  wegli: Service;
  bvg: Service;
  bvgchatbot: Service;
  brokenlifts: Service;
  sbahn: Service;
  sbahnwhatsapp: Service;
  sbahnnotfall: Service;
  bahn: Service;
  wasser: Service;
  strom: Service;
  strombeleuchtung: Service;
  bew: Service;
  gas: Service;
  polizei: Service;
  polizeiabschnitt: Service;
  bussgeldstelle: Service;
  polizeihinweis: Service;
  datenschutz: Service;
  verbraucherschutz: Service;
  lads: Service;
  ladsmeldung: Service;
  aekb: Service;
  rak: Service;
  ihk: Service;
  machmeldung: Service;
  bereitschaftsdienst: Service;
  degewo: Service;
  gewobag: Service;
  howoge: Service;
  vonovia: Service;
  buo: Service;
  emergency112: Service;
  emergency110: Service;
}

export interface Categories {
  emergency: string;
  featured: string;
  infrastructure: string;
  transport: string;
  utilities: string;
  housing: string;
  other: string;
}

export interface Content {
  title: string;
  subtitle: string;
  toggleLang: string;
  categories: Categories;
  services: Services;
}

export interface ContentMap {
  de: Content;
  en: Content;
}

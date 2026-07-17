import type { Locale } from "./config";

export type NavItem = { href: string; label: string };

export type ServiceItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  stack: readonly string[];
};

export type StatItem = { value: string; label: string };
export type ProcessStep = { step: string; title: string; text: string };
export type FaqItem = { q: string; a: string };
export type ValueItem = { title: string; text: string };

export type Dictionary = {
  locale: Locale;
  site: {
    name: string;
    tagline: string;
    fullName: string;
    description: string;
    telegram: string;
    telegramHandle: string;
    telegramChannel: string;
    telegramChannelHandle: string;
    city: string;
  };
  nav: NavItem[];
  ui: {
    discussProject: string;
    ourServices: string;
    getInTouch: string;
    aboutUs: string;
    startProject: string;
    allServices: string;
    learnMore: string;
    menu: string;
    navigation: string;
    contact: string;
    directContact: string;
    openTelegram: string;
    joinChannel: string;
    sendRequest: string;
    sending: string;
    thanks: string;
    thanksMessage: string;
    errorMessage: string;
    language: string;
  };
  hero: {
    srTitle: string;
    headlinePrefix: string;
    headlineHighlight: string;
    headlineSuffix: string;
    description: string;
    marquee: string;
  };
  services: ServiceItem[];
  stats: StatItem[];
  process: {
    subtitle: string;
    title: string;
    steps: ProcessStep[];
  };
  servicesPreview: {
    subtitle: string;
    title: string;
  };
  servicesPage: {
    subtitle: string;
    title: string;
    intro: string;
  };
  cta: {
    title: string;
    description: string;
  };
  about: {
    subtitle: string;
    title: string;
    paragraphs: string[];
    valuesSubtitle: string;
    valuesTitle: string;
    values: ValueItem[];
  };
  contact: {
    subtitle: string;
    title: string;
    intro: string;
    telegramTitle: string;
    telegramDesc: string;
    channelTitle: string;
    channelDesc: string;
    briefTitle: string;
    briefDesc: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      contactLabel: string;
      contactPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
    };
  };
  faq: FaqItem[];
  footer: {
    servicesLine: string;
  };
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  pageMeta: {
    services: { title: string; description: string };
    about: { title: string; description: string };
    contact: { title: string; description: string };
  };
  jsonLd: {
    inLanguage: string;
    areaServed: string;
    serviceTypes: string[];
    priceRange: string;
  };
};

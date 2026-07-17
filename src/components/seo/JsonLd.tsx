import {
  SITE_URL,
  TELEGRAM_CHANNELS,
  TELEGRAM_CONTACT,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { localizedPath } from "@/i18n/utils";

export function JsonLd({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const { site, meta, services, faq, jsonLd } = dict;
  const pageUrl = `${SITE_URL}${localizedPath(locale, "/")}`;

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: site.name,
    legalName: site.fullName,
    url: SITE_URL,
    description: meta.description,
    areaServed: jsonLd.areaServed,
    knowsAbout: services.map((s) => s.title),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: TELEGRAM_CONTACT,
      availableLanguage: ["English", "Russian"],
    },
    sameAs: [
      TELEGRAM_CONTACT,
      TELEGRAM_CHANNELS.en.url,
      TELEGRAM_CHANNELS.ru.url,
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: pageUrl,
    name: site.fullName,
    description: meta.description,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: jsonLd.inLanguage,
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#service`,
    name: site.fullName,
    url: pageUrl,
    description: meta.description,
    areaServed: {
      "@type": "GeoShape",
      name: jsonLd.areaServed,
    },
    serviceType: jsonLd.serviceTypes,
    priceRange: jsonLd.priceRange,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

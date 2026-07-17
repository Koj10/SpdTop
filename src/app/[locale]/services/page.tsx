import type { Metadata } from "next";
import { SectionHeading, ServiceCard } from "@/components/shared/ServiceCard";
import { Reveal } from "@/components/shared/Reveal";
import { getDictionary } from "@/i18n/get-dictionary";
import { localizedPath, parseLocale } from "@/i18n/utils";
import { SITE_URL } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = parseLocale((await params).locale);
  const dict = getDictionary(locale);

  return {
    title: dict.pageMeta.services.title,
    description: dict.pageMeta.services.description,
    openGraph: {
      title: `${dict.pageMeta.services.title} | ${dict.site.name}`,
      description: dict.pageMeta.services.description,
      url: `${SITE_URL}${localizedPath(locale, "/services")}`,
    },
    alternates: {
      canonical: `${SITE_URL}${localizedPath(locale, "/services")}`,
    },
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = parseLocale((await params).locale);
  const dict = getDictionary(locale);
  const contactHref = localizedPath(locale, "/contact");

  return (
    <div className="section-padding mx-auto max-w-7xl">
      <SectionHeading
        subtitle={dict.servicesPage.subtitle}
        title={dict.servicesPage.title}
      />
      <Reveal className="mb-12 max-w-2xl">
        <p className="font-body text-flame/55 leading-relaxed">{dict.servicesPage.intro}</p>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dict.services.map((service, i) => (
          <ServiceCard key={service.id} {...service} href={contactHref} index={i} />
        ))}
      </div>
    </div>
  );
}

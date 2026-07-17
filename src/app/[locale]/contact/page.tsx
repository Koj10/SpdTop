import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";
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
    title: dict.pageMeta.contact.title,
    description: dict.pageMeta.contact.description,
    openGraph: {
      title: `${dict.pageMeta.contact.title} | ${dict.site.name}`,
      description: dict.pageMeta.contact.description,
      url: `${SITE_URL}${localizedPath(locale, "/contact")}`,
    },
    alternates: {
      canonical: `${SITE_URL}${localizedPath(locale, "/contact")}`,
    },
  };
}

export default function ContactPage() {
  return <ContactContent />;
}

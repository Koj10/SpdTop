import { CtaSection } from "@/components/home/CtaSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { JsonLd } from "@/components/seo/JsonLd";
import { parseLocale } from "@/i18n/utils";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = parseLocale((await params).locale);

  return (
    <>
      <JsonLd locale={locale} />
      <HeroSection />
      <ServicesPreview />
      <ProcessSection />
      <CtaSection />
    </>
  );
}

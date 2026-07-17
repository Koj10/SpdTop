import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading, StatBlock } from "@/components/shared/ServiceCard";
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
    title: dict.pageMeta.about.title,
    description: dict.pageMeta.about.description,
    openGraph: {
      title: `${dict.pageMeta.about.title} | ${dict.site.name}`,
      description: dict.pageMeta.about.description,
      url: `${SITE_URL}${localizedPath(locale, "/about")}`,
    },
    alternates: {
      canonical: `${SITE_URL}${localizedPath(locale, "/about")}`,
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = parseLocale((await params).locale);
  const dict = getDictionary(locale);
  const { about, stats, ui } = dict;

  return (
    <>
      <section className="section-padding mx-auto max-w-7xl">
        <SectionHeading subtitle={about.subtitle} title={about.title} />

        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-4 font-body text-flame/60 leading-relaxed">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-10 lg:justify-end">
            {stats.map((stat, i) => (
              <StatBlock key={stat.label} {...stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding mx-auto max-w-7xl border-t border-flame/5">
        <SectionHeading subtitle={about.valuesSubtitle} title={about.valuesTitle} />
        <div className="grid gap-4 md:grid-cols-2">
          {about.values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08} className="glass p-6">
              <h3 className="font-display text-lg text-accent">{v.title}</h3>
              <p className="mt-2 font-body text-sm text-flame/55 leading-relaxed">{v.text}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href={localizedPath(locale, "/contact")} className="btn-primary">
            {ui.startProject}
          </Link>
        </div>
      </section>
    </>
  );
}

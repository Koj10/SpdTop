"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { RepellingText } from "@/components/shared/RepellingText";
import { HeroVisual } from "@/components/home/HeroVisual";
import { useDictionary, useLocalizedHref } from "@/components/providers/LocaleProvider";

export function HeroSection() {
  const dict = useDictionary();
  const href = useLocalizedHref();
  const { site, hero, ui } = dict;

  return (
    <section className="relative isolate flex min-h-[90vh] w-full flex-col justify-center overflow-hidden section-padding">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-0 w-[55%] bg-gradient-to-r from-anthracite via-anthracite/90 to-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-12 xl:gap-16">
        <div className="min-w-0">
          <m.p
            className="font-mono text-xs uppercase tracking-[0.35em] text-accent/80 md:tracking-[0.5em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {site.tagline}
          </m.p>

          <div className="mt-4">
            <h1 className="sr-only">{hero.srTitle}</h1>

            <RepellingText
              text={site.name}
              ariaLabel={site.name}
              className="cursor-default select-none leading-none"
              letterClassName="font-display text-[clamp(3rem,10vw,5.5rem)] tracking-tight text-flame"
            />

            <m.p
              className="mt-4 font-display text-[clamp(1.25rem,3.5vw,2rem)] leading-tight"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-flame/70">{hero.headlinePrefix}</span>
              <span className="text-gradient">{hero.headlineHighlight}</span>
              <span className="text-flame/70">{hero.headlineSuffix}</span>
            </m.p>
          </div>

          <m.p
            className="mt-6 max-w-lg font-body text-base leading-relaxed text-flame/55 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {hero.description}
          </m.p>

          <m.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
          >
            <Link href={href("/contact")} className="btn-primary">
              {ui.discussProject}
            </Link>
            <Link href={href("/services")} className="btn-ghost">
              {ui.ourServices}
            </Link>
          </m.div>
        </div>

        <HeroVisual />
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-flame/5 py-3">
        <div className="animate-marquee flex w-max whitespace-nowrap">
          <span className="px-4 font-mono text-xs tracking-widest text-flame/25">
            {hero.marquee.repeat(3)}
          </span>
          <span className="px-4 font-mono text-xs tracking-widest text-flame/25" aria-hidden="true">
            {hero.marquee.repeat(3)}
          </span>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { useDictionary, useLocalizedHref } from "@/components/providers/LocaleProvider";

export function CtaSection() {
  const dict = useDictionary();
  const href = useLocalizedHref();
  const { cta, ui } = dict;

  return (
    <section className="section-padding">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl text-flame md:text-5xl">{cta.title}</h2>
        <p className="mx-auto mt-4 max-w-lg font-body text-flame/55">{cta.description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={href("/contact")} className="btn-primary">
            {ui.getInTouch}
          </Link>
          <Link href={href("/about")} className="btn-ghost">
            {ui.aboutUs}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

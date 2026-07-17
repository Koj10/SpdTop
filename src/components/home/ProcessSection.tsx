"use client";

import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading, StatBlock } from "@/components/shared/ServiceCard";
import { useDictionary } from "@/components/providers/LocaleProvider";

export function ProcessSection() {
  const dict = useDictionary();
  const { stats, process } = dict;

  return (
    <section className="section-padding mx-auto max-w-7xl">
      <div className="mb-16 flex flex-wrap justify-center gap-12 md:gap-20">
        {stats.map((stat, i) => (
          <StatBlock key={stat.label} {...stat} index={i} />
        ))}
      </div>

      <SectionHeading subtitle={process.subtitle} title={process.title} />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {process.steps.map((step, i) => (
          <Reveal key={step.step} delay={i * 0.08} className="glass p-6">
            <span className="font-display text-3xl text-accent/40">{step.step}</span>
            <h3 className="mt-3 font-display text-lg text-flame">{step.title}</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-flame/55">{step.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { useDictionary, useLocalizedHref } from "@/components/providers/LocaleProvider";
import { Reveal } from "./Reveal";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  stack: readonly string[];
  href?: string;
  index?: number;
}

export function ServiceCard({
  title,
  subtitle,
  description,
  icon,
  stack,
  href,
  index = 0,
}: ServiceCardProps) {
  const dict = useDictionary();
  const localizedHref = useLocalizedHref();
  const linkHref = href ?? localizedHref("/services");

  return (
    <m.article
      className="group glass gpu flex flex-col p-6 transition-colors duration-300 hover:border-accent/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
    >
      <span className="font-display text-3xl text-accent">{icon}</span>
      <h3 className="mt-4 font-display text-xl tracking-wide text-flame">{title}</h3>
      <p className="mt-1 font-mono text-xs text-accent/70">{subtitle}</p>
      <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-flame/60">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-flame/10 px-2 py-0.5 font-mono text-[10px] text-flame/40"
          >
            {tech}
          </span>
        ))}
      </div>
      <Link
        href={linkHref}
        className="mt-4 font-mono text-xs text-accent/80 transition-colors group-hover:text-accent"
      >
        {dict.ui.learnMore}
      </Link>
    </m.article>
  );
}

export function StatBlock({
  value,
  label,
  index = 0,
}: {
  value: string;
  label: string;
  index?: number;
}) {
  return (
    <m.div
      className="text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="font-display text-4xl text-accent text-glow md:text-5xl">{value}</div>
      <p className="mt-1 font-mono text-xs uppercase tracking-[0.3em] text-flame/40">{label}</p>
    </m.div>
  );
}

export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-12 md:mb-16">
      {subtitle && (
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-accent/70">
          {subtitle}
        </p>
      )}
      <h2 className="font-display text-3xl text-flame md:text-5xl lg:text-6xl">{title}</h2>
    </Reveal>
  );
}

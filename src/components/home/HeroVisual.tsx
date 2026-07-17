"use client";

import { m } from "framer-motion";
import { useDictionary } from "@/components/providers/LocaleProvider";

const CODE_LINES = [
  { indent: 0, parts: [{ t: "const ", c: "text-flame/40" }, { t: "project", c: "text-accent" }, { t: " = await ", c: "text-flame/40" }, { t: "spdtop", c: "text-spotlight-peach" }, { t: ".build({", c: "text-flame/40" }] },
  { indent: 1, parts: [{ t: "type: ", c: "text-flame/40" }, { t: "'bots' | 'apps' | 'sites' | 'games'", c: "text-accent/80" }, { t: ",", c: "text-flame/40" }] },
  { indent: 1, parts: [{ t: "stack: ", c: "text-flame/40" }, { t: "['Next.js', 'TypeScript', 'Python']", c: "text-accent/80" }, { t: ",", c: "text-flame/40" }] },
  { indent: 1, parts: [{ t: "deadline: ", c: "text-flame/40" }, { t: "'ASAP'", c: "text-spotlight-peach" }, { t: ",", c: "text-flame/40" }] },
  { indent: 1, parts: [{ t: "quality: ", c: "text-flame/40" }, { t: "'production'", c: "text-accent" }] },
  { indent: 0, parts: [{ t: "});", c: "text-flame/40" }] },
  { indent: 0, parts: [{ t: "// → deployed ✓", c: "text-flame/25" }] },
];

export function HeroVisual() {
  const dict = useDictionary();
  const { services, stats } = dict;

  return (
    <m.div
      className="relative hidden w-full min-w-0 md:block"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="glass relative overflow-hidden rounded-sm p-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
          <span className="ml-2 font-mono text-[10px] text-flame/30">project.ts</span>
        </div>

        <pre className="font-mono text-xs leading-relaxed">
          {CODE_LINES.map((line, i) => (
            <div key={i} style={{ paddingLeft: line.indent * 16 }}>
              {line.parts.map((part, j) => (
                <span key={j} className={part.c}>
                  {part.t}
                </span>
              ))}
            </div>
          ))}
        </pre>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {stats.map((stat, i) => (
          <m.div
            key={stat.label}
            className="glass px-3 py-3 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
          >
            <div className="font-display text-xl text-accent">{stat.value}</div>
            <div className="font-mono text-[9px] uppercase tracking-wider text-flame/35">
              {stat.label}
            </div>
          </m.div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {services.map((s, i) => (
          <m.span
            key={s.id}
            className="rounded border border-flame/10 px-2.5 py-1 font-mono text-[10px] text-flame/45"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + i * 0.06 }}
          >
            {s.icon} {s.title}
          </m.span>
        ))}
      </div>
    </m.div>
  );
}

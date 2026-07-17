"use client";

import { BriefForm } from "@/components/contact/BriefForm";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/ServiceCard";
import { useDictionary } from "@/components/providers/LocaleProvider";

export function ContactContent() {
  const dict = useDictionary();
  const { site, contact, faq } = dict;

  return (
    <div className="section-padding mx-auto max-w-7xl">
      <SectionHeading subtitle={contact.subtitle} title={contact.title} />

      <Reveal className="mb-12 max-w-2xl">
        <p className="font-body text-flame/55 leading-relaxed">{contact.intro}</p>
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          <Reveal>
            <BriefForm />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent/70">
                  {contact.telegramTitle}
                </p>
                <p className="mt-2 font-body text-xs leading-relaxed text-flame/50">
                  {contact.telegramDesc}
                </p>
                <a
                  href={site.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block font-mono text-xs text-accent hover:text-flame"
                >
                  {site.telegramHandle} →
                </a>
              </div>

              <div className="glass p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-flame/30">
                  {contact.channelTitle}
                </p>
                <p className="mt-2 font-body text-xs leading-relaxed text-flame/50">
                  {contact.channelDesc}
                </p>
                <a
                  href={site.telegramChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block font-mono text-xs text-flame/50 hover:text-accent"
                >
                  {site.telegramChannelHandle} →
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-flame/30">FAQ</p>
            <div className="mt-4 space-y-3">
              {faq.map((item) => (
                <details key={item.q} className="glass group">
                  <summary className="cursor-pointer px-4 py-3 font-body text-sm text-flame/80 marker:content-none">
                    <span className="flex items-center justify-between gap-2">
                      {item.q}
                      <span className="text-accent transition-transform group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="border-t border-flame/5 px-4 pb-3 pt-2 font-body text-sm text-flame/50">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

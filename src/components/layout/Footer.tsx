"use client";

import Link from "next/link";
import { useDictionary, useLocalizedHref } from "@/components/providers/LocaleProvider";

export function Footer() {
  const dict = useDictionary();
  const href = useLocalizedHref();
  const { site, nav, ui, footer } = dict;

  return (
    <footer className="relative z-10 border-t border-flame/10 bg-black/40">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl text-flame">{site.name}</p>
            <p className="mt-2 font-body text-sm text-flame/50">{site.description}</p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-flame/30">{ui.navigation}</p>
            <ul className="mt-4 space-y-2">
              {nav.map(({ href: path, label }) => (
                <li key={path}>
                  <Link
                    href={href(path)}
                    className="font-body text-sm text-flame/60 transition-colors hover:text-accent"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-flame/30">{ui.contact}</p>
            <ul className="mt-4 space-y-2 font-body text-sm text-flame/60">
              <li>
                <a
                  href={site.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  {site.telegramHandle}
                </a>
              </li>
              <li>
                <a
                  href={site.telegramChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  {site.telegramChannelHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-flame/5 pt-8">
          <p className="font-mono text-[10px] text-flame/25">
            © {new Date().getFullYear()} {site.name} · {site.city}
          </p>
          <p className="font-mono text-[10px] text-flame/25">{footer.servicesLine}</p>
        </div>
      </div>
    </footer>
  );
}

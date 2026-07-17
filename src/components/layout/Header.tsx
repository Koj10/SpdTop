"use client";

import { m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { useDictionary, useLocalizedHref } from "@/components/providers/LocaleProvider";
import { isActiveNavPath } from "@/i18n/utils";

export function Header() {
  const pathname = usePathname();
  const dict = useDictionary();
  const href = useLocalizedHref();
  const [open, setOpen] = useState(false);
  const { site, nav, ui } = dict;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-flame/5 bg-anthracite/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <Link href={href("/")} className="group flex items-center gap-2">
          <span className="font-display text-2xl tracking-wider text-flame transition-colors group-hover:text-accent">
            {site.name}
          </span>
          <span className="hidden font-mono text-[10px] text-flame/30 sm:inline">
            {site.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map(({ href: path, label }) => (
            <Link
              key={path}
              href={href(path)}
              className={`relative font-body text-sm transition-colors ${
                isActiveNavPath(pathname, path, dict.locale)
                  ? "text-accent"
                  : "text-flame/60 hover:text-flame"
              }`}
            >
              {label}
              {isActiveNavPath(pathname, path, dict.locale) && (
                <m.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}

          <div className="flex items-center gap-5">
            <span className="h-4 w-px bg-flame/10" aria-hidden="true" />
            <LanguageSwitcher />
            <Link href={href("/contact")} className="btn-primary !py-2 !text-xs">
              {ui.discussProject}
            </Link>
          </div>
        </nav>

        <div className="flex items-center gap-4 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="flex flex-col gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label={ui.menu}
            aria-expanded={open}
          >
            <span
              className={`block h-px w-6 bg-flame transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span className={`block h-px w-6 bg-flame transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-px w-6 bg-flame transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-flame/5 lg:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {nav.map(({ href: path, label }) => (
                <Link
                  key={path}
                  href={href(path)}
                  onClick={() => setOpen(false)}
                  className={`font-body text-lg ${
                    isActiveNavPath(pathname, path, dict.locale) ? "text-accent" : "text-flame/70"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link href={href("/contact")} onClick={() => setOpen(false)} className="btn-primary text-center">
                {ui.discussProject}
              </Link>
            </div>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

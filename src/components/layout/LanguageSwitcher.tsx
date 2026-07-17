"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeNames, LOCALE_COOKIE, type Locale } from "@/i18n/config";
import { switchLocalePath } from "@/i18n/utils";
import { useDictionary, useLocale } from "@/components/providers/LocaleProvider";

function setLocaleCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=31536000;samesite=lax`;
}

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const dict = useDictionary();
  const pathname = usePathname();

  return (
    <div
      className={`locale-switch ${className}`}
      role="group"
      aria-label={dict.ui.language}
    >
      {locales.map((code, index) => {
        const active = locale === code;
        return (
          <Link
            key={code}
            href={switchLocalePath(pathname, code)}
            onClick={() => setLocaleCookie(code)}
            className={`locale-switch-option ${active ? "locale-switch-option-active" : ""}`}
            aria-current={active ? "true" : undefined}
            lang={code}
          >
            {active && (
              <m.span
                layoutId="locale-glow"
                className="pointer-events-none absolute inset-0 bg-accent/[0.06]"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            {active && (
              <m.span
                layoutId="locale-line"
                className="absolute inset-x-0 bottom-0 h-px bg-accent/70 shadow-[0_0_10px_rgba(0,255,163,0.35)]"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative z-10">{code.toUpperCase()}</span>
            <span className="sr-only"> — {localeNames[code]}</span>
            {index < locales.length - 1 && (
              <span className="pointer-events-none absolute -right-px top-1/4 h-1/2 w-px bg-flame/10" aria-hidden="true" />
            )}
          </Link>
        );
      })}
    </div>
  );
}

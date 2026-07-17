"use client";

import { createContext, useContext } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { localizedPath } from "@/i18n/utils";

type LocaleContextValue = {
  locale: Locale;
  dict: Dictionary;
  href: (path: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  dictionary,
  children,
}: {
  locale: Locale;
  dictionary: Dictionary;
  children: React.ReactNode;
}) {
  const value: LocaleContextValue = {
    locale,
    dict: dictionary,
    href: (path: string) => localizedPath(locale, path),
  };

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocaleContext() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocaleContext must be used within LocaleProvider");
  return ctx;
}

export function useDictionary() {
  return useLocaleContext().dict;
}

export function useLocale() {
  return useLocaleContext().locale;
}

export function useLocalizedHref() {
  return useLocaleContext().href;
}

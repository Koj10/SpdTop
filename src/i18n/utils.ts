import { defaultLocale, locales, type Locale } from "./config";

export function localizedPath(locale: Locale, path: string): string {
  if (path === "/") return `/${locale}`;
  return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
}

export function stripLocale(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname || "/";
}

export function switchLocalePath(pathname: string, newLocale: Locale): string {
  const path = stripLocale(pathname);
  return localizedPath(newLocale, path);
}

export function isActiveNavPath(pathname: string, href: string, locale: Locale): boolean {
  const target = localizedPath(locale, href);
  if (href === "/") return pathname === target;
  return pathname === target || pathname.startsWith(`${target}/`);
}

export function parseLocale(value: string | undefined): Locale {
  if (value && locales.includes(value as Locale)) return value as Locale;
  return defaultLocale;
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://spd-top.ru";

export const locales = ["en", "ru"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
};

export const ogLocales: Record<Locale, string> = {
  en: "en_US",
  ru: "ru_RU",
};

export const LOCALE_COOKIE = "spdtop_locale";

/** Primary contact — direct messages */
export const TELEGRAM_CONTACT = "https://t.me/speed_tops";
export const TELEGRAM_CONTACT_HANDLE = "@speed_tops";

/** Info channels by locale */
export const TELEGRAM_CHANNELS: Record<Locale, { url: string; handle: string }> = {
  en: { url: "https://t.me/spd_top", handle: "@spd_top" },
  ru: { url: "https://t.me/spd_top_ru", handle: "@spd_top_ru" },
};

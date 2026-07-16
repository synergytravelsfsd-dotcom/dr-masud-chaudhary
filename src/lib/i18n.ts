/**
 * i18n readiness scaffold.
 * Plug next-intl / next-i18next without restructuring routes.
 */

export const locales = ["en", "ur", "pt", "fr", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  ur: "اردو",
  pt: "Português",
  fr: "Français",
  ar: "العربية",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

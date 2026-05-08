import type { Locale } from '@anglefeint/site-i18n/config';

/**
 * Site identity config. Override via environment variables:
 *   PUBLIC_SITE_URL, PUBLIC_SITE_TITLE, PUBLIC_SITE_AUTHOR, PUBLIC_SITE_DESCRIPTION, PUBLIC_SITE_TAGLINE
 */
const env = import.meta.env;

export const SITE_TITLE = (env.PUBLIC_SITE_TITLE as string | undefined) ?? 'My Blog';
export const SITE_DESCRIPTION =
  (env.PUBLIC_SITE_DESCRIPTION as string | undefined) ??
  'Cinematic web interfaces, AI-era engineering notes, and system architecture essays.';
export const SITE_URL =
  (env.PUBLIC_SITE_URL as string | undefined) ??
  (env.SITE as string | undefined) ??
  'https://example.com';
export const SITE_AUTHOR = (env.PUBLIC_SITE_AUTHOR as string | undefined) ?? 'Your Name';
export const SITE_TAGLINE = (env.PUBLIC_SITE_TAGLINE as string | undefined) ?? 'Built with Astro.';

export function getSiteHero(locale: Locale): string | undefined {
  const heroByEnabledLocale: Partial<Record<Locale, string>> = {
    en: 'Write a short introduction for your site and what readers can expect from your posts.',
    ja: '',
    ko: '',
    es: 'Escribe una breve presentación del sitio y qué tipo de contenido encontrarán tus lectores.',
    zh: '',
  };

  return heroByEnabledLocale[locale];
}

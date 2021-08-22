import { defaultLocale, locales } from './config';

export function getAllLocaleSlugs() {
  return locales /*.filter(locale => locale !== defaultLocale)*/ .map(locale => {
    return { params: { locale: locale } };
  });
}

export function getLocale(locale) {
  return locales.includes(locale) ? locale : defaultLocale;
}

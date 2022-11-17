import i18next, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';

import EN_US_TRANSLATIONS from './locales/en.json';
import FR_FR_TRANSLATIONS from './locales/fr.json';

let locale = 'fr-FR';

if (typeof window !== 'undefined') {
  locale = localStorage.getItem('selectedLocale') || 'fr-FR';
}

const initI18n = (resources: Resource, locale: string) => {
  const instance = i18next.createInstance().use(initReactI18next);

  instance.init({
    lng: locale, // Language to use (overrides language detection like "i18next-browser-languagedetector")
    fallbackLng: ['fr-FR', 'en-GB', 'en-US'],
    resources,
    debug: false,
    initImmediate: false,
    interpolation: {
      escapeValue: false, // not needed with react
    },
  });

  return instance;
};

export const i18n = initI18n(
  {
    'fr-FR': { translation: FR_FR_TRANSLATIONS },
    'en-US': { translation: EN_US_TRANSLATIONS },
  },
  locale,
);
export const getLanguage = () => i18n.language;

export default i18n;

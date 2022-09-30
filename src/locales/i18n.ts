import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en/translation.json';
import vi from './vi/translation.json';

export const translationsJson = {
  en: {
    translation: en
  },
  vi: {
    translation: vi
  }
};

const DETECTION_OPTIONS = {
  order: ['localStorage', 'navigator'],
  caches: ['localStorage']
};

export const i18n = i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: DETECTION_OPTIONS,
    resources: translationsJson,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',
    interpolation: {
      escapeValue: false
    }
  });

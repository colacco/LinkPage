import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from "../locales/en.json";
import pt from "../locales/pt.json";

// Initialize i18next
i18next
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "en", // use en if detected language is not available
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    resources: {
      en: { translation: en },
      pt: { translation: pt },
    }
  });

export default i18next;
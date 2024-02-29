import translationEN from "./locals/en.json";
import translationFR from "./locals/fr.json";
import translationHI from "./locals/hi.json";
import LanguageDetector from "i18next-browser-languagedetector";
import i18next from "i18next";

i18next.use(LanguageDetector).init({
  resources: {
    en: {
      translation: {
        navbar: translationEN,
      },
    },
    fr: {
      translation: {
        navbar: translationFR,
      },
    },
    hi: {
      translation: {
        navbar: translationHI,
      },
    },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./translations";
// Инициализация:
console.log('ewfwef');
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translations.en, // добавлен объект "en"
    },
    ru: {
      translation: translations.ru, // добавлен объект "ru"
    },

  },
  lng: "ru",
  fallbackLng: "ru"
});

export default i18n;

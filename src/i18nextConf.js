import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'
import translationEN from "./languages/en/translation.json";
import translationRU from "./languages/ru/translation.json";

const resources = {
    ru: {
        translation: translationRU
    },
    en: {
        translation: translationEN
    },
};

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: navigator.language === 'ru' ? 'ru' : 'en',
        // Распознавание и кэширование языковых кук
        detection: {
            order: ['queryString', 'cookie'],
            cache: ['cookie']
        },
        whitelist: ["ru", "en"],
        react: {
            useSuspense: false
        },
        interpolation: {
            escapeValue: false
        }
    })

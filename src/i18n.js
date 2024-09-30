import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";
import  uzTranslator from "./locale/uz.json"
import ruTranslator from "./locale/ru.json"
import enTranslator from "./locale/en.json"

const language = localStorage.getItem("i18nextLng") || "uz"

i18n
    .use(Backend)
    // tilni aniqlash
    .use(languageDetector)
    // bog'lash
    .use(initReactI18next)
    .init({
        fallbackLng: 'eng',
        Lng: language,
        debug: true,
        resources: {
            uz:{translation: uzTranslator},
            en:{translation: enTranslator},
            ru:{translation: ruTranslator}
        }
    })
export default i18n;
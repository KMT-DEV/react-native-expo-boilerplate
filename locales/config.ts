import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';
import DictionaryAR from './ar/DictionaryAR.json';
import DictionaryEN from './en/DictionaryEN.json';

const ArabicDictionary = {
    ...DictionaryAR,
};
const EnglishDictionary = {
    ...DictionaryEN,
};
// eslint-disable-next-line
i18next.use(initReactI18next).init({
    lng: 'en',
    debug: false,
    resources: {
        en: {
            translation: EnglishDictionary,
        },
        ar: {
            translation: ArabicDictionary,
        },
    },
});

// Function to toggle RTL/LTR based on language
const setI18nConfig = (language: string) => {
    const isRTL = language === 'en';

    // Update I18nManager settings
    I18nManager.forceRTL(isRTL);
    I18nManager.allowRTL(isRTL);

    // Update i18next language
    // eslint-disable-next-line
    i18next.changeLanguage(language);
};

// Example: Set initial language to Arabic and configure RTL
setI18nConfig('en');

export default i18next;

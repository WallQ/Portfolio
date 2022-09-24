import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import EN from './locales/en/en.json';
import PT from './locales/pt/pt.json';

const resources = {
	en: EN,
	pt: PT,
};

i18next.use(initReactI18next).init({
	resources,
	lng: localStorage.getItem('language') || 'en',
	fallbackLng: 'en',
});

export default i18next;

import i18next from 'i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import EN from './locales/en/en.json';
import ES from './locales/es/es.json';
import PT from './locales/pt/pt.json';

const resources = {
	en: EN,
	es: ES,
	pt: PT,
};

i18next
	.use(detector)
	.use(backend)
	.use(initReactI18next)
	.init({
		resources,
		lng: localStorage.getItem('language') || 'en',
		fallbackLng: 'en',
	});

export default i18next;

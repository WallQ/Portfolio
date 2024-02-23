import i18next from 'i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import EN from '@/i18n/locales/en/translation.json';
import PT from '@/i18n/locales/pt/translation.json';

const resources = {
	en: EN,
	pt: PT,
};

export default i18next
	.use(detector)
	.use(backend)
	.use(initReactI18next)
	.init({
		resources,
		lng: localStorage.getItem('lang') || 'en',
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
	});

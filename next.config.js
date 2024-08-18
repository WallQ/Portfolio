import MillionLint from '@million/lint';
import createNextIntlPlugin from 'next-intl/plugin';

await import('./src/env.js');
const withNextIntl = createNextIntlPlugin('./src/i18n/i18n.ts');

/** @type {import("next").NextConfig} */
const config = {
	images: {
		remotePatterns: [
			// {
			// 	protocol: 'https',
			// 	hostname: '**',
			// 	port: '',
			// 	pathname: '',
			// },
		],
	},
};
export default MillionLint.next({
	rsc: true,
})(withNextIntl(config));

import createNextIntlPlugin from 'next-intl/plugin';

await import('./src/env.js');

const withNextIntl = createNextIntlPlugin();

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

export default withNextIntl(config);

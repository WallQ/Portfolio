import { type MetadataRoute } from 'next';

import { config } from '@/config/app';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: [],
			},
		],
		host: config.url,
		sitemap: `${config.url}/sitemap.xml`,
	};
}

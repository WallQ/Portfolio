import { type MetadataRoute } from 'next';

import { config } from '@/config/app';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: `${config.url}`,
			changeFrequency: 'yearly',
			priority: 1,
			lastModified: new Date().toISOString().split('T')[0],
		},
	];
}

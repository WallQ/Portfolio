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
		{
			url: `${config.url}/docs/Sérgio Félix - Curriculum Vitae.pdf`,
			changeFrequency: 'yearly',
			priority: 0.8,
			lastModified: new Date().toISOString().split('T')[0],
		},
		{
			url: `${config.url}/project/ia`,
			changeFrequency: 'yearly',
			priority: 0.8,
			lastModified: new Date().toISOString().split('T')[0],
		},
		{
			url: `${config.url}/project/sio`,
			changeFrequency: 'yearly',
			priority: 0.8,
			lastModified: new Date().toISOString().split('T')[0],
		},
		{
			url: `${config.url}/project/pulse-connect`,
			changeFrequency: 'yearly',
			priority: 0.8,
			lastModified: new Date().toISOString().split('T')[0],
		},
		{
			url: `${config.url}/project/sd`,
			changeFrequency: 'yearly',
			priority: 0.8,
			lastModified: new Date().toISOString().split('T')[0],
		},
		{
			url: `${config.url}/project/pwa`,
			changeFrequency: 'yearly',
			priority: 0.8,
			lastModified: new Date().toISOString().split('T')[0],
		},
	];
}

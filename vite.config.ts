import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	base: '/Portfolio/',
	server: {
		host: '192.168.1.157',
		port: 80,
	},
	preview: {
		host: '192.168.1.157',
		port: 80,
	},
	plugins: [
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: ['favicon.svg', 'robots.txt'],
			workbox: {
				globPatterns: [
					'**/*.{svg,js,css,webp,json,pdf,woff,woff2,png,jpg,html,txt,webmanifest}',
				],
			},
			manifest: {
				name: 'Sérgio Félix - Personal Website',
				short_name: 'Portfolio',
				start_url: '/Portfolio/',
				display: 'standalone',
				background_color: '#ffffff',
				lang: 'en',
				scope: '/Portfolio/',
				description: 'The personal website of Sérgio Félix',
				id: '/Portfolio/',
				theme_color: '#2564eb',
				orientation: 'portrait',
				icons: [
					{
						src: 'icons/android-chrome-192x192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any',
					},
					{
						src: 'icons/android-chrome-192x192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'maskable',
					},
					{
						src: 'icons/android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any',
					},
					{
						src: 'icons/android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'maskable',
					},
				],
			},
		}),
	],
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	base: '/Portfolio/',
	server: {
		port: 3000,
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
				display: 'fullscreen',
				background_color: '#ffffff',
				lang: 'en',
				scope: '/Portfolio/',
				description: 'The personal website of Sérgio Félix',
				id: '/Portfolio/',
				theme_color: '#2564eb',
				orientation: 'portrait',
				icons: [
					{
						src: 'icons/manifest-icon-192.maskable.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any',
					},
					{
						src: 'icons/manifest-icon-192.maskable.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'maskable',
					},
					{
						src: 'icons/manifest-icon-512.maskable.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any',
					},
					{
						src: 'icons/manifest-icon-512.maskable.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'maskable',
					},
				],
			},
		}),
	],
});

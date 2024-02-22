import path from 'path';
import react from '@vitejs/plugin-react';
import million from 'million/compiler';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import { defineConfig, type UserConfig } from 'vite';

export default defineConfig({
	base: './',
	server: {
		port: 3000,
	},
	plugins: [
		million.vite({ auto: { rsc: false } }),
		react(),
		TanStackRouterVite(),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
} as UserConfig);

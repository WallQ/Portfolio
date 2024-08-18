import '@/styles/globals.css';

import { type Metadata, type Viewport } from 'next';
import { TRPCReactProvider } from '@/trpc/react';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';

import { config } from '@/config/app';
import { locales, type Locale } from '@/lib/locales';
import { Toaster } from '@/components/ui/toaster';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import ScrollToTop from '@/components/scroll-to-top';
import ThemeProvider from '@/components/theme-provider';

export const metadata: Metadata = {
	authors: [
		{
			name: 'Sérgio Félix',
			url: 'https://github.com/WallQ',
		},
	],
	creator: 'Sérgio Félix',
	description: config.description,
	icons: [
		{ rel: 'icon', url: '/favicon.ico' },
		{
			rel: 'apple-touch-icon',
			sizes: '180x180',
			url: '/apple-touch-icon.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			url: '/favicon-32x32.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '192x192',
			url: '/android-chrome-192x192.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '16x16',
			url: '/favicon-16x16.png',
		},
		{
			rel: 'mask-icon',
			color: '#f97316',
			url: '/safari-pinned-tab.svg',
		},
	],
	keywords: [
		'software engineer',
		'computer science',
		'full-stack',
		'front-end',
		'back-end',
		'react.js',
		'next.js',
		'typescript',
		'tailwindcss',
		'trpc',
		'node.js',
		'express.js',
		'nest.js',
		'graphql',
		'figma',
		'prisma',
		'postgresql',
		'docker',
		'drizzle',
		'portfolio',
		'react-query',
		'shadcn/ui',
		'i18n',
	],
	manifest: `${config.url}/site.webmanifest`,
	metadataBase: new URL(config.url),
	openGraph: {
		description: config.description,
		images: [
			{
				alt: config.name,
				height: 630,
				url: `${config.url}/og.png`,
				width: 1200,
			},
		],
		locale: 'pt_PT',
		siteName: config.name,
		title: config.name,
		type: 'website',
		url: config.url,
	},
	other: {
		'apple-mobile-web-app-title': `${config.name}`,
		'application-name': `${config.name}`,
		'msapplication-TileColor': '#ffffff',
		'msapplication-TileImage': '/mstile-144x144.png',
	},
	title: {
		default: config.name,
		template: `%s | ${config.name}`,
	},
	twitter: {
		card: 'summary_large_image',
		creator: '@sergiofelixdev',
		description: config.description,
		images: [
			{
				alt: config.name,
				height: 630,
				url: `${config.url}/og.png`,
				width: 1200,
			},
		],
		title: config.name,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	applicationName: 'portfolio',
};

export const viewport: Viewport = {
	colorScheme: 'dark light',
	themeColor: [
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
		{ media: '(prefers-color-scheme: light)', color: 'white' },
	],
};

type RootLayoutProps = {
	children: Readonly<React.ReactNode>;
	params: {
		locale: Locale;
	};
};

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
	children,
	params,
}: RootLayoutProps) {
	unstable_setRequestLocale(params.locale);
	const messages = await getMessages();

	return (
		<html
			lang={params.locale}
			suppressHydrationWarning
			className={`${GeistSans.variable} ${GeistMono.variable}`}>
			<body>
				<NextIntlClientProvider messages={messages}>
					<TRPCReactProvider>
						<ThemeProvider
							attribute='class'
							defaultTheme='dark'
							disableTransitionOnChange>
							<Navbar />
							<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
								<main className='mx-auto flex max-w-6xl flex-col py-16 sm:py-32'>
									{children}
								</main>
							</div>
							<ScrollToTop />
							<Toaster />
							<Footer />
						</ThemeProvider>
					</TRPCReactProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}

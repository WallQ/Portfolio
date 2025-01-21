import type { NextRequest } from 'next/server';
import { type NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { locales, type Locale } from '@/lib/locales';

const nextIntlMiddleware = createMiddleware({
	locales,
	defaultLocale: 'en' satisfies Locale,
	localePrefix: 'never',
	localeDetection: false,
});

export default async function middleware(
	request: NextRequest,
): Promise<NextResponse> {
	return nextIntlMiddleware(request);
}

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|favicon.ico|_vercel|.*\\..*).*)',
	],
};

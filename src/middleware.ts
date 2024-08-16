import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { env } from '@/env';
import { APP_ROUTES } from '@/routes/app';
import createMiddleware from 'next-intl/middleware';

import { locales, type Locale } from '@/lib/locales';

const nextIntlMiddleware = createMiddleware({
	locales,
	defaultLocale: 'en' satisfies Locale,
	localePrefix: 'never',
});

export default async function middleware(
	request: NextRequest,
): Promise<NextResponse> {
	if (env.MAINTENANCE_MODE === 'true')
		return NextResponse.redirect(
			new URL(APP_ROUTES.MAINTENANCE, request.url),
		);

	if (request.nextUrl.pathname.startsWith(APP_ROUTES.MAINTENANCE))
		return NextResponse.redirect(new URL(APP_ROUTES.HOME, request.url));

	return nextIntlMiddleware(request);
}

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|favicon.ico|_vercel|.*\\..*).*)',
	],
};

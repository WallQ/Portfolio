import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getBaseUrl() {
	if (typeof window !== 'undefined') return window.location.origin;
	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
	return `http://localhost:${process.env.PORT ?? 3000}`;
}

export function getClientIp(ctx: { headers: Headers }): string {
	return (
		ctx.headers.get('cf-connecting-ip') ??
		ctx.headers.get('x-forwarded-for') ??
		ctx.headers.get('x-real-ip') ??
		ctx.headers.get('forwarded') ??
		ctx.headers.get('true-client-ip') ??
		ctx.headers.get('x-cluster-client-ip') ??
		ctx.headers.get('x-client-ip') ??
		'127.0.0.1'
	);
}

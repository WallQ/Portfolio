import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
	server: {
		NODE_ENV: z.enum(['development', 'test', 'production']),
		NODEMAILER_EMAIL: z.string().email(),
		NODEMAILER_PASSWORD: z.string().min(1),
		UPSTASH_REDIS_REST_URL: z.string().url(),
		UPSTASH_REDIS_REST_TOKEN: z.string().min(1),
		MAINTENANCE_MODE: z.enum(['true', 'false']).default('false'),
	},
	client: {
		// NEXT_PUBLIC_CLIENTVAR: z.string(),
	},
	runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
		NODEMAILER_EMAIL: process.env.NODEMAILER_EMAIL,
		NODEMAILER_PASSWORD: process.env.NODEMAILER_PASSWORD,
		UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
		UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
		MAINTENANCE_MODE: process.env.MAINTENANCE_MODE,
		// NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
	},
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
	emptyStringAsUndefined: true,
});

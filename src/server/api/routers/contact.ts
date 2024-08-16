import { env } from '@/env';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { ContactSchema } from '@/validators/contact';
import { TRPCError } from '@trpc/server';
import nodemailer from 'nodemailer';
import type Mail from 'nodemailer/lib/mailer';

import { ratelimit } from '@/lib/upstash';
import { getClientIp } from '@/lib/utils';

export const contactRouter = createTRPCRouter({
	sendContact: publicProcedure
		.input(ContactSchema)
		.mutation(async ({ ctx, input }) => {
			const ip = getClientIp(ctx);

			const { success } = await ratelimit.limit(ip);

			if (!success)
				throw new TRPCError({
					code: 'TOO_MANY_REQUESTS',
					message:
						'Too many requests from this IP, please try again later.',
					cause: 'ratelimit',
				});

			const transport = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: env.NODEMAILER_EMAIL,
					pass: env.NODEMAILER_PASSWORD,
				},
			});

			const mailOptions: Mail.Options = {
				from: env.NODEMAILER_EMAIL,
				to: env.NODEMAILER_EMAIL,
				subject: `Message from ${input.firstName} ${input.lastName} (${input.email})`,
				text: input.message,
			};

			return await transport.sendMail(mailOptions);
		}),
});

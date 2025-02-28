'use server';

import { headers } from 'next/headers';
import { env } from '@/env';
import { Contact } from '@/validators/contact';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

import { ratelimit } from '@/lib/upstash';

export const sendContact = async ({
	firstName,
	lastName,
	email,
	message,
}: Contact) => {
	const ip = (await headers()).get('x-forwarded-for') ?? '127.0.0.1';

	const { success } = await ratelimit.limit(ip);

	if (!success) throw new Error('rate_limit_exceeded');

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
		subject: `Message from ${firstName} ${lastName} (${email})`,
		text: message,
	};

	return await transport.sendMail(mailOptions);
};

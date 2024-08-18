import {
	emailConstraints,
	firstNameConstraints,
	lastNameConstraints,
	maxLengthErrorMessage,
	minLengthErrorMessage,
} from '@/validators/general';
import { z } from 'zod';

export const ContactSchema = z.object({
	firstName: firstNameConstraints(),
	lastName: lastNameConstraints(),
	email: emailConstraints(),
	message: z
		.string()
		.trim()
		.min(3, { message: minLengthErrorMessage('Message', 3) })
		.max(144, { message: maxLengthErrorMessage('Message', 144) }),
});

export type Contact = z.infer<typeof ContactSchema>;

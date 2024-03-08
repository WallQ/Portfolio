import emailjs from '@emailjs/browser';
import { Loader2, Send } from 'lucide-react';
import { Fragment } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Contact, ContactSchema } from '@/validators/contact';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type ContactFormProps = {};

const ContactForm: React.FunctionComponent<
	ContactFormProps
> = ({}): React.ReactNode => {
	const { t } = useTranslation();
	const { toast } = useToast();

	const form = useForm<Contact>({
		resolver: zodResolver(ContactSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			message: '',
		},
	});

	const onSubmit: SubmitHandler<Contact> = (data) => {
		emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
		emailjs
			.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				{
					to_email: 'sergiofelixdev@gmail.com',
					subject: `${data.firstName} ${data.lastName} - ${data.email}`,
					message: data.message,
				},
			)
			.then((response) => {
				console.log('SUCCESS!', response.status, response.text);
				toast({
					description: 'Email sent successfully!',
				});
			})
			.catch((error) => {
				console.error('FAILED...', error);
				toast({
					variant: 'destructive',
					description: 'An error occurred while sending the email.',
				});
			});
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				name='contact-form'
				className='flex w-full flex-col gap-y-4'>
				<div className='flex justify-between gap-x-4'>
					<FormField
						control={form.control}
						name='firstName'
						disabled={form.formState.isSubmitting}
						render={({ field }) => (
							<FormItem className='w-full'>
								<FormLabel>
									{t('contact.form.first_name')}
								</FormLabel>
								<FormControl>
									<Input
										type='text'
										placeholder='Sérgio'
										autoComplete='given-name'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='lastName'
						disabled={form.formState.isSubmitting}
						render={({ field }) => (
							<FormItem className='w-full'>
								<FormLabel>
									{t('contact.form.last_name')}
								</FormLabel>
								<FormControl>
									<Input
										type='text'
										placeholder='Félix'
										autoComplete='family-name'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name='email'
					disabled={form.formState.isSubmitting}
					render={({ field }) => (
						<FormItem>
							<FormLabel>{t('contact.form.email')}</FormLabel>
							<FormControl>
								<Input
									type='email'
									placeholder='sergiofelixdev@gmail.com'
									autoComplete='email'
									{...field}
								/>
							</FormControl>
							<FormDescription>
								{t('contact.form.email_information')}
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='message'
					disabled={form.formState.isSubmitting}
					render={({ field }) => (
						<FormItem>
							<FormLabel>{t('contact.form.message')}</FormLabel>
							<FormControl>
								<Textarea
									className='resize-none'
									placeholder={t(
										'contact.form.message_placeholder',
									)}
									maxLength={144}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<ReCAPTCHA
					sitekey={import.meta.env.VITE_RECAPTCHA_KEY ?? ''}
					className='flex justify-end'
				/>
				<div className='flex justify-end'>
					<Button
						type='submit'
						disabled={form.formState.isSubmitting}
						className='max-w-min'>
						{form.formState.isSubmitting ? (
							<Fragment>
								<Loader2 className='mr-2 h-4 w-4 animate-spin' />
								{t('contact.form.sending_button')}
							</Fragment>
						) : (
							<Fragment>
								<Send className='mr-2 h-4 w-4' />
								{t('contact.form.send_button')}
							</Fragment>
						)}
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default ContactForm;

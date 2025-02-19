'use client';

import { Fragment } from 'react';
import { sendContact } from '@/actions/actions';
import { ContactSchema, type Contact } from '@/validators/contact';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';

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

const ContactForm: React.FunctionComponent = (): React.ReactNode => {
	const t = useTranslations('contact-form');

	const form = useForm<Contact>({
		resolver: zodResolver(ContactSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			message: '',
		},
	});

	const onSubmit: SubmitHandler<Contact> = async (values: Contact) => {
		await sendContact(values)
			.then((response) => {
				toast(t('success_message'));
			})
			.catch((error) => {
				if (error.message === 'rate_limit_exceeded')
					return toast(t('error_message_rate_limit'));
				toast(t('error_message'));
			})
			.finally(() => {
				form.reset();
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
						render={({ field }) => (
							<FormItem className='w-full'>
								<FormLabel>{t('first_name')}</FormLabel>
								<FormControl>
									<Input
										type='text'
										placeholder='Foo'
										autoComplete='given-name'
										disabled={form.formState.isSubmitting}
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
						render={({ field }) => (
							<FormItem className='w-full'>
								<FormLabel>{t('last_name')}</FormLabel>
								<FormControl>
									<Input
										type='text'
										placeholder='Bar'
										autoComplete='family-name'
										disabled={form.formState.isSubmitting}
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
					render={({ field }) => (
						<FormItem>
							<FormLabel>{t('email')}</FormLabel>
							<FormControl>
								<Input
									type='email'
									placeholder='foobar@acme.com'
									autoComplete='email'
									disabled={form.formState.isSubmitting}
									{...field}
								/>
							</FormControl>
							<FormDescription>
								{t('email_information')}
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='message'
					render={({ field }) => (
						<FormItem>
							<FormLabel>{t('message')}</FormLabel>
							<FormControl>
								<Textarea
									className='resize-none'
									placeholder={t('message_placeholder')}
									maxLength={144}
									disabled={form.formState.isSubmitting}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className='flex justify-end'>
					<Button
						type='submit'
						disabled={form.formState.isSubmitting}
						className='max-w-min cursor-pointer'
						aria-label='Contact'>
						{form.formState.isSubmitting ? (
							<Fragment>
								<Loader2 className='mr-2 size-4 animate-spin' />
								{t('sending_button')}
							</Fragment>
						) : (
							<Fragment>
								{t('send_button')}
								<Send className='size-4' />
							</Fragment>
						)}
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default ContactForm;

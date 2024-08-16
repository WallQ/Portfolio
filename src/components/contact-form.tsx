'use client';

import { Fragment } from 'react';
import { api } from '@/trpc/react';
import { ContactSchema, type Contact } from '@/validators/contact';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useForm, type SubmitHandler } from 'react-hook-form';

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

const ContactForm: React.FunctionComponent = (): React.ReactNode => {
	const { toast } = useToast();
	const t = useTranslations('contact-form');

	const contact = api.contact.sendContact.useMutation({
		onSuccess: () => {
			toast({
				description: 'Your contact request has been sent successfully!',
			});
		},
		onError: (error) => {
			toast({
				variant: 'destructive',
				description: error.message,
			});
		},
		onSettled: () => {
			form.reset();
		},
	});

	const form = useForm<Contact>({
		resolver: zodResolver(ContactSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			message: '',
		},
	});

	const onSubmit: SubmitHandler<Contact> = async ({
		firstName,
		lastName,
		email,
		message,
	}: Contact) => {
		await contact.mutateAsync({ firstName, lastName, email, message });
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
								<FormLabel>{t('first_name')}</FormLabel>
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
								<FormLabel>{t('last_name')}</FormLabel>
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
							<FormLabel>{t('email')}</FormLabel>
							<FormControl>
								<Input
									type='email'
									placeholder='sergiofelixdev@gmail.com'
									autoComplete='email'
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
					disabled={form.formState.isSubmitting}
					render={({ field }) => (
						<FormItem>
							<FormLabel>{t('message')}</FormLabel>
							<FormControl>
								<Textarea
									className='resize-none'
									placeholder={t('message_placeholder')}
									maxLength={144}
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
						className='max-w-min'
						aria-label='Contact'>
						{form.formState.isSubmitting ? (
							<Fragment>
								<Loader2 className='mr-2 size-4 animate-spin' />
								{t('sending_button')}
							</Fragment>
						) : (
							<Fragment>
								<Send className='mr-2 size-4' />
								{t('send_button')}
							</Fragment>
						)}
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default ContactForm;

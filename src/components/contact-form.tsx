import { Loader2, Send } from 'lucide-react';
import { Fragment } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Contact, ContactSchema } from '@/validators/contact';
import { useToast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
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

type ContactFormProps = {};

const ContactForm: React.FunctionComponent<
	ContactFormProps
> = ({}): React.ReactNode => {
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
								<FormLabel>First Name</FormLabel>
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
								<FormLabel>Last Name</FormLabel>
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
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									type='email'
									placeholder='sergiofelixdev@gmail.com'
									autoComplete='email'
									{...field}
								/>
							</FormControl>
							<FormDescription>
								I won&apos;t share your email with anyone else.
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
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Textarea
									className='resize-none'
									placeholder='Tell me something...'
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
								Sending...
							</Fragment>
						) : (
							<Fragment>
								<Send className='mr-2 h-4 w-4' />
								Send
							</Fragment>
						)}
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default ContactForm;

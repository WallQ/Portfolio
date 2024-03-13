import ContactForm from '@/components/contact-form';
import CopyToClipboard from '@/components/copy-to-clipboard';
import { Separator } from '@/components/ui/separator';
import { useTranslation } from 'react-i18next';

const Contact: React.FunctionComponent = (): React.ReactNode => {
	const { t } = useTranslation();

	return (
		<section id='contact' className='flex flex-col gap-y-8'>
			<Separator />
			<div className='grid grid-cols-1 gap-y-16 sm:grid-cols-10 sm:gap-x-16'>
				<div className='col-span-5 flex flex-col gap-y-4'>
					<h2 className='text-3xl font-semibold tracking-tight'>
						{t('contact.title')}
					</h2>
					<p className='text-pretty leading-7 text-muted-foreground'>
						{t('contact.description')}
					</p>
					<CopyToClipboard text='sergiofelixdev@gmail.com' />
				</div>
				<div className='col-span-5 flex flex-col gap-y-4'>
					<ContactForm />
				</div>
			</div>
			<Separator />
		</section>
	);
};

export default Contact;

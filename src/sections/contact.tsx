import { useTranslations } from 'next-intl';

import { Separator } from '@/components/ui/separator';
import CopyToClipboard from '@/components/copy-to-clipboard';
import Reveal from '@/components/reveal';
import ContactForm from '@/components/contact-form';

const Contact: React.FunctionComponent = (): React.ReactNode => {
	const t = useTranslations('homepage');

	return (
		<Reveal>
			<section
				id='contact'
				className='flex flex-col gap-y-8'>
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
		</Reveal>
	);
};

export default Contact;

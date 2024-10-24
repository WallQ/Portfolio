import Image from 'next/image';
import { ExternalLink, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/button';
import Reveal from '@/components/reveal';
import Typography from '@/components/typography';

const Hero: React.FunctionComponent = (): React.ReactNode => {
	const t = useTranslations('homepage');

	return (
		<section
			id='home'
			className='grid grid-cols-1 grid-rows-2 items-center justify-items-center pb-16 sm:grid-cols-10 sm:grid-rows-1 sm:justify-items-end sm:gap-x-16 gap-y-8'>
			<div className='order-2 sm:order-1 sm:col-span-6'>
				<Reveal direction='horizontal'>
					<div className='flex flex-col items-center gap-y-4 sm:items-start'>
						<Typography variant='h1'>
							{t.rich('header.title', {
								span: (children) => (
									<span className='text-primary'>
										{children}
									</span>
								),
								br: () => <br />,
							})}
						</Typography>
						<Typography
							variant='p'
							className='text-center sm:text-start'>
							{t('header.description')}
						</Typography>
						<div className='flex justify-start items-center gap-x-4'>
							<a
								href='#contact'
								className={buttonVariants({
									variant: 'default',
								})}>
								{t('header.contact_button')}
								<Send className='ml-2 size-4' />
							</a>
							<a
								href='docs/Sérgio Félix Resume.pdf'
								target='_blank'
								className={buttonVariants({
									variant: 'outline',
								})}>
								{t('header.resume_button')}
								<ExternalLink className='ml-2 size-4' />
							</a>
						</div>
					</div>
				</Reveal>
			</div>
			<div className='order-1 sm:order-2 sm:col-span-4'>
				<Reveal
					direction='horizontal'
					right={true}>
					<div className='h-64 w-64 rounded-full bg-primary overflow-hidden'>
						<Image
							src='/assets/images/portrait.webp'
							alt='Portrait'
							loading='eager'
							width={384}
							height={384}
							className='object-cover object-top'
						/>
					</div>
				</Reveal>
			</div>
		</section>
	);
};

export default Hero;

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { buttonVariants } from '@/components/ui/button';
import { BLUR_IN, FADE_DOWN_ANIMATION_VARIANTS } from '@/constants/variants';
import { motion } from 'framer-motion';
import { ExternalLink, Send } from 'lucide-react';
import { Trans, useTranslation } from 'react-i18next';

const Home: React.FunctionComponent = (): React.ReactNode => {
	const { t } = useTranslation();
	return (
		<section
			id='home'
			className='grid grid-cols-1 grid-rows-2 items-center justify-items-center gap-4 pb-16 sm:grid-cols-10 sm:grid-rows-1 sm:justify-items-end sm:gap-x-16'>
			<motion.div
				className='order-2 flex flex-col items-center gap-y-4 sm:order-1 sm:col-span-6 sm:items-start'
				initial='hidden'
				animate='show'
				viewport={{ once: true }}
				variants={{
					hidden: {},
					show: {
						transition: {
							staggerChildren: 0.15,
						},
					},
				}}>
				<motion.h1
					className='text-4xl font-bold tracking-tight lg:text-5xl'
					variants={FADE_DOWN_ANIMATION_VARIANTS}>
					<Trans
						i18nKey='header.title'
						components={{
							span: <span className='text-primary' />,
							br: <br />,
						}}
					/>
				</motion.h1>
				<motion.p
					className='text-pretty text-center leading-7 text-muted-foreground sm:text-start'
					variants={FADE_DOWN_ANIMATION_VARIANTS}>
					{t('header.description')}
				</motion.p>
				<motion.div
					className='flex justify-start gap-x-4'
					variants={FADE_DOWN_ANIMATION_VARIANTS}>
					<a
						href='#contact'
						className={`${buttonVariants()} max-w-fit`}>
						{t('header.contact_button')}
						<Send className='ml-2 h-4 w-4' />
					</a>
					<a
						href='docs/Resume.pdf'
						target='_blank'
						className={`${buttonVariants({ variant: 'outline' })} max-w-fit`}>
						{t('header.resume_button')}
						<ExternalLink className='ml-2 h-4 w-4' />
					</a>
				</motion.div>
			</motion.div>
			<motion.div
				initial='hidden'
				animate='visible'
				transition={{ duration: 1 }}
				variants={BLUR_IN}
				className='order-1 sm:order-2 sm:col-span-4'>
				<Avatar className='h-64 w-64 rounded-full bg-primary'>
					<AvatarImage
						src='assets/images/portrait.png'
						alt='Portrait'
						loading='eager'
						className='object-cover object-top'
					/>
					<AvatarFallback>SF</AvatarFallback>
				</Avatar>
			</motion.div>
		</section>
	);
};

export default Home;

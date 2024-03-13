import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constants/variants';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About: React.FunctionComponent = (): React.ReactNode => {
	const { t } = useTranslation();

	return (
		<section id='about'>
			<motion.div
				className='flex flex-col gap-y-8 pb-16'
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
				<motion.h2
					className='text-3xl font-semibold tracking-tight'
					variants={FADE_DOWN_ANIMATION_VARIANTS}>
					{t('about.title')}
				</motion.h2>
				<div className='relative'>
					<p className='absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 transform text-6xl font-bold text-muted/70 sm:text-9xl md:text-12xl'>
						{t('about.word')}
					</p>
					<motion.div
						className='relative z-10 flex flex-col gap-y-4'
						variants={FADE_DOWN_ANIMATION_VARIANTS}>
						<motion.p
							className='text-pretty leading-7 text-muted-foreground'
							variants={FADE_DOWN_ANIMATION_VARIANTS}>
							{t('about.paragraph_1')}
						</motion.p>
						<motion.p
							className='text-pretty leading-7 text-muted-foreground'
							variants={FADE_DOWN_ANIMATION_VARIANTS}>
							{t('about.paragraph_2')}
						</motion.p>
						<motion.p
							className='text-pretty leading-7 text-muted-foreground'
							variants={FADE_DOWN_ANIMATION_VARIANTS}>
							{t('about.paragraph_3')}
						</motion.p>
						<motion.p
							className='text-pretty leading-7 text-muted-foreground'
							variants={FADE_DOWN_ANIMATION_VARIANTS}>
							{t('about.paragraph_4')}
						</motion.p>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
};

export default About;

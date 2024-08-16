import { useTranslations } from 'next-intl';

import Reveal from '@/components/reveal';
import Typography from '@/components/typography';

const About: React.FunctionComponent = (): React.ReactNode => {
	const t = useTranslations('homepage');

	return (
		<Reveal>
			<section
				id='about'
				className='flex flex-col gap-y-8 pb-16'>
				<Typography variant='h2'>{t('about.title')}</Typography>
				<div className='relative'>
					<span className='absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 transform text-6xl font-bold text-muted/70 sm:text-9xl md:text-12xl'>
						{t('about.word')}
					</span>
					<div className='relative z-10 flex flex-col gap-y-4'>
						<Typography variant='p'>
							{t('about.paragraph_1')}
						</Typography>
						<Typography variant='p'>
							{t('about.paragraph_2')}
						</Typography>
						<Typography variant='p'>
							{t('about.paragraph_3')}
						</Typography>
						<Typography variant='p'>
							{t('about.paragraph_4')}
						</Typography>
						<Typography variant='p'>
							{t('about.paragraph_5')}
						</Typography>
					</div>
				</div>
			</section>
		</Reveal>
	);
};

export default About;

import { useTranslations } from 'next-intl';

import ExperiencesCarousel from '@/components/experiences-carousel';
import Reveal from '@/components/reveal';
import Typography from '@/components/typography';

const Experiences: React.FunctionComponent = (): React.ReactNode => {
	const t = useTranslations('homepage');

	return (
		<Reveal>
			<section
				id='experience'
				className='flex flex-col gap-y-8 pb-16'>
				<Typography variant='h2'>{t('experience.title')}</Typography>
				<Typography variant='p'>
					{t('experience.description')}
				</Typography>
				<ExperiencesCarousel />
			</section>
		</Reveal>
	);
};

export default Experiences;

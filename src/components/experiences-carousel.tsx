'use client';

import { Fragment } from 'react';
import { experiences } from '@/data/experiences';
import Autoplay from 'embla-carousel-autoplay';
import { useLocale, useTranslations } from 'next-intl';

import { type Locale } from '@/lib/locales';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import ExperienceCard from '@/components/experience-card';
import Typography from '@/components/typography';

const ExperiencesCarousel: React.FunctionComponent = (): React.ReactNode => {
	const locale = useLocale() as Locale;
	const t = useTranslations('homepage');

	return (
		<Carousel
			opts={{
				loop: true,
			}}
			plugins={[
				Autoplay({
					delay: 2250,
				}),
			]}>
			<CarouselContent>
				{!experiences[locale]?.length ? (
					<Typography variant='p'>
						{t('experience.empty_experience')}
					</Typography>
				) : (
					<Fragment>
						{experiences[locale].map(
							(experience, index: number) => (
								<CarouselItem
									key={`${experience.companyName}-${index}`}
									className='md:basis-1/2 lg:basis-1/3'>
									<ExperienceCard
										title={experience.title}
										type={experience.type}
										description={experience.description}
										companyUrl={experience.companyUrl}
										companyImage={experience.companyImage}
										companyName={experience.companyName}
										startDate={experience.startDate}
										endDate={experience.endDate}
									/>
								</CarouselItem>
							),
						)}
					</Fragment>
				)}
			</CarouselContent>
		</Carousel>
	);
};

export default ExperiencesCarousel;

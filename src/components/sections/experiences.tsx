import ExperienceCard from '@/components/experience-card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import {
	experiences,
	type Experience,
	type Experiences,
} from '@/data/experiences';
import { useTranslation } from 'react-i18next';

const Experiences: React.FunctionComponent = (): React.ReactNode => {
	const { t, i18n } = useTranslation();

	return (
		<section id='experiences' className='flex flex-col gap-y-8 pb-16'>
			<h2 className='text-3xl font-semibold tracking-tight'>
				{t('experience.title')}
			</h2>
			<p className='text-pretty leading-7 text-muted-foreground'>
				{t('experience.description')}
			</p>
			<Carousel>
				<CarouselContent>
					{(experiences as Experiences)[i18n.language]?.map(
						(experience: Experience, index: number) => (
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
				</CarouselContent>
			</Carousel>
		</section>
	);
};

export default Experiences;

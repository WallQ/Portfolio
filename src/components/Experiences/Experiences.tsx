import React from 'react';
import { useTranslation } from 'react-i18next';
import ExperiencesDataEN from '../../data/work-en.json';
import ExperiencesDataPT from '../../data/work-pt.json';
import type { ExperienceType } from './Types';

import ExperienceCard from './ExperienceCard/ExperienceCard';

const Experiences: React.FunctionComponent = () => {
	const { t, i18n } = useTranslation();
	const Experiences =
		i18n.language === 'en' ? ExperiencesDataEN : ExperiencesDataPT;

	return (
		<React.Fragment>
			<div className='flex flex-col gap-y-10'>
				<h2 className='text-3xl font-bold capitalize tracking-tight text-gray-900'>
					{t('homepage.experiences.title')}
				</h2>
				<div className='flow-root'>
					<ul role='list'>
						{Experiences.map(
							(experience: ExperienceType, index: number) => (
								<ExperienceCard
									key={`Experience-${index}`}
									spacer={index !== Experiences.length - 1}
									title={experience.title}
									company_name={experience.company_name}
									company_url={experience.company_url}
									employment_type={experience.employment_type}
									start_date={experience.start_date}
									end_date={experience.end_date}
									location={experience.location}
									description={experience.description}
								/>
							),
						)}
					</ul>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Experiences;

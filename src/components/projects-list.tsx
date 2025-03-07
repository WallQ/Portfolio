'use client';

import { Fragment, useCallback, useState } from 'react';
import { projects } from '@/data/projects';
import { useLocale, useTranslations } from 'next-intl';

import { type Locale } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ProjectCard from '@/components/project-card';
import Typography from '@/components/typography';

import Reveal from './reveal';

const ProjectsList: React.FunctionComponent = (): React.ReactNode => {
	const locale = useLocale() as Locale;
	const t = useTranslations('homepage');
	const [visibleProjects, setVisibleProjects] = useState<number>(3);

	const handleShowMoreClick = useCallback(() => {
		setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
	}, []);

	return (
		<Fragment>
			{!projects[locale]?.length ? (
				<Typography variant='p'>
					{t('projects.empty_projects')}
				</Typography>
			) : (
				<Fragment>
					{projects[locale]
						.slice(0, visibleProjects)
						.map((project) => (
							<Reveal
								y={-25}
								innerClassName='flex flex-col gap-y-8'
								key={project.id}>
								<ProjectCard
									id={project.id}
									title={project.title}
									description={project.description}
									thumbnail={project.thumbnail}
									tags={project.tags}
								/>
								<Separator />
							</Reveal>
						))}
					{visibleProjects < projects[locale].length && (
						<Button
							variant='secondary'
							className='mt-8 max-w-fit self-center cursor-pointer'
							onClick={handleShowMoreClick}
							aria-label='Show More'>
							{t('projects.show_more_button')}
						</Button>
					)}
				</Fragment>
			)}
		</Fragment>
	);
};

export default ProjectsList;

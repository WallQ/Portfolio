'use client';

import { Fragment, useState } from 'react';
import { projects } from '@/data/projects';
import { useLocale, useTranslations } from 'next-intl';

import { type Locale } from '@/lib/locales';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Reveal from '@/components/reveal';
import Typography from '@/components/typography';
import ProjectCard from '@/components/project-card';

const Projects: React.FunctionComponent = (): React.ReactNode => {
	const locale = useLocale() as Locale;
	const t = useTranslations('homepage');
	const [visibleProjects, setVisibleProjects] = useState<number>(3);

	return (
		<Reveal>
			<section
				id='projects'
				className='flex flex-col gap-y-8 pb-16'>
				<Typography variant='h2'>{t('projects.title')}</Typography>
				<Typography variant='p'>{t('projects.description')}</Typography>
				{!projects[locale]?.length ? (
					<Typography variant='p'>
						No projects to showcase.
					</Typography>
				) : (
					<Fragment>
						{projects[locale]
							.slice(0, visibleProjects)
							.map((project) => (
								<Fragment key={project.id}>
									<ProjectCard
										id={project.id}
										title={project.title}
										description={project.description}
										thumbnail={project.thumbnail}
										tags={project.tags}
									/>
									<Separator />
								</Fragment>
							))}
						{visibleProjects < projects[locale].length && (
							<Button
								variant='secondary'
								className='mt-8 max-w-fit self-center'
								onClick={() =>
									setVisibleProjects(
										(prevVisibleProjects) =>
											prevVisibleProjects + 3,
									)
								}
								aria-label='Show More'>
								{t('projects.show_more_button')}
							</Button>
						)}
					</Fragment>
				)}
			</section>
		</Reveal>
	);
};

export default Projects;

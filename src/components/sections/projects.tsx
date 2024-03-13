import ProjectCard from '@/components/project-card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { projects, type Project, type Projects } from '@/data/projects';
import { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Projects: React.FunctionComponent = (): React.ReactNode => {
	const { t, i18n } = useTranslation();
	const [visibleProjects, setVisibleProjects] = useState<number>(3);

	return (
		<section id='projects' className='flex flex-col gap-y-8 pb-16'>
			<h2 className='text-3xl font-semibold tracking-tight'>
				{t('projects.title')}
			</h2>
			<p className='text-pretty leading-7 text-muted-foreground'>
				{t('projects.description')}
			</p>
			{(projects as Projects)[i18n.language]
				.slice(0, visibleProjects)
				.map((project: Project, index: number) => (
					<Fragment key={`${project.title}-${index}`}>
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
			{visibleProjects < projects[i18n.language].length && (
				<Button
					variant='secondary'
					className='mt-8 max-w-fit self-center'
					onClick={() =>
						setVisibleProjects(
							(prevVisibleProjects) => prevVisibleProjects + 3,
						)
					}>
					{t('projects.show_more_button')}
				</Button>
			)}
		</section>
	);
};

export default Projects;

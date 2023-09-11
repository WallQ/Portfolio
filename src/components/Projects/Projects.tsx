import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectsData from '../../data/projects.json';
import type { ProjectType } from './Types';

import ProjectCard from './ProjectCard/ProjectCard';

const Projects: React.FunctionComponent = () => {
	const { t } = useTranslation();

	const [visibleProjects, setVisibleProjects] = React.useState<ProjectType[]>(
		ProjectsData.slice(0, 6),
	);

	const handleLoadMore = () => {
		const currentlyVisibleProjects = visibleProjects.length;
		const additionalProjects = ProjectsData.slice(
			currentlyVisibleProjects,
			currentlyVisibleProjects + 3,
		);
		setVisibleProjects([...visibleProjects, ...additionalProjects]);
	};

	return (
		<React.Fragment>
			<section className='flex flex-col items-center justify-center gap-y-16'>
				<h2 className='text-3xl font-bold capitalize tracking-tight text-gray-900'>
					{t('homepage.projects.title')}
				</h2>
				<div className='grid grid-cols-1 content-center justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3'>
					{visibleProjects.map(
						(project: ProjectType, index: number) => (
							<ProjectCard
								key={`Project-${index}`}
								external_url={project.url}
								image_alt={project.image.alt}
								image_url={project.image.url}
							/>
						),
					)}
				</div>
				{ProjectsData.length > visibleProjects.length && (
					<button
						className='max-w-max rounded-sm bg-primary px-4 py-2 text-lg font-medium text-white hover:opacity-75'
						onClick={handleLoadMore}>
						View More
					</button>
				)}
			</section>
		</React.Fragment>
	);
};

export default Projects;

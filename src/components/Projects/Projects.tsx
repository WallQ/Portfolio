import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectsData from '../../data/projects.json';
import type { ProjectType } from './Types';

import ProjectCard from './ProjectCard/ProjectCard';

const Projects: React.FunctionComponent = () => {
	const { t } = useTranslation();
	return (
		<React.Fragment>
			<div className='flex flex-col gap-y-16'>
				<h2 className='text-3xl font-bold capitalize tracking-tight text-gray-900'>
					{t('homepage.projects.title')}
				</h2>
				<div className='grid grid-cols-1 content-center justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3'>
					{ProjectsData.map((project: ProjectType, index: number) => (
						<ProjectCard
							key={`Project-${index}`}
							external_url={project.url}
							image_alt={project.image.alt}
							image_url={project.image.url}
						/>
					))}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;

import React from 'react';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchProjects } from '../../services/projects';
import { IProject } from '../../interfaces/projects';

import ProjectCard from '../ProjectCard/ProjectCard';

const ProjectsShowcase: React.FunctionComponent = () => {
	const { isLoading, error, data }: UseQueryResult<IProject[], Error> =
		useQuery<IProject[], Error>(['projects'], fetchProjects);

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error...{error.message}</p>;

	return (
		<React.Fragment>
			<div className='flex flex-col gap-y-8'>
				<h2 className='text-3xl font-bold tracking-tight text-gray-900'>
					Latest Projects
				</h2>
				<div className='grid grid-cols-1 content-center justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3'>
					{data.map((project, index: number) => (
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

export default ProjectsShowcase;

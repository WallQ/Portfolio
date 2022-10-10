import React from 'react';

interface Props {
	external_url: string;
	image_url: string;
	image_alt: string;
}

const ProjectCard: React.FunctionComponent<Props> = ({
	external_url,
	image_url,
	image_alt,
}) => {
	return (
		<React.Fragment>
			<a
				href={external_url}
				target='_blank'
				rel='noreferrer'
				className='rounded-sm shadow-sm transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg'>
				<img
					src={image_url}
					alt={image_alt}
					width={1280}
					height={800}
					loading='lazy'
				/>
			</a>
		</React.Fragment>
	);
};

export default ProjectCard;

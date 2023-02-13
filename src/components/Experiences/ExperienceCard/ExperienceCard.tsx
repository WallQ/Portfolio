import React from 'react';
import { BriefcaseIcon } from '@heroicons/react/24/solid';

interface Props {
	spacer: boolean;
	title: string;
	company_name: string;
	company_url: string;
	employment_type: string;
	start_date: string;
	end_date: string;
	location: string;
	description: string;
}

const ProjectCard: React.FunctionComponent<Props> = ({
	spacer,
	title,
	company_name,
	company_url,
	employment_type,
	start_date,
	end_date,
	location,
	description,
}) => {
	return (
		<React.Fragment>
			<li className='relative pb-8'>
				{spacer ? (
					<span
						className='absolute top-4 left-4 -ml-px hidden h-full w-0.5 bg-gray-200 sm:block'
						aria-hidden='true'
					/>
				) : null}
				<div className='relative flex flex-row items-start justify-between gap-x-4'>
					<span className='hidden h-8 w-8 flex-row items-center justify-center rounded-full bg-primary ring-8 ring-white sm:flex'>
						<BriefcaseIcon
							className='h-5 w-5 text-white'
							aria-hidden='true'
						/>
					</span>
					<div className='flex flex-1 flex-col items-start justify-between gap-y-4'>
						<div className='flex w-full flex-col'>
							<div className='flex flex-col justify-between md:flex-row'>
								<p className='text-base text-gray-600'>
									{title},&nbsp;
									<span className='font-medium text-gray-900'>
										{employment_type}
									</span>
								</p>
								<div className='hidden text-sm text-gray-600 md:block'>
									{start_date} - {end_date}
								</div>
							</div>
							<div className='flex flex-col justify-between md:flex-row'>
								<p className='text-sm text-gray-600'>
									<a
										href={company_url}
										target='_blank'
										rel='noreferrer'
										className='font-medium text-primary hover:opacity-75'>
										{company_name}
									</a>
									&nbsp;&sdot; {location}
								</p>
								<div className='block text-sm text-gray-600 md:hidden'>
									{start_date} - {end_date}
								</div>
							</div>
						</div>
						<p
							className='text-base text-gray-900'
							dangerouslySetInnerHTML={{
								__html: description,
							}}></p>
					</div>
				</div>
			</li>
		</React.Fragment>
	);
};

export default ProjectCard;

import React from 'react';
import { useTranslation } from 'react-i18next';

import Logos from './TechnologiesLogos';

const Technologies: React.FunctionComponent = () => {
	const { t } = useTranslation();
	return (
		<React.Fragment>
			<div className='flex flex-col gap-y-16'>
				<h2 className='text-3xl font-bold capitalize tracking-tight text-gray-900'>
					{t('homepage.technologies.title')}
				</h2>
				<div className='grid grid-cols-2 content-center justify-items-center gap-8 md:grid-cols-3 lg:grid-cols-5'>
					{Logos.map((Icon: string, index: number) => {
						return (
							<img
								key={`Logo-${index}`}
								src={Icon}
								alt={`Technology Logo ${index}`}
								className='h-16 w-16'
								loading='lazy'
							/>
						);
					})}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Technologies;

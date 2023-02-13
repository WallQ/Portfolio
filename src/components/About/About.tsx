import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FunctionComponent = () => {
	const { t } = useTranslation();
	return (
		<React.Fragment>
			<div className='flex flex-col gap-y-16'>
				<h2 className='text-3xl font-bold capitalize tracking-tight text-gray-900'>
					{t('homepage.about.title')}
				</h2>
				<div className='grid grid-cols-1 content-center justify-items-center gap-8 md:grid-cols-1 lg:grid-cols-1'>
					<p className='text-base text-gray-900'>
						{t('homepage.about.paragraph1')}
					</p>
					<p className='text-base text-gray-900'>
						{t('homepage.about.paragraph2')}
					</p>
					<p className='text-base text-gray-900'>
						{t('homepage.about.paragraph3')}
					</p>
					<p className='text-base text-gray-900'>
						{t('homepage.about.paragraph4')}
					</p>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;

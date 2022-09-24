import React from 'react';
import { useTranslation } from 'react-i18next';

import LinkedIn from '../../assets/icons/linkedin.svg';
import GitHub from '../../assets/icons/github.svg';
import Email from '../../assets/icons/email.svg';

const Header = () => {
	const { t } = useTranslation();
	return (
		<React.Fragment>
			<header className='flex w-3/5 flex-col items-start justify-center gap-y-4 py-24'>
				<div className='flex flex-col items-start justify-center'>
					<h1 className='text-4xl font-bold text-gray-900'>
						{t('homepage.header.title')}
					</h1>
					<h1 className='text-4xl font-bold text-gray-900'>
						{t('homepage.header.subtitle')}
					</h1>
				</div>
				<p className='text-lg font-normal text-gray-600'>
					{t('homepage.header.paragraph')}
				</p>
				<div className='flex flex-row items-center justify-center gap-x-2'>
					<a
						href='https://www.linkedin.com/in/sergiofelixdev/'
						target='_blank'
						rel='noreferrer'>
						<img
							src={LinkedIn}
							alt='Linkedin Logo'
							className='h-6 w-6'
						/>
					</a>
					<a
						href='https://github.com/WallQ'
						target='_blank'
						rel='noreferrer'>
						<img
							src={GitHub}
							alt='GitHub Logo'
							className='h-6 w-6'
						/>
					</a>
					<a href='mailto:sergiofelixdev@gmail.com'>
						<img
							src={Email}
							alt='GitHub Logo'
							className='h-6 w-6'
						/>
					</a>
				</div>
			</header>
		</React.Fragment>
	);
};

export default Header;

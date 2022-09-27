import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

import ProfilePicture from '../../assets/profile_picture.png';
import LinkedIn from '../../assets/icons/linkedin.svg';
import GitHub from '../../assets/icons/github.svg';
import Email from '../../assets/icons/email.svg';

const Header: React.FunctionComponent = () => {
	const { t } = useTranslation();
	return (
		<React.Fragment>
			<header className='flex flex-row items-center justify-between py-24'>
				<div className='flex w-full flex-col items-start justify-center gap-y-4 sm:w-3/5 lg:w-1/2'>
					<div className='flex flex-col items-start justify-center'>
						<h1 className='text-4xl font-bold tracking-tight text-gray-900'>
							<Trans
								i18nKey='homepage.header.title'
								components={{
									span: <span className='text-primary' />,
								}}
							/>
						</h1>
						<h1 className='text-4xl font-bold tracking-tight text-gray-900'>
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
					<a className='flex flex-row items-center justify-center gap-x-2 bg-primary px-4 py-2 font-medium text-white'>
						Download CV
						<ArrowDownTrayIcon
							className='h-4 w-4'
							aria-hidden='true'
						/>
					</a>
				</div>
				<div className='hidden flex-1 items-center justify-center md:flex'>
					<div
						className='h-64 w-64 rounded-full bg-cover bg-top bg-no-repeat'
						style={{
							backgroundImage: `url(${ProfilePicture})`,
						}}
					/>
				</div>
			</header>
		</React.Fragment>
	);
};

export default Header;

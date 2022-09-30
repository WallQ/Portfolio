import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

import ProfilePicture from '../../assets/images/profile/profile_picture.webp';

const Header: React.FunctionComponent = () => {
	const { t } = useTranslation();
	return (
		<React.Fragment>
			<header className='flex flex-row items-center justify-between'>
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
					<a
						href='./docs/cv.pdf'
						target='_blank'
						rel='noreferrer'
						className='flex flex-row items-center justify-center gap-x-2 bg-primary px-4 py-2 font-medium text-white'>
						Download CV
						<ArrowDownTrayIcon
							className='h-4 w-4'
							aria-hidden='true'
						/>
					</a>
				</div>
				<div className='hidden flex-1 items-center justify-center md:flex'>
					<div
						className='h-64 w-64 rounded-full bg-transparent bg-cover bg-top bg-no-repeat'
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

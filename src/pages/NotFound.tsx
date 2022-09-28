import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const NotFound: React.FunctionComponent = () => {
	const { t } = useTranslation();
	return (
		<React.Fragment>
			<main className='mx-auto flex h-screen w-full flex-col items-center justify-center px-8 sm:w-3/5 lg:w-1/2'>
				<div className='flex flex-col items-start justify-items-center gap-y-4'>
					<h1 className='text-4xl font-bold text-gray-900'>
						{t('notfound.title')}
					</h1>
					<p className='text-lg font-normal text-gray-600'>
						{t('notfound.paragraph1')}
						<span className='font-bold'>
							wallq.github.io/Portfolio.com
						</span>
					</p>
					<p className='text-lg font-normal text-gray-600'>
						{t('notfound.paragraph2')}
						<a
							href='mailto:sergiofelixdev@gmail.com'
							className='text-base font-normal text-primary hover:opacity-75'>
							sergiofelixdev@gmail.com
						</a>
						<br />
					</p>
					<a
						href='/Portfolio/'
						className='flex flex-row items-center justify-center gap-x-2 text-base font-bold text-primary hover:opacity-75'>
						{t('notfound.url_text')}
						<ArrowLongRightIcon
							className='h-6 w-6'
							aria-hidden='true'
						/>
					</a>
				</div>
			</main>
		</React.Fragment>
	);
};

export default NotFound;

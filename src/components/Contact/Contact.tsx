import React from 'react';
import { useTranslation } from 'react-i18next';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

const Contact: React.FunctionComponent = () => {
	const { t } = useTranslation();
	return (
		<React.Fragment>
			<section className='mt-16 w-full bg-primary px-8 py-16'>
				<div className='flex flex-col items-center justify-center gap-y-8'>
					<h3 className='text-center text-4xl font-bold capitalize tracking-tight text-white'>
						{t('homepage.contact.title')}
					</h3>
					<p className='w-4/5 text-center text-lg font-normal text-gray-100 sm:w-3/5 lg:w-2/5'>
						{t('homepage.contact.paragraph')}
					</p>
					<a
						href='mailto:sergiofelixdev@gmail.com'
						target='_blank'
						rel='noreferrer'
						className='flex flex-row items-center justify-center gap-x-2 rounded-sm bg-secondary px-6 py-4 text-base font-bold text-gray-900 hover:opacity-75'>
						{t('homepage.contact.button_text')}
						<PaperAirplaneIcon
							className='h-4 w-4'
							aria-hidden='true'
						/>
					</a>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Contact;

import React from 'react';
import { useTranslation } from 'react-i18next';

import LinkedIn from '../../assets/icons/socials/linkedin.svg';
import GitHub from '../../assets/icons/socials/github.svg';

const Footer: React.FunctionComponent = () => {
	const { t } = useTranslation();
	return (
		<React.Fragment>
			<footer className='mx-auto max-w-7xl p-8'>
				<div className='flex flex-col items-center justify-center gap-y-4'>
					<div className='flex flex-row items-center justify-center gap-x-4'>
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
					</div>
					<small className='text-base font-normal text-gray-900'>
						&copy; {new Date().getFullYear()} Sérgio Félix.{' '}
						{t('footer.text')}
					</small>
				</div>
			</footer>
		</React.Fragment>
	);
};

export default Footer;

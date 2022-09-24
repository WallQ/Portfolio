import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { t } = useTranslation();
	return (
		<React.Fragment>
			<footer className='mx-auto max-w-7xl px-8 py-4'>
				<div className='flex flex-row items-center justify-between border-t border-gray-300 pt-6'>
					<div className='flex flex-row items-center justify-between gap-x-4'>
						<a
							href='/Portfolio/privacy-policy'
							className='text-base font-normal text-gray-900'>
							{t('footer.footeritems.item1')}
						</a>
						<a
							href='/Portfolio/terms-conditions'
							className='text-base font-normal text-gray-900'>
							{t('footer.footeritems.item2')}
						</a>
						<a
							href='/Portfolio/cookies-policy'
							className='text-base font-normal text-gray-900'>
							{t('footer.footeritems.item3')}
						</a>
					</div>
					<small className='text-base font-normal text-gray-900'>
						&copy; {new Date().getFullYear()} Sérgio Félix
					</small>
				</div>
			</footer>
		</React.Fragment>
	);
};

export default Footer;

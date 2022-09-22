import React from 'react';

const Footer = () => {
	return (
		<React.Fragment>
			<footer className='mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8'>
				<div className='flex flex-row items-center justify-between border-t border-gray-300 pt-6'>
					<div className='flex flex-row items-center justify-between gap-x-4'>
						<a
							href='/Portfolio/cookie-policy'
							className='text-base font-normal text-gray-900'>
							Cookie Policy
						</a>
						<a
							href='/Portfolio/legal-notice'
							className='text-base font-normal text-gray-900'>
							Legal Notice
						</a>
						<a
							href='/Portfolio/privacy-policy'
							className='text-base font-normal text-gray-900'>
							Privacy Policy
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

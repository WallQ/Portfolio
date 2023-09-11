import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, Transition } from '@headlessui/react';
import {
	CheckIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from '@heroicons/react/24/outline';

import GB from '../../assets/icons/flags/gb.svg';
import ES from '../../assets/icons/flags/es.svg';
import PT from '../../assets/icons/flags/pt.svg';

import LinkedIn from '../../assets/icons/socials/linkedin.svg';
import GitHub from '../../assets/icons/socials/github.svg';

const Navbar: React.FunctionComponent = () => {
	const { i18n } = useTranslation();

	const flagBaseOnLanguage =
		i18n.language === 'en' ? (
			<img src={GB} alt='Great Britain Flag' className='h-5 w-5' />
		) : i18n.language === 'es' ? (
			<img src={ES} alt='Spanish Flag' className='h-5 w-5' />
		) : (
			<img src={PT} alt='Portuguese Flag' className='h-5 w-5' />
		);

	const handleChangeLanguage = (language: string) => {
		i18n.changeLanguage(language);
		localStorage.setItem('language', language);
	};

	return (
		<React.Fragment>
			<nav className='mx-auto max-w-7xl p-8'>
				<div className='flex flex-row items-center justify-between'>
					<a
						href='/Portfolio/'
						className='inline-flex items-center justify-center text-base font-bold capitalize text-primary'>
						<span className='font-extrabold text-gray-900'>
							&#123;
						</span>
						&nbsp;Sérgio Félix&nbsp;
						<span className='font-extrabold text-gray-900'>
							&#125;
						</span>
					</a>
					<div className='flex flex-row items-center justify-between gap-x-4'>
						<div className='flex flex-row items-center justify-center gap-x-4'>
							<a
								href='https://www.linkedin.com/in/sergiofelixdev/'
								target='_blank'
								rel='noreferrer'>
								<img
									src={LinkedIn}
									alt='Linkedin Logo'
									className='h-5 w-5'
								/>
							</a>
							<a
								href='https://github.com/WallQ'
								target='_blank'
								rel='noreferrer'>
								<img
									src={GitHub}
									alt='GitHub Logo'
									className='h-5 w-5'
								/>
							</a>
						</div>
						<div className='static inset-auto flex items-center'>
							<Menu as='div' className='relative'>
								{({ open }) => (
									<React.Fragment>
										<Menu.Button className='flex flex-row items-center justify-between'>
											<div className='flex flex-row items-center justify-between gap-x-2'>
												<span className='sr-only'>
													Open language menu
												</span>
												{flagBaseOnLanguage}
												<span className='text-sm font-normal capitalize text-gray-900'>
													{i18n.language === 'en'
														? 'EN'
														: i18n.language === 'es'
														? 'ES'
														: 'PT'}
												</span>
											</div>
											{open ? (
												<ChevronUpIcon
													className='h-5 w-5'
													aria-hidden='true'
												/>
											) : (
												<ChevronDownIcon
													className='h-5 w-5'
													aria-hidden='true'
												/>
											)}
										</Menu.Button>
										<Transition
											as={React.Fragment}
											enter='transition ease-out duration-100'
											enterFrom='transform opacity-0 scale-95'
											enterTo='transform opacity-100 scale-100'
											leave='transition ease-in duration-75'
											leaveFrom='transform opacity-100 scale-100'
											leaveTo='transform opacity-0 scale-95'>
											<Menu.Items className='absolute right-0 z-10 mt-2 w-auto origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
												<Menu.Item>
													{({ active }) => (
														<button
															onClick={() =>
																handleChangeLanguage(
																	'en',
																)
															}
															className={`${
																active
																	? 'bg-gray-100'
																	: ''
															} flex w-full flex-row items-center justify-start gap-x-1 px-4 py-2 text-sm font-normal text-gray-900`}>
															English
															{i18n.language ===
															'en' ? (
																<CheckIcon
																	className='h-4 w-4 text-primary'
																	aria-hidden='true'
																/>
															) : null}
														</button>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<button
															onClick={() =>
																handleChangeLanguage(
																	'es',
																)
															}
															className={`${
																active
																	? 'bg-gray-100'
																	: ''
															} flex w-full flex-row items-center justify-start gap-x-1 px-4 py-2 text-sm font-normal text-gray-900`}>
															Español
															{i18n.language ===
															'es' ? (
																<CheckIcon
																	className='h-4 w-4 text-primary'
																	aria-hidden='true'
																/>
															) : null}
														</button>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<button
															onClick={() =>
																handleChangeLanguage(
																	'pt',
																)
															}
															className={`${
																active
																	? 'bg-gray-100'
																	: ''
															} flex w-full flex-row items-center justify-start gap-x-1 px-4 py-2 text-sm font-normal text-gray-900`}>
															Português
															{i18n.language ===
															'pt' ? (
																<CheckIcon
																	className='h-4 w-4 text-primary'
																	aria-hidden='true'
																/>
															) : null}
														</button>
													)}
												</Menu.Item>
											</Menu.Items>
										</Transition>
									</React.Fragment>
								)}
							</Menu>
						</div>
					</div>
				</div>
			</nav>
		</React.Fragment>
	);
};

export default Navbar;

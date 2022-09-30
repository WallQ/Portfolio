import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, Transition } from '@headlessui/react';
import {
	CheckIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from '@heroicons/react/24/outline';
import GB from '../../assets/icons/flags/gb.svg';
import PT from '../../assets/icons/flags/pt.svg';

const Navbar: React.FunctionComponent = () => {
	const { i18n } = useTranslation();

	const flagBaseOnLanguage =
		i18n.language === 'en' ? (
			<img src={GB} alt='Great Britain Flag' className='h-4 w-4' />
		) : (
			<img src={PT} alt='Portuguese Flag' className='h-4 w-4' />
		);

	const handleChangeLanguage = (language: string) => {
		i18n.changeLanguage(language);
		localStorage.setItem('language', language);
	};

	return (
		<React.Fragment>
			<nav className='mx-auto max-w-7xl px-8 py-4'>
				<div className='flex flex-row flex-wrap items-center justify-between'>
					<a
						href='/Portfolio/'
						className='text-base font-bold capitalize text-gray-900'>
						Sérgio Félix
					</a>
					<div className='flex flex-row flex-wrap items-center justify-between gap-x-4'>
						<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0'>
							<Menu as='div' className='relative'>
								{({ open }) => (
									<React.Fragment>
										<Menu.Button className='flex flex-row items-center justify-between gap-x-1'>
											<span className='sr-only'>
												Open language menu
											</span>
											{flagBaseOnLanguage}
											<span className='text-base font-normal capitalize text-gray-900'>
												{i18n.language === 'en'
													? 'EN'
													: 'PT'}
											</span>
											{open ? (
												<ChevronDownIcon
													className='h-4 w-4'
													aria-hidden='true'
												/>
											) : (
												<ChevronUpIcon
													className='h-4 w-4'
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
															} flex w-full flex-row items-center justify-center gap-x-1 px-4 py-2 text-sm font-normal text-gray-900`}>
															{i18n.language ===
															'en' ? (
																<CheckIcon
																	className='h-4 w-4 text-primary'
																	aria-hidden='true'
																/>
															) : null}
															English
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
															} flex w-full flex-row items-center justify-center gap-x-1 px-4 py-2 text-sm font-normal text-gray-900`}>
															{i18n.language ===
															'pt' ? (
																<CheckIcon
																	className='h-4 w-4 text-primary'
																	aria-hidden='true'
																/>
															) : null}
															Português
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

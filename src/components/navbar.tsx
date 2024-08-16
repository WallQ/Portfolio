import Link from 'next/link';
import { languages } from '@/data/languages';
import { themes } from '@/data/themes';
import { APP_ROUTES } from '@/routes/app';
import { Contrast, Languages, Menu, Settings } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button, buttonVariants } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import Icons from '@/components/icons';
import LanguageSwitcher from '@/components/language-switcher';
import ThemeSwitcher from '@/components/theme-switcher';

const Navbar: React.FunctionComponent = (): React.ReactNode => {
	const t = useTranslations('navbar');

	return (
		<header className='sticky top-0 z-50 border-b border-border/50 bg-background/70 py-6 backdrop-blur-lg backdrop-filter'>
			<div className='mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
				<Link
					href={APP_ROUTES.HOME}
					className='inline-flex items-center font-bold text-primary'>
					<span className='font-bold text-secondary-foreground'>
						&#123;
					</span>
					&nbsp; Sérgio Félix&nbsp;
					<span className='font-bold text-secondary-foreground'>
						&#125;
					</span>
				</Link>
				<div className='hidden items-center justify-between md:flex'>
					<nav>
						<ul className='flex'>
							<li>
								<Link
									href={`${APP_ROUTES.HOME}/#home`}
									className={`${buttonVariants({
										variant: 'link',
									})} text-secondary-foreground`}>
									Home.
								</Link>
							</li>
							<li>
								<Link
									href={`${APP_ROUTES.HOME}/#about`}
									className={`${buttonVariants({
										variant: 'link',
									})} text-secondary-foreground`}>
									{t('about')}.
								</Link>
							</li>
							<li>
								<Link
									href={`${APP_ROUTES.HOME}/#experience`}
									className={`${buttonVariants({
										variant: 'link',
									})} text-secondary-foreground`}>
									{t('experience')}.
								</Link>
							</li>
							<li>
								<Link
									href={`${APP_ROUTES.HOME}/#projects`}
									className={`${buttonVariants({
										variant: 'link',
									})} text-secondary-foreground`}>
									{t('projects')}.
								</Link>
							</li>
							<li>
								<Link
									href={`${APP_ROUTES.HOME}/#contact`}
									className={`${buttonVariants({
										variant: 'link',
									})} text-secondary-foreground`}>
									{t('contact')}.
								</Link>
							</li>
						</ul>
					</nav>
					<div className='flex'>
						<a
							href='https://www.linkedin.com/in/sergiofelixdev'
							rel='noopener noreferrer'
							target='_blank'
							className={buttonVariants({
								variant: 'ghost',
								size: 'sm',
							})}>
							<Icons.LinkedIn className='size-4 fill-[#0A66C2]' />
						</a>
						<a
							href='https://github.com/WallQ'
							rel='noopener noreferrer'
							target='_blank'
							className={buttonVariants({
								variant: 'ghost',
								size: 'sm',
							})}>
							<Icons.GitHub className='size-4 fill-[#181717]' />
						</a>
						<DropdownMenu>
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<DropdownMenuTrigger asChild>
											<Button
												variant='ghost'
												size='sm'
												aria-label='Open Settings Menu'>
												<span className='sr-only'>
													Open Settings Menu
												</span>
												<Settings className='size-4' />
											</Button>
										</DropdownMenuTrigger>
									</TooltipTrigger>
									<TooltipContent>
										<p>Settings</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
							<DropdownMenuContent>
								<DropdownMenuLabel>Settings</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuGroup>
									<DropdownMenuSub>
										<DropdownMenuSubTrigger className='flex items-center justify-between gap-x-2'>
											<Contrast className='size-4' />
											<span>Appearance</span>
										</DropdownMenuSubTrigger>
										<DropdownMenuPortal>
											<DropdownMenuSubContent>
												{themes.map((theme) => (
													<DropdownMenuItem
														key={theme.code}>
														<ThemeSwitcher
															themeType={
																theme.code
															}
															title={theme.name}
															icon={theme.icon}
														/>
													</DropdownMenuItem>
												))}
											</DropdownMenuSubContent>
										</DropdownMenuPortal>
									</DropdownMenuSub>
									<DropdownMenuSub>
										<DropdownMenuSubTrigger className='flex items-center justify-between gap-x-2'>
											<Languages className='size-4' />
											<span>Language</span>
										</DropdownMenuSubTrigger>
										<DropdownMenuPortal>
											<DropdownMenuSubContent>
												{languages.map((language) => (
													<DropdownMenuItem
														key={language.code}>
														<LanguageSwitcher
															lang={language.code}
															title={
																language.name
															}
															icon={language.icon}
														/>
													</DropdownMenuItem>
												))}
											</DropdownMenuSubContent>
										</DropdownMenuPortal>
									</DropdownMenuSub>
								</DropdownMenuGroup>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
				<div className='flex md:hidden'>
					<DropdownMenu>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<DropdownMenuTrigger asChild>
										<Button
											variant='ghost'
											size='sm'
											aria-label='Open Menu'>
											<Menu className='size-4' />
										</Button>
									</DropdownMenuTrigger>
								</TooltipTrigger>
								<TooltipContent>
									<p>Menu</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
						<DropdownMenuContent>
							<DropdownMenuLabel>Menu</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuGroup>
								<DropdownMenuItem>
									<Link
										href={`${APP_ROUTES.HOME}/#home`}
										className='w-full'>
										Home
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Link
										href={`${APP_ROUTES.HOME}/#about`}
										className='w-full'>
										About
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Link
										href={`${APP_ROUTES.HOME}/#experience`}
										className='w-full'>
										Experience
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Link
										href={`${APP_ROUTES.HOME}/#projects`}
										className='w-full'>
										Projects
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Link
										href={`${APP_ROUTES.HOME}/#contact`}
										className='w-full'>
										Contact
									</Link>
								</DropdownMenuItem>
							</DropdownMenuGroup>
							<DropdownMenuSeparator />
							<DropdownMenuGroup>
								<DropdownMenuItem>
									<a
										href='https://www.linkedin.com/in/sergiofelixdev'
										rel='noopener noreferrer'
										target='_blank'
										className='inline-flex w-full cursor-pointer items-center'>
										<Icons.LinkedIn className='size-4 mr-2 fill-[#0A66C2]' />
										LinkedIn
									</a>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<a
										href='https://github.com/WallQ'
										rel='noopener noreferrer'
										target='_blank'
										className='inline-flex w-full cursor-pointer items-center'>
										<Icons.GitHub className='size-4 mr-2 fill-[#181717]' />
										GitHub
									</a>
								</DropdownMenuItem>
							</DropdownMenuGroup>
							<DropdownMenuSeparator />
							<DropdownMenuGroup>
								<DropdownMenuSub>
									<DropdownMenuSubTrigger className='flex items-center justify-between gap-x-2'>
										<Contrast className='size-4' />
										<span>Appearance</span>
									</DropdownMenuSubTrigger>
									<DropdownMenuPortal>
										<DropdownMenuSubContent>
											{themes.map((theme) => (
												<DropdownMenuItem
													key={theme.code}>
													<ThemeSwitcher
														themeType={theme.code}
														title={theme.name}
														icon={theme.icon}
													/>
												</DropdownMenuItem>
											))}
										</DropdownMenuSubContent>
									</DropdownMenuPortal>
								</DropdownMenuSub>
								<DropdownMenuSub>
									<DropdownMenuSubTrigger className='flex items-center justify-between gap-x-2'>
										<Languages className='size-4' />
										<span>Language</span>
									</DropdownMenuSubTrigger>
									<DropdownMenuPortal>
										<DropdownMenuSubContent>
											{languages.map((language) => (
												<DropdownMenuItem
													key={language.code}>
													<LanguageSwitcher
														lang={language.code}
														title={language.name}
														icon={language.icon}
													/>
												</DropdownMenuItem>
											))}
										</DropdownMenuSubContent>
									</DropdownMenuPortal>
								</DropdownMenuSub>
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</header>
	);
};

export default Navbar;

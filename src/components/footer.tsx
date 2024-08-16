import Link from 'next/link';
import { APP_ROUTES } from '@/routes/app';
import { useTranslations } from 'next-intl';

import Icons from '@/components/icons';

const Footer: React.FunctionComponent = (): React.ReactNode => {
	const t = useTranslations('footer');

	return (
		<footer className='border-t border-border/50 py-6'>
			<div className='mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
				<small className='text-xs text-muted-foreground'>
					{t('creator')}
					<a
						href='https://github.com/WallQ/Portfolio'
						rel='noopener noreferrer'
						target='_blank'
						className='text-primary hover:underline'>
						Sérgio Félix
					</a>
					.
					<br />
					<a
						href='https://creativecommons.org/licenses/by-nc-sa/4.0'
						rel='noopener noreferrer'
						target='_blank'
						className='text-primary hover:underline'>
						CC BY-NC-SA 4.0
					</a>
					&nbsp; 2024-{new Date().getFullYear()} &copy; Sérgio Félix.
				</small>
				<Link href={APP_ROUTES.HOME}>
					<Icons.Logo className='size-6' />
					<span className='sr-only'>Logo</span>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;

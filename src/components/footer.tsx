import Link from 'next/link';
import { APP_ROUTES } from '@/routes/app';

import Icons from '@/components/icons';

const Footer: React.FunctionComponent = (): React.ReactNode => {
	return (
		<footer className='border-t border-border/50 py-6'>
			<div className='mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
				<small className='text-xs text-muted-foreground'>
					Made with &#10084;&#65039; by&nbsp;
					<a
						href='https://github.com/WallQ/Portfolio'
						rel='noopener noreferrer'
						target='_blank'
						className='text-primary hover:underline'>
						Sérgio Félix
					</a>
					.
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

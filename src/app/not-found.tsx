import Link from 'next/link';
import { APP_ROUTES } from '@/routes/app';
import { ArrowLeft, Frown } from 'lucide-react';

import { getBaseUrl } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import Typography from '@/components/typography';

// type NotFoundPageProps = {
// 	params: {
// 		locale: Locale;
// 	};
// };

export default function NotFoundPage() {
	// unstable_setRequestLocale(params.locale);

	return (
		<div className='flex flex-col items-center justify-center gap-8 text-center'>
			<Frown className='size-56' />
			<Typography variant='h1'>
				Sorry, this page wasn&apos;t found!
			</Typography>
			<Typography
				variant='p'
				className='text-center max-w-4xl'>
				The page you are looking for wasn&apos;t found on&nbsp;
				<strong>{getBaseUrl().replace(/^https?:\/\//, '')}</strong>. If
				you think this is a link that should be fixed, please let the
				highly trained specialist monkey know via email at:&nbsp;
				<a
					href='mailto:sergiofelixdev@gmail.com'
					className='text-primary hover:underline'>
					sergiofelixdev@gmail.com
				</a>
			</Typography>
			<Link
				href={APP_ROUTES.HOME}
				className={buttonVariants({ variant: 'default' })}>
				<ArrowLeft className='mr-2 size-4' />
				Go back
			</Link>
		</div>
	);
}

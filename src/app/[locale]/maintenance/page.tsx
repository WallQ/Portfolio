import { unstable_setRequestLocale } from 'next-intl/server';

import { type Locale } from '@/lib/locales';
import Typography from '@/components/typography';

type MaintenancePageProps = {
	params: {
		locale: Locale;
	};
};

export default function MaintenancePage({ params }: MaintenancePageProps) {
	unstable_setRequestLocale(params.locale);

	return (
		<main>
			<Typography variant='h1'>
				Oops! We are still building the pages the tornado took away...
			</Typography>
			<Typography variant='p'>
				We are currently under maintenance. Please come back later. We
				apologize for any inconvenience this may cause you.
			</Typography>
		</main>
	);
}

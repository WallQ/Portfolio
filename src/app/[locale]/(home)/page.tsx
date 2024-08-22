import { Fragment } from 'react';
import About from '@/sections/about';
import Contact from '@/sections/contact';
import Experiences from '@/sections/experiences';
import Hero from '@/sections/hero';
import Projects from '@/sections/projects';
import { unstable_setRequestLocale } from 'next-intl/server';

import { type Locale } from '@/lib/locales';

type HomePageProps = {
	params: {
		locale: Locale;
	};
};

export default function HomePage({ params }: HomePageProps) {
	unstable_setRequestLocale(params.locale);

	return (
		<Fragment>
			<Hero />
			<About />
			<Experiences />
			<Projects />
			<Contact />
		</Fragment>
	);
}

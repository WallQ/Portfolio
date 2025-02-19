import { Fragment } from 'react';

import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Experiences from '@/components/sections/experiences';
import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';

export default function HomePage() {
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

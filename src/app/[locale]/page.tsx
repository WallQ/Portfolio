import { Fragment } from 'react';
import About from '@/sections/about';
import Contact from '@/sections/contact';
import Experiences from '@/sections/experiences';
import Hero from '@/sections/hero';
import Projects from '@/sections/projects';

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

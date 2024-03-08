import { createFileRoute } from '@tanstack/react-router';
import { Fragment } from 'react';

import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Experiences from '@/components/sections/experiences';
import Home from '@/components/sections/home';
import Projects from '@/components/sections/projects';

const Homepage = () => {
	return (
		<Fragment>
			<Home />
			<About />
			<Experiences />
			<Projects />
			<Contact />
		</Fragment>
	);
};

export const Route = createFileRoute('/')({
	component: Homepage,
});

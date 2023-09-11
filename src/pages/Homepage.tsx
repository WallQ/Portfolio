import React from 'react';

import Header from '../components/Header/Header';
import About from '../components/About/About';
import Experiences from '../components/Experiences/Experiences';
import Technologies from '../components/Technologies/Technologies';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';

const Homepage: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<main>
				<div className='mx-auto flex max-w-7xl flex-col gap-y-16 px-8 py-16'>
					<Header />
					<About />
					<Experiences />
					<Technologies />
					<Projects />
				</div>
				<Contact />
			</main>
		</React.Fragment>
	);
};

export default Homepage;

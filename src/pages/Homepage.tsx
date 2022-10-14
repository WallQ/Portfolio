import React from 'react';
import Header from '../components/Header/Header';

import Experiences from '../components/Experiences/Experiences';
import Technologies from '../components/Technologies/Technologies';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';

const Homepage: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<main>
				<div className='mx-auto flex max-w-7xl flex-col gap-y-32 px-8 py-16'>
					<Header />
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

import React from 'react';
import Header from '../components/Header/Header';

import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';

const Homepage: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<main className='mx-auto flex max-w-7xl flex-col gap-y-8 px-8 py-4'>
				<Header />
				<Technologies />
				<Projects />
			</main>
		</React.Fragment>
	);
};

export default Homepage;

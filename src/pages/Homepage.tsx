import React from 'react';
import Header from '../components/Header/Header';

import ProjectsShowcase from '../components/ProjectsShowcase/ProjectsShowcase';

const Homepage: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<main className='mx-auto max-w-7xl px-8 py-4'>
				<Header />
				<ProjectsShowcase />
			</main>
		</React.Fragment>
	);
};

export default Homepage;

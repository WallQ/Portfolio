import React from 'react';
import Header from '../components/Header/Header';

const Homepage: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<main className='mx-auto max-w-7xl px-8 py-4'>
				<Header />
			</main>
		</React.Fragment>
	);
};

export default Homepage;

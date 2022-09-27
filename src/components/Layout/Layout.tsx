import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Layout: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Outlet />
			<Footer />
		</React.Fragment>
	);
};

export default Layout;

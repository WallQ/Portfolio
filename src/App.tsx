import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes/index';

import Layout from './components/Layout/Layout';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<Layout />}>
					{routes.map(({ path, component: Component }) => {
						return (
							<Route
								key={path}
								path={path}
								element={<Component />}
							/>
						);
					})}
				</Route>
			</Routes>
		</Router>
	);
};

export default App;

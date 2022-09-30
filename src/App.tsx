import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRoutes from './routes/index';

import Layout from './components/Layout/Layout';

const queryClient = new QueryClient();

const App: React.FunctionComponent = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<Routes>
					<Route path='/' element={<Layout />}>
						{AppRoutes.map(({ path, component: Component }) => {
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
		</QueryClientProvider>
	);
};

export default App;

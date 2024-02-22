import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Toaster } from '@/components/ui/toaster';
import { Fragment } from 'react';

export const Route = createRootRoute({
	component: () => (
		<Fragment>
			<Navbar />
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<main className='mx-auto flex max-w-6xl flex-col py-32'>
					<Outlet />
					<Toaster />
				</main>
			</div>
			<Footer />
		</Fragment>
	),
	notFoundComponent: () => <div>Not Found</div>,
});

import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Root from './pages/Root';
// import Home from './pages/Home';
// import Filter from './pages/Filter';
// import Liked from './pages/Liked';
import { MovieProvider } from './contexts/MovieContext';

const Home = lazy(() => import('./pages/Home'));
const Filter = lazy(() => import('./pages/Filter'));
const Liked = lazy(() => import('./pages/Liked'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<h2>Loading...</h2>}>
						<Home />
					</Suspense>
				)
			},
			{
				path: 'filtered-by/:query',
				element: (
					<Suspense fallback={<h2>Filtering...</h2>}>
						<Filter />
					</Suspense>
				)
			},
			{
				path: 'favorites',
				element: (
					<Suspense fallback={<h2>Loading...</h2>}>
						<Liked />
					</Suspense>
				)
			}
		]
	}
]);

function App() {
	return (
		<>
			<MovieProvider>
				<Toaster />
				<div className="container">
					<RouterProvider router={router} />
				</div>
			</MovieProvider>
		</>
	);
}

export default App;

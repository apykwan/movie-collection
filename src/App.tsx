import { BrowserRouter } from 'react-router-dom';

import Router from './routes/Router';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';

function App() {
	return (
		<div>
			<BrowserRouter>
				<MovieProvider>
					<div className="container">
						<NavBar />
						<Router />
					</div>
				</MovieProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;

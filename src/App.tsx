import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Routes from './routes/Routes';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';

function App() {
	return (
		<div>
			<BrowserRouter>
				<MovieProvider>
					<Toaster />
					<div className="container">
						<NavBar />
						<Routes />
					</div>
				</MovieProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;

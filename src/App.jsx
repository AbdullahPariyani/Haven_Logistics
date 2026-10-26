import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';
import HomePage from './pages/HomePage.jsx';

function App() {
	return (
		<LanguageProvider>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/services' element={<Navigate to='/#services' replace />} />
						<Route path='/tracking' element={<Navigate to='/#tracking' replace />} />
						<Route path='/company' element={<Navigate to='/#company' replace />} />
						<Route path='/blog' element={<Navigate to='/#blog' replace />} />
						<Route path='/contact' element={<Navigate to='/#footer-contact' replace />} />
						<Route path='*' element={<Navigate to='/' replace />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</LanguageProvider>
	);
}

export default App;

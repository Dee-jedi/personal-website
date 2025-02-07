import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
	About,
	Contact,
	Hero,
	Navbar,
	Skills,
	Work,
	Footer,
} from './components';
import NavbarProvider from './context/NavbarContext';
import FormProvider from './context/FormContext';

const App = () => {
	return (
		<>
			<Router>
				<NavbarProvider>
					<Navbar />
				</NavbarProvider>

				<Hero />
				<Skills />
				<About />
				<Work />
				<FormProvider>
					<Contact />
				</FormProvider>
				<Footer />
			</Router>
		</>
	);
};

export default App;

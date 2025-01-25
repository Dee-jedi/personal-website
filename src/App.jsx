import React from 'react';
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
		</>
	);
};

export default App;

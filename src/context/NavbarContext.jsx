// NavbarContext.js
import { createContext, useState, useEffect } from 'react';
import debounce from 'lodash.debounce'; // Install this package with `npm install lodash.debounce`

export const NavbarContext = createContext({});

const NavbarProvider = ({ children }) => {
	const navItems = [
		{ text: 'About', href: '#about' },
		{ text: 'Work', href: '#work' },
		{ text: 'Contact', href: '#contact' },
	];

	const [menuOpen, setMenuOpen] = useState(false);
	const [showNavbar, setShowNavbar] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	// Debounced scroll handler
	const handleScroll = debounce(() => {
		if (window.scrollY > lastScrollY) {
			setShowNavbar(false);
		} else {
			setShowNavbar(true);
		}
		setLastScrollY(window.scrollY);
	}, 100);

	// useEffect with optimized dependency (no need to include lastScrollY)
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		// Cleanup on unmount
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll]); // Only include handleScroll as dependency

	const handleMenuOpen = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<NavbarContext.Provider
			value={{
				menuOpen,
				setMenuOpen,
				handleMenuOpen,
				showNavbar,
				navItems,
			}}
		>
			{children}
		</NavbarContext.Provider>
	);
};

export default NavbarProvider;

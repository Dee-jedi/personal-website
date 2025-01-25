import { useContext } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import MobileMenu from './MobileMenu';
import { NavbarContext } from '../context/NavbarContext';

const Navbar = () => {
	const { menuOpen, handleMenuOpen, navItems, showNavbar } =
		useContext(NavbarContext);

	return (
		<nav
			className={` bg-black w-full fixed top-0 left-0 z-50 p-4 transition-transform duration-300 ${
				showNavbar ? 'translate-y-0' : '-translate-y-full'
			}`}
		>
			<div className="max-w-[1200px] mx-auto flex justify-between items-center px-4 sm:px-8">
				{/* Brand Name */}
				<h1 className="sm:text-3xl text-[26px] primary-color font-bold">
					M. Dee
				</h1>

				{/* Desktop Navigation */}
				<ul className="hidden md:flex space-x-6">
					{navItems.map((item, index) => (
						<li key={index} className="relative group">
							<a
								href={item.href}
								className="text-white hover:text-primary-color transition-all block px-2 py-1"
							>
								{item.text}
							</a>
							{/* Underline Effect */}
							<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
						</li>
					))}
				</ul>

				{/* Mobile Menu Icon */}
				<div
					onClick={handleMenuOpen}
					className="block md:hidden cursor-pointer text-white"
				>
					<AiOutlineMenu size={24} />
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`fixed h-[100vh] left-0 top-0 w-[70%] sm:w-[50%] bg-[#202121] z-50 transform ${
					menuOpen ? 'translate-x-0 z-10' : '-translate-x-full'
				} transition-transform duration-300 ease-in-out`}
			>
				<MobileMenu />
			</div>
		</nav>
	);
};

export default Navbar;

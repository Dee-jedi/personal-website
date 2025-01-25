import { useContext } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { NavbarContext } from '../context/NavbarContext';

const MobileMenu = () => {
	const { handleMenuOpen, navItems } = useContext(NavbarContext);

	return (
		<aside>
			{/* Mobile Header */}
			<div className="flex justify-between items-center p-4 border-b border-gray-600 bg-[#202121]">
				<h1 className="text-2xl primary-color font-bold">M. Dee</h1>
				{/* Close Menu Button */}
				<button
					onClick={handleMenuOpen}
					className="text-white text-2xl hover:text-primary-color transition-all"
				>
					<AiOutlineArrowLeft />
				</button>
			</div>

			{/* Menu Items Wrapper */}
			<div className="flex flex-col h-full bg-[#202121]">
				<ul className="p-6 text-lg space-y-4">
					{navItems.map((item, index) => (
						<li
							key={index}
							className="rounded-md transition-all hover:bg-gray-700"
							onClick={handleMenuOpen}
						>
							<a
								href={item.href}
								className="text-white hover:text-primary-color block px-4 py-2"
							>
								{item.text}
							</a>
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
};

export default MobileMenu;

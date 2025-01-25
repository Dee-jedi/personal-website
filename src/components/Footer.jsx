import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="max-w-[1200px] pt-4 sm:mb-16 mb-12 px-10 mx-auto">
			<div className="flex justify-between items-center">
				<h4 className="primary-color md:text-lg">M. DEE</h4>
				<p className="text-gray-600">#frontend_dev2025</p>
				<div className="flex space-x-4 items-center">
					<a
						href="https://github.com/Dee-jedi"
						target="_blank"
						rel="noopener noreferrer"
						title="Visit my GitHub"
					>
						<FaGithub className="text-gray-600 hover:text-white hover:bg-primary-color transition duration-300 text-4xl cursor-pointer p-2 rounded-full sm:text-5xl" />
					</a>
					<a
						href="https://www.linkedin.com/in/div-the-dev"
						target="_blank"
						rel="noopener noreferrer"
						title="Visit my LinkedIn"
					>
						<FaLinkedin className="text-gray-600 hover:text-white hover:bg-primary-color transition duration-300 text-4xl sm:text-5xl cursor-pointer p-2 rounded-full" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

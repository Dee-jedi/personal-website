import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="max-w-[1200px] pt-4 sm:mb-16 mb-12 px-10 mx-auto">
			<div className="flex justify-between items-center">
				<h4 className="primary-color md:text-lg">M. DEE</h4>
				<p className="text-gray-600">#frontend_dev2025</p>
				<div className="flex space-x-4">
					<a
						href="https://github.com/Dee-jedi"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub className="text-gray-600 hover:text-primary-color transition duration-300 text-2xl" />
					</a>
					<a
						href="https://www.linkedin.com/in/div-the-dev"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin className="text-gray-600 hover:text-primary-color transition duration-300 text-2xl" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

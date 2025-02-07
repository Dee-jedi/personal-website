import React from 'react';
import heroImg from '../assets/images/heroPics.png';
import { TypeAnimation } from 'react-type-animation';
import ScrollReveal from './ScrollReveal'; // Import ScrollReveal component

const Hero = () => {
	return (
		<main className="max-w-[1200px] hero-des mt-[69px] mx-auto md:p-4 px-2 pb-16">
			<div className="grid grid-cols-1 sm:grid-cols-3 lg:gap-16 sm:gap-44 h-full">
				<div className="my-auto mx-auto col-span-1 w-[300px] h-auto lg:w-[400px]">
					<img
						src={heroImg}
						alt="Divine Monday - Hero Section"
						className="h-[360px] sm:h-auto"
					/>
				</div>

				<ScrollReveal
					className="col-span-2 px-4 my-auto sm:space-y-9"
					animation={{ y: 100, opacity: 0 }}
					duration={1}
				>
					<h1 className="text-white text-4xl sm:text-[45px] sm:leading-[52px] lg:text-8xl font-extrabold">
						<span className="primary-color">I'm a</span> <br />
						<TypeAnimation
							sequence={[
								'Frontend Dev',
								1000,
								'Webdesigner',
								1000,
								'Consultant',
								1000,
							]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
						/>
					</h1>

					<p className="text-[#f0f0f0] sm:text-lg my-6 lg:text-xl">
						My name is Divine Monday, your best choice for your web dev
						projects.
					</p>

					<div className="pt-4">
						<a
							href="final-resume.pdf"
							download="final-resume.pdf"
							aria-label="Download CV"
							className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-r from-[#004e92] to-[#000428] text-[#f0f0f0] shadow-lg hover:opacity-95 transition-transform duration-300 ease-in-out"
						>
							Download CV
						</a>

						<a
							href="#contact"
							aria-label="Contact Me"
							className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-600 text-[#e0e0e0] hover:border-[#004e92] hover:text-[#add8fd] transition-transform duration-300 ease-in-out"
						>
							Contact
						</a>
					</div>
				</ScrollReveal>
			</div>
		</main>
	);
};

export default Hero;

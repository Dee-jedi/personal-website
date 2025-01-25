import React from 'react';
import aboutImg from '../assets/images/divineImg.jpg';

const About = () => {
	return (
		<div
			className="text-white max-w-[1200px] mx-auto md:p-4 px-2 my-16"
			id="about"
		>
			<div className="sm:grid sm:grid-cols-2 sm:py-16">
				{/* About Text */}
				<article className="flex flex-col mx-6 my-auto sm:gap-3">
					<h1 className="text-4xl font-bold mb-4 primary-color">
						About Me
					</h1>
					<p className="text-base md:text-lg">
						Hi, my name is Divine Monday. <br /> I am a web developer
						passionate about creating intuitive user experiences and
						scalable designs. Skilled in tools like React and Firebase, I
						thrive on solving real-world problems with clean, efficient
						code. Let’s build something exceptional together.
					</p>
				</article>

				{/* About Image */}
				<div className="flex justify-center items-center pt-8 px-6 md:py-0">
					<img
						src={aboutImg}
						className="rounded-lg sm:rounded-3xl sm:h-[300px] sm:w-[300px]"
						alt="About me"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;

import { uma, elib, hoobank, papaya } from './../assets/exports';
import ScrollReveal from './ScrollReveal'; // Import ScrollReveal component

const Work = () => {
	const Works = ({ href, img }) => {
		return (
			<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#141f2b] group rounded-md flex justify-center items-center sm:h-[200px] h-[170px] bg-cover relative ">
				<img src={img} alt="My project photos" loading="lazy" />

				{/* Hover effect container */}
				<div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
					<span className="text-2xl font-bold text-white tracking-wider">
						Project
					</span>

					<div className="pt-8 text-center">
						<a href={href} target="_blank" rel="noopener noreferrer">
							<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
								Live
							</button>
						</a>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="max-w-[1200px] mx-auto md:p-4 px-2 pb-8" id="work">
			<div className="mx-6">
				<div className="pb-8">
					<h3 className="text-4xl mb-3 font-bold primary-color">Work</h3>
					<p className="sm:text-lg text-gray-400">
						Explore some of my recent work
					</p>
				</div>

				{/* Grid layout for work items */}
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
					<ScrollReveal
						className="w-full"
						animation={{ y: 100, opacity: 0 }}
						duration={1}
					>
						<Works href={'https://papaya-jade.vercel.app'} img={papaya} />
					</ScrollReveal>
					<ScrollReveal
						className="w-full"
						animation={{ y: 100, opacity: 0 }}
						duration={1}
					>
						<Works
							href={'https://hoobank-dee.vercel.app'}
							img={hoobank}
						/>
					</ScrollReveal>
					<ScrollReveal
						className="w-full"
						animation={{ y: 100, opacity: 0 }}
						duration={1}
					>
						<Works href={'https://uma-nu.vercel.app'} img={uma} />
					</ScrollReveal>
					<ScrollReveal
						className="w-full"
						animation={{ y: 100, opacity: 0 }}
						duration={1}
					>
						<Works
							href={'https://dee-jedi.github.io/Project_axios/'}
							img={elib}
						/>
					</ScrollReveal>
				</div>
			</div>
		</div>
	);
};

export default Work;

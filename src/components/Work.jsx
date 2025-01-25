import aboutImg from '../assets/images/aboutImg.jpg';

const Work = () => {
	const Works = ({ href }) => {
		return (
			<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center sm:h-[200px] h-[170px] bg-cover relative ">
				<img src={aboutImg} alt="My project photos" loading="lazy" />

				{/* Hover effect container */}
				<div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
					<span className="text-2xl font-bold text-white tracking-wider">
						Project
					</span>

					<div className="pt-8 text-center">
						<a href={href} target="_blank">
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
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
					<Works href={'https://dee-jedi.github.io/Project_axios/'} />
					<Works href={'/'} />
					<Works href={'/'} />
				</div>
			</div>
		</div>
	);
};

export default Work;

import {
	tailwindIcon,
	reactIcon,
	cssIcon,
	htmlIcon,
	javascriptIcon,
} from './../assets/exports';
import ScrollReveal from './ScrollReveal'; // Import the reusable component

const Skills = () => {
	const SkillSet = ({ src, text }) => {
		return (
			<div className="flex flex-col items-center w-[38px] md:w-[70px]">
				<img src={src} alt={text} width={100} height={100} />
				<p className="mt-2 sm:text-lg">{text}</p>
			</div>
		);
	};

	return (
		<section className="max-w-[1200px] mx-auto md:p-4 px-2 sm:px-0">
			<ScrollReveal
				className="grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center border border-gray-600 text-gray-400 md:h-[150px] md:px-16 px-1 py-3 md:mx-6"
				animation={{ y: 100, opacity: 0 }}
				duration={1}
			>
				<h2 className="text-gray-700 text-[19px] sm:text-[34px] sm:leading-[40px] font-bold">
					My <br /> Tech <br /> Stack
				</h2>

				<SkillSet src={htmlIcon} text="HTML" />
				<SkillSet src={cssIcon} text="CSS" />
				<SkillSet src={javascriptIcon} text="Js" />
				<SkillSet src={tailwindIcon} text="Tailwind" />
				<SkillSet src={reactIcon} text="React" />
			</ScrollReveal>
		</section>
	);
};

export default Skills;

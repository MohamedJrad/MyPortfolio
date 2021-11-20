import Particles from 'react-particles-js';
import { Link, animateScroll as scroll } from 'react-scroll';

export const Home = () => {
	return (
		<div className="1">
			<Background>
				<Glass />
			</Background>
		</div>
	);
};

const Glass = () => {
	return (
		<div className=" centered glass  border border-gray-600 rounded-xl shadow-xl">
			<div className=" bg-white opacity-50 rounded-xl shadow-xl ">
				<div className="   flex flex-col justify-center items-center   p-10 md:p-16	">
					<span className=" text-2xl lg:text-5xl text-black font-bold text-center">
						Hello ,I'm{' '}
						<span className="text-purple-700 font-bold opacity-100 whitespace-no-wrap text-center">
							{' '}
							Mohamed Jrad.
						</span>
					</span>

					<span className=" text-2xl lg:text-5xl text-black text-center lg:whitespace-no-wrap font-bold">
						I'm a Software Developer.
					</span>
					<Link
						className="flex mx-4  justify-center items-center h-16 w-48  border-black border-2 mt-8  bg-purple-300 "
						activeClass="active"
						to={'2'}
						spy={true}
						smooth={true}
						offset={-50}
						duration={500}
					>
						<span className="  text-lg font-bold  cursor-pointer whitespace-no-wrap">View my work</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

const Background = ({ children }) => {
	return (
		<div className="  h-screen w-screen relative object-cover object-center bg ">
			<Particles
				className=" h-screen w-screen  "
				params={{
					particles: {
						number: {
							value: 200
						},
						size: {
							value: 7
						}
					},
					interactivity: {
						events: {
							onhover: {
								enable: true,
								mode: 'repulse'
							}
						}
					}
				}}
			/>
			<div className="centered-elemen"> {children}</div>
		</div>
	);
};

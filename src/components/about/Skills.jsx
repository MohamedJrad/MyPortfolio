import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { TagCloudContainer } from './TagCloud';
export const Skills = () => {
	return (
		<div className=" flex flex-col lg:flex-row justify-center lg:justify-between w-2/3 items-center lg:h-96 mb-32">
			<Resume />
			<TagCloudContainer />
		</div>
	);
};

const Resume = () => {
	return (
		<div className="flex flex-col justify-center items-center  ">
			<img
				className="h-48 w-48 rounded-full object-cover object-center border-4"
				src={require('../../assets/yassine.jpeg')}
			/>
			<span className="text-center mt-8 w-72">
				I'm a Self-Taught Software Developer From Tunisia.
				I have serious passion for Solving real world problems with code.

			</span>
		</div>
	);
};

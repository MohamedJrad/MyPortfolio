import { Skills } from './Skills';
import { Values } from './Values';

export const About = () => {
	return (
		<div className=" bg-purple-100 w-screen  flex flex-col justify-center items-center " id="2">
			<span className="uppercase text-3xl flex  my-12">About</span>
			<Values />
			<Skills />
		</div>
	);
};

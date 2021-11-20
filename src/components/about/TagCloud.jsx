import TagCloud from 'react3dtagcloud';
const tagName = [
	'styled-Components',
	'Javscript',
	'Typescript',
	'AWS',
	'GraphQl',
	'React',
	'ReactNative',
	'Apollo',
	'Node.js',
	'Restful',
	'TailwindCss',
	'Storybook',
	'TDD',
	'Atomic Design',
	'Next.js'
];
export const TagCloudContainer = () => {
	return (
		<div className="mb-48 mt-24">
			<div className="  hidden lg:flex    mr-56  mb-56">
				<TagCloud tagName={tagName} radius={150} speed={3} />
			</div>

			<div className="   hidden md:flex lg:hidden mr-20">
				<TagCloud tagName={tagName} radius={120} speed={3} />
			</div>
			<div className=" md:hidden mr-10 ">
				<TagCloud tagName={tagName} radius={90} speed={3} />
			</div>
		</div>
	);
};

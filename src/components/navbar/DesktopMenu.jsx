import { Link, animateScroll as scroll } from 'react-scroll';

export const DesktopMenu = ({ items }) => {
	return (
		<div className="hidden md:flex pl-24 ">
			{items.map((i) => {
				return (
					<Link
						key={i.id}
						className="flex justify-center items-center   mx-8 inactive	 "
						activeClass="active"
						to={i.id}
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
					>
						<div className="flex mx-3 lg:mx-4 pb-2 justify-center items-center ">
							<span className="  text-lg font-bold  cursor-pointer whitespace-no-wrap">{i.name}</span>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

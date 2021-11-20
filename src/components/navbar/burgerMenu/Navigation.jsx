import { motion } from 'framer-motion';
import { Link, animateScroll as scroll } from 'react-scroll';

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 }
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 }
	}
};
const MenuItemsvariants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
			delay: 0.3
		}
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
			delay: 0.01
		}
	}
};
const items = [
	{ name: 'home', id: ' 1' },
	{ name: 'about', id: '2' },
	{ name: 'portfolio', id: '3' },
	{ name: 'contact', id: '4' }
];
export const Navigation = ({ orderNow, toggle, aboutUs }) => (
	<div className="bg-gray-900 h-full flex  hideScrollbar mt-16 ">
		<div className=" flex flex-col items-center bg-gray-900   ">
			<div className="h-1 w-screen  bg-purple-700 " />
			<div className="flex flex-col justify-center items-center  mt-4   ">
				{items.map((i, index) => {
					return (
						<div key={index} className="flex justify-center items-center mx-8  my-2 h-12 w-48 ">
							<motion.li
								className=" flex cursor-pointer rounded-lg  mb-4"
								variants={MenuItemsvariants}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
							>
								<Link
									onClick={() => {
										toggle(false);
										document.body.classList.toggle('opened');
									}}
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
										<span className="  text-lg font-bold  cursor-pointer whitespace-no-wrap">
											{i.name}
										</span>
									</div>
								</Link>
							</motion.li>
						</div>
					);
				})}
			</div>
		</div>
	</div>
);

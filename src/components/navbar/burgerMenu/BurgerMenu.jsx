import * as React from 'react';
import { useRef, useCallback, useState, useEffect } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from './use-dimensions';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 90% 10%)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2
		}
	}),
	closed: {
		clipPath: 'circle(10px at 92% 2%)',
		transition: {
			delay: 0.2,
			type: 'spring',
			stiffness: 400,
			damping: 40
		}
	}
};

export const BurgerMenu = ({ orderNow, aboutUs }) => {
	const [ isOpen, toggleOpen ] = useCycle(false, true);

	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);

	// useEffect(() => {
	// 	//toggleOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'scroll');
	// });

	return (
		toggleOpen && (
			<motion.nav
				className="flex justify-center items-center "
				initial={false}
				animate={isOpen ? 'open' : 'closed'}
				custom={height}
				ref={containerRef}
			>
				<motion.div
					className="absolute top-0 right-0 flex z-30 justify-center bg-gray-900 w-screen lg:w-40vw    "
					variants={sidebar}
				>
					<div
						onClick={toggleOpen}
						className="hidden lg:flex h-100vh w-200vw bg-black fixed z-30 opacity-70 overflow-scroll hideScrollbar"
					/>
					<Navigation orderNow={orderNow} aboutUs={aboutUs} toggle={toggleOpen} />
				</motion.div>
				<MenuToggle toggle={() => !toggleOpen()} />
			</motion.nav>
		)
	);
};

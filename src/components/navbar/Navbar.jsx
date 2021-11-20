import { DesktopMenu } from './DesktopMenu';
import { BurgerMenu } from './burgerMenu/BurgerMenu';

export const Navbar = () => {
	const items = [
		{ name: 'home', id: ' 1' },
		{ name: 'about', id: '2' },
		{ name: 'portfolio', id: '3' },
		{ name: 'contact', id: '4' }
	];

	return (
		<div
			className=" sticky top-0 flex  z-20 items-center bg-gray-900  w-screen h-16
			 p-2 border-b-4 border-purple-800   "
			id="navbar"
		>
			<DesktopMenu items={items} />
			<div className="flex md:hidden ">
				<BurgerMenu />
			</div>
		</div>
	);
};

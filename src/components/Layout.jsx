import { Home } from '../components/home/Home';
import { About } from '../components/about/About';
import { Navbar } from '../components/navbar/Navbar';
import { Portfolio } from '../components/portfolio/Portfolio';
export const Layout = () => {
	return (
		<div className="flex flex-col relative ">
			<Home />
			<Navbar />
			<About />
			<Portfolio />

			<div className="bg-blue-500 h-screen w-screen" id="4" />
		</div>
	);
};

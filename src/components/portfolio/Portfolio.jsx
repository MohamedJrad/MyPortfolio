import { Link } from 'react-scroll';
import { DevicePreview } from './DevicePreview';

export const Portfolio = () => {
	return (
		<div id="3" className="bg-purple-100 w-screen  flex  flex-col pt-48">
			<span className="text-4xl self-center">Portfolio</span>

			<div className="relative  flex flex-col divide-y-4 divide-purple-300 divide-solid my-24 ">
				<div className="flex  flex-col lg:flex-row items-center mb-12">
					<DevicePreview
						iphonesrc={require('../../assets/aurora.jpeg')}
						macsrc={require('../../assets/aurora.jpeg')}
					/>
					<div className="flex flex-col justify-center items-center  w-full mx-12 mt-12 ">
						<span className="text-5xl">MsOne</span>
						<span className="text-3xl my-12">Restaurant Website</span>
						<a
							href="https://www.msone.co.uk"
							target="_blank"
							className="border-indigo-200 border-2 rounded-full p-4 px-6 outline-none cursor-pointer"
						>
							Visite Site
						</a>
					</div>
				</div>
				<div className="flex  flex-col lg:flex-row items-center mb-12 ">
					<DevicePreview
						iphonesrc={require('../../assets/aurora.jpeg')}
						macsrc={require('../../assets/aurora.jpeg')}
					/>
					<div className="flex flex-col justify-center items-center  w-full mx-12 mt-12 ">
						<span className="text-5xl">King Food</span>
						<span className="text-3xl my-12">Restaurant Website</span>
						<a
							href="https://www.kingfood77.fr"
							target="_blank"
							className="border-indigo-200 border-2 rounded-full p-4 px-6 outline-none cursor-pointer"
						>
							Visite Site
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

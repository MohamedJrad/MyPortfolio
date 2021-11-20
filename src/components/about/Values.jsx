export const Values = () => {
	return (
		<div className="  py-8 flex flex-col 	 lg:flex-row   w-5/6 justify-center items-center mb-12">
			<div className="flex ">
				<div className="flex flex-col  items-center  mx-4   ">
					<div className="flex justify-center items-center  h-32 w-32 relative  ">
						<img className=" absolute inset-auto h-16 w-16 mr-2 " src={require('../../assets/clock.svg')} />
						<img src={require('../../assets/hexagno.svg')} />
					</div>

					<span className=" text-2xl  font-bold ">Fast</span>
					<span className="w-32 sm:w-48 md:w-56  text-center mt-2">
						Fast load times and lag free interaction, my highest priority.
					</span>
				</div>
				<div className="flex flex-col items-center  mx-4  ">
					<div className="flex  justify-center items-center  h-32 w-32 relative  ">
						<img className=" absolute inset-auto h-16 w-16 " src={require('../../assets/responsive.svg')} />
						<img src={require('../../assets/hexagno.svg')} />
					</div>

					<span className=" text-2xl  font-bold ">Responsive</span>
					<span className="w-32 sm:w-48 md:w-56  text-center mt-2">
						My layouts will work on any device, big or small.
					</span>
				</div>
			</div>
			<div className="flex">
				<div className="flex flex-col  items-center  mx-4   ">
					<div className="flex justify-center items-center  h-32 w-32 relative  ">
						<img className=" absolute inset-auto h-16 w-16  " src={require('../../assets/idea.svg')} />
						<img src={require('../../assets/hexagno.svg')} />
					</div>

					<span className=" text-2xl  font-bold ">Intuitive</span>
					<span className="w-32 sm:w-48 md:w-56  text-center mt-2 ">
						Strong preference for easy to use, intuitive UX/UI.
					</span>
				</div>
				<div className="flex flex-col  items-center  mx-4  ">
					<div className="flex justify-center items-center  h-32 w-32 relative  ">
						<img className=" absolute inset-auto h-16 w-16" src={require('../../assets/atom.svg')} />
						<img src={require('../../assets/hexagno.svg')} />
					</div>

					<span className=" text-2xl  font-bold ">Dynamic</span>
					<span className="w-32 sm:w-48 md:w-56  text-center mt-2">
						Websites don't have to be static, I love making pages come to life.
					</span>
				</div>
			</div>
		</div>
	);
};

export const Iphone1 = ({ src }) => (
	<div className="   flex justify-center md:hidden">
		<div className="deviceContainer">
			<div className="device device-iphone-x1   ">
				<div className="device-frame">
					<img className="device-content" src={require('../../assets/aurora.jpeg')} />
				</div>
				<div className="device-stripe" />
				<div className="device-header" />
				<div className="device-sensors" />
				<div className="device-btns" />
				<div className="device-power" />
			</div>
		</div>
	</div>
);

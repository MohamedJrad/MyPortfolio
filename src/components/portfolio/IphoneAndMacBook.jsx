export const IphoneAndMacBook = ({ iphonesrc, macsrc }) => (
	<div className="   hidden  md:flex justify-center items-center h-96 lg:-ml-16   ">
		<div className=" deviceContainer h-96">
			<div className=" device device-macbook-pro ">
				<div className="device-frame">
					<img className="device-content" src={macsrc} />
				</div>
				<div className="device-stripe" />
				<div className="device-header" />
				<div className="device-sensors" />
				<div className="device-btns" />
				<div className="device-power" />
			</div>
			<div className="device device-iphone-x  ">
				<div className="device-frame">
					<img className="device-content" src={iphonesrc} />
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

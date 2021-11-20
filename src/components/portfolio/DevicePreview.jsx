import { Iphone1 } from './Iphone1';

import { IphoneAndMacBook } from './IphoneAndMacBook';
export const DevicePreview = ({ iphonesrc, macsrc }) => {
	return (
		<div>
			<IphoneAndMacBook iphonesrc={iphonesrc} macsrc={macsrc} />
			<Iphone1 src={iphonesrc} />
		</div>
	);
};

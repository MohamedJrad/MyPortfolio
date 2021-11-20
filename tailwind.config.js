module.exports = {
	important: true,
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
		defaultLineHeights: true,
		standardFontWeights: true
	},
	purge: [],
	theme: {
		extend: {
			opacity: {
				'0': '0',
				'25': '.25',
				'50': '.5',
				'75': '.75',
				'10': '.1',
				'20': '.2',
				'30': '.3',
				'40': '.4',
				'50': '.5',
				'60': '.6',
				'70': '.7',
				'80': '.8',
				'90': '.9',
				'100': '1'
			},
			backgroundColor: [ 'active', 'focus' ],

			fontFamily: {
				netlimon: [ 'Netlimon' ],
				hwtartz: [ 'hwtartz' ]
			},

			maxHeight: {
				xs: '20rem',
				sm: '24rem',
				md: '28rem',
				lg: '32rem',
				xl: '36rem',
				'2xl': '42rem',
				'3xl': '48rem',
				'4xl': '56rem',
				'5xl': '64rem',
				'6xl': '72rem'
			},
			maxWidth: { '72': '18rem', '8': '2rem', '4': '1rem', max: 'max-content' },
			minWidth: {
				1: '6rem',
				2: '2rem',
				32: '8rem',
				'48': '10rem',
				'100vw': '100vw'
			},
			spacing: {
				'0.5': '0.10rem',
				'72': '18rem',
				'84': '21rem',
				'96': '24rem',
				'97': '24.5rem',
				'1/5': '20%',
				'1/4': '25%',
				'1/3': '33.333%',
				'1/2': '50%',
				'2/3': '66.666%',
				'3/4': '60vh',
				'5/6': '83.333%',
				'11/12': '91.666%',
				'100vw': '100vw',
				'100vh': '100vh',
				'200vw': '200vw',
				'15vh': '15vh',
				'75vh': '75vh',
				'50vh': '50vh',
				'40vw': '40vw',
				'15vw': '15vw',
				'80vh': '80vh',
				'95vw': '95vw',
				'fit-content': 'fit-content'
			},
			width: {
				'1/7': '14.2857143%',
				'2/7': '28.5714286%',
				'3/7': '42.8571429%',
				'4/7': '57.1428571%',
				'5/7': '71.4285714%',
				'6/7': '85.7142857%',
				'fit-content': 'fit-content'
			},
			fontSize: {
				'7xl': '5rem',
				'8xl': '6rem',
				'9xl': '7rem'
			}
		}
	},
	variants: { border: [ 'responsive', 'hover', 'focus', 'group-hover' ] },
	plugins: []
};

import {createBrandGuidelines} from '../types/branding-guidelines';

export const cosmonicBrand = createBrandGuidelines({
    name: 'Cosmonic Brand',
    colors: {
        primary: [
            {
                colorName: 'Slate Purple',
                hex: '#685BC7',
            },
            {
                colorName: 'Light Gray',
                hex: '#768692',
            },
        ],
        secondary: [
            {
                colorName: 'Yellow',
                hex: '#FFB600',
            },
            {
                colorName: 'Space Blue',
                hex: '#002E5D',
            },
            {
                colorName: 'Gunmetal',
                hex: '#253746',
            },
            {
                colorName: 'Gainsboro',
                hex: '#D9E1E2',
            },
        ],
    },
} as const);

import {createBrandGuidelines} from '../types/branding-guidelines';
import {cosmonicBrand} from './cosmonic-brand';

export const wasmCloudBrand = createBrandGuidelines({
    name: 'Wasmcloud Brand',
    colors: {
        primary: [
            {
                colorName: 'Green Aqua',
                hex: '#00C389',
            },
            cosmonicBrand.colorsByName.primary['Light Gray'],
        ],
        secondary: [...cosmonicBrand.colors.secondary],
    },
});

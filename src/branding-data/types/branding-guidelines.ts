import {ArrayElement, getObjectTypedKeys} from 'augment-vir';
import {BrandingColor} from './branding-color';

type BrandingGuidelinesInit = Readonly<{
    name: string;
    colors: Readonly<{
        primary: Readonly<Readonly<BrandingColor>[]>;
        secondary: Readonly<Readonly<BrandingColor>[]>;
    }>;
}>;

type ColorsByName<Init extends BrandingGuidelinesInit> = {
    [ColorHierarchyKey in keyof BrandingGuidelinesInit['colors']]: Readonly<
        Record<
            ArrayElement<Init['colors'][ColorHierarchyKey]>['colorName'],
            Readonly<BrandingColor>
        >
    >;
};

export type BrandingGuidelines<Init extends BrandingGuidelinesInit = any> = Readonly<
    BrandingGuidelinesInit & {
        colorsByName: ColorsByName<Init>;
    }
>;

export function createBrandGuidelines<InputGeneric extends BrandingGuidelinesInit>(
    input: InputGeneric,
): BrandingGuidelines<InputGeneric> {
    const colorsByName: ColorsByName<InputGeneric> = getObjectTypedKeys(input.colors).reduce(
        (accum, colorHierarchyKey) => {
            const colors: Readonly<Readonly<BrandingColor>[]> = input.colors[colorHierarchyKey];

            colors.forEach((color) => {
                accum[colorHierarchyKey][color.colorName] = color;
            });
            return accum;
        },
        {
            primary: {},
            secondary: {},
        } as Record<
            keyof BrandingGuidelinesInit['colors'],
            Record<string, Readonly<BrandingColor>>
        >,
    ) as ColorsByName<InputGeneric>;
    return {...input, colorsByName};
}

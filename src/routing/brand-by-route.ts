import {cosmonicBrand} from '../branding-data/implementations/cosmonic-brand';
import {wasmCloudBrand} from '../branding-data/implementations/wasm-cloud-brand';
import {BrandingGuidelines} from '../branding-data/types/branding-guidelines';
import {BrandingPage} from './cosmonic-branding-router';

export const brandByRoute: Record<BrandingPage, BrandingGuidelines> = {
    [BrandingPage.Cosmonic]: cosmonicBrand,
    [BrandingPage.WasmCloud]: wasmCloudBrand,
};

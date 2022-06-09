import {isEnumValue} from 'augment-vir';
import {createSpaRouter, RouteListener, SpaRouter} from 'spa-router-vir';
import {FullRoute} from 'spa-router-vir/dist/router/full-route';

export enum BrandingPage {
    Cosmonic = 'cosmonic',
    WasmCloud = 'wasmcloud',
}

export type ValidBrandingPaths = [BrandingPage];

export type FullBrandingRoute = Required<Readonly<FullRoute<ValidBrandingPaths>>>;
export type BrandingRouteForUpdate = Readonly<FullRoute<ValidBrandingPaths>>;
export type BrandingRouteListener = RouteListener<
    ValidBrandingPaths,
    Record<string, string> | undefined,
    string | undefined
>;

export const defaultRoute: FullBrandingRoute = {
    paths: [BrandingPage.Cosmonic],
    search: undefined,
    hash: undefined,
};

export const CosmonicBrandingRouter: SpaRouter<ValidBrandingPaths> =
    createSpaRouter<ValidBrandingPaths>({
        maxListenerCount: 1,
        /** Used to support GitHub Pages with a required path of the repo name. */
        routeBase: 'branding',
        routeSanitizer: (route): FullBrandingRoute => {
            const firstRoute = route.paths[0];

            if (isEnumValue(firstRoute, BrandingPage)) {
                return {
                    ...defaultRoute,
                    paths: [firstRoute],
                };
            } else {
                return defaultRoute;
            }
        },
    });

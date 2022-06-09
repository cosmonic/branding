import {getEnumTypedValues, kebabCaseToCamelCase} from 'augment-vir';
import {assign, css, defineFunctionalElement, html} from 'element-vir';
import {TemplateResult, unsafeCSS} from 'lit';
import {cosmonicBrand} from '../../branding-data/implementations/cosmonic-brand';
import {updateRouteEvent} from '../../generic-events/update-route.event';
import {brandByRoute} from '../../routing/brand-by-route';
import {
    BrandingPage,
    BrandingRouteForUpdate,
    BrandingRouteListener,
    CosmonicBrandingRouter,
    FullBrandingRoute,
} from '../../routing/cosmonic-branding-router';
import {CosBrandingNavLink} from './cos-branding-nav-link.element';

export const CosBrandingNav = defineFunctionalElement({
    tagName: 'cos-branding-nav',
    props: {
        currentRoute: undefined as undefined | FullBrandingRoute,
        router: CosmonicBrandingRouter,
        routeListener: undefined as undefined | BrandingRouteListener,
    },
    styles: css`
        :host {
            display: block;
        }

        nav {
            padding: 16px;
            display: flex;
            flex-direction: column;
        }

        ${CosBrandingNavLink} {
            font-size: 1.5em;
            --cos-branding-nav-link-anchor-padding: 8px 16px;
            border-radius: 8px;
        }

        ${CosBrandingNavLink}:not(.selected):hover {
            background-color: var(
                --cos-branding-primary-color,
                ${unsafeCSS(cosmonicBrand.colorsByName.primary['Slate Purple'].hex)}
            );
            color: white;
        }

        .selected {
            cursor: default;
            background-color: var(
                --cos-branding-primary-color,
                ${unsafeCSS(cosmonicBrand.colorsByName.primary['Slate Purple'].hex)}
            );
            color: white;
        }
    `,
    renderCallback: ({props, setProps, genericDispatch}) => {
        if (props.routeListener) {
            // in case the router prop changes, we need to reattach the route listener
            if (!props.router.hasRouteListener(props.routeListener)) {
                props.router.addRouteListener(true, props.routeListener);
            }
        } else {
            setProps({
                routeListener: props.router.addRouteListener(true, (fullRoute) => {
                    if (fullRoute !== props.currentRoute) {
                        setProps({currentRoute: fullRoute});
                        genericDispatch(new updateRouteEvent(fullRoute));
                    }
                }),
            });
        }

        if (props.currentRoute && props.currentRoute !== props.router.getCurrentRawRoutes()) {
            // propagate route inputs to the router
            props.router.setRoutes(props.currentRoute);
        }

        const pages = getEnumTypedValues(BrandingPage);
        const currentPage = props.currentRoute?.paths[0];

        return html`
            <nav>
                ${pages.map((brandingPage): TemplateResult => {
                    const linkRoute: BrandingRouteForUpdate = {
                        paths: [brandingPage],
                    };
                    const label = kebabCaseToCamelCase(brandingPage, {capitalizeFirstLetter: true});
                    const linkBrand = brandByRoute[brandingPage];

                    return html`
                        <${CosBrandingNavLink}
                            class=${currentPage === brandingPage ? 'selected' : ''}
                            style="--cos-branding-primary-color: ${
                                linkBrand.colors.primary[0]?.hex
                            }"
                            ${assign(CosBrandingNavLink.props.linkRoute, linkRoute)}
                        >
                            ${label}
                        </${CosBrandingNavLink}>`;
                })}
            </nav>
        `;
    },
});

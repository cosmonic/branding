import {css, defineFunctionalElement, html} from 'element-vir';
import {shouldMouseEventTriggerRoutes} from 'spa-router-vir';
import {updateRouteEvent} from '../../generic-events/update-route.event';
import {CosmonicBrandingRouter, defaultRoute} from '../../routing/cosmonic-branding-router';

export const CosBrandingNavLink = defineFunctionalElement({
    tagName: 'cos-branding-nav-link',
    props: {
        linkRoute: defaultRoute,
        router: CosmonicBrandingRouter,
    },
    styles: css`
        :host {
            /*
                Set padding via --cos-branding-nav-link-anchor-padding.
            */
            padding: 0 !important;
            position: relative;
            display: inline-block;
            box-sizing: border-box;
        }

        /*
            Leave styles up to <slot>
        */
        a,
        a:visited {
            text-decoration: none;
            color: inherit;
        }

        a {
            cursor: inherit;
            width: 100%;
            height: 100%;
            display: inline-block;
            box-sizing: border-box;
            /*
                This uses a CSS var so that padding will be applied to the anchor tag and no click
                area will be missed.
            */
            padding: var(--cos-branding-nav-link-anchor-padding, 0);
        }
    `,
    renderCallback: ({props, genericDispatch}) => {
        const template = html`
            <a
                href=${props.router.createRoutesUrl(props.linkRoute)}
                @click=${(clickEvent: MouseEvent) => {
                    if (shouldMouseEventTriggerRoutes(clickEvent) && props.linkRoute) {
                        clickEvent.preventDefault();
                        genericDispatch(new updateRouteEvent(props.linkRoute));
                    }
                }}
            >
                <slot><slot>
            </a>
        `;

        return template;
    },
});

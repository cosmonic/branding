import {assign, css, defineFunctionalElement, html, listen} from 'element-vir';
import {updateRouteEvent} from '../generic-events/update-route.event';
import {brandByRoute} from '../routing/brand-by-route';
import {FullBrandingRoute} from '../routing/cosmonic-branding-router';
import {CosBrandGuidelines} from './branding-explanations/cos-brand-guidelines.element';
import {CosBrandingNav} from './nav/cos-branding-nav.element';

export const CosBrandingApp = defineFunctionalElement({
    tagName: 'cos-branding-app',
    props: {
        currentRoute: undefined as undefined | FullBrandingRoute,
    },
    styles: css`
        :host,
        .top-element {
            display: block;
            height: 100%;
            width: 100%;
            overflow: hidden;
            position: relative;
        }

        .top-element {
            display: flex;
        }

        ${CosBrandingNav} {
            width: 200px;
            max-width: 25%;
            overflow-y: auto;
            overflow-x: hidden;
            height: 100%;
            flex-shrink: 0;
        }

        main {
            flex-grow: 1;
            display: flex;
            justify-content: center;
            overflow: auto;
        }

        ${CosBrandGuidelines} {
            width: 500px;
            max-width: 100%;
            flex-shrink: 0;
        }
    `,
    renderCallback: ({props, setProps}) => {
        const page = props.currentRoute?.paths[0];
        const brand = page ? brandByRoute[page] : undefined;

        return html`
            <div
                class="top-element"
                ${listen(updateRouteEvent, (event) => {
                    setProps({currentRoute: event.detail});
                })}
            >
                <${CosBrandingNav}
                    ${assign(CosBrandingNav.props.currentRoute, props.currentRoute)}
                ></${CosBrandingNav}>
                <main>
                    <${CosBrandGuidelines}
                        ${assign(CosBrandGuidelines.props.brand, brand)}
                    ></${CosBrandGuidelines}>
                </main>
            </div>`;
    },
});

import {css, defineFunctionalElement, html} from 'element-vir';
import {BrandingColor} from '../../branding-data/types/branding-color';

export const CosBrandColor = defineFunctionalElement({
    tagName: 'cos-brand-color',
    props: {
        color: undefined as undefined | Readonly<BrandingColor>,
    },
    styles: css`
        :host {
            display: flex;
            gap: 16px;
            align-items: center;
        }

        .color-display {
            flex-shrink: 0;
            border-radius: 50%;
            height: 50px;
            width: 50px;
        }

        span {
            flex-basis: 0;
            flex-grow: 1;
            text-align: center;
        }
    `,
    renderCallback: ({props}) => {
        return html`
            <div class="color-display" style="background-color: ${props.color?.hex}"></div>
            <span class="name">${props.color?.colorName}</span>
            <span class="hex">${props.color?.hex}</span>
        `;
    },
});

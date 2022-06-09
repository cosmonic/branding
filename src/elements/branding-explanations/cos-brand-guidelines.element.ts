import {capitalizeFirstLetter, getObjectTypedKeys} from 'augment-vir';
import {assign, css, defineFunctionalElement, html} from 'element-vir';
import {TemplateResult} from 'lit';
import {BrandingGuidelines} from '../../branding-data/types/branding-guidelines';
import {CosBrandColor} from './cos-brand-color.element';

export const CosBrandGuidelines = defineFunctionalElement({
    tagName: 'cos-brand-guidelines',
    props: {
        brand: undefined as undefined | Readonly<BrandingGuidelines>,
        phrases: {
            colors: 'Colors',
        },
    },
    styles: css`
        :host,
        .colors-wrapper {
            display: flex;
            flex-direction: column;
        }

        .colors-wrapper {
            padding-left: 24px;
            gap: 16px;
            max-width: 400px;
        }

        ${CosBrandColor} {
            flex-grow: 1;
        }

        section {
            padding-left: 16px;
        }
    `,
    renderCallback: ({props}) => {
        const brand = props.brand;

        if (brand) {
            const colorsTemplate: TemplateResult[] | string = brand.colors
                ? getObjectTypedKeys(brand.colors).map((colorHierarchyKey) => {
                      const allColors = brand.colors[colorHierarchyKey].map((color) => {
                          return html`
                            <${CosBrandColor}
                                ${assign(CosBrandColor.props.color, color)}
                            >
                            </${CosBrandColor}>`;
                      });

                      return html`
                          <section>
                              <h3>${capitalizeFirstLetter(colorHierarchyKey)}</h3>
                              <div class="colors-wrapper">${allColors}</div>
                          </section>
                      `;
                  })
                : '';

            return html`
                <h1>${brand.name}</h1>
                <section>
                    <h2>${props.phrases.colors}</h2>
                    ${colorsTemplate}
                </section>
            `;
        } else {
            return html``;
        }
    },
});

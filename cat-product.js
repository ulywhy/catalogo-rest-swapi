import { LitElement, html, css } from 'lit-element'
import { RestDriver } from './rest-driver.js'
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class CatProduct extends LitElement {
    static get styles() {
        return css `
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        padding: 8px;
        margin: 0;
        background-color: teal;
      }
    `;
    }

    static get properties() {
        return {
            product: { type: Object },
            catDriver: { type: Object }
        };
    }

    constructor() {
        super();
        this.catDriver = new RestDriver()
    }

    render() {
            return html `
        <h1>
            ${this.product.hasOwnProperty("name") ? this.product.name : this.product.title}  
        </h1>
        <div style="display:table;">
        ${Object.keys(this.product).map(key => 
            html`
                <div style="display: table-row"> 
                    <span style="display:table-cell">${key}</span> <span style="display:table-cell">${this.product[key]}</span>
                </div>
            `
        )}
        </div>
      <slot></slot>
    `;
    }
}

window.customElements.define('cat-product', CatProduct);
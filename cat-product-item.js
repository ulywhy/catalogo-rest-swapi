import { LitElement, html, css } from 'lit-element'
import { RestDriver } from './rest-driver.js'
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class CatProductItem extends LitElement {
    static get styles() {
        return css `
      :host {
        display: flex;
        flex-direction: column;
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

    displayProduct(event) {
        console.log("clicked")
        let myEvent = new CustomEvent('display-product', {
            detail: {
                product: this.product
            },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(myEvent);
    }

    render() {
        return html `
        <h1 @click="${this.displayProduct}">
            ${this.product.hasOwnProperty("name") ? this.product.name : this.product.title}
        </h1>
      <slot></slot>
    `;
    }
}

window.customElements.define('cat-product-item', CatProductItem);
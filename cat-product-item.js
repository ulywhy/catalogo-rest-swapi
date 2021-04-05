import { LitElement, html, css } from 'lit-element'
import { RestDriver } from './rest-driver.js'
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class CatProductItem extends LitElement {
    createRenderRoot() {
        return this;
    }

    static get styles() {
        return css `
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
            <button type="button" class="list-group-item list-group-item-action product-item" @click="${this.displayProduct}">
                ${this.product.hasOwnProperty("name") ? this.product.name : this.product.title}
            </button>
    `;
    }
}

window.customElements.define('cat-product-item', CatProductItem);
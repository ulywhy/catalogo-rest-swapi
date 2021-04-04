import { LitElement, html, css } from 'lit-element'
import { RestDriver } from './rest-driver.js'
import { CatProductItem } from './cat-product-item.js'
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class CatCategory extends LitElement {
    static get styles() {
        return css `
      :host {
        display: flex;
        margin: 0;
        background-color: palegreen;
      }
    `;
    }

    static get properties() {
        return {
            category: {
                type: Object,
            },
            restDriver: { type: Object },
            products: { type: Object }
        };
    }

    constructor() {
        super()
        this.restDriver = new RestDriver()
    }

    setRestProducts() {
        console.log("setRestProducts")
        this.restDriver.doGet('/' + this.category.name).then(
            products => {
                this.products = Object.entries(products)
                console.log(this.products)
            }
        )
    }

    displayCategory(event) {
        let myEvent = new CustomEvent('display-category', {
            detail: {
                name: this.name,
                link: this.link
            },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(myEvent);
    }

    render() {
            this.setRestProducts()
            return html `
        <h1>${this.category.name}</h1>
        <ul class="category-list">
         ${this.products.map( cat =>
            html`<cat-product-item name="${cat[0]}" link="${cat[1]}"></cat-product-item>`)}
      </ul>
    `;
    }
}

window.customElements.define('cat-category', CatCategory);
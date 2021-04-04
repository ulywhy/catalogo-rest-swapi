import { LitElement, html, css } from 'lit-element'
import { until } from 'lit-html/directives/until.js';
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
            products: { type: Object },
            next: { type: String },
            previous: { type: String },
            count: { type: Number },
            products: { type: Array }
        };
    }

    constructor() {
        super()
        this.restDriver = new RestDriver()
    }

    setRestProducts() {
        return this.restDriver.doGet(this.category.link)
            .then(response => this.parseProducts(response))
    }

    parseProducts(response) {
        this.next = response.next
        this.previous = response.previous
        this.count = response.count
        return response.results
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
            return html `
            <h1>${this.category.name}</h1>
            <ul class="category-list">
            ${until(this.setRestProducts()
                .then(products =>
                    products.map( prod =>
                        html`<cat-product-item .product="${prod}"></cat-product-item>`)
                ),
                html`<span>Loading...</span>`)
                }
            </ul>
        `;
    }
}

window.customElements.define('cat-category', CatCategory);
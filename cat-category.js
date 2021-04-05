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
    createRenderRoot() {
        return this;
    }
    static get styles() {
        return css `
        
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

    setRestProducts(categoryUrl) {
        console.log(categoryUrl)
        this.restDriver.doGet(categoryUrl)
            .then(response => this.parseProducts(response))
    }

    parseProducts(response) {
        this.next = response.next
        this.previous = response.previous
        this.count = response.count
        this.products = response.results
        console.log(this.products)
    }

    getNext() {
        return this.restDriver.doGet(this.next)
            .then(response => {
                this.requestUpdate()
                return this.parseProducts(response)
            })
    }

    getPrev() {
        return this.restDriver.doGet(this.previous)
            .then(response => {
                this.requestUpdate()
                return this.parseProducts(response)
            })
    }
    renderList() {
            console.log(this.products)
            if (this.products != undefined) {
                return html `${
                this.products.map(prod =>
                        html ` <cat-product-item .product="${prod}"></cat-product-item>`)
                }`
            }else{
                return ''
            }
    }

render() {
    return html `
            <ul class="list-group-horizontal products-list">
                ${this.renderList()}
            </ul>
            <div class="row d-flex justify-content-around">
                <button @click="${this.getNext}" ?disabled="${this.previous == undefined}">prev</button>
                <button @click="${this.getNext}" ?disabled="${this.next == undefined}">next</button>
            </div>
        `;
}
}

window.customElements.define('cat-category', CatCategory);
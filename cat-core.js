import { LitElement, html, css } from 'lit-element'
import { CatCategories } from './cat-categories.js'
import { CatCategory } from './cat-category.js'
import { CatProduct } from './cat-product.js'
import { RestDriver } from './rest-driver.js'
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class CatCore extends LitElement {
    static get styles() {
        return css `
      :host {
        height: 100%;
        width: 100%;
        margin: 0;
        padding:0;
      }

      .hidden{
        visibility: hidden;
        position: absolute;
        top: 0;
      }
      .visible{
        visibility: visible;
        position: absolute;
        top: 0;
      }
    `;
    }

    static get properties() {
        return {
            product: { type: Object },
            category: { type: Object },
            catDriver: { type: Object }
        };
    }

    constructor() {
        super()
        this.catDriver = new RestDriver()
    }

    showCategory(event) {
        console.log(event)
        this.category = event.detail
        this.shadowRoot.getElementById("category-element").classList.remove("hidden")
        this.shadowRoot.getElementById("category-element").classList.add("visible")
        this.hideCategories()
    }

    showProduct(event) {
        console.log(event)
        this.product = event.detail.product
        this.shadowRoot.getElementById("product-element").classList.remove("hidden")
        this.shadowRoot.getElementById("product-element").classList.add("visible")
        this.hideCategory()
    }

    hideCategory() {
        this.shadowRoot.getElementById("category-element").classList.add("hidden")
        this.shadowRoot.getElementById("category-element").classList.remove("visible")
    }

    hideCategories() {
        this.shadowRoot.getElementById("categories-element").classList.add("hidden")
        this.shadowRoot.getElementById("categories-element").classList.remove("visible")
    }

    render() {
        return html `
      <cat-categories id="categories-element" 
                      @display-category="${this.showCategory}">
      </cat-categories>
      
      <cat-category id="category-element"
                    class="hidden"
                    .category="${this.category}"
                    @display-product="${this.showProduct}">
      </cat-category>
      
      <cat-product  id="product-element"
                    class="hidden"
                    .product="${this.product}">
      </cat-product>
      
      <slot></slot>
    `;
    }

}

window.customElements.define('cat-core', CatCore);
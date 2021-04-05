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
    createRenderRoot() {
        return this;
    }

    static get styles() {
        return css `
      :host {
        display: block;
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
        document.getElementById("category-element").setRestProducts(event.detail.link)
            //document.getElementById("category-element").classList.add("visible")
            //this.hideCategories()
    }

    showProduct(event) {
        console.log(event)
        this.product = event.detail.product
        document.getElementById("product-element").classList.remove("hidden")
        document.getElementById("product-element").classList.add("visible")
        this.hideCategory()
    }

    hideCategory() {
        document.getElementById("category-element").classList.add("hidden")
        document.getElementById("category-element").classList.remove("visible")
    }

    hideCategories() {
        document.getElementById("categories-element").classList.add("hidden")
        document.getElementById("categories-element").classList.remove("visible")
    }

    render() {
        return html `
        <div class="row">
          <cat-categories id="categories-element" class="col"
                          @display-category="${this.showCategory}">
          </cat-categories>
          
          <cat-category id="category-element" class="col"
                        .category="${this.category}"
                        @display-product="${this.showProduct}">
          </cat-category>
        </div>
        <div class="row">
        <cat-product  id="product-element"
                      .product="${this.product}">
        </cat-product>
      </div>
    `;
    }

}

window.customElements.define('cat-core', CatCore);
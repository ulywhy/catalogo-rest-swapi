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
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        padding: 8px;
        margin: 0;
      }

      .hidden{
        visibility: hidden;
        z-index: 0;
      }
      .visible{
        visibility: visible;
        z-index: 1;
      }
    `;
    }

    static get properties() {
        return {
            category: { type: Object },
            catDriver: { type: Object }
        };
    }

    constructor() {
        super();
        this.catDriver = new RestDriver()
    }

    showCategory(event) {
        console.log(event)
        this.category = event.detail
        this.shadowRoot.getElementById("category-element").classList.remove("hidden")
        this.shadowRoot.getElementById("category-element").classList.add("visible")
        this.hideCategories()
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
      <cat-categories id="categories-element" @display-category="${this.showCategory}"></cat-categories>
      <cat-category id="category-element" class="hidden" .category="${this.category}"></cat-category>
      <!--cat-product></cat-product-->
      
      <slot></slot>
    `;
    }

    _onClick() {
        this.count++;
    }
}

window.customElements.define('cat-core', CatCore);
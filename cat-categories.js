import { LitElement, html, css } from 'lit-element'
import { CatCategoryItem } from './cat-category-item.js'
import { RestDriver } from './rest-driver.js'
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class CatCategories extends LitElement {
    createRenderRoot() {
        return this;
    }

    static get styles() {
        return css `
      :host {
        margin: 0;
        background-color: teal;
      }
    `;
    }

    static get properties() {
        return {
            restDriver: { type: Object },
            categories: { type: Object }
        }
    }

    constructor() {
        super()
        this.restDriver = new RestDriver()
        this.setRestCategories()
    }

    setRestCategories() {
        this.restDriver.doGet('/').then(
            categories => {
                this.categories = Object.entries(categories)
                console.log(this.categories)
            }
        )
    }

    render() {
            return html `
      <div class="list-group">
         ${this.categories.map( cat =>
            html`<cat-category-item class="" name="${cat[0]}" link="${cat[1]}"></cat-category-item>`)}
      </div>
      <slot></slot>
    `;
    }

}

window.customElements.define('cat-categories', CatCategories);
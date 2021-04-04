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
    static get styles() {
        return css `
      :host {
        display: flex;
        flex-direction: column;
        height: 50%;
        width: 100%;
        margin: 0;
        background-color: teal;
      }

      .category-list{
        padding: 0;
        margin:0;
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
      <ul class="category-list">
         ${this.categories.map( cat =>
            html`<cat-category-item name="${cat[0]}" link="${cat[1]}"></cat-category-item>`)}
      </ul>
      <slot></slot>
    `;
    }

}

window.customElements.define('cat-categories', CatCategories);
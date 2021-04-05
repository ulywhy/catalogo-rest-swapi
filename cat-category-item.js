import { LitElement, html, css } from 'lit-element'
import { RestDriver } from './rest-driver.js'
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class CatCategoryItem extends LitElement {
    createRenderRoot() {
        return this;
    }

    static get styles() {
        return css `
    `;
    }

    static get properties() {
        return {
            name: { type: String },
            link: { type: String },
            catDriver: { type: Object }
        };
    }

    constructor() {
        super();
        this.catDriver = new RestDriver()
    }

    displayCategory(event) {
        console.log("clicked")
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
        <button type="button" class="list-group-item list-group-item-action" @click="${this.displayCategory}">
            <div class="d-flex w-100 justify-content-between">
              ${this.name}
            </div>
    </button> 
      <slot></slot>
    `;
    }

}

window.customElements.define('cat-category-item', CatCategoryItem);
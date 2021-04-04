import { LitElement, html, css } from 'lit-element'
import { RestDriver } from './rest-driver.js'
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class CatCategoryItem extends LitElement {
    static get styles() {
        return css `
      :host {
        display: flex;
        flex-direction: column;
        margin: 0;
        background-color: teal;
      }
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
      <h1 @click="${this.displayCategory}">${this.name}</h1>
      <slot></slot>
    `;
    }

    _onClick() {
        this.count++;
    }
}

window.customElements.define('cat-category-item', CatCategoryItem);
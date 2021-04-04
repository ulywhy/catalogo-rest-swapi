import { LitElement, html, css } from 'lit-element'
import { RestDriver } from './rest-driver.js'
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class CatProduct extends LitElement {
    static get styles() {
        return css `
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        padding: 8px;
        margin: 0;
        background-color: teal;
      }
    `;
    }

    static get properties() {
        return {
            /**
             * The name to say "Hello" to.
             */
            name: { type: String },

            /**
             * The number of times the button has been clicked.
             */
            count: { type: Number },
            catDriver: { type: Object }
        };
    }

    constructor() {
        super();
        this.catDriver = new RestDriver()
        this.name = 'World'
        this.count = 0
    }

    render() {
        return html `
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
    }

    _onClick() {
        this.count++;
    }
}

window.customElements.define('cat-product', CatProduct);
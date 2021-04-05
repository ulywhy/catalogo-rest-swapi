import { LitElement, html, css } from 'lit-element'
import { RestDriver } from './rest-driver.js'
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class CatProduct extends LitElement {
    createRenderRoot() {
        return this;
    }

    static get styles() {
        return css `
      :host {
        
        background-color: teal;
      }
    `;
    }

    static get properties() {
        return {
            product: { type: Object },
            catDriver: { type: Object }
        };
    }

    constructor() {
        super();
        this.catDriver = new RestDriver()
    }

    render() {
            return html `
        <div class="card" style="background-color: teal;  padding: 1em;">
            <div class="card-body">
                <h5 class="card-title">
                    ${this.product.hasOwnProperty("name") ? this.product.name : this.product.title}
                </h5>
                <div class="container d-flex justify-content-center">
                <ul class="list-group" style="width: 90%;">
                    ${Object.keys(this.product).map(key => 
                        html`
                        <div class="list-group-item list-group-item-action">
                            <div style=" width: 22%;">${key}</div> <div style="word-wrap: break-word; max-width: 77%;">${this.product[key]}</div>
                        </div>
                        `
                    )}
                    </tbody>
                </table>
            </div>
        </div>
      <slot></slot>
    `;
    }
}

window.customElements.define('cat-product', CatProduct);
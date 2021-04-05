/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},s=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${s}--\x3e`,n=new RegExp(`${s}|${i}`);class o{constructor(t,e){this.parts=[],this.element=e;const i=[],o=[],c=document.createTreeWalker(e.content,133,null,!1);let a=0,u=-1,d=0;const{strings:p,values:{length:y}}=t;for(;d<y;){const t=c.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let i=0;for(let t=0;t<s;t++)r(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=p[d],s=l.exec(e)[2],i=s.toLowerCase()+"$lit$",o=t.getAttribute(i);t.removeAttribute(i);const r=o.split(n);this.parts.push({type:"attribute",index:u,name:s,strings:r}),d+=r.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),c.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(s)>=0){const s=t.parentNode,o=e.split(n),c=o.length-1;for(let e=0;e<c;e++){let i,n=o[e];if(""===n)i=h();else{const t=l.exec(n);null!==t&&r(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(n)}s.insertBefore(i,t),this.parts.push({type:"node",index:++u})}""===o[c]?(s.insertBefore(h(),t),i.push(t)):t.data=o[c],d+=c}}else if(8===t.nodeType)if(t.data===s){const e=t.parentNode;null!==t.previousSibling&&u!==a||(u++,e.insertBefore(h(),t)),a=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(i.push(t),u--),d++}else{let e=-1;for(;-1!==(e=t.data.indexOf(s,e+1));)this.parts.push({type:"node",index:-1}),d++}}else c.currentNode=o.pop()}for(const t of i)t.parentNode.removeChild(t)}}const r=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},c=t=>-1!==t.index,h=()=>document.createComment(""),l=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function a(t,e){const{element:{content:s},parts:i}=t,n=document.createTreeWalker(s,133,null,!1);let o=d(i),r=i[o],c=-1,h=0;const l=[];let a=null;for(;n.nextNode();){c++;const t=n.currentNode;for(t.previousSibling===a&&(a=null),e.has(t)&&(l.push(t),null===a&&(a=t)),null!==a&&h++;void 0!==r&&r.index===c;)r.index=null!==a?-1:r.index-h,o=d(i,o),r=i[o]}l.forEach(t=>t.parentNode.removeChild(t))}const u=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},d=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(c(e))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const p=new WeakMap,y=t=>"function"==typeof t&&p.has(t),f={},w={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class m{constructor(t,e,s){this.t=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.t)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],i=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let o,r=0,h=0,l=n.nextNode();for(;r<i.length;)if(o=i[r],c(o)){for(;h<o.index;)h++,"TEMPLATE"===l.nodeName&&(s.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=s.pop(),l=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));r++}else this.t.push(void 0),r++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const g=` ${s} `;class b{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let o=0;o<t;o++){const t=this.strings[o],r=t.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===t.indexOf("--\x3e",r+1);const c=l.exec(t);e+=null===c?t+(n?g:i):t.substr(0,c.index)+c[1]+c[2]+"$lit$"+c[3]+s}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class S{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new $(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(v(t)||!x(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class ${constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||v(t)&&t===this.value||(this.value=t,y(t)||(this.committer.dirty=!0))}commit(){for(;y(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class _{constructor(t){this.value=void 0,this.s=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(h()),this.endNode=t.appendChild(h())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.i(this.startNode=h()),t.i(this.endNode=h())}insertAfterPart(t){t.i(this.startNode=h()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.s=t}commit(){if(null===this.startNode.parentNode)return;for(;y(this.s);){const t=this.s;this.s=f,t(this)}const t=this.s;t!==f&&(v(t)?t!==this.value&&this.o(t):t instanceof b?this.h(t):t instanceof Node?this.l(t):x(t)?this.u(t):t===w?(this.value=w,this.clear()):this.o(t))}i(t){this.endNode.parentNode.insertBefore(t,this.endNode)}l(t){this.value!==t&&(this.clear(),this.i(t),this.value=t)}o(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.l(document.createTextNode(s)),this.value=t}h(t){const e=this.options.templateFactory(t);if(this.value instanceof m&&this.value.template===e)this.value.update(t.values);else{const s=new m(e,t.processor,this.options),i=s._clone();s.update(t.values),this.l(i),this.value=s}}u(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const n of t)s=e[i],void 0===s&&(s=new _(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(n),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class j{constructor(t,e,s){if(this.value=void 0,this.s=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.s=t}commit(){for(;y(this.s);){const t=this.s;this.s=f,t(this)}if(this.s===f)return;const t=!!this.s;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.s=f}}class O extends S{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new C(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class C extends ${}let P=!1;(()=>{try{const t={get capture(){return P=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class k{constructor(t,e,s){this.value=void 0,this.s=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.p=t=>this.handleEvent(t)}setValue(t){this.s=t}commit(){for(;y(this.s);){const t=this.s;this.s=f,t(this)}if(this.s===f)return;const t=this.s,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.p,this.m),i&&(this.m=A(t),this.element.addEventListener(this.eventName,this.p,this.m)),this.value=t,this.s=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const A=t=>t&&(P?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function E(t){let e=M.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},M.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(s);return i=e.keyString.get(n),void 0===i&&(i=new o(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const M=new Map,R=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const T=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,s,i){const n=e[0];if("."===n){return new O(t,e.slice(1),s).parts}return"@"===n?[new k(t,e.slice(1),i.eventContext)]:"?"===n?[new j(t,e.slice(1),s)]:new S(t,e,s).parts}handleTextExpression(t){return new _(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const U=(t,...e)=>new b(t,e,"html",T)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,N=(t,e)=>`${t}--${e}`;let V=!0;void 0===window.ShadyCSS?V=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),V=!1);const D=t=>e=>{const i=N(e.type,t);let n=M.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},M.set(i,n));let r=n.stringsArray.get(e.strings);if(void 0!==r)return r;const c=e.strings.join(s);if(r=n.keyString.get(c),void 0===r){const s=e.getTemplateElement();V&&window.ShadyCSS.prepareTemplateDom(s,t),r=new o(e,s),n.keyString.set(c,r)}return n.stringsArray.set(e.strings,r),r},F=["html","svg"],q=new Set,I=(t,e,s)=>{q.add(t);const i=s?s.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(i,t);const r=document.createElement("style");for(let t=0;t<o;t++){const e=n[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{F.forEach(e=>{const s=M.get(N(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),a(t,s)})})})(t);const c=i.content;s?function(t,e,s=null){const{element:{content:i},parts:n}=t;if(null==s)return void i.appendChild(e);const o=document.createTreeWalker(i,133,null,!1);let r=d(n),c=0,h=-1;for(;o.nextNode();){for(h++,o.currentNode===s&&(c=u(e),s.parentNode.insertBefore(e,s));-1!==r&&n[r].index===h;){if(c>0){for(;-1!==r;)n[r].index+=c,r=d(n,r);return}r=d(n,r)}}}(s,r,c.firstChild):c.insertBefore(r,c.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const h=c.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==h)e.insertBefore(h.cloneNode(!0),e.firstChild);else if(s){c.insertBefore(r,c.firstChild);const t=new Set;t.add(r),a(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const z={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},J=(t,e)=>e!==t&&(e==e||t==t),L={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:J};class H extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=L){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(s){const i=this[t];this[e]=s,this._requestUpdate(t,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||L}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=J){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||z,n="function"==typeof i?i:i.fromAttribute;return n?n(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||z.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=L){const i=this.constructor,n=i._attributeNameForProperty(t,s);if(void 0!==n){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const i=this.constructor,n=i.getPropertyOptions(t);i._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}H.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const W="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,B=Symbol();class G{constructor(t,e){if(e!==B)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(W?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const K=(t,...e)=>{const s=e.reduce((e,s,i)=>e+(t=>{if(t instanceof G)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[i+1],t[0]);return new G(s,B)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Q={};class X extends H{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,s)=>t.reduceRight((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t),s),s=e(t,new Set),i=[];s.forEach(t=>i.unshift(t)),this._styles=i}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?W?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Q&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return Q}}X.finalized=!0,X.render=(t,s,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,o=R.has(s),r=V&&11===s.nodeType&&!!s.host,c=r&&!q.has(n),h=c?document.createDocumentFragment():s;if(((t,s,i)=>{let n=R.get(s);void 0===n&&(e(s,s.firstChild),R.set(s,n=new _(Object.assign({templateFactory:E},i))),n.appendInto(s)),n.setValue(t),n.commit()})(t,h,Object.assign({templateFactory:D(n)},i)),c){const t=R.get(h);R.delete(h);const i=t.value instanceof m?t.value.template:void 0;I(n,h,i),e(s,s.firstChild),s.appendChild(h),R.set(s,t)}!o&&r&&window.ShadyCSS.styleElement(s.host)};class Y{constructor(t="https://swapi.dev/api"){this.endpoint=t}doGet(t,e=""){let s=t.includes("http")?t:this.endpoint+t;return s=this.forceHttps(s.toLowerCase()),console.log("fetching "+s),fetch(s+(s.includes("?")?"":""!=e?"?"+e:""),{method:"GET",mode:"cors"}).then(t=>t.json()).then(t=>(console.log(t),t)).catch(s=>fetch(this.endpoint+t+(""!=e?"?"+e:""),{method:"GET",mode:"cors",headers:{"Access-Control-Allow-Origin":"*"}}).then(t=>t.json()).then(t=>(console.log(t),t)).catch(t=>console.log(t)))}forceHttps(t){return t.includes("https")?t:t.replace("http","https")}}window.customElements.define("cat-category-item",class extends X{createRenderRoot(){return this}static get styles(){return K`
    `}static get properties(){return{name:{type:String},link:{type:String},catDriver:{type:Object}}}constructor(){super(),this.catDriver=new Y}displayCategory(t){console.log("clicked");let e=new CustomEvent("display-category",{detail:{name:this.name,link:this.link},bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){return U`
        <button type="button" class="list-group-item list-group-item-action" @click="${this.displayCategory}">
            <div class="d-flex w-100 justify-content-between">
              ${this.name}
            </div>
    </button> 
      <slot></slot>
    `}});window.customElements.define("cat-categories",class extends X{createRenderRoot(){return this}static get styles(){return K`
      :host {
        margin: 0;
        background-color: teal;
      }
    `}static get properties(){return{restDriver:{type:Object},categories:{type:Object}}}constructor(){super(),this.restDriver=new Y,this.setRestCategories()}setRestCategories(){this.restDriver.doGet("/").then(t=>{this.categories=Object.entries(t),console.log(this.categories)})}render(){return U`
      <div class="list-group">
         ${this.categories.map(t=>U`<cat-category-item class="" name="${t[0]}" link="${t[1]}"></cat-category-item>`)}
      </div>
      <slot></slot>
    `}});window.customElements.define("cat-product-item",class extends X{createRenderRoot(){return this}static get styles(){return K`
    `}static get properties(){return{product:{type:Object},catDriver:{type:Object}}}constructor(){super(),this.catDriver=new Y}displayProduct(t){console.log("clicked");let e=new CustomEvent("display-product",{detail:{product:this.product},bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){return U`
            <button type="button" class="list-group-item list-group-item-action product-item" @click="${this.displayProduct}">
                ${this.product.hasOwnProperty("name")?this.product.name:this.product.title}
            </button>
    `}});window.customElements.define("cat-category",class extends X{createRenderRoot(){return this}static get styles(){return K`
        
    `}static get properties(){return{category:{type:Object},restDriver:{type:Object},products:{type:Object},next:{type:String},previous:{type:String},count:{type:Number},products:{type:Array}}}constructor(){super(),this.restDriver=new Y}setRestProducts(t){console.log(t),this.restDriver.doGet(t).then(t=>this.parseProducts(t))}parseProducts(t){this.next=t.next,this.previous=t.previous,this.count=t.count,this.products=t.results,console.log(this.products)}getNext(){return this.restDriver.doGet(this.next).then(t=>(this.requestUpdate(),this.parseProducts(t)))}getPrev(){return this.restDriver.doGet(this.previous).then(t=>(this.requestUpdate(),this.parseProducts(t)))}renderList(){return console.log(this.products),null!=this.products?U`${this.products.map(t=>U` <cat-product-item .product="${t}"></cat-product-item>`)}`:""}render(){return U`
            <ul class="list-group-horizontal products-list">
                ${this.renderList()}
            </ul>
            <div class="row d-flex justify-content-around">
                <button @click="${this.getNext}" ?disabled="${null==this.previous}">prev</button>
                <button @click="${this.getNext}" ?disabled="${null==this.next}">next</button>
            </div>
        `}});window.customElements.define("cat-product",class extends X{static get styles(){return K`
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        padding: 8px;
        margin: 0;
        background-color: teal;
      }
    `}static get properties(){return{product:{type:Object},catDriver:{type:Object}}}constructor(){super(),this.catDriver=new Y}render(){return U`
        <h1>
            ${this.product.hasOwnProperty("name")?this.product.name:this.product.title}  
        </h1>
        <div style="display:table;">
        ${Object.keys(this.product).map(t=>U`
                <div style="display: table-row"> 
                    <span style="display:table-cell">${t}</span> <span style="display:table-cell">${this.product[t]}</span>
                </div>
            `)}
        </div>
      <slot></slot>
    `}});class Z extends X{createRenderRoot(){return this}static get styles(){return K`
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
    `}static get properties(){return{product:{type:Object},category:{type:Object},catDriver:{type:Object}}}constructor(){super(),this.catDriver=new Y}showCategory(t){console.log(t),document.getElementById("category-element").setRestProducts(t.detail.link)}showProduct(t){console.log(t),this.product=t.detail.product,document.getElementById("product-element").classList.remove("hidden"),document.getElementById("product-element").classList.add("visible"),this.hideCategory()}hideCategory(){document.getElementById("category-element").classList.add("hidden"),document.getElementById("category-element").classList.remove("visible")}hideCategories(){document.getElementById("categories-element").classList.add("hidden"),document.getElementById("categories-element").classList.remove("visible")}render(){return U`
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
    `}}window.customElements.define("cat-core",Z);export{Z as CatCore};

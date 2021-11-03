/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new Map;class e{constructor(t,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let i=s.get(this.cssText);return t&&void 0===i&&(s.set(this.cssText,i=new CSSStyleSheet),i.replaceSync(this.cssText)),i}toString(){return this.cssText}}const o=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return(t=>new e("string"==typeof t?t:t+"",i))(s)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var n;const r=window.reactiveElementPolyfillSupport,h={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},l=(t,i)=>i!==t&&(i==i||t==t),a={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:l};class c extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e))})),t}static createProperty(t,i=a){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const o=this[t];this[i]=e,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||a}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(o(t))}else void 0!==t&&i.push(o(t));return i}static _$Eh(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$Em)&&void 0!==i?i:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$Em)||void 0===i||i.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{t?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style"),e=window.litNonce;void 0!==e&&s.setAttribute("nonce",e),s.textContent=t.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$Eg(t,i,s=a){var e,o;const n=this.constructor._$Eh(t,s);if(void 0!==n&&!0===s.reflect){const r=(null!==(o=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==o?o:h.toAttribute)(i,s.type);this._$Ei=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Ei=null}}_$AK(t,i){var s,e,o;const n=this.constructor,r=n._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=n.getPropertyOptions(r),l=t.converter,a=null!==(o=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==o?o:h.fromAttribute;this._$Ei=r,this[r]=a(i,t.type),this._$Ei=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||l)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU()}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$Em)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,i)=>this._$Eg(i,this[i],t))),this._$ES=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var d;c.finalized=!0,c.elementProperties=new Map,c.elementStyles=[],c.shadowRootOptions={mode:"open"},null==r||r({ReactiveElement:c}),(null!==(n=globalThis.reactiveElementVersions)&&void 0!==n?n:globalThis.reactiveElementVersions=[]).push("1.0.1");const u=globalThis.trustedTypes,v=u?u.createPolicy("lit-html",{createHTML:t=>t}):void 0,f=`lit$${(Math.random()+"").slice(9)}$`,p="?"+f,m=`<${p}>`,w=document,g=(t="")=>w.createComment(t),b=t=>null===t||"object"!=typeof t&&"function"!=typeof t,y=Array.isArray,$=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,x=/>/g,A=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,C=/'/g,k=/"/g,T=/^(?:script|style|textarea)$/i,_=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),M=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),U=new WeakMap,R=w.createTreeWalker(w,129,null,!1),z=(t,i)=>{const s=t.length-1,e=[];let o,n=2===i?"<svg>":"",r=$;for(let i=0;i<s;i++){const s=t[i];let h,l,a=-1,c=0;for(;c<s.length&&(r.lastIndex=c,l=r.exec(s),null!==l);)c=r.lastIndex,r===$?"!--"===l[1]?r=S:void 0!==l[1]?r=x:void 0!==l[2]?(T.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=A):void 0!==l[3]&&(r=A):r===A?">"===l[0]?(r=null!=o?o:$,a=-1):void 0===l[1]?a=-2:(a=r.lastIndex-l[2].length,h=l[1],r=void 0===l[3]?A:'"'===l[3]?k:C):r===k||r===C?r=A:r===S||r===x?r=$:(r=A,o=void 0);const d=r===A&&t[i+1].startsWith("/>")?" ":"";n+=r===$?s+m:a>=0?(e.push(h),s.slice(0,a)+"$lit$"+s.slice(a)+f+d):s+f+(-2===a?(e.push(void 0),i):d)}const h=n+(t[s]||"<?>")+(2===i?"</svg>":"");return[void 0!==v?v.createHTML(h):h,e]};class O{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let o=0,n=0;const r=t.length-1,h=this.parts,[l,a]=z(t,i);if(this.el=O.createElement(l,s),R.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=R.nextNode())&&h.length<r;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(f)){const s=a[n++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(f),i=/([.?@])?(.*)/.exec(s);h.push({type:1,index:o,name:i[2],strings:t,ctor:"."===i[1]?L:"?"===i[1]?B:"@"===i[1]?D:P})}else h.push({type:6,index:o})}for(const i of t)e.removeAttribute(i)}if(T.test(e.tagName)){const t=e.textContent.split(f),i=t.length-1;if(i>0){e.textContent=u?u.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],g()),R.nextNode(),h.push({type:2,index:++o});e.append(t[i],g())}}}else if(8===e.nodeType)if(e.data===p)h.push({type:2,index:o});else{let t=-1;for(;-1!==(t=e.data.indexOf(f,t+1));)h.push({type:7,index:o}),t+=f.length-1}o++}}static createElement(t,i){const s=w.createElement("template");return s.innerHTML=t,s}}function j(t,i,s=t,e){var o,n,r,h;if(i===M)return i;let l=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const a=b(i)?void 0:i._$litDirective$;return(null==l?void 0:l.constructor)!==a&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===a?l=void 0:(l=new a(t),l._$AT(t,s,e)),void 0!==e?(null!==(r=(h=s)._$Cl)&&void 0!==r?r:h._$Cl=[])[e]=l:s._$Cu=l),void 0!==l&&(i=j(t,l._$AS(t,i.values),l,e)),i}class N{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:w).importNode(s,!0);R.currentNode=o;let n=R.nextNode(),r=0,h=0,l=e[0];for(;void 0!==l;){if(r===l.index){let i;2===l.type?i=new I(n,n.nextSibling,this,t):1===l.type?i=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(i=new H(n,this,t)),this.v.push(i),l=e[++h]}r!==(null==l?void 0:l.index)&&(n=R.nextNode(),r++)}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class I{constructor(t,i,s,e){var o;this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=j(this,t,i),b(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==M&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var i;return y(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==E&&b(this._$AH)?this._$AA.nextSibling.data=t:this.S(w.createTextNode(t)),this._$AH=t}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=O.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else{const t=new N(o,this),i=t.p(this.options);t.m(s),this.S(i),this._$AH=t}}_$AC(t){let i=U.get(t.strings);return void 0===i&&U.set(t.strings,i=new O(t)),i}M(t){y(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new I(this.A(g()),this.A(g()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class P{constructor(t,i,s,e,o){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=j(this,t,i,0),n=!b(t)||t!==this._$AH&&t!==M,n&&(this._$AH=t);else{const e=t;let r,h;for(t=o[0],r=0;r<o.length-1;r++)h=j(this,e[s+r],i,r),h===M&&(h=this._$AH[r]),n||(n=!b(h)||h!==this._$AH[r]),h===E?t=E:t!==E&&(t+=(null!=h?h:"")+o[r+1]),this._$AH[r]=h}n&&!e&&this.k(t)}k(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class L extends P{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===E?void 0:t}}class B extends P{constructor(){super(...arguments),this.type=4}k(t){t&&t!==E?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class D extends P{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=j(this,t,i,0))&&void 0!==s?s:E)===M)return;const e=this._$AH,o=t===E&&e!==E||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==E&&(e===E||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class H{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}}const J=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var K,W;null==J||J(O,I),(null!==(d=globalThis.litHtmlVersions)&&void 0!==d?d:globalThis.litHtmlVersions=[]).push("2.0.1");class Z extends c{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new I(i.insertBefore(g(),t),t,void 0,null!=s?s:{})}return r._$AI(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return M}}Z.finalized=!0,Z._$litElement$=!0,null===(K=globalThis.litElementHydrateSupport)||void 0===K||K.call(globalThis,{LitElement:Z});const q=globalThis.litElementPolyfillSupport;null==q||q({LitElement:Z}),(null!==(W=globalThis.litElementVersions)&&void 0!==W?W:globalThis.litElementVersions=[]).push("3.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const V=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(s){s.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function F(t){return function(t){return(i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t)})(t,i,s):V(t,i)}({...t,state:!0})}class G{constructor(t,i){this.on=!1,this.matrix=[],this.mines=[],this.picks=0,this.cells=0,this.displayed=[],this.symbols={mine:"💣",bomb:"💥",hide:"❓"},this.size=t,this.difficulty=i,this.cells=t*t}getRandom(t,i){return Math.floor(Math.random()*(i-t+1))+t}setMines(){const t=[];for(let i=0;i<this.difficulty;i++){const s=this.getRandom(i,this.difficulty),e=this.getRandom(this.difficulty,i);t[i]=[s,e]}this.mines=[...t]}generateRow(){const t=[];for(let i=0;i<this.size;i++)t[i]=this.symbols.hide;return t}generate(){const t=[];for(let i=0;i<this.size;i++){const s=this.generateRow();t[i]=s}this.matrix=[...t]}cellHasMine(t,i){for(const s of this.mines){const[e,o]=s;if(t===e&&i===o)return!0}return!1}getCloseCells(t,i){const s=[],e=i-1<0?i:i-1,o=i+1>this.size?i:i+1,n=t-1<0?t:t-1,r=t+1>this.size?t:t+1;for(let h=e;h<=o;h++)for(let e=n;e<=r;e++)[e,h]!==[t,i]&&this.cellHasMine(e,h)&&s.push([e,h]);return s}getNearbyMines(t,i){return this.getCloseCells(t,i).length}resolve(){for(let t=0;t<this.size;t++)for(let i=0;i<this.size;i++){const s=this.cellHasMine(t,i);if(s&&this.matrix[t][i]!==this.symbols.bomb)this.matrix[t][i]=this.symbols.mine;else if(!s){const s=this.getNearbyMines(t,i).toString();this.matrix[t][i]=s}}}set(t,i,s){this.symbols.hide,this.matrix[t][i]=s}pick(t,i){this.picks++;if(this.cellHasMine(t,i))return this.set(t,i,this.symbols.bomb),this.displayed.push([t,i]),this.on=!1,[!0,void 0];const s=this.getNearbyMines(t,i).toString();return this.set(t,i,s),this.displayed.push([t,i]),[!1,s]}initialize(){this.on=!0,this.generate(),this.setMines()}}var Q=function(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(o=t[h])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r};let X=class extends Z{constructor(){super(),this.minesWeeper=new G(4,3),this.on=!1,this.reload=!1,this.board=[[]]}getCellClass(t){let i="cell";return"1"===t?i+=" cell--one":"2"===t?i+=" cell--two":"3"===t&&(i+=" cell--three"),i}render(){return _`
      ${this.on?_` <div class="board">
            ${this.board.map(((t,i)=>_`
                ${t.map(((t,s)=>_` <div
                      class="${this.getCellClass(t)}"
                      data-row="${i}"
                      data-column="${s}"
                      @click="${this.discover}"
                    >
                      ${t}
                    </div>`))}
              `))}
          </div>`:_` ${this.reload?_`
                <h2>Do yo want to start again?</h2>
                <button @click="${this.restart}">RESTART</button>
              `:_`
                <h2>Welcome to the mines weeper web game!!</h2>
                <button @click="${this.start}">START</button>
              `}`}
    `}updateStatus(){this.on=this.minesWeeper.on}updateBoard(){this.board=[...this.minesWeeper.matrix]}finish(){this.minesWeeper.resolve(),this.updateBoard()}discover(t){var i;if(this.updateStatus(),!this.on)return void(this.reload=!0);const s=null===(i=t.target)||void 0===i?void 0:i.getAttribute("data-row"),e=t.target.getAttribute("data-column");if(s&&e){const t=parseInt(s,10),i=parseInt(e,10),[o]=this.minesWeeper.pick(t,i);o&&this.finish(),this.updateBoard()}}start(){console.log("START"),this.minesWeeper.initialize(),this.updateStatus(),this.updateBoard(),console.log("ON",this.on)}restart(){this.reload=!1,this.start()}};X.styles=((t,...s)=>{const o=1===t.length?t[0]:s.reduce(((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1]),t[0]);return new e(o,i)})`
    :host {
      --color-primary: #000000;
      --color-secondary: #ffffff;
      --color-auxiliary-005: #e0e0e0;
      --color-auxiliary-006: #cacaca;
      --color-auxiliary-007: #acacac;
      --color-auxiliary-008: #8f8f8f;
      --font-family-primary: 'Poppins', sans-serif;
      display: block;
      background: var(--color-secondary);
      font-family: var(--font-family-primary);
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      text-align: center;
    }

    .board {
      display: grid;
      gap: 0;
      grid-auto-rows: 10em;
      grid-template-columns: repeat(4, minmax(min(100%, 10em), 1fr));
      grid-auto-flow: dense;
    }

    .cell {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      font-size: 5.5em;
      font-weight: 500;
      color: var(--color-auxiliary-005);
    }

    .cell:hover {
      cursor: pointer;
    }

    .cell.cell--one {
      color: var(--color-auxiliary-006);
    }

    .cell.cell--two {
      color: var(--color-auxiliary-007);
    }

    .cell.cell--three {
      color: var(--color-auxiliary-008);
    }

    button {
      --button-width: 8em;
      --button-width-long: 9em;
      border: none;
      box-shadow: none;
      background: var(--color-primary);
      border-radius: 80px;
      margin-top: 1em;
      font-size: 1.3em;
      font-weight: 700;
      width: var(--button-width);
      height: 3em;
      color: var(--color-secondary);
      cursor: pointer;
    }

    @keyframes width-button-hover {
      from {
        width: var(--button-width);
      }
      25% {
        width: var(--button-width-long);
      }
      50% {
        width: calc(var(--button-width) - 5px);
      }
      75% {
        width: var(--button-width-long);
      }
      to {
        width: var(--button-width);
      }
    }

    button:hover {
      width: var(--button-width);
      animation-duration: 0.5s;
      animation-name: width-button-hover;
    }

    @media screen and (max-width: 1000px) {
      :host {
        font-size: 35px;
      }

      .board {
        grid-auto-rows: 9em;
        grid-template-columns: repeat(4, minmax(min(100%, 5em), 1fr));
      }

      .cell {
        font-size: 4em;
      }
    }
  `,Q([F()],X.prototype,"on",void 0),Q([F()],X.prototype,"reload",void 0),Q([F()],X.prototype,"board",void 0),X=Q([(t=>i=>"function"==typeof i?((t,i)=>(window.customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){window.customElements.define(t,i)}}})(t,i))("jla-mines-weeper-game")],X);export{X as JlaMinesWeeperGame};

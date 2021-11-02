var X=Object.defineProperty;var At=Object.getOwnPropertyDescriptor;var St=(r,t,e)=>t in r?X(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var C=(r,t,e,i)=>{for(var s=i>1?void 0:i?At(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&X(t,e,s),s};var Y=(r,t,e)=>(St(r,typeof t!="symbol"?t+"":t,e),e);var H=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,B=Symbol(),J=new Map,N=class{constructor(t,e){if(this._$cssResult$=!0,e!==B)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=J.get(this.cssText);return H&&t===void 0&&(J.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}},G=r=>new N(typeof r=="string"?r:r+"",B),q=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new N(e,B)},D=(r,t)=>{H?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let i=document.createElement("style"),s=window.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)})},j=H?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return G(e)})(r):r;var I,tt=window.reactiveElementPolyfillSupport,W={toAttribute(r,t){switch(t){case Boolean:r=r?"":null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},et=(r,t)=>t!==r&&(t==t||r==r),V={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:et},v=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let s=this._$Eh(i,e);s!==void 0&&(this._$Eu.set(s,i),t.push(s))}),t}static createProperty(t,e=V){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){let n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||V}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){let e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(j(s))}else t!==void 0&&e.push(j(t));return e}static _$Eh(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Ep(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$Em)!==null&&e!==void 0?e:this._$Em=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$Em)===null||e===void 0||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return D(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Em)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Em)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$Eg(t,e,i=V){var s,n;let o=this.constructor._$Eh(t,i);if(o!==void 0&&i.reflect===!0){let h=((n=(s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&n!==void 0?n:W.toAttribute)(e,i.type);this._$Ei=t,h==null?this.removeAttribute(o):this.setAttribute(o,h),this._$Ei=null}}_$AK(t,e){var i,s,n;let o=this.constructor,h=o._$Eu.get(t);if(h!==void 0&&this._$Ei!==h){let l=o.getPropertyOptions(h),a=l.converter,p=(n=(s=(i=a)===null||i===void 0?void 0:i.fromAttribute)!==null&&s!==void 0?s:typeof a=="function"?a:null)!==null&&n!==void 0?n:W.fromAttribute;this._$Ei=h,this[h]=p(e,l.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||et)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Ei!==t&&(this._$ES===void 0&&(this._$ES=new Map),this._$ES.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((s,n)=>this[n]=s),this._$Et=void 0);let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$Em)===null||t===void 0||t.forEach(s=>{var n;return(n=s.hostUpdate)===null||n===void 0?void 0:n.call(s)}),this.update(i)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$Em)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){this._$ES!==void 0&&(this._$ES.forEach((e,i)=>this._$Eg(i,this[i],e)),this._$ES=void 0),this._$EU()}updated(t){}firstUpdated(t){}};v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},tt==null||tt({ReactiveElement:v}),((I=globalThis.reactiveElementVersions)!==null&&I!==void 0?I:globalThis.reactiveElementVersions=[]).push("1.0.1");var K,O=globalThis.trustedTypes,it=O?O.createPolicy("lit-html",{createHTML:r=>r}):void 0,f=`lit$${(Math.random()+"").slice(9)}$`,st="?"+f,Et=`<${st}>`,A=document,P=(r="")=>A.createComment(r),R=r=>r===null||typeof r!="object"&&typeof r!="function",rt=Array.isArray,wt=r=>{var t;return rt(r)||typeof((t=r)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ot=/-->/g,nt=/>/g,$=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,lt=/'/g,at=/"/g,ht=/^(?:script|style|textarea)$/i,dt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),y=dt(1),kt=dt(2),g=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),ct=new WeakMap,ut=(r,t,e)=>{var i,s;let n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t,o=n._$litPart$;if(o===void 0){let h=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;n._$litPart$=o=new x(t.insertBefore(P(),h),h,void 0,e??{})}return o._$AI(r),o},S=A.createTreeWalker(A,129,null,!1),xt=(r,t)=>{let e=r.length-1,i=[],s,n=t===2?"<svg>":"",o=T;for(let l=0;l<e;l++){let a=r[l],p,d,c=-1,m=0;for(;m<a.length&&(o.lastIndex=m,d=o.exec(a),d!==null);)m=o.lastIndex,o===T?d[1]==="!--"?o=ot:d[1]!==void 0?o=nt:d[2]!==void 0?(ht.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=$):d[3]!==void 0&&(o=$):o===$?d[0]===">"?(o=s??T,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,p=d[1],o=d[3]===void 0?$:d[3]==='"'?at:lt):o===at||o===lt?o=$:o===ot||o===nt?o=T:(o=$,s=void 0);let U=o===$&&r[l+1].startsWith("/>")?" ":"";n+=o===T?a+Et:c>=0?(i.push(p),a.slice(0,c)+"$lit$"+a.slice(c)+f+U):a+f+(c===-2?(i.push(void 0),l):U)}let h=n+(r[e]||"<?>")+(t===2?"</svg>":"");return[it!==void 0?it.createHTML(h):h,i]},E=class{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0,h=t.length-1,l=this.parts,[a,p]=xt(t,e);if(this.el=E.createElement(a,i),S.currentNode=this.el.content,e===2){let d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(s=S.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes()){let d=[];for(let c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(f)){let m=p[o++];if(d.push(c),m!==void 0){let U=s.getAttribute(m.toLowerCase()+"$lit$").split(f),k=/([.?@])?(.*)/.exec(m);l.push({type:1,index:n,name:k[2],strings:U,ctor:k[1]==="."?mt:k[1]==="?"?vt:k[1]==="@"?ft:M})}else l.push({type:6,index:n})}for(let c of d)s.removeAttribute(c)}if(ht.test(s.tagName)){let d=s.textContent.split(f),c=d.length-1;if(c>0){s.textContent=O?O.emptyScript:"";for(let m=0;m<c;m++)s.append(d[m],P()),S.nextNode(),l.push({type:2,index:++n});s.append(d[c],P())}}}else if(s.nodeType===8)if(s.data===st)l.push({type:2,index:n});else{let d=-1;for(;(d=s.data.indexOf(f,d+1))!==-1;)l.push({type:7,index:n}),d+=f.length-1}n++}}static createElement(t,e){let i=A.createElement("template");return i.innerHTML=t,i}};function w(r,t,e=r,i){var s,n,o,h;if(t===g)return t;let l=i!==void 0?(s=e._$Cl)===null||s===void 0?void 0:s[i]:e._$Cu,a=R(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),a===void 0?l=void 0:(l=new a(r),l._$AT(r,e,i)),i!==void 0?((o=(h=e)._$Cl)!==null&&o!==void 0?o:h._$Cl=[])[i]=l:e._$Cu=l),l!==void 0&&(t=w(r,l._$AS(r,t.values),l,i)),t}var pt=class{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;let{el:{content:i},parts:s}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:A).importNode(i,!0);S.currentNode=n;let o=S.nextNode(),h=0,l=0,a=s[0];for(;a!==void 0;){if(h===a.index){let p;a.type===2?p=new x(o,o.nextSibling,this,t):a.type===1?p=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(p=new yt(o,this,t)),this.v.push(p),a=s[++l]}h!==(a==null?void 0:a.index)&&(o=S.nextNode(),h++)}return n}m(t){let e=0;for(let i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},x=class{constructor(t,e,i,s){var n;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=(n=s==null?void 0:s.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),R(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==g&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):wt(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==u&&R(this._$AH)?this._$AA.nextSibling.data=t:this.S(A.createTextNode(t)),this._$AH=t}T(t){var e;let{values:i,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=E.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.m(i);else{let o=new pt(n,this),h=o.p(this.options);o.m(i),this.S(h),this._$AH=o}}_$AC(t){let e=ct.get(t.strings);return e===void 0&&ct.set(t.strings,e=new E(t)),e}M(t){rt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let n of t)s===e.length?e.push(i=new x(this.A(P()),this.A(P()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},M=class{constructor(t,e,i,s,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){let n=this.strings,o=!1;if(n===void 0)t=w(this,t,e,0),o=!R(t)||t!==this._$AH&&t!==g,o&&(this._$AH=t);else{let h=t,l,a;for(t=n[0],l=0;l<n.length-1;l++)a=w(this,h[i+l],e,l),a===g&&(a=this._$AH[l]),o||(o=!R(a)||a!==this._$AH[l]),a===u?t=u:t!==u&&(t+=(a??"")+n[l+1]),this._$AH[l]=a}o&&!s&&this.k(t)}k(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},mt=class extends M{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===u?void 0:t}},vt=class extends M{constructor(){super(...arguments),this.type=4}k(t){t&&t!==u?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}},ft=class extends M{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=w(this,t,e,0))!==null&&i!==void 0?i:u)===g)return;let s=this._$AH,n=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==u&&(s===u||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},yt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}};var $t=window.litHtmlPolyfillSupport;$t==null||$t(E,x),((K=globalThis.litHtmlVersions)!==null&&K!==void 0?K:globalThis.litHtmlVersions=[]).push("2.0.1");var Z,F;var b=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=ut(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return g}};b.finalized=!0,b._$litElement$=!0,(Z=globalThis.litElementHydrateSupport)===null||Z===void 0||Z.call(globalThis,{LitElement:b});var gt=globalThis.litElementPolyfillSupport;gt==null||gt({LitElement:b});((F=globalThis.litElementVersions)!==null&&F!==void 0?F:globalThis.litElementVersions=[]).push("3.0.1");var bt=r=>t=>typeof t=="function"?((e,i)=>(window.customElements.define(e,i),i))(r,t):((e,i)=>{let{kind:s,elements:n}=i;return{kind:s,elements:n,finisher(o){window.customElements.define(e,o)}}})(r,t);var Ct=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}};function _t(r){return(t,e)=>e!==void 0?((i,s,n)=>{s.constructor.createProperty(n,i)})(r,t,e):Ct(r,t)}function z(r){return _t({...r,state:!0})}var Q=class{on=!1;matrix=[];size;difficulty;mines=[];picks=0;cells=0;displayed=[];symbols={mine:"\u{1F4A3}",bomb:"\u{1F4A5}",hide:"\u2753"};constructor(t,e){this.size=t,this.difficulty=e,this.cells=t*t}getRandom(t,e){return Math.floor(Math.random()*(e-t+1))+t}setMines(){let t=[];for(let e=0;e<this.difficulty;e++){let i=this.getRandom(e,this.difficulty),s=this.getRandom(this.difficulty,e);t[e]=[i,s]}this.mines=[...t]}generateRow(){let t=[];for(let e=0;e<this.size;e++)t[e]=this.symbols.hide;return t}generate(){let t=[];for(let e=0;e<this.size;e++){let i=this.generateRow();t[e]=i}this.matrix=[...t]}cellHasMine(t,e){for(let i of this.mines){let[s,n]=i;if(t===s&&e===n)return!0}return!1}getCloseCells(t,e){let i=[],s=e-1<0?e:e-1,n=e+1>this.size?e:e+1,o=t-1<0?t:t-1,h=t+1>this.size?t:t+1;for(let l=s;l<=n;l++)for(let a=o;a<=h;a++)[a,l]!==[t,e]&&this.cellHasMine(a,l)&&i.push([a,l]);return i}getNearbyMines(t,e){return this.getCloseCells(t,e).length}resolve(){for(let t=0;t<this.size;t++)for(let e=0;e<this.size;e++){let i=this.cellHasMine(t,e);if(i&&this.matrix[t][e]!==this.symbols.bomb)this.matrix[t][e]=this.symbols.mine;else if(!i){let s=this.getNearbyMines(t,e).toString();this.matrix[t][e]=s}}}set(t,e,i){if(i!==this.symbols.hide){this.matrix[t][e]=i;return}this.matrix[t][e]=i}pick(t,e){if(this.picks++,this.cellHasMine(t,e))return this.set(t,e,this.symbols.bomb),this.displayed.push([t,e]),this.on=!1,[!0,void 0];let s=this.getNearbyMines(t,e).toString();return this.set(t,e,s),this.displayed.push([t,e]),[!1,s]}initialize(){this.on=!0,this.generate(),this.setMines()}};var _=class extends b{minesWeeper=new Q(4,3);on=!1;reload=!1;board=[[]];constructor(){super()}getCellClass(t){let e="cell";return t==="1"?e=e+" cell--one":t==="2"?e=e+" cell--two":t==="3"&&(e=e+" cell--three"),e}render(){return y`
      ${this.on?y` <div class="board">
            ${this.board.map((t,e)=>y`
                ${t.map((i,s)=>y` <div
                      class="${this.getCellClass(i)}"
                      data-row="${e}"
                      data-column="${s}"
                      @click="${this.discover}"
                    >
                      ${i}
                    </div>`)}
              `)}
          </div>`:y` ${this.reload?y`
                <h2>Do yo want to start again?</h2>
                <button @click="${this.restart}">RESTART</button>
              `:y`
                <h2>Welcome to the mines weeper web game!!</h2>
                <button @click="${this.start}">START</button>
              `}`}
    `}updateStatus(){this.on=this.minesWeeper.on}updateBoard(){this.board=[...this.minesWeeper.matrix]}finish(){this.minesWeeper.resolve(),this.updateBoard()}discover(t){if(this.updateStatus(),!this.on){this.reload=!0;return}let e=t.target?.getAttribute("data-row"),i=t.target.getAttribute("data-column");if(e&&i){let s=parseInt(e,10),n=parseInt(i,10),[o]=this.minesWeeper.pick(s,n);o&&this.finish(),this.updateBoard()}}start(){console.log("START"),this.minesWeeper.initialize(),this.updateStatus(),this.updateBoard(),console.log("ON",this.on)}restart(){this.reload=!1,this.start()}};Y(_,"styles",q`
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
      --button-width: 140px;
      --button-width-long: 150px;
      border: none;
      box-shadow: none;
      background: var(--color-primary);
      border-radius: 40px;
      font-size: 1.3em;
      font-weight: 700;
      width: var(--button-width);
      height: 50px;
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
  `),C([z()],_.prototype,"on",2),C([z()],_.prototype,"reload",2),C([z()],_.prototype,"board",2),_=C([bt("jla-mines-weeper-game")],_);export{_ as JlaMinesWeeperGame};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
//# sourceMappingURL=mines-weeper-game.js.map

var ft=Object.defineProperty,vt=Object.defineProperties;var mt=Object.getOwnPropertyDescriptors;var Re=Object.getOwnPropertySymbols;var $t=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable;var le=(t,e,r)=>e in t?ft(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,m=(t,e)=>{for(var r in e||(e={}))$t.call(e,r)&&le(t,r,e[r]);if(Re)for(var r of Re(e))gt.call(e,r)&&le(t,r,e[r]);return t},N=(t,e)=>vt(t,mt(e));var S=(t,e,r)=>(le(t,typeof e!="symbol"?e+"":e,r),r);const yt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}};yt();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_e=Symbol(),Se=new Map;class We{constructor(e,r){if(this._$cssResult$=!0,r!==_e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=Se.get(this.cssText);return ye&&e===void 0&&(Se.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const me=t=>new We(typeof t=="string"?t:t+"",_e),Fe=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,o,s)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[s+1],t[0]);return new We(r,_e)},_t=(t,e)=>{ye?t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):e.forEach(r=>{const n=document.createElement("style"),o=window.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,t.appendChild(n)})},Ce=ye?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return me(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ce;const Ae=window.trustedTypes,wt=Ae?Ae.emptyScript:"",Pe=window.reactiveElementPolyfillSupport,$e={toAttribute(t,e){switch(e){case Boolean:t=t?wt:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Ve=(t,e)=>e!==t&&(e==e||t==t),ue={attribute:!0,type:String,converter:$e,reflect:!1,hasChanged:Ve};class C extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var r;(r=this.l)!==null&&r!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Eh(n,r);o!==void 0&&(this._$Eu.set(o,n),e.push(o))}),e}static createProperty(e,r=ue){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(e,r),!r.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,n,r);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,r,n){return{get(){return this[r]},set(o){const s=this[e];this[r]=o,this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ue}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const o of n)r.unshift(Ce(o))}else e!==void 0&&r.push(Ce(e));return r}static _$Eh(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(r=>r(this))}addController(e){var r,n;((r=this._$Eg)!==null&&r!==void 0?r:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var r;(r=this._$Eg)===null||r===void 0||r.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,r)=>{this.hasOwnProperty(r)&&(this._$Et.set(r,this[r]),delete this[r])})}createRenderRoot(){var e;const r=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return _t(r,this.constructor.elementStyles),r}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$ES(e,r,n=ue){var o,s;const i=this.constructor._$Eh(e,n);if(i!==void 0&&n.reflect===!0){const l=((s=(o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==null&&s!==void 0?s:$e.toAttribute)(r,n.type);this._$Ei=e,l==null?this.removeAttribute(i):this.setAttribute(i,l),this._$Ei=null}}_$AK(e,r){var n,o,s;const i=this.constructor,l=i._$Eu.get(e);if(l!==void 0&&this._$Ei!==l){const a=i.getPropertyOptions(l),c=a.converter,h=(s=(o=(n=c)===null||n===void 0?void 0:n.fromAttribute)!==null&&o!==void 0?o:typeof c=="function"?c:null)!==null&&s!==void 0?s:$e.fromAttribute;this._$Ei=l,this[l]=h(r,a.type),this._$Ei=null}}requestUpdate(e,r,n){let o=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||Ve)(this[e],r)?(this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((o,s)=>this[s]=o),this._$Et=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(e=this._$Eg)===null||e===void 0||e.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(n)):this._$EU()}catch(o){throw r=!1,this._$EU(),o}r&&this._$AE(n)}willUpdate(e){}_$AE(e){var r;(r=this._$Eg)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$ES(n,this[n],r)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}C.finalized=!0,C.elementProperties=new Map,C.elementStyles=[],C.shadowRootOptions={mode:"open"},Pe==null||Pe({ReactiveElement:C}),((ce=globalThis.reactiveElementVersions)!==null&&ce!==void 0?ce:globalThis.reactiveElementVersions=[]).push("1.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var de;const P=globalThis.trustedTypes,xe=P?P.createPolicy("lit-html",{createHTML:t=>t}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,qe="?"+_,bt=`<${qe}>`,x=document,z=(t="")=>x.createComment(t),D=t=>t===null||typeof t!="object"&&typeof t!="function",Ge=Array.isArray,Et=t=>{var e;return Ge(t)||typeof((e=t)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Te=/-->/g,ke=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Le=/'/g,Oe=/"/g,Je=/^(?:script|style|textarea|title)$/i,Rt=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),St=Rt(1),w=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Ne=new WeakMap,Ct=(t,e,r)=>{var n,o;const s=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:e;let i=s._$litPart$;if(i===void 0){const l=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;s._$litPart$=i=new W(e.insertBefore(z(),l),l,void 0,r!=null?r:{})}return i._$AI(t),i},A=x.createTreeWalker(x,129,null,!1),At=(t,e)=>{const r=t.length-1,n=[];let o,s=e===2?"<svg>":"",i=M;for(let a=0;a<r;a++){const c=t[a];let h,u,d=-1,f=0;for(;f<c.length&&(i.lastIndex=f,u=i.exec(c),u!==null);)f=i.lastIndex,i===M?u[1]==="!--"?i=Te:u[1]!==void 0?i=ke:u[2]!==void 0?(Je.test(u[2])&&(o=RegExp("</"+u[2],"g")),i=E):u[3]!==void 0&&(i=E):i===E?u[0]===">"?(i=o!=null?o:M,d=-1):u[1]===void 0?d=-2:(d=i.lastIndex-u[2].length,h=u[1],i=u[3]===void 0?E:u[3]==='"'?Oe:Le):i===Oe||i===Le?i=E:i===Te||i===ke?i=M:(i=E,o=void 0);const y=i===E&&t[a+1].startsWith("/>")?" ":"";s+=i===M?c+bt:d>=0?(n.push(h),c.slice(0,d)+"$lit$"+c.slice(d)+_+y):c+_+(d===-2?(n.push(void 0),a):y)}const l=s+(t[r]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[xe!==void 0?xe.createHTML(l):l,n]};class B{constructor({strings:e,_$litType$:r},n){let o;this.parts=[];let s=0,i=0;const l=e.length-1,a=this.parts,[c,h]=At(e,r);if(this.el=B.createElement(c,n),A.currentNode=this.el.content,r===2){const u=this.el.content,d=u.firstChild;d.remove(),u.append(...d.childNodes)}for(;(o=A.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes()){const u=[];for(const d of o.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(_)){const f=h[i++];if(u.push(d),f!==void 0){const y=o.getAttribute(f.toLowerCase()+"$lit$").split(_),v=/([.?@])?(.*)/.exec(f);a.push({type:1,index:s,name:v[2],strings:y,ctor:v[1]==="."?xt:v[1]==="?"?kt:v[1]==="@"?Lt:ee})}else a.push({type:6,index:s})}for(const d of u)o.removeAttribute(d)}if(Je.test(o.tagName)){const u=o.textContent.split(_),d=u.length-1;if(d>0){o.textContent=P?P.emptyScript:"";for(let f=0;f<d;f++)o.append(u[f],z()),A.nextNode(),a.push({type:2,index:++s});o.append(u[d],z())}}}else if(o.nodeType===8)if(o.data===qe)a.push({type:2,index:s});else{let u=-1;for(;(u=o.data.indexOf(_,u+1))!==-1;)a.push({type:7,index:s}),u+=_.length-1}s++}}static createElement(e,r){const n=x.createElement("template");return n.innerHTML=e,n}}function T(t,e,r=t,n){var o,s,i,l;if(e===w)return e;let a=n!==void 0?(o=r._$Cl)===null||o===void 0?void 0:o[n]:r._$Cu;const c=D(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),c===void 0?a=void 0:(a=new c(t),a._$AT(t,r,n)),n!==void 0?((i=(l=r)._$Cl)!==null&&i!==void 0?i:l._$Cl=[])[n]=a:r._$Cu=a),a!==void 0&&(e=T(t,a._$AS(t,e.values),a,n)),e}class Pt{constructor(e,r){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var r;const{el:{content:n},parts:o}=this._$AD,s=((r=e==null?void 0:e.creationScope)!==null&&r!==void 0?r:x).importNode(n,!0);A.currentNode=s;let i=A.nextNode(),l=0,a=0,c=o[0];for(;c!==void 0;){if(l===c.index){let h;c.type===2?h=new W(i,i.nextSibling,this,e):c.type===1?h=new c.ctor(i,c.name,c.strings,this,e):c.type===6&&(h=new Ot(i,this,e)),this.v.push(h),c=o[++a]}l!==(c==null?void 0:c.index)&&(i=A.nextNode(),l++)}return s}m(e){let r=0;for(const n of this.v)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}class W{constructor(e,r,n,o){var s;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=o,this._$Cg=(s=o==null?void 0:o.isConnected)===null||s===void 0||s}get _$AU(){var e,r;return(r=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&r!==void 0?r:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=T(this,e,r),D(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==w&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):Et(e)?this.S(e):this.$(e)}M(e,r=this._$AB){return this._$AA.parentNode.insertBefore(e,r)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==p&&D(this._$AH)?this._$AA.nextSibling.data=e:this.k(x.createTextNode(e)),this._$AH=e}T(e){var r;const{values:n,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=B.createElement(o.h,this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===s)this._$AH.m(n);else{const i=new Pt(s,this),l=i.p(this.options);i.m(n),this.k(l),this._$AH=i}}_$AC(e){let r=Ne.get(e.strings);return r===void 0&&Ne.set(e.strings,r=new B(e)),r}S(e){Ge(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const s of e)o===r.length?r.push(n=new W(this.M(z()),this.M(z()),this,this.options)):n=r[o],n._$AI(s),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var r;this._$AM===void 0&&(this._$Cg=e,(r=this._$AP)===null||r===void 0||r.call(this,e))}}class ee{constructor(e,r,n,o,s){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=r,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,r=this,n,o){const s=this.strings;let i=!1;if(s===void 0)e=T(this,e,r,0),i=!D(e)||e!==this._$AH&&e!==w,i&&(this._$AH=e);else{const l=e;let a,c;for(e=s[0],a=0;a<s.length-1;a++)c=T(this,l[n+a],r,a),c===w&&(c=this._$AH[a]),i||(i=!D(c)||c!==this._$AH[a]),c===p?e=p:e!==p&&(e+=(c!=null?c:"")+s[a+1]),this._$AH[a]=c}i&&!o&&this.C(e)}C(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class xt extends ee{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===p?void 0:e}}const Tt=P?P.emptyScript:"";class kt extends ee{constructor(){super(...arguments),this.type=4}C(e){e&&e!==p?this.element.setAttribute(this.name,Tt):this.element.removeAttribute(this.name)}}class Lt extends ee{constructor(e,r,n,o,s){super(e,r,n,o,s),this.type=5}_$AI(e,r=this){var n;if((e=(n=T(this,e,r,0))!==null&&n!==void 0?n:p)===w)return;const o=this._$AH,s=e===p&&o!==p||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==p&&(o===p||s);s&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class Ot{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){T(this,e)}}const Me=window.litHtmlPolyfillSupport;Me==null||Me(B,W),((de=globalThis.litHtmlVersions)!==null&&de!==void 0?de:globalThis.litHtmlVersions=[]).push("2.2.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var he,pe;class U extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,r;const n=super.createRenderRoot();return(e=(r=this.renderOptions).renderBefore)!==null&&e!==void 0||(r.renderBefore=n.firstChild),n}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Ct(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return w}}U.finalized=!0,U._$litElement$=!0,(he=globalThis.litElementHydrateSupport)===null||he===void 0||he.call(globalThis,{LitElement:U});const je=globalThis.litElementPolyfillSupport;je==null||je({LitElement:U});((pe=globalThis.litElementVersions)!==null&&pe!==void 0?pe:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?N(m({},e),{finisher(r){r.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function Mt(t){return(e,r)=>r!==void 0?((n,o,s)=>{o.constructor.createProperty(s,n)})(t,e,r):Nt(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var fe;((fe=window.HTMLSlotElement)===null||fe===void 0?void 0:fe.prototype.assignedElements)!=null;class jt extends CustomEvent{constructor(e,r){super(typeof e=="string"?e:e.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}get type(){return this._type}}function Ye(){return t=>{var e;return e=class extends jt{constructor(r){super(t,r),this._type=t}},e.type=t,e}}function Ut(t){return t?Object.keys(t).filter(e=>{if(typeof e!="string")throw new Error(`Expected event key of type string but got type "${typeof e}" for key ${e}`);if(e==="")throw new Error("Got empty string for events key.");return!0}).reduce((e,r)=>{const n=Ye()(r);return e[r]=n,e},{}):{}}function Ue(t,e,r){if(typeof t!="string")throw new Error(`Property name must be a string, got type "${typeof t}" from: "${String(t)}" for ${r}`);if(!(t in e))throw new Error(`Property name "${t}" does not exist on ${r}.`)}function zt(t,e){if(!t)return{};const r=Object.keys(t).reduce((o,s)=>(o[s]=e[s],o),{});return new Proxy(r,{get:(o,s)=>(Ue(s,t,e.tagName),e[s]),set:(o,s,i)=>(Ue(s,t,e.tagName),e[s]=i,!0)})}function Dt(t){return t?Object.keys(t).filter(e=>{if(typeof e=="string")return!0;throw new Error(`Property init cannot have non string keys: "${e}"`)}).reduce((e,r)=>(e[r]={propName:r,initValue:t[r]},e),{}):{}}class Ze extends U{}const Bt=["january","february","march","april","may","june","july","august","september","october","november","december"];Bt.map(t=>t.slice(0,3));function Ht(t){return te(t).filter(e=>isNaN(Number(e)))}function Ke(t){return Ht(t).map(r=>t[r])}function It(t,e){return Ke(e).includes(t)}function te(t){return Object.keys(t)}const Qe={capitalizeFirstLetter:!1};function Xe(t){var e;return t.length?((e=t[0])!==null&&e!==void 0?e:"").toUpperCase()+t.slice(1):""}function Wt(t,e=Qe){return e.capitalizeFirstLetter?Xe(t):t}function Ft(t,e=Qe){const r=t.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const s=o[1];return s?s.toUpperCase():""});return Wt(n,e)}function Vt(t,e){return{dispatch:n=>t.dispatchEvent(n),genericDispatch:n=>t.dispatchEvent(n),setProps:n=>{te(n).forEach(o=>{t.instanceProps[o]=n[o]})},host:t,props:t.instanceProps,events:e}}const qt={events:{},props:{}};function F(t){var e;const r=Ut(t.events),n=(e=class extends Ze{constructor(){super(),this.initCalled=!1,this.instanceProps=zt(t.props,this);const o=t.props||{};Object.keys(o).forEach(s=>{const i=this;Mt()(i,s),i[s]=o[s]})}createRenderParams(){return Vt(this,r)}render(){const o=this.createRenderParams();return!this.initCalled&&t.initCallback&&(this.initCalled=!0,t.initCallback(o)),t.renderCallback(o)}},e.tagName=t.tagName,e.styles=t.styles||Fe``,e.init=m(m({},qt),t),e.events=r,e.renderCallback=t.renderCallback,e.props=Dt(t.props),e);return window.customElements.define(t.tagName,n),n}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},et=t=>(...e)=>({_$litDirective$:t,values:e});class tt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}function Jt(t,e){return rt(t,e,Ze)}function rt(t,e,r){Yt(t,e);const n=t.element;if(!(n instanceof r))throw new Error(`${e} attached to non ${r.name} element.`);return n}function Yt(t,e){if(t.type!==Gt.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element.`);if(!t.element)throw new Error(`${e} directive found no element`)}function X(t,e){return Zt(t.propName,e)}const Zt=et(class extends tt{constructor(t){super(t),this.element=Jt(t,"assign")}render(t,e){if(!(t in this.element.instanceProps))throw new Error(`${this.element.tagName} element has no property of name "${t}"`);return this.element.instanceProps[t]=e,w}});function Kt(t,e){return Qt(t,e)}const Qt=et(class extends tt{constructor(t){super(t),this.element=rt(t,"listen",HTMLElement)}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:r=>{var n;return(n=this.lastListenerMetaData)===null||n===void 0?void 0:n.callback(r)}}}render(t,e){const r=typeof t=="string"?t:t.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(r,e)),w}});function Xt(t,e){return t.filter((r,n)=>!e.includes(n))}function nt(t,e,r){return{name:t,check:e,transform:r}}const ze=new WeakMap;function ot(t,e,r){const n=ze.get(t),o=n!=null?n:r();n||ze.set(t,o);const s=Xt(e,o.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function st(t,e,r,n){const o=[],s=[],i=[];return t.forEach((a,c)=>{var h;const u=o.length-1,d=o[u],f=c-1,y=e[f];let v;n&&n(a),typeof d=="string"&&(v=(h=r.find(pt=>pt.check(d,a,y)))===null||h===void 0?void 0:h.transform,v&&(o[u]=d+v(y)+a,i.push(f))),v||o.push(a);const Ee=t.raw[c];v?s[u]=s[u]+v(y)+Ee:s.push(Ee)}),{templateStrings:Object.assign([],o,{raw:s}),valueIndexDeletions:i}}function it(t){return typeof t=="function"&&t.hasOwnProperty("tagName")&&typeof t.tagName=="string"&&t.tagName.includes("-")}const er=[nt("tag name css selector interpolation",(t,e,r)=>it(r),t=>t.tagName)];function tr(t,e){return st(t,e,er)}function V(t,...e){const r=ot(t,e,()=>tr(t,e));return Fe(r.strings,...r.values)}const rr=[nt("tag name interpolation",(t,e,r)=>{const n=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/)||(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">"),o=it(r);if(n&&!o)throw console.error({lastNewString:t,currentLitString:e,currentValue:r}),new Error(`Got interpolated tag name but it wasn't of type VirElement: ${r.prototype.constructor.name}`);return n&&o},t=>t.tagName)];function nr(t){}function or(t){return st(t.strings,t.values,rr,nr)}function g(t,...e){const r=St(t,...e),n=ot(t,e,()=>or(r));return N(m({},r),{strings:n.strings,values:n.values})}const we=Ye()("update-routeEvent");function at(t){const e=te(t.colors).reduce((r,n)=>(t.colors[n].forEach(s=>{r[n][s.colorName]=s}),r),{primary:{},secondary:{}});return N(m({},t),{colorsByName:e})}const H=at({name:"Cosmonic Brand",colors:{primary:[{colorName:"Slate Purple",hex:"#685BC7"},{colorName:"Light Gray",hex:"#768692"}],secondary:[{colorName:"Yellow",hex:"#FFB600"},{colorName:"Space Blue",hex:"#002E5D"},{colorName:"Gunmetal",hex:"#253746"},{colorName:"Gainsboro",hex:"#D9E1E2"}]}}),sr=at({name:"Wasmcloud Brand",colors:{primary:[{colorName:"Green Aqua",hex:"#00C389"},H.colorsByName.primary["Light Gray"]],secondary:[...H.colors.secondary]}});var Y=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},be={},k={};Object.defineProperty(k,"__esModule",{value:!0});k.routeOnLinkClick=k.shouldMouseEventTriggerRoutes=void 0;const ir=0;function lt(t){return!(t.type!=="click"||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.button!==ir)}k.shouldMouseEventTriggerRoutes=lt;function ar(t,e,r){lt(t)&&(t.preventDefault(),r.setRoutes(e))}k.routeOnLinkClick=ar;var re={},ct={},q={},$={};Object.defineProperty($,"__esModule",{value:!0});$.SpaRouterError=void 0;class lr extends Error{constructor(r){super(r);S(this,"name","SpaRouterError")}}$.SpaRouterError=lr;Object.defineProperty(q,"__esModule",{value:!0});q.WindowEventConsolidationError=void 0;const cr=$;class ur extends cr.SpaRouterError{constructor(r){super(r);S(this,"name","WindowEventConsolidationError")}}q.WindowEventConsolidationError=ur;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.consolidateWindowEvents=t.RouteChangeEventName=void 0;const e=q;t.RouteChangeEventName="locationchange";let r=!1;const n=window.history.pushState;function o(...a){const c=n.apply(window.history,a);return window.dispatchEvent(new Event(t.RouteChangeEventName)),c}const s=window.history.replaceState;function i(...a){const c=s.apply(window.history,a);return window.dispatchEvent(new Event(t.RouteChangeEventName)),c}function l(){if(!r){if(window.history.pushState===o)throw new e.WindowEventConsolidationError("The consolidation module thinks that window events have not been consolidated yet but window.history.pushState has already been overridden. Does this module have two copies in your repo?");if(window.history.replaceState===i)throw new e.WindowEventConsolidationError("The consolidation module thinks that window events have not been consolidated yet but window.history.replaceState has already been overridden. Does this module have two copies in your repo?");r=!0,window.history.pushState=o,window.history.replaceState=i,window.addEventListener("popstate",()=>{window.dispatchEvent(new Event(t.RouteChangeEventName))})}}t.consolidateWindowEvents=l})(ct);var ne={},b={};Object.defineProperty(b,"__esModule",{value:!0});b.objectToUrlSearchParams=b.urlSearchParamsToObject=void 0;function dr(t){return Array.from(t.entries()).reduce((e,r)=>(e[r[0]]=r[1],e),{})}b.urlSearchParamsToObject=dr;function hr(t){const e=Object.entries(t).reduce((r,n)=>{const o=`${n[0]}=${n[1]}`;return`${r}&${o}`},"");return new URLSearchParams(e)}b.objectToUrlSearchParams=hr;Object.defineProperty(ne,"__esModule",{value:!0});ne.getFullRoute=void 0;const pr=b;function fr(t){const r=(t?window.location.pathname.replace(t,""):window.location.pathname).split("/").filter(i=>!!i),o=window.location.search?(0,pr.urlSearchParamsToObject)(new URLSearchParams(window.location.search)):void 0,s=window.location.hash||void 0;return{paths:r,search:o,hash:s}}ne.getFullRoute=fr;var oe={},G={};Object.defineProperty(G,"__esModule",{value:!0});G.SanitizationDepthMaxed=void 0;const vr=$;class mr extends vr.SpaRouterError{constructor(r){super(r);S(this,"name","SanitizationDepthMaxed")}}G.SanitizationDepthMaxed=mr;var O={};Object.defineProperty(O,"__esModule",{value:!0});O.areRoutesEqual=void 0;function $r(t,e){if(t.paths.join(" ")!==e.paths.join(" "))return!1;if(typeof t.search=="object"&&typeof e.search=="object"){const r=Object.entries(t.search).join(" "),n=Object.entries(e.search).join(" ");if(r!==n)return!1}else if(t.search!==e.search)return!1;return t.hash===e.hash}O.areRoutesEqual=$r;Object.defineProperty(oe,"__esModule",{value:!0});oe.routeChangeCallback=void 0;const gr=G,yr=O,De=6;function _r(t,e){const r=t.getCurrentRawRoutes();if(t.sanitizationDepth>De)throw new gr.SanitizationDepthMaxed(`Route sanitization depth has exceed the max of ${De} with ${JSON.stringify(r)}`);const n=t.sanitizeFullRoute(r);if((0,yr.areRoutesEqual)(n,r))t.sanitizationDepth=0,e?e(n):t.listeners.forEach(o=>{o(n)});else return t.sanitizationDepth++,t.setRoutes(n,!0)}oe.routeChangeCallback=_r;var R={},J={};Object.defineProperty(J,"__esModule",{value:!0});J.InvalidRouterInitParamsError=void 0;const wr=$;class br extends wr.SpaRouterError{constructor(r){super(r);S(this,"name","InvalidRouterInitParamsError")}}J.InvalidRouterInitParamsError=br;Object.defineProperty(R,"__esModule",{value:!0});R.assertValidRouteInitParams=R.createRouteInitParams=void 0;const ve=J;function Er(t,e,r){return{routeBase:t,maxListenerCount:r,routeSanitizer:e}}R.createRouteInitParams=Er;function Rr(t){if("routeBase"in t&&typeof t.routeBase!="string"&&t.routeBase!=null)throw new ve.InvalidRouterInitParamsError(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${t.routeBase}" with type "${typeof t.routeBase}".`);if("routeSanitizer"in t&&typeof t.routeSanitizer!="function"&&t.routeSanitizer!=null)throw new ve.InvalidRouterInitParamsError(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${t.routeSanitizer}" with type "${typeof t.routeSanitizer}".`);if("maxListenerCount"in t&&(typeof t.maxListenerCount!="number"||isNaN(t.maxListenerCount))&&t.maxListenerCount!=null)throw new ve.InvalidRouterInitParamsError(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${t.maxListenerCount}" with type "${typeof t.maxListenerCount}".`)}R.assertValidRouteInitParams=Rr;var L={};Object.defineProperty(L,"__esModule",{value:!0});L.createPathString=L.setRoutes=void 0;const Sr=b,Cr=$;function Ar(t,e,r,n=!1){const o=ut(t,e,r);n?window.history.replaceState(void 0,"",o):window.history.pushState(void 0,"",o)}L.setRoutes=Ar;function ut(t,e,r=""){var a;if(!r&&e!=null)throw new Cr.SpaRouterError("Route base regexp was defined but routeBase string was not provided.");const n=Pr(e)?`/${r}`:"",o=t.search?(0,Sr.objectToUrlSearchParams)(t.search).toString():"",s=o?`?${o}`:"",i=(a=t.hash)!=null&&a.startsWith("#")?"":"#",l=t.hash?`${i}${t.hash}`:"";return`${n}/${t.paths.join("/")}${s}${l}`}L.createPathString=ut;function Pr(t){return!!(t&&window.location.pathname.match(t))}Object.defineProperty(re,"__esModule",{value:!0});re.createSpaRouter=void 0;const Be=ct,xr=$,Tr=ne,He=oe,kr=O,Lr=R,Ie=L;function Or(t={}){var s;(0,Lr.assertValidRouteInitParams)(t),(0,Be.consolidateWindowEvents)();const e=(s=t.routeBase)==null?void 0:s.replace(/\/+$/,""),r=e?new RegExp(`^\\/${t.routeBase}`):void 0;let n=!1;const o={listeners:new Set,initParams:t,sanitizeFullRoute:i=>{const l=m({hash:void 0,search:void 0},i);return t.routeSanitizer?t.routeSanitizer(l):l},setRoutes:(i,l=!1,a=!1)=>{const c=o.getCurrentRawRoutes(),h=m(m({},c),i),u=o.sanitizeFullRoute(h);if(!(!a&&(0,kr.areRoutesEqual)(c,u)))return(0,Ie.setRoutes)(u,r,e,l)},createRoutesUrl:i=>(0,Ie.createPathString)(i,r,e),getCurrentRawRoutes:()=>(0,Tr.getFullRoute)(r),addRouteListener:(i,l)=>{if(t.maxListenerCount&&o.listeners.size>=t.maxListenerCount)throw new xr.SpaRouterError(`Tried to exceed route listener max of ${t.maxListenerCount}.`);return o.listeners.add(l),n||(window.addEventListener(Be.RouteChangeEventName,()=>(0,He.routeChangeCallback)(o)),n=!0),i&&(0,He.routeChangeCallback)(o,l),l},hasRouteListener:i=>o.listeners.has(i),removeRouteListener:i=>o.listeners.delete(i),sanitizationDepth:0};return o}re.createSpaRouter=Or;var se={};Object.defineProperty(se,"__esModule",{value:!0});se.InvalidRouteError=void 0;const Nr=$;class Mr extends Nr.SpaRouterError{constructor(r){super(r);S(this,"name","InvalidRouteError")}}se.InvalidRouteError=Mr;var ie={};Object.defineProperty(ie,"__esModule",{value:!0});ie.isFullRoute=void 0;function jr(t){const e=t.hasOwnProperty("hash")?t.hash===void 0||typeof t.hash=="string":!0,r=t.hashOwnProperty("search")?typeof t.search=="object"||Object.keys(t.search).every(o=>typeof t.search[o]=="string"):!0,n=t.hasOwnProperty("paths")&&Array.isArray(t.paths)&&t.paths.every(o=>typeof o=="string");return e&&r&&n}ie.isFullRoute=jr;var ae={};Object.defineProperty(ae,"__esModule",{value:!0});ae.isSpaRouter=void 0;function Ur(t){if(typeof t!="object"||!t)return!1;const e={setRoutes:"function",createRoutesUrl:"function",addRouteListener:"function",hasRouteListener:"function",getCurrentRawRoutes:"function",listeners:"object",sanitizationDepth:"number",sanitizeFullRoute:"function",removeRouteListener:"function",initParams:"object"},r=t;return!Object.keys(e).filter(o=>!r.hasOwnProperty(o)||typeof r[o]===e[o]).length}ae.isSpaRouter=Ur;(function(t){var e=Y&&Y.__createBinding||(Object.create?function(n,o,s,i){i===void 0&&(i=s);var l=Object.getOwnPropertyDescriptor(o,s);(!l||("get"in l?!o.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return o[s]}}),Object.defineProperty(n,i,l)}:function(n,o,s,i){i===void 0&&(i=s),n[i]=o[s]}),r=Y&&Y.__exportStar||function(n,o){for(var s in n)s!=="default"&&!Object.prototype.hasOwnProperty.call(o,s)&&e(o,n,s)};Object.defineProperty(t,"__esModule",{value:!0}),r(k,t),r(re,t),r(q,t),r(se,t),r(J,t),r(G,t),r($,t),r(ie,t),r(O,t),r(R,t),r(ae,t),r(b,t)})(be);var I=(t=>(t.Cosmonic="cosmonic",t.WasmCloud="wasmcloud",t))(I||{});const ge={paths:["cosmonic"],search:void 0,hash:void 0},dt=be.createSpaRouter({maxListenerCount:1,routeBase:"branding",routeSanitizer:t=>{const e=t.paths[0];return It(e,I)?N(m({},ge),{paths:[e]}):ge}}),ht={[I.Cosmonic]:H,[I.WasmCloud]:sr},Z=F({tagName:"cos-brand-color",props:{color:void 0},styles:V`
        :host {
            display: flex;
            gap: 16px;
            align-items: center;
        }

        .color-display {
            flex-shrink: 0;
            border-radius: 50%;
            height: 50px;
            width: 50px;
        }

        span {
            flex-basis: 0;
            flex-grow: 1;
            text-align: center;
        }
    `,renderCallback:({props:t})=>{var e,r,n;return g`
            <div class="color-display" style="background-color: ${(e=t.color)==null?void 0:e.hex}"></div>
            <span class="name">${(r=t.color)==null?void 0:r.colorName}</span>
            <span class="hex">${(n=t.color)==null?void 0:n.hex}</span>
        `}}),K=F({tagName:"cos-brand-guidelines",props:{brand:void 0,phrases:{colors:"Colors"}},styles:V`
        :host,
        .colors-wrapper {
            display: flex;
            flex-direction: column;
        }

        .colors-wrapper {
            padding-left: 24px;
            gap: 16px;
            max-width: 400px;
        }

        ${Z} {
            flex-grow: 1;
        }

        section {
            padding-left: 16px;
        }
    `,renderCallback:({props:t})=>{const e=t.brand;if(e){const r=e.colors?te(e.colors).map(n=>{const o=e.colors[n].map(s=>g`
                            <${Z}
                                ${X(Z.props.color,s)}
                            >
                            </${Z}>`);return g`
                          <section>
                              <h3>${Xe(n)}</h3>
                              <div class="colors-wrapper">${o}</div>
                          </section>
                      `}):"";return g`
                <h1>${e.name}</h1>
                <section>
                    <h2>${t.phrases.colors}</h2>
                    ${r}
                </section>
            `}else return g``}}),j=F({tagName:"cos-branding-nav-link",props:{linkRoute:ge,router:dt},styles:V`
        :host {
            /*
                Set padding via --cos-branding-nav-link-anchor-padding.
            */
            padding: 0 !important;
            position: relative;
            display: inline-block;
            box-sizing: border-box;
        }

        /*
            Leave styles up to <slot>
        */
        a,
        a:visited {
            text-decoration: none;
            color: inherit;
        }

        a {
            cursor: inherit;
            width: 100%;
            height: 100%;
            display: inline-block;
            box-sizing: border-box;
            /*
                This uses a CSS var so that padding will be applied to the anchor tag and no click
                area will be missed.
            */
            padding: var(--cos-branding-nav-link-anchor-padding, 0);
        }
    `,renderCallback:({props:t,genericDispatch:e})=>g`
            <a
                href=${t.router.createRoutesUrl(t.linkRoute)}
                @click=${n=>{be.shouldMouseEventTriggerRoutes(n)&&t.linkRoute&&(n.preventDefault(),e(new we(t.linkRoute)))}}
            >
                <slot><slot>
            </a>
        `}),Q=F({tagName:"cos-branding-nav",props:{currentRoute:void 0,router:dt,routeListener:void 0},styles:V`
        :host {
            display: block;
        }

        nav {
            padding: 16px;
            display: flex;
            flex-direction: column;
        }

        ${j} {
            font-size: 1.5em;
            --cos-branding-nav-link-anchor-padding: 8px 16px;
            border-radius: 8px;
        }

        ${j}:not(.selected):hover {
            background-color: var(
                --cos-branding-primary-color,
                ${me(H.colorsByName.primary["Slate Purple"].hex)}
            );
            color: white;
        }

        .selected {
            cursor: default;
            background-color: var(
                --cos-branding-primary-color,
                ${me(H.colorsByName.primary["Slate Purple"].hex)}
            );
            color: white;
        }
    `,renderCallback:({props:t,setProps:e,genericDispatch:r})=>{var s;t.routeListener?t.router.hasRouteListener(t.routeListener)||t.router.addRouteListener(!0,t.routeListener):e({routeListener:t.router.addRouteListener(!0,i=>{i!==t.currentRoute&&(e({currentRoute:i}),r(new we(i)))})}),t.currentRoute&&t.currentRoute!==t.router.getCurrentRawRoutes()&&t.router.setRoutes(t.currentRoute);const n=Ke(I),o=(s=t.currentRoute)==null?void 0:s.paths[0];return g`
            <nav>
                ${n.map(i=>{var h;const l={paths:[i]},a=Ft(i,{capitalizeFirstLetter:!0}),c=ht[i];return g`
                        <${j}
                            class=${o===i?"selected":""}
                            style="--cos-branding-primary-color: ${(h=c.colors.primary[0])==null?void 0:h.hex}"
                            ${X(j.props.linkRoute,l)}
                        >
                            ${a}
                        </${j}>`})}
            </nav>
        `}});F({tagName:"cos-branding-app",props:{currentRoute:void 0},styles:V`
        :host,
        .top-element {
            display: block;
            height: 100%;
            width: 100%;
            overflow: hidden;
            position: relative;
        }

        .top-element {
            display: flex;
        }

        ${Q} {
            width: 200px;
            max-width: 25%;
            overflow-y: auto;
            overflow-x: hidden;
            height: 100%;
            flex-shrink: 0;
        }

        main {
            flex-grow: 1;
            display: flex;
            justify-content: center;
            overflow: auto;
        }

        ${K} {
            width: 500px;
            max-width: 100%;
            flex-shrink: 0;
        }
    `,renderCallback:({props:t,setProps:e})=>{var o;const r=(o=t.currentRoute)==null?void 0:o.paths[0],n=r?ht[r]:void 0;return g`
            <div
                class="top-element"
                ${Kt(we,s=>{e({currentRoute:s.detail})})}
            >
                <${Q}
                    ${X(Q.props.currentRoute,t.currentRoute)}
                ></${Q}>
                <main>
                    <${K}
                        ${X(K.props.brand,n)}
                    ></${K}>
                </main>
            </div>`}});

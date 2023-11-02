var ft=Object.defineProperty;var mt=(o,t,e)=>t in o?ft(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var w=(o,t,e)=>(mt(o,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=window,K=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),Y=new WeakMap;let ht=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(K&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Y.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Y.set(e,t))}return t}toString(){return this.cssText}};const yt=o=>new ht(typeof o=="string"?o:o+"",void 0,J),N=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((s,i,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new ht(e,o,J)},_t=(o,t)=>{K?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const s=document.createElement("style"),i=M.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)})},Q=K?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return yt(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var z;const O=window,X=O.trustedTypes,bt=X?X.emptyScript:"",tt=O.reactiveElementPolyfillSupport,I={toAttribute(o,t){switch(t){case Boolean:o=o?bt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},ct=(o,t)=>t!==o&&(t==t||o==o),j={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:ct},F="finalized";let y=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=j){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||j}static finalize(){if(this.hasOwnProperty(F))return!1;this[F]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(Q(i))}else t!==void 0&&e.push(Q(t));return e}static _$Ep(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return _t(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=j){var i;const r=this.constructor._$Ep(t,s);if(r!==void 0&&s.reflect===!0){const n=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:I).toAttribute(e,s.type);this._$El=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,r=i._$Ev.get(t);if(r!==void 0&&this._$El!==r){const n=i.getPropertyOptions(r),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((s=n.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?n.converter:I;this._$El=r,this[r]=h.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||ct)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,r)=>this[r]=i),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};y[F]=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},tt==null||tt({ReactiveElement:y}),((z=O.reactiveElementVersions)!==null&&z!==void 0?z:O.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var B;const T=window,b=T.trustedTypes,et=b?b.createPolicy("lit-html",{createHTML:o=>o}):void 0,Z="$lit$",g=`lit$${(Math.random()+"").slice(9)}$`,dt="?"+g,At=`<${dt}>`,m=document,S=()=>m.createComment(""),k=o=>o===null||typeof o!="object"&&typeof o!="function",ut=Array.isArray,xt=o=>ut(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",L=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,st=/-->/g,it=/>/g,$=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ot=/'/g,rt=/"/g,pt=/^(?:script|style|textarea|title)$/i,vt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),W=vt(1),H=vt(2),A=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),nt=new WeakMap,f=m.createTreeWalker(m,129,null,!1);function gt(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return et!==void 0?et.createHTML(t):t}const wt=(o,t)=>{const e=o.length-1,s=[];let i,r=t===2?"<svg>":"",n=E;for(let h=0;h<e;h++){const l=o[h];let a,c,d=-1,p=0;for(;p<l.length&&(n.lastIndex=p,c=n.exec(l),c!==null);)p=n.lastIndex,n===E?c[1]==="!--"?n=st:c[1]!==void 0?n=it:c[2]!==void 0?(pt.test(c[2])&&(i=RegExp("</"+c[2],"g")),n=$):c[3]!==void 0&&(n=$):n===$?c[0]===">"?(n=i??E,d=-1):c[1]===void 0?d=-2:(d=n.lastIndex-c[2].length,a=c[1],n=c[3]===void 0?$:c[3]==='"'?rt:ot):n===rt||n===ot?n=$:n===st||n===it?n=E:(n=$,i=void 0);const v=n===$&&o[h+1].startsWith("/>")?" ":"";r+=n===E?l+At:d>=0?(s.push(a),l.slice(0,d)+Z+l.slice(d)+g+v):l+g+(d===-2?(s.push(void 0),h):v)}return[gt(o,r+(o[e]||"<?>")+(t===2?"</svg>":"")),s]};class C{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const h=t.length-1,l=this.parts,[a,c]=wt(t,e);if(this.el=C.createElement(a,s),f.currentNode=this.el.content,e===2){const d=this.el.content,p=d.firstChild;p.remove(),d.append(...p.childNodes)}for(;(i=f.nextNode())!==null&&l.length<h;){if(i.nodeType===1){if(i.hasAttributes()){const d=[];for(const p of i.getAttributeNames())if(p.endsWith(Z)||p.startsWith(g)){const v=c[n++];if(d.push(p),v!==void 0){const $t=i.getAttribute(v.toLowerCase()+Z).split(g),U=/([.?@])?(.*)/.exec(v);l.push({type:1,index:r,name:U[2],strings:$t,ctor:U[1]==="."?St:U[1]==="?"?Ct:U[1]==="@"?Pt:R})}else l.push({type:6,index:r})}for(const p of d)i.removeAttribute(p)}if(pt.test(i.tagName)){const d=i.textContent.split(g),p=d.length-1;if(p>0){i.textContent=b?b.emptyScript:"";for(let v=0;v<p;v++)i.append(d[v],S()),f.nextNode(),l.push({type:2,index:++r});i.append(d[p],S())}}}else if(i.nodeType===8)if(i.data===dt)l.push({type:2,index:r});else{let d=-1;for(;(d=i.data.indexOf(g,d+1))!==-1;)l.push({type:7,index:r}),d+=g.length-1}r++}}static createElement(t,e){const s=m.createElement("template");return s.innerHTML=t,s}}function x(o,t,e=o,s){var i,r,n,h;if(t===A)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl;const a=k(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(o),l._$AT(o,e,s)),s!==void 0?((n=(h=e)._$Co)!==null&&n!==void 0?n:h._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=x(o,l._$AS(o,t.values),l,s)),t}class Et{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:i}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:m).importNode(s,!0);f.currentNode=r;let n=f.nextNode(),h=0,l=0,a=i[0];for(;a!==void 0;){if(h===a.index){let c;a.type===2?c=new P(n,n.nextSibling,this,t):a.type===1?c=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(c=new Ut(n,this,t)),this._$AV.push(c),a=i[++l]}h!==(a==null?void 0:a.index)&&(n=f.nextNode(),h++)}return f.currentNode=m,r}v(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class P{constructor(t,e,s,i){var r;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),k(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):xt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&k(this._$AH)?this._$AA.nextSibling.data=t:this.$(m.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=C.createElement(gt(i.h,i.h[0]),this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.v(s);else{const n=new Et(r,this),h=n.u(this.options);n.v(s),this.$(h),this._$AH=n}}_$AC(t){let e=nt.get(t.strings);return e===void 0&&nt.set(t.strings,e=new C(t)),e}T(t){ut(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new P(this.k(S()),this.k(S()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class R{constructor(t,e,s,i,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(r===void 0)t=x(this,t,e,0),n=!k(t)||t!==this._$AH&&t!==A,n&&(this._$AH=t);else{const h=t;let l,a;for(t=r[0],l=0;l<r.length-1;l++)a=x(this,h[s+l],e,l),a===A&&(a=this._$AH[l]),n||(n=!k(a)||a!==this._$AH[l]),a===u?t=u:t!==u&&(t+=(a??"")+r[l+1]),this._$AH[l]=a}n&&!i&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class St extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const kt=b?b.emptyScript:"";class Ct extends R{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,kt):this.element.removeAttribute(this.name)}}class Pt extends R{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){var s;if((t=(s=x(this,t,e,0))!==null&&s!==void 0?s:u)===A)return;const i=this._$AH,r=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==u&&(i===u||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class Ut{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}}const lt=T.litHtmlPolyfillSupport;lt==null||lt(C,P),((B=T.litHtmlVersions)!==null&&B!==void 0?B:T.litHtmlVersions=[]).push("2.8.0");const Ht=(o,t,e)=>{var s,i;const r=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let n=r._$litPart$;if(n===void 0){const h=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=n=new P(t.insertBefore(S(),h),h,void 0,e??{})}return n._$AI(o),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var V,D;class _ extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ht(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return A}}_.finalized=!0,_._$litElement$=!0,(V=globalThis.litElementHydrateSupport)===null||V===void 0||V.call(globalThis,{LitElement:_});const at=globalThis.litElementPolyfillSupport;at==null||at({LitElement:_});((D=globalThis.litElementVersions)!==null&&D!==void 0?D:globalThis.litElementVersions=[]).push("3.3.3");const Mt={reaction:{label:"Reaction",icon:H`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#F55" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z" /></svg>`},memory:{label:"Memory",icon:H`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#FFB21E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858" /><path stroke="#FFB21E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858" /><path stroke="#FFB21E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0" /></svg>`},verbal:{label:"Verbal",icon:H`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#00BB8F" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z" /></svg>`},visual:{label:"Visual",icon:H`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#1125D6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z" /><path stroke="#1125D6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z" /></svg>`}};class q extends _{constructor(){super(),this.category="verbal",this.score=0}render(){const{icon:t,label:e}=Mt[this.category];return W`
      <div class="category-label">
        ${t}
        <span> ${e}</span>
      </div>
      <span class="score"><em>${this.score} </em>/ 100</span>
    `}}w(q,"styles",[N`
      :host {
        --light-red: hsl(0, 100%, 67%);
        --orangey-yellow: hsl(39, 100%, 56%);
        --green-teal: hsl(166, 100%, 37%);
        --cobalt-blue: hsl(234, 85%, 45%);
      }
    `,N`
      :host {
        box-sizing: border-box;
        margin: 0;
        padding: 20px;
        width: 100%;
        height: min-content;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 12px;
      }
      :host([category="reaction"]) {
        color: hsl(0, 100%, 67%);
        background: hsla(0, 100%, 67%, 0.15);
      }
      :host([category="memory"]) {
        color: hsl(39, 100%, 56%);
        background: hsl(39, 100%, 56%, 0.15);
      }
      :host([category="verbal"]) {
        color: hsl(166, 100%, 37%);
        background: hsla(166, 100%, 37%, 0.15);
      }
      :host([category="visual"]) {
        color: hsl(234, 85%, 45%);
        background: hsla(234, 85%, 45%, 0.15);
      }
      :host([category="reaction"]:hover) {
        background: hsla(0, 100%, 67%, 0.25);
      }
      :host([category="memory"]:hover) {
        background: hsl(39, 100%, 56%, 0.25);
      }
      :host([category="verbal"]:hover) {
        background: hsla(166, 100%, 37%, 0.25);
      }
      :host([category="visual"]:hover) {
        background: hsla(234, 85%, 45%, 0.25);
      }
      .category-label {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      span {
        font-size: 18px;
        font-family: "Hanken Grotesk";
        font-weight: medium;
        vertical-align: baseline;
      }
      .score {
        color: hsla(0, 0%, 0%, 0.5);
      }
      em {
        color: hsl(0, 0%, 0%);
        font-style: normal;
      }
    `]),w(q,"properties",{category:{type:String,reflect:!0},score:{type:Number}});customElements.define("category-score",q);class G extends _{constructor(){super(),this.data=[{category:"Reaction",score:0},{category:"Memory",score:0},{category:"Verbal",score:0},{category:"Visual",score:0}]}render(){var s,i;const t=(s=this.data)==null?void 0:s.map(r=>W`<category-score
          score="${r.score}"
          category="${r.category.toLowerCase()}"
        ></category-score>`),e=Math.floor(this.data.reduce((r,n)=>r+n.score,0)/((i=this.data)==null?void 0:i.length));return W`
      <div class="summary">
        <h1>Your Result</h1>
        <div class="round">
          <span id="total-score">${e}</span>
          <span class="tiny-blue">of 100</span>
        </div>
        <h2>Great</h2>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div class="scores">
        <h3>Summary</h3>
        ${t}
        <button class="continue">Continue</button>
      </div>
    `}}w(G,"styles",[N`
      :host {
        --pale-blue: hsl(221, 100%, 96%);
        --light-lavender: hsl(241, 100%, 89%);
        --darkgray-blue: hsl(224, 30%, 27%);
        --lightslate-blue: hsl(252, 100%, 67%);
        --lightroyal-blue: hsl(241, 81%, 54%);
        --violet-blue: hsla(256, 72%, 46%, 1);
        --persian-blue: hsla(241, 72%, 46%, 0);
      }
    `,N`
      :host {
        box-sizing: border-box;
        background: white;
        display: flex;
        flex-wrap: wrap;
        font-family: "Hanken Grotesk";
        color: white;
      }
      .scores {
        box-sizing: border-box;
        margin: 0;
        padding: 16px 20px 20px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
      }
      .scores h3 {
        font-size: 18px;
        color: black;
        margin: 8px 0;
        padding: 0;
      }
      .continue {
        margin-top: 16px;
        box-sizing: border-box;
        border-radius: 999px;
        border: none;
        font-size: 18px;
        font-family: "Hanken Grotesk";
        padding: 16px 24px;
        width: 100%;
        color: white;
        background-color: var(--darkgray-blue);
      }
      .continue:hover {
        cursor: pointer;
        background: linear-gradient(
          to bottom,
          var(--lightslate-blue),
          var(--lightroyal-blue)
        );
      }
      .summary {
        box-sizing: border-box;
        padding: 20px 40px 40px;
        marding: 0;
        border-radius: 0 0 32px 32px;
        background: linear-gradient(
          to bottom,
          var(--lightslate-blue),
          var(--lightroyal-blue)
        );
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        max-width: 420px;
      }
      h1 {
        font-size: 18px;
        color: var(--light-lavender);
        margin-bottom: 24px;
      }
      .round {
        border-radius: 50%;
        width: 180px;
        height: 180px;
        background: linear-gradient(
          to bottom,
          var(--violet-blue),
          var(--persian-blue)
        );
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      #total-score {
        font-size: 80px;
        font-weight: bold;
        line-height: 1;
      }
      .tiny-blue {
        color: var(--light-lavender);
        opacity: 0.8;
      }
      h2 {
        font-size: 1.65em;
      }
      p {
        margin: 0;
        font-size: 18px;
        text-align: center;
        color: var(--light-lavender);
      }
      @media (min-width: 380px) {
        :host {
          max-width: 800px;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 16px 16px 32px -16px hsl(224, 30%, 27%);
          flex-wrap: nowrap;
        }
        .summary {
          border-radius: 32px;
          min-width: 300px;
        }
        h2 {
          font-size: 1.65em;
        }
        .scores {
          min-width: 300px;
        }
      }
    `]),w(G,"properties",{data:{type:Array}});customElements.define("results-summary",G);

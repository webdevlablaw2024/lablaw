import{r as y,R as V,g as Wn,j as P,d as Ft}from"./app-Dep5erZb.js";import{b as Se,O as Ee,U as ie,y as oe,T as Hn,o as Pt,e as Bn,u as se,d as Et,C as le,I as on,c as Xn}from"./open-closed-DwJqPSJU.js";import{I as sn,o as Gn,a as at,r as Vn}from"./keyboard-DR5TPvDQ.js";function Ie(t){var e;if(t.type)return t.type;let n=(e=t.as)!=null?e:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function Kn(t,e){let[n,a]=y.useState(()=>Ie(t));return Se(()=>{a(Ie(t))},[t.type,t.as]),Se(()=>{n||e.current&&e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&a("button")},[n,e]),n}var Ce;let qn=(Ce=V.startTransition)!=null?Ce:function(t){t()};var Qn=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(Qn||{}),Zn=(t=>(t[t.ToggleDisclosure=0]="ToggleDisclosure",t[t.CloseDisclosure=1]="CloseDisclosure",t[t.SetButtonId=2]="SetButtonId",t[t.SetPanelId=3]="SetPanelId",t[t.LinkPanel=4]="LinkPanel",t[t.UnlinkPanel=5]="UnlinkPanel",t))(Zn||{});let Jn={0:t=>({...t,disclosureState:se(t.disclosureState,{0:1,1:0})}),1:t=>t.disclosureState===1?t:{...t,disclosureState:1},4(t){return t.linkedPanel===!0?t:{...t,linkedPanel:!0}},5(t){return t.linkedPanel===!1?t:{...t,linkedPanel:!1}},2(t,e){return t.buttonId===e.buttonId?t:{...t,buttonId:e.buttonId}},3(t,e){return t.panelId===e.panelId?t:{...t,panelId:e.panelId}}},fe=y.createContext(null);fe.displayName="DisclosureContext";function ce(t){let e=y.useContext(fe);if(e===null){let n=new Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ce),n}return e}let ue=y.createContext(null);ue.displayName="DisclosureAPIContext";function ln(t){let e=y.useContext(ue);if(e===null){let n=new Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ln),n}return e}let me=y.createContext(null);me.displayName="DisclosurePanelContext";function ta(){return y.useContext(me)}function ea(t,e){return se(e.type,Jn,t,e)}let na=y.Fragment;function aa(t,e){let{defaultOpen:n=!1,...a}=t,r=y.useRef(null),i=oe(e,Hn(h=>{r.current=h},t.as===void 0||t.as===y.Fragment)),o=y.useRef(null),s=y.useRef(null),l=y.useReducer(ea,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:s,panelRef:o,buttonId:null,panelId:null}),[{disclosureState:c,buttonId:f},u]=l,v=Pt(h=>{u({type:1});let E=Gn(r);if(!E||!f)return;let g=h?h instanceof HTMLElement?h:h.current instanceof HTMLElement?h.current:E.getElementById(f):E.getElementById(f);g==null||g.focus()}),p=y.useMemo(()=>({close:v}),[v]),k=y.useMemo(()=>({open:c===0,close:v}),[c,v]),S={ref:i};return V.createElement(fe.Provider,{value:l},V.createElement(ue.Provider,{value:p},V.createElement(Bn,{value:se(c,{0:Et.Open,1:Et.Closed})},le({ourProps:S,theirProps:a,slot:k,defaultTag:na,name:"Disclosure"}))))}let ra="button";function ia(t,e){let n=sn(),{id:a=`headlessui-disclosure-button-${n}`,...r}=t,[i,o]=ce("Disclosure.Button"),s=ta(),l=s===null?!1:s===i.panelId,c=y.useRef(null),f=oe(c,e,l?null:i.buttonRef),u=on();y.useEffect(()=>{if(!l)return o({type:2,buttonId:a}),()=>{o({type:2,buttonId:null})}},[a,o,l]);let v=Pt(g=>{var x;if(l){if(i.disclosureState===1)return;switch(g.key){case at.Space:case at.Enter:g.preventDefault(),g.stopPropagation(),o({type:0}),(x=i.buttonRef.current)==null||x.focus();break}}else switch(g.key){case at.Space:case at.Enter:g.preventDefault(),g.stopPropagation(),o({type:0});break}}),p=Pt(g=>{switch(g.key){case at.Space:g.preventDefault();break}}),k=Pt(g=>{var x;Vn(g.currentTarget)||t.disabled||(l?(o({type:0}),(x=i.buttonRef.current)==null||x.focus()):o({type:0}))}),S=y.useMemo(()=>({open:i.disclosureState===0}),[i]),h=Kn(t,c),E=l?{ref:f,type:h,onKeyDown:v,onClick:k}:{ref:f,id:a,type:h,"aria-expanded":i.disclosureState===0,"aria-controls":i.linkedPanel?i.panelId:void 0,onKeyDown:v,onKeyUp:p,onClick:k};return le({mergeRefs:u,ourProps:E,theirProps:r,slot:S,defaultTag:ra,name:"Disclosure.Button"})}let oa="div",sa=Ee.RenderStrategy|Ee.Static;function la(t,e){let n=sn(),{id:a=`headlessui-disclosure-panel-${n}`,...r}=t,[i,o]=ce("Disclosure.Panel"),{close:s}=ln("Disclosure.Panel"),l=on(),c=oe(e,i.panelRef,k=>{qn(()=>o({type:k?4:5}))});y.useEffect(()=>(o({type:3,panelId:a}),()=>{o({type:3,panelId:null})}),[a,o]);let f=Xn(),u=f!==null?(f&Et.Open)===Et.Open:i.disclosureState===0,v=y.useMemo(()=>({open:i.disclosureState===0,close:s}),[i,s]),p={ref:c,id:a};return V.createElement(me.Provider,{value:i.panelId},le({mergeRefs:l,ourProps:p,theirProps:r,slot:v,defaultTag:oa,features:sa,visible:u,name:"Disclosure.Panel"}))}let fa=ie(aa),ca=ie(ia),ua=ie(la),zt=Object.assign(fa,{Button:ca,Panel:ua});function ma({title:t,titleId:e,...n},a){return y.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":e},n),t?y.createElement("title",{id:e},t):null,y.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}const da=y.forwardRef(ma),va=da;function pa({title:t,titleId:e,...n},a){return y.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":e},n),t?y.createElement("title",{id:e},t):null,y.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}const ba=y.forwardRef(pa),ga=ba;function Ne(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ne(Object(n),!0).forEach(function(a){I(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ne(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function It(t){"@babel/helpers - typeof";return It=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},It(t)}function ha(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Te(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function ya(t,e,n){return e&&Te(t.prototype,e),n&&Te(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function I(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function de(t,e){return xa(t)||Aa(t,e)||fn(t,e)||Oa()}function mt(t){return ka(t)||wa(t)||fn(t)||Pa()}function ka(t){if(Array.isArray(t))return Bt(t)}function xa(t){if(Array.isArray(t))return t}function wa(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Aa(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function fn(t,e){if(t){if(typeof t=="string")return Bt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bt(t,e)}}function Bt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Pa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Oa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var _e=function(){},ve={},cn={},un=null,mn={mark:_e,measure:_e};try{typeof window<"u"&&(ve=window),typeof document<"u"&&(cn=document),typeof MutationObserver<"u"&&(un=MutationObserver),typeof performance<"u"&&(mn=performance)}catch{}var Sa=ve.navigator||{},je=Sa.userAgent,Re=je===void 0?"":je,Y=ve,A=cn,Me=un,pt=mn;Y.document;var D=!!A.documentElement&&!!A.head&&typeof A.addEventListener=="function"&&typeof A.createElement=="function",dn=~Re.indexOf("MSIE")||~Re.indexOf("Trident/"),bt,gt,ht,yt,kt,R="___FONT_AWESOME___",Xt=16,vn="fa",pn="svg-inline--fa",K="data-fa-i2svg",Gt="data-fa-pseudo-element",Ea="data-fa-pseudo-element-pending",pe="data-prefix",be="data-icon",Le="fontawesome-i2svg",Ia="async",Ca=["HTML","HEAD","STYLE","SCRIPT"],bn=function(){try{return!0}catch{return!1}}(),w="classic",O="sharp",ge=[w,O];function dt(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[w]}})}var st=dt((bt={},I(bt,w,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),I(bt,O,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),bt)),lt=dt((gt={},I(gt,w,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),I(gt,O,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),gt)),ft=dt((ht={},I(ht,w,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),I(ht,O,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),ht)),Na=dt((yt={},I(yt,w,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),I(yt,O,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),yt)),Ta=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,gn="fa-layers-text",_a=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ja=dt((kt={},I(kt,w,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),I(kt,O,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),kt)),hn=[1,2,3,4,5,6,7,8,9,10],Ra=hn.concat([11,12,13,14,15,16,17,18,19,20]),Ma=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],X={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ct=new Set;Object.keys(lt[w]).map(ct.add.bind(ct));Object.keys(lt[O]).map(ct.add.bind(ct));var La=[].concat(ge,mt(ct),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",X.GROUP,X.SWAP_OPACITY,X.PRIMARY,X.SECONDARY]).concat(hn.map(function(t){return"".concat(t,"x")})).concat(Ra.map(function(t){return"w-".concat(t)})),it=Y.FontAwesomeConfig||{};function Da(t){var e=A.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Fa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(A&&typeof A.querySelector=="function"){var za=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];za.forEach(function(t){var e=de(t,2),n=e[0],a=e[1],r=Fa(Da(n));r!=null&&(it[a]=r)})}var yn={styleDefault:"solid",familyDefault:"classic",cssPrefix:vn,replacementClass:pn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};it.familyPrefix&&(it.cssPrefix=it.familyPrefix);var et=m(m({},yn),it);et.autoReplaceSvg||(et.observeMutations=!1);var d={};Object.keys(yn).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(n){et[t]=n,ot.forEach(function(a){return a(d)})},get:function(){return et[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(e){et.cssPrefix=e,ot.forEach(function(n){return n(d)})},get:function(){return et.cssPrefix}});Y.FontAwesomeConfig=d;var ot=[];function $a(t){return ot.push(t),function(){ot.splice(ot.indexOf(t),1)}}var z=Xt,j={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ya(t){if(!(!t||!D)){var e=A.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=A.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return A.head.insertBefore(e,a),t}}var Ua="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ut(){for(var t=12,e="";t-- >0;)e+=Ua[Math.random()*62|0];return e}function nt(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function he(t){return t.classList?nt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function kn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wa(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(kn(t[n]),'" ')},"").trim()}function _t(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ye(t){return t.size!==j.size||t.x!==j.x||t.y!==j.y||t.rotate!==j.rotate||t.flipX||t.flipY}function Ha(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:c}}function Ba(t){var e=t.transform,n=t.width,a=n===void 0?Xt:n,r=t.height,i=r===void 0?Xt:r,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&dn?l+="translate(".concat(e.x/z-a/2,"em, ").concat(e.y/z-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/z,"em), calc(-50% + ").concat(e.y/z,"em)) "):l+="translate(".concat(e.x/z,"em, ").concat(e.y/z,"em) "),l+="scale(".concat(e.size/z*(e.flipX?-1:1),", ").concat(e.size/z*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Xa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function xn(){var t=vn,e=pn,n=d.cssPrefix,a=d.replacementClass,r=Xa;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var De=!1;function $t(){d.autoAddCss&&!De&&(Ya(xn()),De=!0)}var Ga={mixout:function(){return{dom:{css:xn,insertCss:$t}}},hooks:function(){return{beforeDOMElementCreation:function(){$t()},beforeI2svg:function(){$t()}}}},M=Y||{};M[R]||(M[R]={});M[R].styles||(M[R].styles={});M[R].hooks||(M[R].hooks={});M[R].shims||(M[R].shims=[]);var _=M[R],wn=[],Va=function t(){A.removeEventListener("DOMContentLoaded",t),Ct=1,wn.map(function(e){return e()})},Ct=!1;D&&(Ct=(A.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(A.readyState),Ct||A.addEventListener("DOMContentLoaded",Va));function Ka(t){D&&(Ct?setTimeout(t,0):wn.push(t))}function vt(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?kn(t):"<".concat(e," ").concat(Wa(a),">").concat(i.map(vt).join(""),"</").concat(e,">")}function Fe(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var qa=function(e,n){return function(a,r,i,o){return e.call(n,a,r,i,o)}},Yt=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=r!==void 0?qa(n,r):n,l,c,f;for(a===void 0?(l=1,f=e[i[0]]):(l=0,f=a);l<o;l++)c=i[l],f=s(f,e[c],c,e);return f};function Qa(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Vt(t){var e=Qa(t);return e.length===1?e[0].toString(16):null}function Za(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function ze(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function Kt(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=ze(e);typeof _.hooks.addPack=="function"&&!r?_.hooks.addPack(t,ze(e)):_.styles[t]=m(m({},_.styles[t]||{}),i),t==="fas"&&Kt("fa",e)}var xt,wt,At,Q=_.styles,Ja=_.shims,tr=(xt={},I(xt,w,Object.values(ft[w])),I(xt,O,Object.values(ft[O])),xt),ke=null,An={},Pn={},On={},Sn={},En={},er=(wt={},I(wt,w,Object.keys(st[w])),I(wt,O,Object.keys(st[O])),wt);function nr(t){return~La.indexOf(t)}function ar(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!nr(r)?r:null}var In=function(){var e=function(i){return Yt(Q,function(o,s,l){return o[l]=Yt(s,i,{}),o},{})};An=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),Pn=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),En=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in Q||d.autoFetchSvg,a=Yt(Ja,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});On=a.names,Sn=a.unicodes,ke=jt(d.styleDefault,{family:d.familyDefault})};$a(function(t){ke=jt(t.styleDefault,{family:d.familyDefault})});In();function xe(t,e){return(An[t]||{})[e]}function rr(t,e){return(Pn[t]||{})[e]}function G(t,e){return(En[t]||{})[e]}function Cn(t){return On[t]||{prefix:null,iconName:null}}function ir(t){var e=Sn[t],n=xe("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function U(){return ke}var we=function(){return{prefix:null,iconName:null,rest:[]}};function jt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?w:n,r=st[a][t],i=lt[a][t]||lt[a][r],o=t in _.styles?t:null;return i||o||null}var $e=(At={},I(At,w,Object.keys(ft[w])),I(At,O,Object.keys(ft[O])),At);function Rt(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},I(e,w,"".concat(d.cssPrefix,"-").concat(w)),I(e,O,"".concat(d.cssPrefix,"-").concat(O)),e),o=null,s=w;(t.includes(i[w])||t.some(function(c){return $e[w].includes(c)}))&&(s=w),(t.includes(i[O])||t.some(function(c){return $e[O].includes(c)}))&&(s=O);var l=t.reduce(function(c,f){var u=ar(d.cssPrefix,f);if(Q[f]?(f=tr[s].includes(f)?Na[s][f]:f,o=f,c.prefix=f):er[s].indexOf(f)>-1?(o=f,c.prefix=jt(f,{family:s})):u?c.iconName=u:f!==d.replacementClass&&f!==i[w]&&f!==i[O]&&c.rest.push(f),!r&&c.prefix&&c.iconName){var v=o==="fa"?Cn(c.iconName):{},p=G(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||p||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!Q.far&&Q.fas&&!d.autoFetchSvg&&(c.prefix="fas")}return c},we());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===O&&(Q.fass||d.autoFetchSvg)&&(l.prefix="fass",l.iconName=G(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=U()||"fas"),l}var or=function(){function t(){ha(this,t),this.definitions={}}return ya(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=m(m({},n.definitions[s]||{}),o[s]),Kt(s,o[s]);var l=ft[w][s];l&&Kt(l,o[s]),In()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(n[s][u]=c)}),n[s][l]=c}),n}}]),t}(),Ye=[],Z={},tt={},sr=Object.keys(tt);function lr(t,e){var n=e.mixoutsTo;return Ye=t,Z={},Object.keys(tt).forEach(function(a){sr.indexOf(a)===-1&&delete tt[a]}),Ye.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),It(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){Z[o]||(Z[o]=[]),Z[o].push(i[o])})}a.provides&&a.provides(tt)}),n}function qt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=Z[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function q(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=Z[t]||[];r.forEach(function(i){i.apply(null,n)})}function L(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return tt[t]?tt[t].apply(null,e):void 0}function Qt(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||U();if(e)return e=G(n,e)||e,Fe(Nn.definitions,n,e)||Fe(_.styles,n,e)}var Nn=new or,fr=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,q("noAuto")},cr={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?(q("beforeI2svg",e),L("pseudoElements2svg",e),L("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Ka(function(){mr({autoReplaceSvgRoot:n}),q("watch",e)})}},ur={icon:function(e){if(e===null)return null;if(It(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:G(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=jt(e[0]);return{prefix:a,iconName:G(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(d.cssPrefix,"-"))>-1||e.match(Ta))){var r=Rt(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||U(),iconName:G(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=U();return{prefix:i,iconName:G(i,e)||e}}}},T={noAuto:fr,config:d,dom:cr,parse:ur,library:Nn,findIconDefinition:Qt,toHtml:vt},mr=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?A:n;(Object.keys(_.styles).length>0||d.autoFetchSvg)&&D&&d.autoReplaceSvg&&T.dom.i2svg({node:a})};function Mt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return vt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(D){var a=A.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function dr(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(ye(o)&&n.found&&!a.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};r.style=_t(m(m({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function vr(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:o}),children:a}]}]}function Ae(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,f=t.titleId,u=t.extra,v=t.watchable,p=v===void 0?!1:v,k=a.found?a:n,S=k.width,h=k.height,E=r==="fak",g=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(F){return u.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(u.classes).join(" "),x={children:[],attributes:m(m({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:g,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(h)})},N=E&&!~u.classes.indexOf("fa-fw")?{width:"".concat(S/h*16*.0625,"em")}:{};p&&(x.attributes[K]=""),l&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(f||ut())},children:[l]}),delete x.attributes.title);var C=m(m({},x),{},{prefix:r,iconName:i,main:n,mask:a,maskId:c,transform:o,symbol:s,styles:m(m({},N),u.styles)}),H=a.found&&n.found?L("generateAbstractMask",C)||{children:[],attributes:{}}:L("generateAbstractIcon",C)||{children:[],attributes:{}},B=H.children,Dt=H.attributes;return C.children=B,C.attributes=Dt,s?vr(C):dr(C)}function Ue(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=m(m(m({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[K]="");var f=m({},o.styles);ye(r)&&(f.transform=Ba({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);var u=_t(f);u.length>0&&(c.style=u);var v=[];return v.push({tag:"span",attributes:c,children:[e]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function pr(t){var e=t.content,n=t.title,a=t.extra,r=m(m(m({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=_t(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ut=_.styles;function Zt(t){var e=t[0],n=t[1],a=t.slice(4),r=de(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(X.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(X.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(X.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var br={found:!1,width:512,height:512};function gr(t,e){!bn&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Jt(t,e){var n=e;return e==="fa"&&d.styleDefault!==null&&(e=U()),new Promise(function(a,r){if(L("missingIconAbstract"),n==="fa"){var i=Cn(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Ut[e]&&Ut[e][t]){var o=Ut[e][t];return a(Zt(o))}gr(t,e),a(m(m({},br),{},{icon:d.showMissingIcons&&t?L("missingIconAbstract")||{}:{}}))})}var We=function(){},te=d.measurePerformance&&pt&&pt.mark&&pt.measure?pt:{mark:We,measure:We},rt='FA "6.5.1"',hr=function(e){return te.mark("".concat(rt," ").concat(e," begins")),function(){return Tn(e)}},Tn=function(e){te.mark("".concat(rt," ").concat(e," ends")),te.measure("".concat(rt," ").concat(e),"".concat(rt," ").concat(e," begins"),"".concat(rt," ").concat(e," ends"))},Pe={begin:hr,end:Tn},Ot=function(){};function He(t){var e=t.getAttribute?t.getAttribute(K):null;return typeof e=="string"}function yr(t){var e=t.getAttribute?t.getAttribute(pe):null,n=t.getAttribute?t.getAttribute(be):null;return e&&n}function kr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function xr(){if(d.autoReplaceSvg===!0)return St.replace;var t=St[d.autoReplaceSvg];return t||St.replace}function wr(t){return A.createElementNS("http://www.w3.org/2000/svg",t)}function Ar(t){return A.createElement(t)}function _n(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?wr:Ar:n;if(typeof t=="string")return A.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(_n(o,{ceFn:a}))}),r}function Pr(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var St={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(_n(r),n)}),n.getAttribute(K)===null&&d.keepOriginalSource){var a=A.createComment(Pr(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~he(n).indexOf(d.replacementClass))return St.replace(e);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===d.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return vt(s)}).join(`
`);n.setAttribute(K,""),n.innerHTML=o}};function Be(t){t()}function jn(t,e){var n=typeof e=="function"?e:Ot;if(t.length===0)n();else{var a=Be;d.mutateApproach===Ia&&(a=Y.requestAnimationFrame||Be),a(function(){var r=xr(),i=Pe.begin("mutate");t.map(r),i(),n()})}}var Oe=!1;function Rn(){Oe=!0}function ee(){Oe=!1}var Nt=null;function Xe(t){if(Me&&d.observeMutations){var e=t.treeCallback,n=e===void 0?Ot:e,a=t.nodeCallback,r=a===void 0?Ot:a,i=t.pseudoElementsCallback,o=i===void 0?Ot:i,s=t.observeMutationsRoot,l=s===void 0?A:s;Nt=new Me(function(c){if(!Oe){var f=U();nt(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!He(u.addedNodes[0])&&(d.searchPseudoElements&&o(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&d.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&He(u.target)&&~Ma.indexOf(u.attributeName))if(u.attributeName==="class"&&yr(u.target)){var v=Rt(he(u.target)),p=v.prefix,k=v.iconName;u.target.setAttribute(pe,p||f),k&&u.target.setAttribute(be,k)}else kr(u.target)&&r(u.target)})}}),D&&Nt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Or(){Nt&&Nt.disconnect()}function Sr(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Er(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Rt(he(t));return r.prefix||(r.prefix=U()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=rr(r.prefix,t.innerText)||xe(r.prefix,Vt(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ir(t){var e=nt(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(n?e["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||ut()):(e["aria-hidden"]="true",e.focusable="false")),e}function Cr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:j,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ge(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Er(t),a=n.iconName,r=n.prefix,i=n.rest,o=Ir(t),s=qt("parseNodeAttributes",{},t),l=e.styleParser?Sr(t):[];return m({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:j,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Nr=_.styles;function Mn(t){var e=d.autoReplaceSvg==="nest"?Ge(t,{styleParser:!1}):Ge(t);return~e.extra.classes.indexOf(gn)?L("generateLayersText",t,e):L("generateSvgReplacementMutation",t,e)}var W=new Set;ge.map(function(t){W.add("fa-".concat(t))});Object.keys(st[w]).map(W.add.bind(W));Object.keys(st[O]).map(W.add.bind(W));W=mt(W);function Ve(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();var n=A.documentElement.classList,a=function(u){return n.add("".concat(Le,"-").concat(u))},r=function(u){return n.remove("".concat(Le,"-").concat(u))},i=d.autoFetchSvg?W:ge.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Nr));i.includes("fa")||i.push("fa");var o=[".".concat(gn,":not([").concat(K,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(K,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=nt(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=Pe.begin("onTree"),c=s.reduce(function(f,u){try{var v=Mn(u);v&&f.push(v)}catch(p){bn||p.name==="MissingIcon"&&console.error(p)}return f},[]);return new Promise(function(f,u){Promise.all(c).then(function(v){jn(v,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),l(),f()})}).catch(function(v){l(),u(v)})})}function Tr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Mn(t).then(function(n){n&&jn([n],e)})}function _r(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Qt(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Qt(r||{})),t(a,m(m({},n),{},{mask:r}))}}var jr=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?j:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,u=n.title,v=u===void 0?null:u,p=n.titleId,k=p===void 0?null:p,S=n.classes,h=S===void 0?[]:S,E=n.attributes,g=E===void 0?{}:E,x=n.styles,N=x===void 0?{}:x;if(e){var C=e.prefix,H=e.iconName,B=e.icon;return Mt(m({type:"icon"},e),function(){return q("beforeDOMElementCreation",{iconDefinition:e,params:n}),d.autoA11y&&(v?g["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(k||ut()):(g["aria-hidden"]="true",g.focusable="false")),Ae({icons:{main:Zt(B),mask:l?Zt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:H,transform:m(m({},j),r),symbol:o,title:v,maskId:f,titleId:k,extra:{attributes:g,styles:N,classes:h}})})}},Rr={mixout:function(){return{icon:_r(jr)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ve,n.nodeCallback=Tr,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?A:a,i=n.callback,o=i===void 0?function(){}:i;return Ve(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,l=a.transform,c=a.symbol,f=a.mask,u=a.maskId,v=a.extra;return new Promise(function(p,k){Promise.all([Jt(r,s),f.iconName?Jt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var h=de(S,2),E=h[0],g=h[1];p([n,Ae({icons:{main:E,mask:g},prefix:s,iconName:r,transform:l,symbol:c,maskId:u,title:i,titleId:o,extra:v,watchable:!0})])}).catch(k)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,l=_t(s);l.length>0&&(r.style=l);var c;return ye(o)&&(c=L("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(c||i.icon),{children:a,attributes:r}}}},Mr={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Mt({type:"layer"},function(){q("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(mt(i)).join(" ")},children:o}]})}}}},Lr={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,c=l===void 0?{}:l,f=a.styles,u=f===void 0?{}:f;return Mt({type:"counter",content:n},function(){return q("beforeDOMElementCreation",{content:n,params:a}),pr({content:n.toString(),title:i,extra:{attributes:c,styles:u,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(mt(s))}})})}}}},Dr={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?j:r,o=a.title,s=o===void 0?null:o,l=a.classes,c=l===void 0?[]:l,f=a.attributes,u=f===void 0?{}:f,v=a.styles,p=v===void 0?{}:v;return Mt({type:"text",content:n},function(){return q("beforeDOMElementCreation",{content:n,params:a}),Ue({content:n,transform:m(m({},j),i),title:s,extra:{attributes:u,styles:p,classes:["".concat(d.cssPrefix,"-layers-text")].concat(mt(c))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,l=null;if(dn){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ue({content:n.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},Fr=new RegExp('"',"ug"),Ke=[1105920,1112319];function zr(t){var e=t.replace(Fr,""),n=Za(e,0),a=n>=Ke[0]&&n<=Ke[1],r=e.length===2?e[0]===e[1]:!1;return{value:Vt(r?e[0]:e),isSecondary:a||r}}function qe(t,e){var n="".concat(Ea).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=nt(t.children),o=i.filter(function(B){return B.getAttribute(Gt)===e})[0],s=Y.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(_a),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),a();if(l&&f!=="none"&&f!==""){var u=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?O:w,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?lt[v][l[2].toLowerCase()]:ja[v][c],k=zr(u),S=k.value,h=k.isSecondary,E=l[0].startsWith("FontAwesome"),g=xe(p,S),x=g;if(E){var N=ir(S);N.iconName&&N.prefix&&(g=N.iconName,p=N.prefix)}if(g&&!h&&(!o||o.getAttribute(pe)!==p||o.getAttribute(be)!==x)){t.setAttribute(n,x),o&&t.removeChild(o);var C=Cr(),H=C.extra;H.attributes[Gt]=e,Jt(g,p).then(function(B){var Dt=Ae(m(m({},C),{},{icons:{main:B,mask:we()},prefix:p,iconName:x,extra:H,watchable:!0})),F=A.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(F,t.firstChild):t.appendChild(F),F.outerHTML=Dt.map(function(Un){return vt(Un)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function $r(t){return Promise.all([qe(t,"::before"),qe(t,"::after")])}function Yr(t){return t.parentNode!==document.head&&!~Ca.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Gt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Qe(t){if(D)return new Promise(function(e,n){var a=nt(t.querySelectorAll("*")).filter(Yr).map($r),r=Pe.begin("searchPseudoElements");Rn(),Promise.all(a).then(function(){r(),ee(),e()}).catch(function(){r(),ee(),n()})})}var Ur={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Qe,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?A:a;d.searchPseudoElements&&Qe(r)}}},Ze=!1,Wr={mixout:function(){return{dom:{unwatch:function(){Rn(),Ze=!0}}}},hooks:function(){return{bootstrap:function(){Xe(qt("mutationObserverCallbacks",{}))},noAuto:function(){Or()},watch:function(n){var a=n.observeMutationsRoot;Ze?ee():Xe(qt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Je=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},Hr={mixout:function(){return{parse:{transform:function(n){return Je(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Je(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(l," ").concat(c," ").concat(f)},v={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:u,path:v};return{tag:"g",attributes:m({},p.outer),children:[{tag:"g",attributes:m({},p.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:m(m({},a.icon.attributes),p.path)}]}]}}}},Wt={x:0,y:0,width:"100%",height:"100%"};function tn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Br(t){return t.tag==="g"?t.children:[t]}var Xr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?Rt(r.split(" ").map(function(o){return o.trim()})):we();return i.prefix||(i.prefix=U()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,u=o.width,v=o.icon,p=Ha({transform:l,containerWidth:u,iconWidth:c}),k={tag:"rect",attributes:m(m({},Wt),{},{fill:"white"})},S=f.children?{children:f.children.map(tn)}:{},h={tag:"g",attributes:m({},p.inner),children:[tn(m({tag:f.tag,attributes:m(m({},f.attributes),p.path)},S))]},E={tag:"g",attributes:m({},p.outer),children:[h]},g="mask-".concat(s||ut()),x="clip-".concat(s||ut()),N={tag:"mask",attributes:m(m({},Wt),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,E]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:Br(v)},N]};return a.push(C,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(g,")")},Wt)}),{children:a,attributes:r}}}},Gr={provides:function(e){var n=!1;Y.matchMedia&&(n=Y.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Vr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Kr=[Ga,Rr,Mr,Lr,Dr,Ur,Wr,Hr,Xr,Gr,Vr];lr(Kr,{mixoutsTo:T});T.noAuto;T.config;T.library;T.dom;var ne=T.parse;T.findIconDefinition;T.toHtml;var qr=T.icon;T.layer;T.text;T.counter;var Ln={exports:{}},Qr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Zr=Qr,Jr=Zr;function Dn(){}function Fn(){}Fn.resetWarningCache=Dn;var ti=function(){function t(a,r,i,o,s,l){if(l!==Jr){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Fn,resetWarningCache:Dn};return n.PropTypes=n,n};Ln.exports=ti();var ei=Ln.exports;const b=Wn(ei);function en(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?en(Object(n),!0).forEach(function(a){J(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):en(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Tt(t){"@babel/helpers - typeof";return Tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Tt(t)}function J(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ni(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function ai(t,e){if(t==null)return{};var n=ni(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function ae(t){return ri(t)||ii(t)||oi(t)||si()}function ri(t){if(Array.isArray(t))return re(t)}function ii(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function oi(t,e){if(t){if(typeof t=="string")return re(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return re(t,e)}}function re(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function si(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function li(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,l=t.spin,c=t.spinPulse,f=t.spinReverse,u=t.pulse,v=t.fixedWidth,p=t.inverse,k=t.border,S=t.listItem,h=t.flip,E=t.size,g=t.rotation,x=t.pull,N=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":v,"fa-inverse":p,"fa-border":k,"fa-li":S,"fa-flip":h===!0,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both"},J(e,"fa-".concat(E),typeof E<"u"&&E!==null),J(e,"fa-rotate-".concat(g),typeof g<"u"&&g!==null&&g!==0),J(e,"fa-pull-".concat(x),typeof x<"u"&&x!==null),J(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(N).map(function(C){return N[C]?C:null}).filter(function(C){return C})}function fi(t){return t=t-0,t===t}function zn(t){return fi(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var ci=["style"];function ui(t){return t.charAt(0).toUpperCase()+t.slice(1)}function mi(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=zn(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[ui(r)]=i:e[r]=i,e},{})}function $n(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(l){return $n(t,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.attrs.className=f,delete e.attributes.class;break;case"style":l.attrs.style=mi(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=f:l.attrs[zn(c)]=f}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=ai(n,ci);return r.attrs.style=$($({},r.attrs.style),o),t.apply(void 0,[e.tag,$($({},r.attrs),s)].concat(ae(a)))}var Yn=!1;try{Yn=!0}catch{}function di(){if(!Yn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function nn(t){if(t&&Tt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ne.icon)return ne.icon(t);if(t===null)return null;if(t&&Tt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Ht(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?J({},t,e):{}}var Lt=V.forwardRef(function(t,e){var n=t.icon,a=t.mask,r=t.symbol,i=t.className,o=t.title,s=t.titleId,l=t.maskId,c=nn(n),f=Ht("classes",[].concat(ae(li(t)),ae(i.split(" ")))),u=Ht("transform",typeof t.transform=="string"?ne.transform(t.transform):t.transform),v=Ht("mask",nn(a)),p=qr(c,$($($($({},f),u),v),{},{symbol:r,title:o,titleId:s,maskId:l}));if(!p)return di("Could not find icon",c),null;var k=p.abstract,S={ref:e};return Object.keys(t).forEach(function(h){Lt.defaultProps.hasOwnProperty(h)||(S[h]=t[h])}),vi(k[0],S)});Lt.displayName="FontAwesomeIcon";Lt.propTypes={beat:b.bool,border:b.bool,beatFade:b.bool,bounce:b.bool,className:b.string,fade:b.bool,flash:b.bool,mask:b.oneOfType([b.object,b.array,b.string]),maskId:b.string,fixedWidth:b.bool,inverse:b.bool,flip:b.oneOf([!0,!1,"horizontal","vertical","both"]),icon:b.oneOfType([b.object,b.array,b.string]),listItem:b.bool,pull:b.oneOf(["right","left"]),pulse:b.bool,rotation:b.oneOf([0,90,180,270]),shake:b.bool,size:b.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:b.bool,spinPulse:b.bool,spinReverse:b.bool,symbol:b.oneOfType([b.bool,b.string]),title:b.string,titleId:b.string,transform:b.oneOfType([b.string,b.object]),swapOpacity:b.bool};Lt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var vi=$n.bind(null,V.createElement);const an=[{name:"Home",href:"/",current:!0},{name:"Education",href:"soon",current:!1},{name:"Firm",href:"about",current:!1},{name:"News",href:"news",current:!1}];function rn(...t){return t.filter(Boolean).join(" ")}function hi(){const[t,e]=y.useState(!0);return y.useEffect(()=>{let n=0;const a=()=>{const r=window.scrollY;e(r<n),n=r};return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}},[]),P.jsx(zt,{as:"nav",className:`bg-[#001624] fixed w-full z-50 transition-transform transform ${t?"-translate-y-0":"-translate-y-full"} duration-300 ease-in-out`,children:({open:n})=>P.jsxs(P.Fragment,{children:[P.jsx("div",{className:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",children:P.jsxs("div",{className:"relative flex h-24 items-center justify-between",children:[P.jsx("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:P.jsxs(zt.Button,{className:"relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-white ",children:[P.jsx("span",{className:"absolute -inset-0.5"}),P.jsx("span",{className:"sr-only",children:"Open main menu"}),n?P.jsx(ga,{className:"block h-6 w-6","aria-hidden":"true"}):P.jsx(va,{className:"block h-6 w-6","aria-hidden":"true"})]})}),P.jsxs("div",{className:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start",children:[P.jsx("div",{className:"flex flex-shrink-0 items-center",children:P.jsx("img",{className:"h-10 lg:h-12 w-auto",src:"/images/logo.png",alt:"Your Company"})}),P.jsx("div",{className:"hidden sm:ml-6 sm:block",children:P.jsxs("div",{className:"flex space-x-4",children:[an.map(a=>P.jsx(Ft,{href:a.href,className:rn(a.current?"bg-gray-900 text-white":"text-gray-300 hover:text-white","rounded-md px-3 py-2 text-lg font-medium "),"aria-current":a.current?"page":void 0,children:a.name},a.name)),P.jsx("input",{type:"text",className:"bg-gray-100 rounded-md",placeholder:"Search"})]})})]}),P.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:P.jsx(Ft,{href:"register",className:"relative   p-2.5 text-white hover:text-gray-200 border-white hover:border-gray-200 border",children:"Sign In"})})]})}),P.jsx(zt.Panel,{className:"sm:hidden",children:P.jsx("div",{className:"space-y-1 px-2 pb-3 pt-2",children:an.map(a=>P.jsx(Ft,{as:"a",href:a.href,className:rn(a.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block rounded-md px-3 py-2 text-base font-medium"),"aria-current":a.current?"page":void 0,children:a.name},a.name))})})]})})}export{Lt as F,hi as N,b as P};

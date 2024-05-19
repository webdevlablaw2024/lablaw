import{r as a,R as N,f as E}from"./app-Dep5erZb.js";var k=Object.defineProperty,x=(e,t,n)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t,n)=>(x(e,typeof t!="symbol"?t+"":t,n),n);let T=class{constructor(){b(this,"current",this.detect()),b(this,"handoffState","pending"),b(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},g=new T,F=(e,t)=>{g.isServer?a.useEffect(e,t):a.useLayoutEffect(e,t)};function H(e){let t=a.useRef(e);return F(()=>{t.current=e},[e]),t}let P=function(e){let t=H(e);return N.useCallback((...n)=>t.current(...n),[t])};function I(){let e=typeof document>"u";return"useSyncExternalStore"in E?(t=>t.useSyncExternalStore)(E)(()=>()=>{},()=>!1,()=>!e):!1}function W(){let e=I(),[t,n]=a.useState(g.isHandoffComplete);return t&&g.isHandoffComplete===!1&&n(!1),a.useEffect(()=>{t!==!0&&n(!0)},[t]),a.useEffect(()=>g.handoff(),[]),e?!1:t}function C(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,C),r}let $=Symbol();function Y(e,t=!0){return Object.assign(e,{[$]:t})}function q(...e){let t=a.useRef(e);a.useEffect(()=>{t.current=e},[e]);let n=P(r=>{for(let o of t.current)o!=null&&(typeof o=="function"?o(r):o.current=r)});return e.every(r=>r==null||(r==null?void 0:r[$]))?void 0:n}function S(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var A=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(A||{}),U=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(U||{});function z({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:c=!0,name:u,mergeRefs:l}){l=l??B;let s=R(t,e);if(c)return y(s,n,r,u,l);let m=o??0;if(m&2){let{static:i=!1,...p}=s;if(i)return y(p,n,r,u,l)}if(m&1){let{unmount:i=!0,...p}=s;return C(i?0:1,{0(){return null},1(){return y({...p,hidden:!0,style:{display:"none"}},n,r,u,l)}})}return y(s,n,r,u,l)}function y(e,t={},n,r,o){let{as:c=n,children:u,refName:l="ref",...s}=O(e,["unmount","static"]),m=e.ref!==void 0?{[l]:e.ref}:{},i=typeof u=="function"?u(t):u;"className"in s&&s.className&&typeof s.className=="function"&&(s.className=s.className(t));let p={};if(t){let f=!1,h=[];for(let[v,d]of Object.entries(t))typeof d=="boolean"&&(f=!0),d===!0&&h.push(v);f&&(p["data-headlessui-state"]=h.join(" "))}if(c===a.Fragment&&Object.keys(w(s)).length>0){if(!a.isValidElement(i)||Array.isArray(i)&&i.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));let f=i.props,h=typeof(f==null?void 0:f.className)=="function"?(...d)=>S(f==null?void 0:f.className(...d),s.className):S(f==null?void 0:f.className,s.className),v=h?{className:h}:{};return a.cloneElement(i,Object.assign({},R(i.props,w(O(s,["ref"]))),p,m,{ref:o(i.ref,m.ref)},v))}return a.createElement(c,Object.assign({},O(s,["ref"]),c!==a.Fragment&&m,c!==a.Fragment&&p),i)}function D(){let e=a.useRef([]),t=a.useCallback(n=>{for(let r of e.current)r!=null&&(typeof r=="function"?r(n):r.current=n)},[]);return(...n)=>{if(!n.every(r=>r==null))return e.current=n,t}}function B(...e){return e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}function R(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...c){let u=n[r];for(let l of u){if((o instanceof Event||(o==null?void 0:o.nativeEvent)instanceof Event)&&o.defaultPrevented)return;l(o,...c)}}});return t}function G(e){var t;return Object.assign(a.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function w(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function O(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let j=a.createContext(null);j.displayName="OpenClosedContext";var L=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(L||{});function J(){return a.useContext(j)}function K({value:e,children:t}){return N.createElement(j.Provider,{value:e},t)}export{z as C,D as I,A as O,Y as T,G as U,g as a,F as b,J as c,L as d,K as e,W as l,P as o,H as s,S as t,C as u,U as v,q as y};

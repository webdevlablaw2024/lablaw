import{R as u,r as p,j as t,d as h,q as w}from"./app-Dep5erZb.js";var v={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},x=u.createContext&&u.createContext(v),y=["attr","size","title"];function N(e,r){if(e==null)return{};var a=O(e,r),s,i;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(i=0;i<d.length;i++)s=d[i],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}function O(e,r){if(e==null)return{};var a={};for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){if(r.indexOf(s)>=0)continue;a[s]=e[s]}return a}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},m.apply(this,arguments)}function f(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),a.push.apply(a,s)}return a}function g(e){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?f(Object(a),!0).forEach(function(s){M(e,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))})}return e}function M(e,r,a){return r=L(r),r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function L(e){var r=z(e,"string");return typeof r=="symbol"?r:r+""}function z(e,r){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var s=a.call(e,r||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function b(e){return e&&e.map((r,a)=>u.createElement(r.tag,g({key:a},r.attr),b(r.child)))}function c(e){return r=>u.createElement(C,m({attr:g({},e.attr)},r),b(e.child))}function C(e){var r=a=>{var{attr:s,size:i,title:d}=e,n=N(e,y),l=i||a.size||"1em",o;return a.className&&(o=a.className),e.className&&(o=(o?o+" ":"")+e.className),u.createElement("svg",m({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,s,n,{className:o,style:g(g({color:e.color||a.color},a.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),d&&u.createElement("title",null,d),e.children)};return x!==void 0?u.createElement(x.Consumer,null,a=>r(a)):r(v)}function P(e){return c({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"square",strokeMiterlimit:"10",strokeWidth:"48",d:"m112 184 144 144 144-144"},child:[]}]})(e)}function k(e){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.03 2.59a1.501 1.501 0 0 1 1.94 0l7.5 6.363a1.5 1.5 0 0 1 .53 1.144V19.5a1.5 1.5 0 0 1-1.5 1.5h-5.75a.75.75 0 0 1-.75-.75V14h-2v6.25a.75.75 0 0 1-.75.75H4.5A1.5 1.5 0 0 1 3 19.5v-9.403c0-.44.194-.859.53-1.144ZM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v6.25h5v-9.403Z"},child:[]}]})(e)}function S(e){return c({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916zM12.375 6v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2M.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1z"},child:[]}]})(e)}function B(e){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M16,7 L19,7 L19,11 L16,11 L16,7 Z M9,15 L20,15 M9,11 L13,11 M9,7 L13,7 M6,18.5 C6,19.8807119 4.88071187,21 3.5,21 C2.11928813,21 1,19.8807119 1,18.5 L1,7 L6.02493781,7 M6,18.5 L6,3 L23,3 L23,18.5 C23,19.8807119 21.8807119,21 20.5,21 L3.5,21"},child:[]}]})(e)}function E(e){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M16,12 C18.3736719,13.1826446 20,15.6506255 20,19 L20,23 L4,23 L4,19 C4,15.6457258 5.6310898,13.1754259 8,12 M12,13 C15.3137085,13 18,10.3137085 18,7 C18,3.6862915 15.3137085,1 12,1 C8.6862915,1 6,3.6862915 6,7 C6,10.3137085 8.6862915,13 12,13 Z M18,7 C16.5,7 15,7.3599999 13,5 C11,7.3599999 8.5,8 6,7 M7,13 L12.0249378,18.2571942 L17,13 M12,18 L12,23"},child:[]}]})(e)}function V(e){return c({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"},child:[]},{tag:"path",attr:{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"},child:[]}]})(e)}function _(e){return c({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(e)}function A(e){return c({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(e)}function F(e){return c({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M377.4 32c-38.9 0-70.6 31.7-70.6 70.7 0 17.1 6.2 33.7 17.5 46.6 10 11.5 23.5 19.4 38.2 22.5v43.1L256 270.3l-106.4-55.4v-43.1c32.2-6.9 55.7-35.6 55.7-69.1 0-39-31.7-70.7-70.6-70.7S64 63.7 64 102.7c0 17.1 6.2 33.7 17.5 46.6 10 11.5 23.5 19.4 38.2 22.5v57.4c0 2.7 1.5 5.1 3.9 6.3l117.5 60.8v43.9c-32.2 6.9-55.7 35.6-55.7 69.1 0 39 31.7 70.7 70.6 70.7s70.6-31.7 70.6-70.7c0-17.1-6.2-33.7-17.5-46.6-10-11.5-23.5-19.4-38.2-22.5v-43.9l117.5-60.8c2.4-1.2 3.9-3.6 3.9-6.3v-57.4c32.2-6.9 55.7-35.6 55.7-69.1 0-39-31.7-70.7-70.6-70.7zM93.8 102.7c0-22.5 18.3-40.8 40.8-40.8s40.8 18.3 40.8 40.8c0 22.5-18.3 40.8-40.8 40.8s-40.8-18.3-40.8-40.8zm203 306.6c0 22.5-18.3 40.8-40.8 40.8s-40.8-18.3-40.8-40.8c0-22.5 18.3-40.8 40.8-40.8s40.8 18.3 40.8 40.8zm80.6-265.7c-22.5 0-40.8-18.3-40.8-40.8 0-22.5 18.3-40.8 40.8-40.8 22.5 0 40.8 18.3 40.8 40.8 0 22.4-18.3 40.8-40.8 40.8z"},child:[]}]})(e)}function G(e){return c({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"},child:[]}]})(e)}const D=({isOpen:e})=>{const[r,a]=p.useState([]),s=n=>{a(l=>l.includes(n)?l.filter(o=>o!==n):[...l,n])},i=n=>r.includes(n),d=[{icon:t.jsx(k,{size:20,className:"mr-4"}),text:"Overview",url:route("overview.index")},{icon:t.jsx(B,{size:20,className:"mr-4"}),text:"Articles",url:route("article.index")},{icon:t.jsx(E,{size:20,className:"mr-4"}),text:"Members",url:route("member.index")},{icon:t.jsx(S,{size:20,className:"mr-4"}),text:"Internship",submenu:[{text:"Position ",url:route("position.index"),icon:t.jsx(F,{size:20,className:"mr-4"})},{text:"Applicant ",url:route("applicant.index"),icon:t.jsx(A,{size:20,className:"mr-4"})}]}];return t.jsx(t.Fragment,{children:t.jsx("aside",{id:"logo-sidebar",className:`fixed top-0 left-0 z-40 w-64 h-screen pt-10 transition-transform ${e?"":"-translate-x-full"} bg-white border-r border-gray-200 sm:translate-x-0`,"aria-label":"Sidebar",children:t.jsx("div",{className:"h-full px-3 pb-4 pt-10 overflow-y-auto bg-white ",children:t.jsx("ul",{className:"space-y-2 font-medium",children:d.map((n,l)=>t.jsxs("li",{className:`relative cursor-pointer ${i(l)?"z-50":""}`,children:[n.submenu?t.jsxs("div",{className:`flex items-center p-2 text-[#64748B] rounded-lg group hover:bg-gray-50 
                                        `,onClick:()=>{s(l)},children:[n.icon,t.jsx("span",{className:"flex-1 ms-2 whitespace-nowrap",children:n.text}),n.submenu&&t.jsx(P,{size:20,className:`ml-auto transition duration-200 ${i(l)?"transform rotate-180":""}`})]}):t.jsxs(h,{href:n.url,className:"flex items-center p-2 text-base text-[#64748B] transition duration-200 rounded-lg group hover:bg-gray-100",children:[n.icon,t.jsx("span",{className:"flex-1 ms-2 whitespace-nowrap",children:n.text})]}),n.submenu&&i(l)&&t.jsx("ul",{className:"pl-10",children:n.submenu.map((o,j)=>t.jsx("li",{className:"relative",children:t.jsxs(h,{href:o.url,className:"flex items-center p-2 text-base text-[#64748B] transition duration-200 rounded-lg group hover:bg-gray-100",children:[o.icon,t.jsx("span",{className:"flex-1 ms-2 whitespace-nowrap",children:o.text})]})},j))})]},l))})})})})},W=()=>{const{auth:e}=w().props;console.log(e);const[r,a]=p.useState(!1),[s,i]=p.useState(!1),d=()=>{a(!r)},n=()=>{i(!s)};return t.jsxs(t.Fragment,{children:[t.jsx("nav",{className:"fixed top-0 z-50 w-full bg-white border-b border-gray-200",children:t.jsx("div",{className:"px-3 py-3 lg:px-5 lg:pl-3",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center justify-start rtl:justify-end",children:[t.jsxs("button",{"data-drawer-target":"logo-sidebar","data-drawer-toggle":"logo-sidebar","aria-controls":"logo-sidebar",type:"button",className:"inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200",onClick:n,children:[t.jsx("span",{className:"sr-only",children:"Open sidebar"}),t.jsx("svg",{className:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"})})]}),t.jsxs("a",{className:"flex ms-2 md:me-24",children:[t.jsx("img",{src:"/images/logo-lablaw.png",alt:"",className:"w-10 mr-2"}),t.jsx("span",{className:" text-blue-900  self-center text-2xl font-extrabold sm:text-2xl whitespace-nowrap",children:"LabLaw"})]})]}),t.jsx("div",{className:"flex items-center",children:t.jsxs("div",{className:"flex items-center ms-3",children:[t.jsx("div",{children:t.jsxs("button",{type:"button",className:"flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300","aria-expanded":r,onClick:d,children:[t.jsx("span",{className:"sr-only",children:"Open user menu"}),t.jsx("img",{className:"w-10 rounded-full",src:"https://flowbite.com/docs/images/people/profile-picture-5.jpg",alt:"user photo"})]})}),r&&t.jsxs("div",{className:"z-50 absolute right-6 top-16 w-48 bg-white divide-y divide-gray-100 rounded shadow",id:"dropdown-user",children:[t.jsxs("div",{className:"px-4 py-3",role:"none",children:[t.jsx("p",{className:"text-sm text-gray-900",role:"none",children:e.name}),t.jsx("p",{className:"text-sm font-medium text-gray-900 truncate",role:"none",children:e.email})]}),t.jsxs("ul",{className:"py-1",role:"none",children:[t.jsx("li",{children:t.jsx(h,{href:route("profile.edit"),className:"block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",role:"menuitem","w-full":!0,"text-start":!0,children:"Profile"})}),t.jsx("li",{children:t.jsx(h,{method:"post",href:route("logout"),as:"button",className:"block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",role:"menuitem",children:"Logout"})})]})]})]})})]})})}),t.jsx(D,{isOpen:s})]})},R=({children:e})=>t.jsxs(t.Fragment,{children:[t.jsx(W,{}),t.jsx("div",{className:"p-4 md:p-7 lg:p-9 xl:p-10 sm:ml-64 mt-14 bg-[#F9FCFF] min-h-screen",children:e})]});export{R as A,V as F,c as G,G as I,_ as a};
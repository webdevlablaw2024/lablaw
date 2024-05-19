import{W as p,r as h,j as e,d as l}from"./app-Dep5erZb.js";import{A as g}from"./AdminLayout-CT7OHU9j.js";import{M as b}from"./index-TgqQBN80.js";import{R as u}from"./quill.snow-CZU8SsJQ.js";const v=()=>{const{data:t,setData:o,post:n,errors:i}=p(),[d,m]=h.useState(null),c=s=>{s.preventDefault(),console.log(t),n(route("position.store"),t)},x=s=>{const r=s.target.files[0];if(r){const a=new FileReader;a.onloadend=()=>{m(a.result)},a.readAsDataURL(r),o("image",r)}};return e.jsx(e.Fragment,{children:e.jsxs(g,{children:[e.jsxs("div",{className:"p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3",children:[e.jsxs("div",{className:"flex gap-x-2 items-center text-[#64748B] my-3",children:[e.jsx(l,{href:route("position.index"),children:"Position"}),e.jsx(b,{size:25}),e.jsx(l,{href:"",className:"text-[#004877]",children:"Add Position"})]}),e.jsx("h1",{className:"text-xl font-bold mb-3",children:"Add Position"})]}),e.jsx("div",{className:"p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3",children:e.jsxs("form",{onSubmit:c,action:"",className:"my-6",encType:"multipart/form-data",children:[e.jsxs("div",{className:"my-5 flex flex-col gap-y-2",children:[e.jsx("label",{htmlFor:"position",className:"font-semibold text-lg",children:"Position*"}),e.jsx("input",{id:"position",type:"text",placeholder:"Please enter position",className:`border-2 border-gray-300 rounded-lg p-2 ${i.position?"border-red-500":""}`,value:t.position||"",onChange:s=>o("position",s.target.value)}),i.position&&e.jsx("div",{className:"text-red-500",children:i.position})]}),e.jsxs("div",{className:"my-5 flex flex-col gap-y-2",children:[e.jsx("label",{htmlFor:"gambar",className:"font-semibold text-lg",children:"Image"}),e.jsx("input",{id:"gambar",type:"file",name:"gambar",accept:"image/*",className:"border-2 border-[#D8DBDF] p-2 bg-[#FBFBFB] rounded-lg",onChange:x}),d&&e.jsx("img",{src:d,alt:"Preview",className:"mt-2 w-40 h-40 object-cover"})]}),e.jsxs("div",{className:"my-5",children:[e.jsx("label",{htmlFor:"description",className:"font-semibold text-lg",children:"Description*"}),e.jsx(u,{id:"description",theme:"snow",placeholder:"Please enter description",value:t.description||"",onChange:s=>o("description",s)})]}),e.jsxs("div",{className:"flex justify-end mt-6 gap-x-4",children:[e.jsx(l,{href:route("position.index"),className:"bg-white px-8 py-2.5 rounded-full text-[#004877] border-2 border-[#004877] font-semibold",children:"Cancel"}),e.jsx("button",{type:"submit",className:"bg-[#004877] px-8 py-2.5 rounded-full text-white font-semibold",children:"Save"})]})]})})]})})};export{v as default};

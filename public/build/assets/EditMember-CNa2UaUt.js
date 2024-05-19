import{r as b,W as h,j as e,d}from"./app-Dep5erZb.js";import{A as p}from"./AdminLayout-CT7OHU9j.js";import{M as u}from"./index-TgqQBN80.js";const N=l=>{const m=l.positions,[n,o]=b.useState(l.member.image?`/storage/member/images/${l.member.image}`:null),{data:r,setData:t,post:c,errors:f}=h({_method:"patch",id:l.member.id,name:l.member.name,gender:l.member.gender,position_id:l.member.position_id}),x=a=>{a.preventDefault(),c(route("member.update",{id:l.member.id}),r),console.log(r)},g=a=>{const s=a.target.files[0];if(s){const i=new FileReader;i.onloadend=()=>{o(i.result)},i.readAsDataURL(s),t("image",s)}};return e.jsx(e.Fragment,{children:e.jsxs(p,{children:[e.jsxs("div",{className:"p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3",children:[e.jsxs("div",{className:"flex gap-x-2 items-center text-[#64748B] my-3",children:[e.jsx(d,{href:route("member.index"),children:"Member"}),e.jsx(u,{size:25}),e.jsx(d,{href:"",className:"text-[#004877]",children:"Edit Member"})]}),e.jsx("h1",{className:"text-xl font-bold mb-3",children:"Edit Member"})]}),e.jsx("div",{className:"p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3",children:e.jsxs("form",{onSubmit:x,action:"",className:"my-6",encType:"multipart/form-data",children:[e.jsxs("div",{className:"my-5 flex flex-col gap-y-2",children:[e.jsx("label",{htmlFor:"name",className:"font-semibold text-lg",children:"Name*"}),e.jsx("input",{id:"name",type:"text",placeholder:"Please enter name",className:"border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg",value:r.name,onChange:a=>t("name",a.target.value)})]}),e.jsxs("div",{className:"my-5 flex flex-col gap-y-2",children:[e.jsx("label",{htmlFor:"gender",className:"font-semibold text-lg",children:"Gender*"}),e.jsxs("select",{id:"gender",name:"gender",className:"border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg",value:r.gender,onChange:a=>t("gender",a.target.value),children:[e.jsx("option",{value:"",children:"Select gender"}),e.jsx("option",{value:"male",children:"Male"}),e.jsx("option",{value:"female",children:"Female"})]})]}),e.jsxs("div",{className:"my-5 flex flex-col gap-y-2",children:[e.jsx("label",{htmlFor:"gambar",className:"font-semibold text-lg",children:"Image"}),e.jsx("input",{id:"gambar",type:"file",name:"gambar",accept:"image/*",className:"border-2 border-[#D8DBDF] p-2 bg-[#FBFBFB] rounded-lg",onChange:g}),n&&e.jsx("img",{src:n,alt:"Preview",className:"mt-2 w-40 h-40 object-cover"})]}),e.jsxs("div",{className:"my-5 flex flex-col gap-y-2",children:[e.jsx("label",{htmlFor:"position",className:"font-semibold text-lg",children:"Position*"}),e.jsxs("select",{id:"position",name:"position_id",className:"border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg",value:r.position_id,onChange:a=>t("position_id",a.target.value),children:[e.jsx("option",{value:"",children:"Select position"}),m.map((a,s)=>e.jsx("option",{value:a.id,children:a.position},s))]})]}),e.jsxs("div",{className:"flex justify-end mt-6 gap-x-4",children:[e.jsx(d,{href:route("member.index"),className:"bg-white px-8 py-2.5 rounded-full text-[#004877] border-2 border-[#004877] font-semibold",children:"Cancel"}),e.jsx("button",{type:"submit",className:"bg-[#004877] px-8 py-2.5 rounded-full text-white font-semibold",children:"Edit"})]})]})})]})})};export{N as default};

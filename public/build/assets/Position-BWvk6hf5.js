import{r,j as e,d as a}from"./app-Dep5erZb.js";import{I as m,A as u,F as p}from"./AdminLayout-CT7OHU9j.js";import{X as f}from"./index.es-DyRRMyPz.js";import{R as h,d as b}from"./index-4A9zI49y.js";const g=({isOpen:s,onClose:o,handleDelete:l})=>(r.useEffect(()=>(s?document.body.style.overflow="hidden":document.body.style.overflow="auto",()=>{document.body.style.overflow="auto"}),[s]),e.jsx(e.Fragment,{children:s&&e.jsx("div",{className:"fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50",children:e.jsxs("div",{className:"bg-white rounded-xl p-8 relative",children:[e.jsx(m,{className:"absolute top-0 right-0 m-4 cursor-pointer",onClick:o,size:20,color:"#6B7280"}),e.jsx("img",{src:"/icons/warning.svg",alt:"",className:"mx-auto mb-4 w-16"}),e.jsx("p",{className:"text-xl font-bold mb-4 text-center",children:"Delete Position"}),e.jsx("p",{className:"text-[#6B7280]",children:"Are you sure you want to delete the position?"}),e.jsxs("div",{className:"mt-4 flex justify-center",children:[e.jsx("button",{className:"bg-white text-[#004877] border-2 border-[#004877] px-8 py-2 rounded-full mr-4",onClick:o,children:"Cancel"}),e.jsx("button",{className:"bg-[#004877] text-white px-8 py-2 rounded-full",onClick:l,children:"Delete"})]})]})})})),v=s=>{const[o,l]=r.useState(!1),[n,i]=r.useState(null),d=[{name:"No",selector:(t,x)=>x+1,sortable:!1},{name:"Title",selector:t=>t.position,sortable:!0},{name:"Image",selector:t=>t.image,sortable:!0},{name:"Action",cell:t=>e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs(a,{href:route("position.edit",t.id),className:" p-2 flex items-center gap-x-1 text-sm",children:[e.jsx(p,{className:"text-green-600",size:20})," Edit"]}),e.jsxs("button",{onClick:()=>{i(t.id),l(!0)},className:" p-2 flex items-center gap-x-1 text-sm",children:[e.jsx(h,{className:"text-red-600",size:20})," ","Delete"]})]}),width:"200px"}],c=()=>{b.Inertia.delete(route("position.destroy",n)).then(()=>{l(!1),i(null),console.log("Menghapus item dengan ID:",n)}).catch(t=>{console.error("Error deleting referensi:",t)})};return e.jsx(e.Fragment,{children:e.jsxs(u,{children:[e.jsx("div",{className:"p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mb-2",children:e.jsx("h1",{className:"text-center font-extrabold text-3xl my-2",children:"LabLaw Position"})}),e.jsx("div",{className:"p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white",children:e.jsxs("div",{className:"text-center my-10",children:[e.jsx("div",{className:"flex flex-col md:flex-row justify-end items-center mb-4 mt-5",children:e.jsx(a,{href:route("position.create"),className:"py-2.5 px-8 font-semibold text-white bg-[#004877] rounded-full",children:"+ Add New Position"})}),e.jsx(f,{columns:d,data:s.position,pagination:!0,customStyles:{headRow:{style:{backgroundColor:"#F1F5F9",fontSize:"1.3em",fontWeight:"bold"}},rows:{style:{fontSize:"1em",color:"black"}}}})]})}),e.jsx(g,{isOpen:o,onClose:()=>l(!1),handleDelete:c})]})})};export{v as default};

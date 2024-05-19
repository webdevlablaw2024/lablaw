import{W as p,r as u,j as s,e as x,d as w}from"./app-Dep5erZb.js";import{G as f}from"./GuestLayout-DmpO2RLV.js";import{T as l,I as m}from"./TextInput-Bd7Lt1wT.js";import{I as o}from"./InputLabel-RkxFV4m9.js";import{P as h}from"./PrimaryButton-UoRDfYjP.js";import{N as j}from"./NoFillButton-BQgd3NaQ.js";function _(){const{data:a,setData:t,post:i,processing:n,errors:r,reset:c}=p({name:"",email:"",password:"",password_confirmation:""});u.useEffect(()=>()=>{c("password","password_confirmation")},[]);const d=e=>{e.preventDefault(),i(route("register"))};return s.jsxs(f,{children:[s.jsx(x,{title:"Register"}),s.jsx("img",{src:"/images/logo-lablaw.png",className:"w-[60px] h-[60px]",alt:"Logo LabLaw"}),s.jsxs("h1",{className:"text-2xl font-bold mt-[19px]",children:["Welcome ",s.jsx("br",{}),"to LABLAW"]}),s.jsxs("form",{onSubmit:d,className:"mt-2",children:[s.jsxs("div",{children:[s.jsx(o,{htmlFor:"name",value:"Name"}),s.jsx(l,{id:"name",name:"name",value:a.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:e=>t("name",e.target.value),required:!0}),s.jsx(m,{message:r.name,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(o,{htmlFor:"email",value:"Email"}),s.jsx(l,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",onChange:e=>t("email",e.target.value),required:!0}),s.jsx(m,{message:r.email,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(o,{htmlFor:"password",value:"Password"}),s.jsx(l,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:e=>t("password",e.target.value),required:!0}),s.jsx(m,{message:r.password,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(o,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(l,{id:"password_confirmation",type:"password",name:"password_confirmation",value:a.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:e=>t("password_confirmation",e.target.value),required:!0}),s.jsx(m,{message:r.password_confirmation,className:"mt-2"})]}),s.jsx(h,{className:"w-full h-[40px] flex justify-center mt-4",disabled:n,children:"sign up"})]}),s.jsx("p",{className:"mt-2 text-center text-sm",children:"Or"}),s.jsxs(j,{className:"w-full mt-2 flex justify-center",children:[s.jsx("span",{className:"mr-2",children:s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"20px",height:"20px",children:[s.jsx("path",{fill:"#FFC107",d:"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"}),s.jsx("path",{fill:"#FF3D00",d:"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"}),s.jsx("path",{fill:"#4CAF50",d:"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"}),s.jsx("path",{fill:"#1976D2",d:"M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"})]})}),"Sign Up with Google"]}),s.jsxs("p",{className:"mt-4 text-center",children:["Have an account?"," ",s.jsx(w,{href:route("login"),className:"text-blue-500",children:"Sign In"})]})]})}export{_ as default};

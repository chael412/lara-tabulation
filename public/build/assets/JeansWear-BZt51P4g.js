import{K as h,r as o,j as e,L as b}from"./app-DtbDQZUm.js";import{A as f}from"./AuthenticatedLayout-Bi2tP8vj.js";import{u as j,C as y,T as N,A as D,a as A,b as C,c as S,d as w,e as F,f as v,g as L,t as O}from"./sonner-CR2rJ7RG.js";import{u as T}from"./useAppUrl-DZJRLJx0.js";import"./breadcrumb-BnKXBc1Q.js";import"./index-BzZTosKs.js";import"./button-BQs1ZQJA.js";import"./input-CZvCYTnW.js";function H({scores:l}){const i=[1,2,3,4,5,6,7,8,9,10],{register:n,handleSubmit:c}=j(),m=h().props.auth.user,d=T(),[x,a]=o.useState(!1),[r,p]=o.useState(null),u=t=>{const s={...t,category_id:2,user_id:m.id,percentage:10};p(s),a(!0)},g=async()=>{var t;if(r)try{const s=await axios.post(`${d}/api/storeproduction`,r);console.log("Server Response:",s.data),O("Score has been submitted successfully!"),window.location.reload()}catch(s){console.error("Error submitting data:",((t=s.response)==null?void 0:t.data)||s.message),alert("Failed to submit data.")}finally{a(!1)}};return e.jsxs(f,{header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"Queen San Vicente 2025 Grand Coronation Night"}),children:[e.jsx(b,{title:"Dashboard"}),e.jsx("div",{className:"flex justify-center items-center my-16 px-6",children:e.jsxs("div",{className:"p-10 bg-gray-100 rounded-xl border border-gray-600 shadow-lg w-full max-w-4xl text-center",children:[e.jsx("p",{className:"text-3xl font-semibold mb-6",children:"Jeans Wear 10%"}),e.jsx("form",{onSubmit:c(u),children:e.jsx(y,{contestants:i,register:n,candidate_scores:l})})]})}),e.jsx(N,{}),e.jsx(D,{open:x,onOpenChange:a,children:e.jsxs(A,{className:"max-w-2xl p-6",children:[" ",e.jsxs(C,{children:[e.jsx(S,{className:"text-2xl font-bold",children:"Confirm Submission"})," ",e.jsxs(w,{className:"text-lg",children:[e.jsx("p",{className:"mb-4",children:"Are you sure you want to submit these scores?"}),e.jsxs("ul",{className:"mt-2 text-left text-lg text-gray-800 space-y-2",children:[" ",r&&Object.entries(r).slice(0,-3).map(([t,s])=>e.jsxs("li",{className:"border-b pb-2",children:[e.jsxs("strong",{className:"capitalize text-xl",children:["Candidate No."," ",parseInt(t.split("-").pop())+1,":"]}),e.jsx("span",{className:"ml-5 font-semibold text-2xl",children:s})]},t))]})]})]}),e.jsxs(F,{className:"mt-6",children:[e.jsx(v,{onClick:()=>a(!1),className:"px-6 py-2 text-lg",children:"Cancel"}),e.jsx(L,{onClick:g,className:"px-6 py-2 text-lg bg-blue-600 hover:bg-blue-700 text-white",children:"Confirm"})]})]})})]})}export{H as default};

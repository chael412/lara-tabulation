import{K as b,r as l,j as e,L as f}from"./app-DtbDQZUm.js";import{A as j}from"./AuthenticatedLayout-Bi2tP8vj.js";import{u as y,C as N,T as D,A,a as C,b as S,c as w,d as F,e as v,f as L,g as O,t as T}from"./sonner-CR2rJ7RG.js";import{u as E}from"./useAppUrl-DZJRLJx0.js";import"./breadcrumb-BnKXBc1Q.js";import"./index-BzZTosKs.js";import"./button-BQs1ZQJA.js";import"./input-CZvCYTnW.js";function H({scores:o={},candidates:i}){const n=i,{register:c,handleSubmit:m}=y(),d=b().props.auth.user,x=E(),[p,a]=l.useState(!1),[r,u]=l.useState(null),g=t=>{const s={...t,category_id:10,user_id:d.id,percentage:40};u(s),a(!0)},h=async()=>{var t;if(r)try{const s=await axios.post(`${x}/api/storefinalscores`,r);console.log("Server Response:",s.data),T("Score has been submitted successfully!"),window.location.reload()}catch(s){console.error("Error submitting data:",((t=s.response)==null?void 0:t.data)||s.message),alert("Failed to submit data.")}finally{a(!1)}};return e.jsxs(j,{header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"Queen San Vicente 2025 Grand Coronation Night"}),children:[e.jsx(f,{title:"Dashboard"}),e.jsx("div",{className:"flex justify-center items-center my-16 px-6",children:e.jsxs("div",{className:"p-10 bg-gray-100 rounded-xl border border-gray-600 shadow-lg w-full max-w-4xl text-center",children:[e.jsx("p",{className:"text-3xl font-semibold mb-6",children:"Final Beauty 40%"}),e.jsx("form",{onSubmit:m(g),children:e.jsx(N,{contestants:n,register:c,candidate_scores:o})})]})}),e.jsx(D,{}),e.jsx(A,{open:p,onOpenChange:a,children:e.jsxs(C,{className:"max-w-2xl p-6",children:[" ",e.jsxs(S,{children:[e.jsx(w,{className:"text-2xl font-bold",children:"Confirm Submission"})," ",e.jsxs(F,{className:"text-lg",children:[e.jsx("p",{className:"mb-4",children:"Are you sure you want to submit these scores?"}),e.jsxs("ul",{className:"mt-2 text-left text-lg text-gray-800 space-y-2",children:[" ",r&&Object.entries(r).slice(0,-3).map(([t,s])=>e.jsxs("li",{className:"border-b pb-2",children:[e.jsxs("strong",{className:"capitalize text-xl",children:["Candidate No."," ",parseInt(t.split("-").pop())+1,":"]}),e.jsx("span",{className:"ml-5 font-semibold text-2xl",children:s})]},t))]})]})]}),e.jsxs(v,{className:"mt-6",children:[e.jsx(L,{onClick:()=>a(!1),className:"px-6 py-2 text-lg",children:"Cancel"}),e.jsx(O,{onClick:h,className:"px-6 py-2 text-lg bg-blue-600 hover:bg-blue-700 text-white",children:"Confirm"})]})]})})]})}export{H as default};

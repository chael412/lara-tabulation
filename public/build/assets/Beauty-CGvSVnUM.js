import{r as p,j as e,L as f}from"./app-DtbDQZUm.js";import{A as h}from"./index-C-ilXi3t.js";import{u as j,l as u}from"./index-BSczrgzk.js";import{A as g}from"./AuthenticatedLayoutAdmin-DvdzNDTf.js";import{B as N}from"./button-BQs1ZQJA.js";import{J as k}from"./JudgeSignature-DMu19LWa.js";import{C as y}from"./ClipLoader-CfJgQCLA.js";import"./useAppUrl-DZJRLJx0.js";import"./breadcrumb-BnKXBc1Q.js";import"./index-BzZTosKs.js";import"./input-CZvCYTnW.js";const T=()=>{var c,n,d;const{data:s,error:w,isLoading:m}=j(["candidatec9"],"beauty_ranking");console.log(s);const o=((n=(c=s==null?void 0:s.candidates)==null?void 0:c[0])!=null&&n.scores_per_judge?Object.entries(s.candidates[0].scores_per_judge):[]).map(([t,r])=>({id:t,name:r.judge_name})).sort((t,r)=>t.id-r.id),l=p.useRef(),b=u.useReactToPrint({contentRef:l});return e.jsxs(g,{header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"Beauty"}),children:[e.jsx(f,{title:"Beauty"}),e.jsxs("div",{children:[e.jsx("div",{className:"flex justify-end m-2",children:e.jsxs(N,{onClick:()=>b(),children:[e.jsx(h,{}),"Print"]})}),e.jsxs("div",{ref:l,className:"py-2 px-4 bg-white ",children:[e.jsx("div",{className:"overflow-x-auto rounded-sm border border-black",children:e.jsxs("table",{className:"min-w-[800px] w-full bg-[#ffff99]",children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsxs("th",{colSpan:12,className:"pt-3 pb-2 text-center text-yellow-200 font-light bg-gray-800 border-b border-black font-lobster",children:[e.jsx("span",{className:"text-4xl",children:"Queen San Vicente 2025"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{className:"text-2xl ",children:"Grand Coronation Night"})]})})}),e.jsx("thead",{children:e.jsx("tr",{children:e.jsx("th",{colSpan:12,className:"px-4 pt-4 text-center text-black text-xl font-light bg-white border-b border-black",children:"Beauty 5%"})})}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-nowrap w-[10%] bg-[#ffff99] px-4 pt-6  text-left  text-black text-custom-sm font-bold border-b border-black",children:"Candidate No."}),o.map(t=>e.jsx("th",{className:" text-nowrap bg-[#ffff99] px-4 pt-6 text-left  text-black text-custom-sm font-bold  border-b border-black",children:t.name},t.id)),e.jsx("th",{className:"text-nowrap bg-[#ffff99] px-4 pt-6 text-left  text-black text-custom-sm font-bold  border-b border-black",children:"Total"}),e.jsx("th",{className:"text-nowrap bg-[#ffff99] px-4 pt-6 text-left  text-black text-custom-sm font-bold  border-b border-black",children:"Average"}),e.jsx("th",{className:"text-nowrap bg-[#ffff99] px-4 pt-6 text-left  text-black text-custom-sm font-bold  border-b border-black",children:"Rank"})]})}),e.jsxs("tbody",{children:[m&&e.jsx("tr",{children:e.jsxs("td",{colSpan:11,className:"text-center py-4",children:[e.jsx(y,{}),e.jsx("p",{children:"Fetching data..."})]})}),(d=s==null?void 0:s.candidates)==null?void 0:d.map(t=>e.jsxs("tr",{className:"border-b border-black last:border-b-0",children:[e.jsx("td",{className:"px-4 py-2 text-black text-custom-sm font-medium",children:t.candidate_number}),o.map(r=>{var x,i;const a=(i=(x=t.scores_per_judge[r.id])==null?void 0:x.scores)==null?void 0:i[0];return e.jsx("td",{className:"px-4 py-2 text-black text-custom-sm font-medium",children:a!=null?a.toFixed(2):"-"},r.id)}),e.jsx("td",{className:"px-4 py-2 text-black text-custom-sm font-medium",children:t.total_score.toFixed(2)}),e.jsx("td",{className:"px-4 py-2 text-black text-custom-sm font-medium",children:Number(t.average_score).toFixed(2)}),e.jsx("td",{className:"px-4 py-2 text-black text-md font-semibold",children:t.rank})]},t.candidate_id))]})]})}),e.jsx("div",{className:"mt-16",children:e.jsx(k,{})})]})]})]})};export{T as default};

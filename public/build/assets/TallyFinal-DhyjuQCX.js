import{r as n,j as e,L as i}from"./app-CnKHO2QR.js";import{A as d}from"./index-Cm4hJl_c.js";import{u as x,l as b}from"./index-Dg74jXhK.js";import{A as m}from"./AuthenticatedLayoutAdmin-X37AZjT2.js";import{B as h}from"./button-BYrSFLTN.js";import{J as p}from"./JudgeSignature-DaPRo9rA.js";import"./useAppUrl-B2RI8WlN.js";import"./breadcrumb-Zs4QOK8S.js";import"./index-CKM4eO0l.js";import"./input-DHANutAF.js";const A=()=>{var a;const{data:t,isLoading:j,error:f}=x(["final_tally"],"tally_final");console.log(t);const l=n.useRef(),o=b.useReactToPrint({contentRef:l});return e.jsxs(m,{header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"Tally Preliminary"}),children:[e.jsx(i,{title:"Preliminary"}),e.jsxs("div",{children:[e.jsx("div",{className:"flex justify-end m-2",children:e.jsxs(h,{onClick:()=>o(),children:[e.jsx(d,{}),"Print"]})}),e.jsxs("div",{ref:l,className:"py-2 px-4 bg-white ",children:[e.jsx("div",{children:e.jsxs("table",{className:"border-collapse border border-black bg-[#ffff99] w-full text-center",children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsxs("th",{colSpan:12,className:"pt-3 pb-2 text-center text-yellow-200 font-light bg-gray-800 border-b border-black font-lobster",children:[e.jsx("span",{className:"text-4xl",children:"Queen San Vicente 2025"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{className:"text-2xl ",children:"Grand Coronation Night"})]})})}),e.jsx("thead",{children:e.jsx("tr",{children:e.jsx("th",{colSpan:12,className:"px-4 pt-4 text-center text-black text-xl font-light bg-white border-b border-black",children:"Preliminary"})})}),e.jsx("thead",{children:e.jsxs("tr",{className:"bg-[#ffff99]",children:[e.jsx("th",{className:"px-4 py-2 text-sm text-black  font-bold border-b border-black",children:"Candidate No."}),Object.values(((a=t==null?void 0:t.candidates[0])==null?void 0:a.scores_by_category)||{}).map((r,s)=>e.jsx("th",{className:"px-4 py-2 text-sm text-black  font-bold border-b border-black",children:r.category_name},s)),e.jsx("th",{className:"px-4 py-2 text-sm text-black  font-bold border-b border-black",children:"Total"}),e.jsx("th",{className:"px-4 py-2 text-sm text-black  font-bold border-b border-black",children:"Rank"})]})}),e.jsx("tbody",{children:t==null?void 0:t.candidates.map((r,s)=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 text-sm text-black font-semibold border-b border-black",children:r.candidate_number}),Object.values(r.scores_by_category).map((y,c)=>e.jsxs("td",{className:"px-4 py-2 text-sm text-black  font-semibold border-b border-black",children:[r.avg_score,"%"]},c)),e.jsxs("td",{className:"px-4 py-2 text-sm text-black  font-semibold border-b border-black",children:[r.final_score.toFixed(2),"%"]}),e.jsx("td",{className:"px-4 py-2 text-sm text-black  font-semibold border-b border-black",children:s+1})]},r.candidate_id))})]})}),e.jsx("div",{className:"mt-16",children:e.jsx(p,{})})]})]})]})};export{A as default};

import{q as r}from"./index-f4bb765d.js";const a="/api/app/insure/proposal",o=o=>r({url:`${a}/queryProposalProductList`,method:"POST",data:o}),e=()=>r({url:`${a}/queryProposalProductCategoryList`,method:"POST"}),s=o=>r({url:`${a}/historyProposalList`,method:"POST",data:o}),t=o=>r({url:`${a}/deleteProposal/${o}`,method:"POST"}),d=o=>r({url:`${a}/preview/${o}`,method:"POST"}),l=(o={})=>r({url:`${a}/generatePdf`,method:"GET",params:o}),p=o=>r({url:`${a}/sharePreview/${o}`,method:"GET"});export{o as a,p as b,d as c,t as d,l as g,s as h,e as q};

import{s as a}from"./index-2aa81fa9.js";const r="/api/app/insure/proposal",o=o=>a({url:`${r}/queryProposalProductList`,method:"POST",data:o}),e=()=>a({url:`${r}/queryProposalProductCategoryList`,method:"POST"}),s=o=>a({url:`${r}/historyProposalList`,method:"POST",data:o}),t=o=>a({url:`${r}/deleteProposal/${o}`,method:"POST"}),d=o=>a({url:`${r}/preview/${o}`,method:"POST"}),l=(o={})=>a({url:`${r}/generatePdf`,method:"GET",params:o}),p=o=>a({url:`${r}/sharePreview/${o}`,method:"GET"});export{o as a,p as b,d as c,t as d,l as g,s as h,e as q};

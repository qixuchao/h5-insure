import{A as a}from"./index-73a7e8d2.js";const e="/api/app/insure/proposal",r=r=>a({url:`${e}/queryProposalProductList`,method:"POST",data:r}),o=r=>a({url:`${e}/historyProposalList`,method:"POST",data:r}),s=r=>a({url:`${e}/deleteProposal/${r}`,method:"POST"}),t=r=>a({url:`${e}/preview/${r}`,method:"POST"}),d=(r={})=>a({url:`${e}/generatePdf`,method:"GET",params:r}),p=r=>a({url:`${e}/sharePreview/${r}`,method:"GET"});export{p as a,t as b,s as d,d as g,o as h,r as q};

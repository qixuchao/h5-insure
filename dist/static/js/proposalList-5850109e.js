import{r}from"./index-fdcc502e.js";const a="/api/app/insure/proposal",e=e=>r({url:`${a}/queryProposalProductList`,method:"POST",data:e}),o=e=>r({url:`${a}/historyProposalList`,method:"POST",data:e}),s=e=>r({url:`${a}/deleteProposal/${e}`,method:"POST"}),t=e=>r({url:`${a}/preview/${e}`,method:"POST"}),d=(e={})=>r({url:`${a}/generatePdf`,method:"GET",params:e}),p=e=>r({url:`${a}/sharePreview/${e}`,method:"GET"});export{p as a,t as b,s as d,d as g,o as h,e as q};

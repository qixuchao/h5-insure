import{q as r}from"./index-18b9bce3.js";const a="/api/app/insure/proposal",e=e=>r({url:`${a}/queryProposalProductList`,method:"POST",data:e}),o=()=>r({url:`${a}/queryProposalProductCategoryList`,method:"POST"}),s=e=>r({url:`${a}/historyProposalList`,method:"POST",data:e}),t=e=>r({url:`${a}/deleteProposal/${e}`,method:"POST"}),d=e=>r({url:`${a}/preview/${e}`,method:"POST"}),l=(e={})=>r({url:`${a}/generatePdf`,method:"GET",params:e}),p=e=>r({url:`${a}/sharePreview/${e}`,method:"GET"});export{e as a,p as b,d as c,t as d,l as g,s as h,o as q};

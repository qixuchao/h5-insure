import{K as a}from"./index-3224a24f.js";const r="/api/app/insure/proposal",e=e=>a({url:`${r}/queryProposalProductList`,method:"POST",data:e}),o=e=>a({url:`${r}/historyProposalList`,method:"POST",data:e}),s=e=>a({url:`${r}/deleteProposal/${e}`,method:"POST"}),t=e=>a({url:`${r}/preview/${e}`,method:"POST"}),d=(e={})=>a({url:`${r}/generatePdf`,method:"GET",params:e}),p=e=>a({url:`${r}/sharePreview/${e}`,method:"GET"});export{p as a,t as b,s as d,d as g,o as h,e as q};

import{r as e}from"./index-c1fff0ee.js";const r="/api/app/insure/proposal",a=a=>e({url:`${r}/queryProposalProductList`,method:"POST",data:a}),o=a=>e({url:`${r}/historyProposalList`,method:"POST",data:a}),s=a=>e({url:`${r}/deleteProposal/${a}`,method:"POST"}),t=a=>e({url:`${r}/preview/${a}`,method:"POST"}),d=(a={})=>e({url:`${r}/generatePdf`,method:"GET",params:a}),p=a=>e({url:`${r}/sharePreview/${a}`,method:"GET"});export{p as a,t as b,s as d,d as g,o as h,a as q};

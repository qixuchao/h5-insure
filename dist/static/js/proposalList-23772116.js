import{q as e}from"./index-1c56e4ee.js";const r="/api/app/insure/proposal",a=a=>e({url:`${r}/queryProposalProductList`,method:"POST",data:a}),o=()=>e({url:`${r}/queryProposalProductCategoryList`,method:"POST"}),s=a=>e({url:`${r}/historyProposalList`,method:"POST",data:a}),t=a=>e({url:`${r}/deleteProposal/${a}`,method:"POST"}),d=a=>e({url:`${r}/preview/${a}`,method:"POST"}),l=(a={})=>e({url:`${r}/generatePdf`,method:"GET",params:a}),p=a=>e({url:`${r}/sharePreview/${a}`,method:"GET"});export{a,p as b,d as c,t as d,l as g,s as h,o as q};

import{ab as a}from"./index-6f382ec1.js";const o="/api/app/insure/proposal",e=e=>a({url:`${o}/listMainProposalRisk`,method:"POST",data:e}),r=()=>a({url:`${o}/queryProposalProductCategoryList`,method:"POST"}),s=e=>a({url:`${o}/historyProposalList`,method:"POST",data:e}),t=e=>a({url:`${o}/deleteProposal/${e}`,method:"POST"}),d=e=>a({url:`${o}/preview/${e}`,method:"POST"},{loading:!0}),l=e=>a({url:`${o}/generatePdf`,method:"POST",data:e}),i=e=>a({url:`${o}/sharePreview/${e}`,method:"GET"},{loading:!0});export{e as a,i as b,d as c,t as d,l as g,s as h,r as q};

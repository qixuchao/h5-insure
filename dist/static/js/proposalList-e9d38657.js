import{ab as a}from"./index-657cc27b.js";const o="/api/app/insure/proposal",r=r=>a({url:`${o}/listMainProposalRisk`,method:"POST",data:r}),e=()=>a({url:`${o}/queryProposalProductCategoryList`,method:"POST"}),s=r=>a({url:`${o}/historyProposalList`,method:"POST",data:r}),t=r=>a({url:`${o}/deleteProposal/${r}`,method:"POST"}),d=r=>a({url:`${o}/preview/${r}`,method:"POST"},{loading:!0}),l=r=>a({url:`${o}/generatePdf`,method:"POST",data:r}),i=r=>a({url:`${o}/sharePreview/${r}`,method:"GET"},{loading:!0});export{r as a,i as b,d as c,t as d,l as g,s as h,e as q};

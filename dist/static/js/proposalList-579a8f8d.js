import{r as e}from"./index-32e043dc.js";const o="/api/app/insure/proposal",s=r=>e({url:`${o}/queryProposalProductList`,method:"POST",data:r}),a=r=>e({url:`${o}/historyProposalList`,method:"POST",data:r}),P=r=>e({url:`${o}/deleteProposal/${r}`,method:"POST"}),l=r=>e({url:`${o}/preview/${r}`,method:"POST"}),u=(r={})=>e({url:`${o}/generatePdf`,method:"GET",params:r}),p=r=>e({url:`${o}/sharePreview/${r}`,method:"GET"});export{p as a,l as b,P as d,u as g,a as h,s as q};

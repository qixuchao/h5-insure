import{r as a,c as e}from"./index-881f6d78.js";const s=e=>a({url:"/api/app/insure/insurance/customerFace",method:"POST",data:e}),r=e=>a({url:"/api/app/insure/insurance/saveCustomerFaceResult",method:"POST",data:e}),t=(s,r,t,n)=>{const u={bizObjectType:s,docCategory:"ELECTRIC_SIGN",docType:"png",fileBase64:r,docName:`${e[s]}电子签名`,orderId:t,tenantId:n};return a({url:"/api/app/insure/insurance/saveCustomerSignResult",method:"POST",data:u})},n=e=>a({url:"/api/app/insure/insurance/listProductManuscripts",method:"POST",data:e});export{s as a,r as f,n as g,t as s};

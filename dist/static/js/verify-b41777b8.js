import{r,N as n}from"./index-2059c76e.js";const c=e=>r({url:"/api/app/insure/insurance/customerFace",method:"POST",data:e}),o=e=>r({url:"/api/app/insure/insurance/saveCustomerFaceResult",method:"POST",data:e}),p=(e,a,s,u)=>{const t={bizObjectType:e,docCategory:"ELECTRIC_SIGN",docType:"png",fileBase64:a,docName:`${n[e]}\u7535\u5B50\u7B7E\u540D`,orderId:s,tenantId:u};return r({url:"/api/app/insure/insurance/saveCustomerSignResult",method:"POST",data:t})},m=e=>r({url:"/api/app/insure/insurance/listProductManuscripts",method:"POST",data:e});export{c as a,o as f,m as g,p as s};

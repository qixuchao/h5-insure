import{b as e}from"./index-708d934e.js";const p=s=>e.post("/api/app/insure/insurance/customerFace",s),c=s=>e.post("/api/app/insure/insurance/saveCustomerFaceResult",s),o=(s,a,t,n)=>{const r={bizObjectType:s,docCategory:"ELECTRIC_SIGN",docType:"png",fileBase64:a,orderId:t,tenantId:n};return e.post("/api/app/insure/insurance/saveCustomerSignResult",r)},u=s=>e.post("/api/app/insure/insurance/listProductManuscripts",s);export{p as a,c as f,u as g,o as s};

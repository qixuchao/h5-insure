import{b as e,N as u}from"./index-57758e93.js";const c=s=>e.post("/api/app/insure/insurance/customerFace",s),o=s=>e.post("/api/app/insure/insurance/saveCustomerFaceResult",s),p=(s,a,n,r)=>{const t={bizObjectType:s,docCategory:"ELECTRIC_SIGN",docType:"png",fileBase64:a,docName:`${u[s]}\u7535\u5B50\u7B7E\u540D`,orderId:n,tenantId:r};return e.post("/api/app/insure/insurance/saveCustomerSignResult",t)},f=s=>e.post("/api/app/insure/insurance/listProductManuscripts",s);export{c as a,o as f,f as g,p as s};

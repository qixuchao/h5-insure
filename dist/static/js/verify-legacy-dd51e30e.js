System.register(["./index-legacy-753fdf1e.js"],(function(e){"use strict";var s,t;return{setters:[function(e){s=e.b,t=e.L}],execute:function(){e("a",(e=>s.post("/api/app/insure/insurance/customerFace",e))),e("f",(e=>s.post("/api/app/insure/insurance/saveCustomerFaceResult",e))),e("s",((e,n,r,a)=>{const i={bizObjectType:e,docCategory:"ELECTRIC_SIGN",docType:"png",fileBase64:n,docName:`${t[e]}电子签名`,orderId:r,tenantId:a};return s.post("/api/app/insure/insurance/saveCustomerSignResult",i)})),e("g",(e=>s.post("/api/app/insure/insurance/listProductManuscripts",e)))}}}));

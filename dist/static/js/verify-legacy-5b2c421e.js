System.register(["./index-legacy-2dcaf1b5.js"],(function(e){"use strict";var a,t;return{setters:[function(e){a=e.r,t=e.c}],execute:function(){e("a",(e=>a({url:"/api/app/insure/insurance/customerFace",method:"POST",data:e}))),e("f",(e=>a({url:"/api/app/insure/insurance/saveCustomerFaceResult",method:"POST",data:e}))),e("s",((e,r,s,n)=>{const u={bizObjectType:e,docCategory:"ELECTRIC_SIGN",docType:"png",fileBase64:r,docName:`${t[e]}电子签名`,orderId:s,tenantId:n};return a({url:"/api/app/insure/insurance/saveCustomerSignResult",method:"POST",data:u})})),e("g",(e=>a({url:"/api/app/insure/insurance/listProductManuscripts",method:"POST",data:e})))}}}));

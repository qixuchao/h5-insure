System.register(["./index-legacy-c28444df.js"],(function(e){"use strict";var t,a;return{setters:[function(e){t=e.r,a=e.c}],execute:function(){e("a",(e=>t({url:"/api/app/insure/insurance/customerFace",method:"POST",data:e}))),e("f",(e=>t({url:"/api/app/insure/insurance/saveCustomerFaceResult",method:"POST",data:e}))),e("s",((e,r,s,n)=>{const u={bizObjectType:e,docCategory:"ELECTRIC_SIGN",docType:"png",fileBase64:r,docName:`${a[e]}电子签名`,orderId:s,tenantId:n};return t({url:"/api/app/insure/insurance/saveCustomerSignResult",method:"POST",data:u})})),e("g",(e=>t({url:"/api/app/insure/insurance/listProductManuscripts",method:"POST",data:e})))}}}));

System.register(["./index-legacy-92e6914a.js"],(function(e){"use strict";var t;return{setters:[function(e){t=e.b}],execute:function(){e("g",(e=>t.post("/api/app/order/v1/pageQuery",e))),e("a",(e=>t.post("/api/app/order/v1/detail",{id:e}))),e("d",((e,r)=>t.post("/api/app/order/v1/delete",{id:e,status:r})))}}}));

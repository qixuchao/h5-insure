System.register(["./index-legacy-8f1d7f91.js"],(function(e){"use strict";var s;return{setters:[function(e){s=e.b}],execute:function(){e("s",(e=>s.post("/api/app/insure/insurance/sendSmsCodeToC",{},{params:{mobile:e}}))),e("c",((e,n)=>s.post("/api/app/insure/insurance/checkSmsCode",{},{params:{mobile:e,smsCode:n}})))}}}));

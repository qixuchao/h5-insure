System.register(["./index-legacy-0b5a78eb.js"],(function(e){"use strict";var s;return{setters:[function(e){s=e.B}],execute:function(){e("s",(e=>s({url:"/api/app/insure/insurance/sendSmsCodeToC",method:"POST",params:{mobile:e}}))),e("a",(e=>s({url:"/api/mall/app/v2/login/toCSendSmsCode",method:"POST",params:{mobile:e}}))),e("c",((e,a)=>s({url:"/api/app/insure/insurance/checkSmsCode",method:"POST",params:{mobile:e,smsCode:a}})))}}}));

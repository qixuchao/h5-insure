System.register(["./index-legacy-274f6e79.js"],(function(e){"use strict";var n,t;return{setters:[function(e){n=e.b,t=e.d}],execute:function(){e("g",((e={})=>n.post("/api/app/insure/dict/queryDictInfo",e))),e("q",(()=>n.post("/api/app/insure/proposal/queryInsurer"))),e("c",((e={})=>n.post("/api/app/insure/insurance/getInitFactor",e))),e("n",((e={})=>n.post(t[e.extInfo.pageCode],e))),e("a",((e={})=>n.post("/api/app/insure/insurance/getTenantOrderDetail",e))),e("b",((e={})=>n.post("/api/app/insure/insurance/getTemplateInfo",e))),e("v",((e={})=>n.post("/api/app/insure/insurance/validateSign",e)))}}}));

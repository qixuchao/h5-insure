System.register(["./index-legacy-beaf8f36.js"],(function(a){"use strict";var e;return{setters:[function(a){e=a.b}],execute:function(){a("b",(a=>e.post("/api/app/insure/proposal/addOrUpdateProposal",a))),a("a",((a={})=>e.get(`/api/app/insure/proposal/queryProposalDetail/${a.id}`,{params:a}))),a("q",((a={})=>e.get(`/api/app/insure/proposal/queryProposalDetailInsurer/${a.id}`,{params:a}))),a("c",((a={})=>e.post("/api/app/insure/product/listInsureProductDetail",a)))}}}));

System.register(["./index-legacy-4aff6740.js"],(function(a){"use strict";var p;return{setters:[function(a){p=a.b}],execute:function(){a("b",(a=>p.post("/api/app/insure/proposal/addOrUpdateProposal",a))),a("a",((a={})=>p.get(`/api/app/insure/proposal/queryProposalDetail/${a.id}`,{params:a}))),a("q",((a={})=>p.get(`/api/app/insure/proposal/queryProposalDetailInsurer/${a.id}`,{params:a}))),a("c",((a={})=>p.post("/api/app/insure/product/listInsureProductDetail",a)))}}}));

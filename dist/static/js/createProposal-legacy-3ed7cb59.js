System.register(["./index-legacy-259e858f.js"],(function(e){"use strict";var p;return{setters:[function(e){p=e.b}],execute:function(){e("b",(e=>p.post("/api/app/insure/proposal/addOrUpdateProposal",e))),e("q",((e={})=>p.get(`/api/app/insure/proposal/queryProposalDetail/${e.id}`,{params:e}))),e("c",((e={})=>p.get(`/api/app/insure/proposal/queryProposalDetailInsurer/${e.id}`,{params:e}))),e("a",((e={})=>p.post("/api/app/insure/product/listInsureProductDetail",e)))}}}));

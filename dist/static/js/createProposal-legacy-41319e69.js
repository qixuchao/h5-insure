System.register(["./index-legacy-355b370b.js"],(function(r){"use strict";var a;return{setters:[function(r){a=r.A}],execute:function(){r("b",(r=>a({url:"/api/app/insure/proposal/addOrUpdateProposal",method:"POST",data:r}))),r("q",((r={})=>a({url:`/api/app/insure/proposal/queryProposalDetail/${r.id}`,method:"GET",params:r}))),r("c",((r={})=>a({url:`/api/app/insure/proposal/queryProposalDetailInsurer/${r.id}`,params:r,method:"GET"}))),r("a",((r={})=>a({url:"/api/app/insure/product/listInsureProductDetail",method:"POST",data:r})))}}}));

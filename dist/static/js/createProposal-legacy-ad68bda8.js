System.register(["./index-legacy-4a0175b4.js"],(function(a){"use strict";var r;return{setters:[function(a){r=a.K}],execute:function(){a("b",(a=>r({url:"/api/app/insure/proposal/addOrUpdateProposal",method:"POST",data:a}))),a("q",((a={})=>r({url:`/api/app/insure/proposal/queryProposalDetail/${a.id}`,method:"GET",params:a}))),a("c",((a={})=>r({url:`/api/app/insure/proposal/queryProposalDetailInsurer/${a.id}`,params:a,method:"GET"}))),a("a",((a={})=>r({url:"/api/app/insure/product/listInsureProductDetail",method:"POST",data:a})))}}}));

System.register(["./index-legacy-02381b30.js"],(function(p){"use strict";var r;return{setters:[function(p){r=p.b}],execute:function(){p("b",(p=>r.post("/api/app/insure/proposal/addOrUpdateProposal",p))),p("q",((p={})=>r.get(`/api/app/insure/proposal/queryProposalDetail/${p.id}`,{params:p}))),p("c",((p={})=>r.get(`/api/app/insure/proposal/queryProposalDetailInsurer/${p.id}`,{params:p}))),p("a",((p={})=>r.post("/api/app/insure/product/listInsureProductDetail",p)))}}}));

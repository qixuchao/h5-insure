import{b as o}from"./index-bfa1eee6.js";const r=a=>o.post("/api/app/insure/proposal/addOrUpdateProposal",a),s=(a={})=>o.get(`/api/app/insure/proposal/queryProposalDetail/${a.id}`,{params:a}),e=(a={})=>o.get(`/api/app/insure/proposal/queryProposalDetailInsurer/${a.id}`,{params:a}),t=(a={})=>o.post("/api/app/insure/product/listInsureProductDetail",a);export{t as a,r as b,e as c,s as q};

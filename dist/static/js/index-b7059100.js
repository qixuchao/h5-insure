import{h as d,N as e,r as s,j as t,l as a,y as r,z as l,I as o,A as n}from"./vendor-372f2d73.js";import{g as i}from"./trial-177193ce.js";import{p as u}from"./product-5410fd55.js";import{e as c}from"./utils-2ef65a27.js";import"./index-76603f65.js";import"./infoCollection-8331f040.js";import"./trial-0033de89.js";const v={class:"page-activity-order"},m={class:"card"},p={class:"title"},f={class:"content"},j={class:"desc"},I=l("div",null,"被保险人：",-1),N={class:"desc"},y=l("div",null,"保单号：",-1),h={class:"desc"},C=l("div",null,"后续每月保费：",-1),L=d({setup(d){const L=e(),{productCode:O,tenantId:g="",orderNo:x=""}=L.query,P=s(),q=s();return t((()=>{(async()=>{const d=u({productCode:O,withInsureInfo:!0,tenantId:g}),e=i({orderNo:x,tenantId:g});Promise.all([d,e]).then((([d,e])=>{"10000"===d.code&&(P.value=d.data),"10000"===e.code&&(q.value=e.data)}))})()})),(d,e)=>{var s,t,i,u;return a(),r("div",v,[l("div",m,[l("div",p,o(null==(s=P.value)?void 0:s.productName),1),l("div",f,[l("div",j,[I,l("div",null,o(null==(t=q.value)?void 0:t.tenantOrderInsuredList[0].name),1)]),l("div",N,[y,l("div",null,o(null==(i=q.value)?void 0:i.orderNo),1)]),l("div",h,[C,l("div",null,o(n(c)((null==(u=q.value)?void 0:u.tenantOrderInsuredList[0].tenantOrderProductList[0].premium)||""))+" 元",1)])])])])}}});export{L as default};

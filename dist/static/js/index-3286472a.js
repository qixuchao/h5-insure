import{k as a,u as d,r as e,o as s,s as t,B as r,C as o,M as l,E as n}from"./vendor-225246ae.js";import{g as i}from"./trial-5cdae86b.js";import{p as c}from"./product-c7cdabc0.js";import{e as u}from"./utils-99cadda9.js";import"./index-fdcc502e.js";import"./infoCollection-3b7e1235.js";import"./trial-b2e2fada.js";const v={class:"page-activity-order"},m={class:"card"},p={class:"title"},f={class:"content"},j={class:"desc"},I=o("div",null,"被保险人：",-1),b={class:"desc"},C=o("div",null,"保单号：",-1),N={class:"desc"},y=o("div",null,"后续每月保费：",-1),L=a({setup(a){const L=d(),{productCode:O,tenantId:g="",orderNo:h=""}=L.query,x=e(),P=e();return s((()=>{(async()=>{const a=c({productCode:O,withInsureInfo:!0,tenantId:g}),d=i({orderNo:h,tenantId:g});Promise.all([a,d]).then((([a,d])=>{"10000"===a.code&&(x.value=a.data),"10000"===d.code&&(P.value=d.data)}))})()})),(a,d)=>{var e,s,i,c;return t(),r("div",v,[o("div",m,[o("div",p,l(null==(e=x.value)?void 0:e.productName),1),o("div",f,[o("div",j,[I,o("div",null,l(null==(s=P.value)?void 0:s.tenantOrderInsuredList[0].name),1)]),o("div",b,[C,o("div",null,l(null==(i=P.value)?void 0:i.orderNo),1)]),o("div",N,[y,o("div",null,l(n(u)((null==(c=P.value)?void 0:c.tenantOrderInsuredList[0].tenantOrderProductList[0].premium)||""))+" 元",1)])])])])}}});export{L as default};

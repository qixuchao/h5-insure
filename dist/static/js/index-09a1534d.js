import{k as s,u as a,r as e,o as t,s as d,B as r,C as o,M as l,E as n}from"./vendor-9bab628e.js";import{g as i}from"./trial-e795e836.js";import{p as u}from"./product-67871918.js";import{e as c}from"./utils-54f9c419.js";import"./index-28546aa3.js";import"./infoCollection-26638380.js";import"./trial-664c95c9.js";const v={class:"page-activity-order"},m={class:"card"},p={class:"title"},f={class:"content"},j={class:"desc"},I=o("div",null,"被保险人：",-1),C={class:"desc"},N=o("div",null,"保单号：",-1),y={class:"desc"},L=o("div",null,"后续每月保费：",-1),O=s({setup(s){const O=a(),{productCode:b,tenantId:g="",orderNo:h=""}=O.query,x=e(),P=e();return t((()=>{(async()=>{const s=u({productCode:b,withInsureInfo:!0,tenantId:g}),a=i({orderNo:h,tenantId:g});Promise.all([s,a]).then((([s,a])=>{"10000"===s.code&&(x.value=s.data),"10000"===a.code&&(P.value=a.data)}))})()})),(s,a)=>{var e,t,i,u;return d(),r("div",v,[o("div",m,[o("div",p,l(null==(e=x.value)?void 0:e.productName),1),o("div",f,[o("div",j,[I,o("div",null,l(null==(t=P.value)?void 0:t.tenantOrderInsuredList[0].name),1)]),o("div",C,[N,o("div",null,l(null==(i=P.value)?void 0:i.orderNo),1)]),o("div",y,[L,o("div",null,l(n(c)((null==(u=P.value)?void 0:u.tenantOrderInsuredList[0].tenantOrderProductList[0].premium)||""))+" 元",1)])])])])}}});export{O as default};

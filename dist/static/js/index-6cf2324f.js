import{h as d,N as s,r as e,j as t,l as a,y as r,z as l,I as o,A as n}from"./vendor-372f2d73.js";import{g as i}from"./trial-98cc6e09.js";import{p as c}from"./product-452b5c36.js";import{e as u}from"./utils-570619bc.js";import"./index-01c63dba.js";import"./infoCollection-10c3d6dd.js";import"./trial-bbe86d62.js";const v={class:"page-activity-order"},m={class:"card"},p={class:"title"},f={class:"content"},j={class:"desc"},I=l("div",null,"被保险人：",-1),b={class:"desc"},N=l("div",null,"保单号：",-1),y={class:"desc"},h=l("div",null,"后续每月保费：",-1),C=d({setup(d){const C=s(),{productCode:L,tenantId:O="",orderNo:g=""}=C.query,x=e(),P=e();return t((()=>{(async()=>{const d=c({productCode:L,withInsureInfo:!0,tenantId:O}),s=i({orderNo:g,tenantId:O});Promise.all([d,s]).then((([d,s])=>{"10000"===d.code&&(x.value=d.data),"10000"===s.code&&(P.value=s.data)}))})()})),(d,s)=>{var e,t,i,c;return a(),r("div",v,[l("div",m,[l("div",p,o(null==(e=x.value)?void 0:e.productName),1),l("div",f,[l("div",j,[I,l("div",null,o(null==(t=P.value)?void 0:t.tenantOrderInsuredList[0].name),1)]),l("div",b,[N,l("div",null,o(null==(i=P.value)?void 0:i.orderNo),1)]),l("div",y,[h,l("div",null,o(n(u)((null==(c=P.value)?void 0:c.tenantOrderInsuredList[0].tenantOrderProductList[0].premium)||""))+" 元",1)])])])])}}});export{C as default};

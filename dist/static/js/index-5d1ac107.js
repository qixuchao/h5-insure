import{h as d,N as a,r as s,j as e,l as t,y as r,z as l,I as o,A as n}from"./vendor-d6fdc679.js";import{g as i}from"./trial-d6a5b973.js";import{p as u}from"./product-bcf2464a.js";import{e as c}from"./utils-3fe55279.js";import"./index-ed1d5702.js";import"./infoCollection-13dbfc58.js";import"./trial-4755a883.js";const v={class:"page-activity-order"},m={class:"card"},p={class:"title"},f={class:"content"},j={class:"desc"},I=l("div",null,"被保险人：",-1),N={class:"desc"},y=l("div",null,"保单号：",-1),b={class:"desc"},h=l("div",null,"后续每月保费：",-1),C=d({setup(d){const C=a(),{productCode:L,tenantId:O="",orderNo:g=""}=C.query,x=s(),P=s();return e((()=>{(async()=>{const d=u({productCode:L,withInsureInfo:!0,tenantId:O}),a=i({orderNo:g,tenantId:O});Promise.all([d,a]).then((([d,a])=>{"10000"===d.code&&(x.value=d.data),"10000"===a.code&&(P.value=a.data)}))})()})),(d,a)=>{var s,e,i,u;return t(),r("div",v,[l("div",m,[l("div",p,o(null==(s=x.value)?void 0:s.productName),1),l("div",f,[l("div",j,[I,l("div",null,o(null==(e=P.value)?void 0:e.tenantOrderInsuredList[0].name),1)]),l("div",N,[y,l("div",null,o(null==(i=P.value)?void 0:i.orderNo),1)]),l("div",b,[h,l("div",null,o(n(c)((null==(u=P.value)?void 0:u.tenantOrderInsuredList[0].tenantOrderProductList[0].premium)||""))+" 元",1)])])])])}}});export{C as default};

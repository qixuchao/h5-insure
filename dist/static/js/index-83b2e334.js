import{h as e,N as a,C as s,j as d,k as t,x as r,y as l,I as o,z as n}from"./vendor-0ca9ff80.js";import{g as i}from"./trial-17f84e3f.js";import{p as u}from"./product-b2392b5f.js";import{e as c}from"./utils-0a2eaee0.js";import"./index-4232d436.js";import"./infoCollection-5fb13627.js";import"./trial-fae23cd3.js";const v={class:"page-activity-order"},m={class:"card"},p={class:"title"},f={class:"content"},j={class:"desc"},I=l("div",null,"被保险人：",-1),N={class:"desc"},y=l("div",null,"保单号：",-1),C={class:"desc"},b=l("div",null,"后续每月保费：",-1),h=e({setup(e){const h=a(),{productCode:x,tenantId:L="",orderNo:O=""}=h.query,g=s(),P=s();return d((()=>{(async()=>{const e=u({productCode:x,withInsureInfo:!0,tenantId:L}),a=i({orderNo:O,tenantId:L});Promise.all([e,a]).then((([e,a])=>{"10000"===e.code&&(g.value=e.data),"10000"===a.code&&(P.value=a.data)}))})()})),(e,a)=>{var s,d,i,u;return t(),r("div",v,[l("div",m,[l("div",p,o(null==(s=g.value)?void 0:s.productName),1),l("div",f,[l("div",j,[I,l("div",null,o(null==(d=P.value)?void 0:d.tenantOrderInsuredList[0].name),1)]),l("div",N,[y,l("div",null,o(null==(i=P.value)?void 0:i.orderNo),1)]),l("div",C,[b,l("div",null,o(n(c)((null==(u=P.value)?void 0:u.tenantOrderInsuredList[0].tenantOrderProductList[0].premium)||""))+" 元",1)])])])])}}});export{h as default};

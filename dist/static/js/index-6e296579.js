import{h as a,N as d,r as e,j as s,l as t,y as r,z as l,I as o,A as n}from"./vendor-0381d15c.js";import{g as i}from"./trial-7d24ec49.js";import{p as u}from"./product-d82a25a3.js";import{e as c}from"./utils-aff69894.js";import"./index-e427a2b7.js";import"./infoCollection-afccb07e.js";import"./trial-aed41f01.js";const v={class:"page-activity-order"},m={class:"card"},p={class:"title"},f={class:"content"},j={class:"desc"},I=l("div",null,"被保险人：",-1),N={class:"desc"},y=l("div",null,"保单号：",-1),h={class:"desc"},C=l("div",null,"后续每月保费：",-1),L=a({setup(a){const L=d(),{productCode:O,tenantId:b="",orderNo:g=""}=L.query,x=e(),P=e();return s((()=>{(async()=>{const a=u({productCode:O,withInsureInfo:!0,tenantId:b}),d=i({orderNo:g,tenantId:b});Promise.all([a,d]).then((([a,d])=>{"10000"===a.code&&(x.value=a.data),"10000"===d.code&&(P.value=d.data)}))})()})),(a,d)=>{var e,s,i,u;return t(),r("div",v,[l("div",m,[l("div",p,o(null==(e=x.value)?void 0:e.productName),1),l("div",f,[l("div",j,[I,l("div",null,o(null==(s=P.value)?void 0:s.tenantOrderInsuredList[0].name),1)]),l("div",N,[y,l("div",null,o(null==(i=P.value)?void 0:i.orderNo),1)]),l("div",h,[C,l("div",null,o(n(c)((null==(u=P.value)?void 0:u.tenantOrderInsuredList[0].tenantOrderProductList[0].premium)||""))+" 元",1)])])])])}}});export{L as default};

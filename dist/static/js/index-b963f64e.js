import{m as d,u as e,r as s,o as t,t as a,C as r,E as o,N as l,F as n}from"./vendor-fd650291.js";import{g as i}from"./trial-46e5d06e.js";import{p as u}from"./product-9ad33e98.js";import{e as v}from"./utils-edb4675e.js";import"./index-823b7915.js";import"./infoCollection-15d1d038.js";import"./trial-0f930d31.js";const c={class:"page-activity-order"},m={class:"card"},p={class:"title"},f={class:"content"},j={class:"desc"},I=o("div",null,"被保险人：",-1),N={class:"desc"},C=o("div",null,"保单号：",-1),y={class:"desc"},L=o("div",null,"后续每月保费：",-1),O=d({setup(d){const O=e(),{productCode:b,tenantId:g="",orderNo:h=""}=O.query,x=s(),P=s();return t((()=>{(async()=>{const d=u({productCode:b,withInsureInfo:!0,tenantId:g}),e=i({orderNo:h,tenantId:g});Promise.all([d,e]).then((([d,e])=>{"10000"===d.code&&(x.value=d.data),"10000"===e.code&&(P.value=e.data)}))})()})),(d,e)=>{var s,t,i,u;return a(),r("div",c,[o("div",m,[o("div",p,l(null==(s=x.value)?void 0:s.productName),1),o("div",f,[o("div",j,[I,o("div",null,l(null==(t=P.value)?void 0:t.tenantOrderInsuredList[0].name),1)]),o("div",N,[C,o("div",null,l(null==(i=P.value)?void 0:i.orderNo),1)]),o("div",y,[L,o("div",null,l(n(v)((null==(u=P.value)?void 0:u.tenantOrderInsuredList[0].tenantOrderProductList[0].premium)||""))+" 元",1)])])])])}}});export{O as default};

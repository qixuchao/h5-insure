import{d,a as s,r as t,G as e,c as a,h as r,j as n,t as o,g as i}from"./index-64058e19.js";import{g as l}from"./trial-f8b8eb28.js";import{p as c}from"./product-fb43f82f.js";import{e as u}from"./utils-dae5285c.js";import"./pdfh5-008ca364.js";import"./infoCollection-7bbfe74d.js";import"./trial-feca60d8.js";const v={class:"page-activity-order"},m={class:"card"},p={class:"title"},f={class:"content"},j={class:"desc"},I=n("div",null,"被保险人：",-1),b={class:"desc"},h=n("div",null,"保单号：",-1),N={class:"desc"},g=n("div",null,"后续每月保费：",-1),x=d({__name:"index",setup(d){const x=s(),{productCode:y,tenantId:C="",orderNo:L=""}=x.query,O=t(),P=t();return e((()=>{(async()=>{const d=c({productCode:y,withInsureInfo:!0,tenantId:C}),s=l({orderNo:L,tenantId:C});Promise.all([d,s]).then((([d,s])=>{"10000"===d.code&&(O.value=d.data),"10000"===s.code&&(P.value=s.data)}))})()})),(d,s)=>{var t,e,l,c;return a(),r("div",v,[n("div",m,[n("div",p,o(null==(t=i(O))?void 0:t.productName),1),n("div",f,[n("div",j,[I,n("div",null,o(null==(e=i(P))?void 0:e.tenantOrderInsuredList[0].name),1)]),n("div",b,[h,n("div",null,o(null==(l=i(P))?void 0:l.orderNo),1)]),n("div",N,[g,n("div",null,o(i(u)((null==(c=i(P))?void 0:c.tenantOrderInsuredList[0].tenantOrderProductList[0].premium)||""))+" 元",1)])])])])}}});export{x as default};

import{d,a,r as e,y as s,c as t,g as r,i as l,t as i,l as o}from"./index-2c827d7d.js";import{g as n}from"./trial-e7c7ae5a.js";import{p as c}from"./product-d1ccbb8f.js";import{e as u}from"./utils-e956c71f.js";import"./pdfdist-3849db64.js";import"./infoCollection-8bb3a8ee.js";import"./trial-8f8290b4.js";const v={class:"page-activity-order"},p={class:"card"},m={class:"title"},f={class:"content"},j={class:"desc"},I=l("div",null,"被保险人：",-1),b={class:"desc"},y=l("div",null,"保单号：",-1),N={class:"desc"},g=l("div",null,"后续每月保费：",-1),C=d({setup(d){const C=a(),{productCode:L,tenantId:O="",orderNo:h=""}=C.query,x=e(),P=e();return s((()=>{(async()=>{const d=c({productCode:L,withInsureInfo:!0,tenantId:O}),a=n({orderNo:h,tenantId:O});Promise.all([d,a]).then((([d,a])=>{"10000"===d.code&&(x.value=d.data),"10000"===a.code&&(P.value=a.data)}))})()})),(d,a)=>{var e,s,n,c;return t(),r("div",v,[l("div",p,[l("div",m,i(null==(e=x.value)?void 0:e.productName),1),l("div",f,[l("div",j,[I,l("div",null,i(null==(s=P.value)?void 0:s.tenantOrderInsuredList[0].name),1)]),l("div",b,[y,l("div",null,i(null==(n=P.value)?void 0:n.orderNo),1)]),l("div",N,[g,l("div",null,i(o(u)((null==(c=P.value)?void 0:c.tenantOrderInsuredList[0].tenantOrderProductList[0].premium)||""))+" 元",1)])])])])}}});export{C as default};

import{d,a,r as s,y as t,c as e,g as r,i as l,t as i,l as o}from"./index-f7b0041e.js";import{g as n}from"./trial-a8dd2418.js";import{p as u}from"./product-0312b0d2.js";import{e as c}from"./utils-e737bae8.js";import"./pdfdist-3849db64.js";import"./infoCollection-a0e642c6.js";import"./trial-d4fbd4f9.js";const v={class:"page-activity-order"},p={class:"card"},m={class:"title"},f={class:"content"},j={class:"desc"},I=l("div",null,"被保险人：",-1),b={class:"desc"},y=l("div",null,"保单号：",-1),N={class:"desc"},g=l("div",null,"后续每月保费：",-1),C=d({setup(d){const C=a(),{productCode:L,tenantId:O="",orderNo:h=""}=C.query,x=s(),P=s();return t((()=>{(async()=>{const d=u({productCode:L,withInsureInfo:!0,tenantId:O}),a=n({orderNo:h,tenantId:O});Promise.all([d,a]).then((([d,a])=>{"10000"===d.code&&(x.value=d.data),"10000"===a.code&&(P.value=a.data)}))})()})),(d,a)=>{var s,t,n,u;return e(),r("div",v,[l("div",p,[l("div",m,i(null==(s=x.value)?void 0:s.productName),1),l("div",f,[l("div",j,[I,l("div",null,i(null==(t=P.value)?void 0:t.tenantOrderInsuredList[0].name),1)]),l("div",b,[y,l("div",null,i(null==(n=P.value)?void 0:n.orderNo),1)]),l("div",N,[g,l("div",null,i(o(c)((null==(u=P.value)?void 0:u.tenantOrderInsuredList[0].tenantOrderProductList[0].premium)||""))+" 元",1)])])])])}}});export{C as default};

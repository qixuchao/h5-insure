import{d as e,a,r as d,y as s,c as t,g as r,i as l,t as o,l as i}from"./index-d97281b6.js";import{g as n}from"./trial-2961329a.js";import{p as u}from"./product-e96fe004.js";import{e as c}from"./utils-62e13d9a.js";import"./pdfh5-e5c0db2a.js";import"./infoCollection-c8ee46c2.js";import"./trial-658ff1e4.js";const v={class:"page-activity-order"},p={class:"card"},m={class:"title"},f={class:"content"},j={class:"desc"},I=l("div",null,"被保险人：",-1),y={class:"desc"},N=l("div",null,"保单号：",-1),g={class:"desc"},h=l("div",null,"后续每月保费：",-1),C=e({setup(e){const C=a(),{productCode:L,tenantId:O="",orderNo:b=""}=C.query,x=d(),P=d();return s((()=>{(async()=>{const e=u({productCode:L,withInsureInfo:!0,tenantId:O}),a=n({orderNo:b,tenantId:O});Promise.all([e,a]).then((([e,a])=>{"10000"===e.code&&(x.value=e.data),"10000"===a.code&&(P.value=a.data)}))})()})),(e,a)=>{var d,s,n,u;return t(),r("div",v,[l("div",p,[l("div",m,o(null==(d=x.value)?void 0:d.productName),1),l("div",f,[l("div",j,[I,l("div",null,o(null==(s=P.value)?void 0:s.tenantOrderInsuredList[0].name),1)]),l("div",y,[N,l("div",null,o(null==(n=P.value)?void 0:n.orderNo),1)]),l("div",g,[h,l("div",null,o(i(c)((null==(u=P.value)?void 0:u.tenantOrderInsuredList[0].tenantOrderProductList[0].premium)||""))+" 元",1)])])])])}}});export{C as default};

import{d,a,r as s,G as t,c as e,h as r,j as n,t as o,g as i}from"./index-a44d8740.js";import{g as l}from"./trial-cedcaeca.js";import{p as c}from"./product-cfa12ce4.js";import{e as u}from"./utils-aaab06c9.js";import"./pdfh5-008ca364.js";import"./infoCollection-3819e49d.js";import"./trial-b4d6d569.js";const v={class:"page-activity-order"},m={class:"card"},p={class:"title"},f={class:"content"},j={class:"desc"},I=n("div",null,"被保险人：",-1),h={class:"desc"},N=n("div",null,"保单号：",-1),g={class:"desc"},x=n("div",null,"后续每月保费：",-1),y=d({__name:"index",setup(d){const y=a(),{productCode:C,tenantId:L="",orderNo:O=""}=y.query,b=s(),P=s();return t((()=>{(async()=>{const d=c({productCode:C,withInsureInfo:!0,tenantId:L}),a=l({orderNo:O,tenantId:L});Promise.all([d,a]).then((([d,a])=>{"10000"===d.code&&(b.value=d.data),"10000"===a.code&&(P.value=a.data)}))})()})),(d,a)=>{var s,t,l,c;return e(),r("div",v,[n("div",m,[n("div",p,o(null==(s=i(b))?void 0:s.productName),1),n("div",f,[n("div",j,[I,n("div",null,o(null==(t=i(P))?void 0:t.tenantOrderInsuredList[0].name),1)]),n("div",h,[N,n("div",null,o(null==(l=i(P))?void 0:l.orderNo),1)]),n("div",g,[x,n("div",null,o(i(u)((null==(c=i(P))?void 0:c.tenantOrderInsuredList[0].tenantOrderProductList[0].premium)||""))+" 元",1)])])])])}}});export{y as default};

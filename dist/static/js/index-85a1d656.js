import{d,a as s,r as t,G as a,c as e,h as r,j as n,t as o,g as i}from"./index-40904ad2.js";import{g as l}from"./trial-660dccee.js";import{p as c}from"./product-9fd58081.js";import{e as u}from"./utils-7185f565.js";import"./pdfh5-008ca364.js";import"./infoCollection-a0ef6c70.js";import"./trial-48f90195.js";const v={class:"page-activity-order"},m={class:"card"},p={class:"title"},f={class:"content"},j={class:"desc"},I=n("div",null,"被保险人：",-1),h={class:"desc"},N=n("div",null,"保单号：",-1),g={class:"desc"},x=n("div",null,"后续每月保费：",-1),y=d({__name:"index",setup(d){const y=s(),{productCode:C,tenantId:L="",orderNo:O=""}=y.query,P=t(),_=t();return a((()=>{(async()=>{const d=c({productCode:C,withInsureInfo:!0,tenantId:L}),s=l({orderNo:O,tenantId:L});Promise.all([d,s]).then((([d,s])=>{"10000"===d.code&&(P.value=d.data),"10000"===s.code&&(_.value=s.data)}))})()})),(d,s)=>{var t,a,l,c;return e(),r("div",v,[n("div",m,[n("div",p,o(null==(t=i(P))?void 0:t.productName),1),n("div",f,[n("div",j,[I,n("div",null,o(null==(a=i(_))?void 0:a.tenantOrderInsuredList[0].name),1)]),n("div",h,[N,n("div",null,o(null==(l=i(_))?void 0:l.orderNo),1)]),n("div",g,[x,n("div",null,o(i(u)((null==(c=i(_))?void 0:c.tenantOrderInsuredList[0].tenantOrderProductList[0].premium)||""))+" 元",1)])])])])}}});export{y as default};

import{d,a,r as s,G as t,c as e,h as r,j as n,t as o,g as i}from"./index-f60e076f.js";import{g as l}from"./trial-1dde9a7d.js";import{p as c}from"./product-39aac628.js";import{e as u}from"./utils-19abdda5.js";import"./pdfh5-008ca364.js";import"./infoCollection-3f5625fe.js";import"./trial-8729936f.js";const v={class:"page-activity-order"},m={class:"card"},p={class:"title"},f={class:"content"},j={class:"desc"},I=n("div",null,"被保险人：",-1),h={class:"desc"},N=n("div",null,"保单号：",-1),g={class:"desc"},x=n("div",null,"后续每月保费：",-1),y=d({__name:"index",setup(d){const y=a(),{productCode:C,tenantId:L="",orderNo:O=""}=y.query,P=s(),_=s();return t((()=>{(async()=>{const d=c({productCode:C,withInsureInfo:!0,tenantId:L}),a=l({orderNo:O,tenantId:L});Promise.all([d,a]).then((([d,a])=>{"10000"===d.code&&(P.value=d.data),"10000"===a.code&&(_.value=a.data)}))})()})),(d,a)=>{var s,t,l,c;return e(),r("div",v,[n("div",m,[n("div",p,o(null==(s=i(P))?void 0:s.productName),1),n("div",f,[n("div",j,[I,n("div",null,o(null==(t=i(_))?void 0:t.tenantOrderInsuredList[0].name),1)]),n("div",h,[N,n("div",null,o(null==(l=i(_))?void 0:l.orderNo),1)]),n("div",g,[x,n("div",null,o(i(u)((null==(c=i(_))?void 0:c.tenantOrderInsuredList[0].tenantOrderProductList[0].premium)||""))+" 元",1)])])])])}}});export{y as default};

import{d,a as s,r as t,G as e,c as a,h as r,j as n,t as o,g as i}from"./index-6eca3ebc.js";import{g as l}from"./trial-38847476.js";import{p as c}from"./product-9314ca78.js";import{e as u}from"./utils-2d109f04.js";import"./pdfh5-008ca364.js";import"./infoCollection-48f3df5d.js";import"./trial-e5c3e1e2.js";const v={class:"page-activity-order"},m={class:"card"},p={class:"title"},f={class:"content"},j={class:"desc"},I=n("div",null,"被保险人：",-1),h={class:"desc"},N=n("div",null,"保单号：",-1),g={class:"desc"},x=n("div",null,"后续每月保费：",-1),y=d({__name:"index",setup(d){const y=s(),{productCode:C,tenantId:L="",orderNo:O=""}=y.query,P=t(),_=t();return e((()=>{(async()=>{const d=c({productCode:C,withInsureInfo:!0,tenantId:L}),s=l({orderNo:O,tenantId:L});Promise.all([d,s]).then((([d,s])=>{"10000"===d.code&&(P.value=d.data),"10000"===s.code&&(_.value=s.data)}))})()})),(d,s)=>{var t,e,l,c;return a(),r("div",v,[n("div",m,[n("div",p,o(null==(t=i(P))?void 0:t.productName),1),n("div",f,[n("div",j,[I,n("div",null,o(null==(e=i(_))?void 0:e.tenantOrderInsuredList[0].name),1)]),n("div",h,[N,n("div",null,o(null==(l=i(_))?void 0:l.orderNo),1)]),n("div",g,[x,n("div",null,o(i(u)((null==(c=i(_))?void 0:c.tenantOrderInsuredList[0].tenantOrderProductList[0].premium)||""))+" 元",1)])])])])}}});export{y as default};

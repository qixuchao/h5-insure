import{d,a as s,r as t,G as a,c as e,h as r,j as n,t as o,g as i}from"./index-d9e24409.js";import{g as l}from"./trial-f26fe01f.js";import{p as c}from"./product-9d587088.js";import{e as u}from"./utils-0f18181e.js";import"./pdfh5-008ca364.js";import"./infoCollection-fa02be5b.js";import"./trial-85396cad.js";const v={class:"page-activity-order"},m={class:"card"},p={class:"title"},f={class:"content"},j={class:"desc"},I=n("div",null,"被保险人：",-1),h={class:"desc"},N=n("div",null,"保单号：",-1),g={class:"desc"},x=n("div",null,"后续每月保费：",-1),y=d({__name:"index",setup(d){const y=s(),{productCode:C,tenantId:L="",orderNo:O=""}=y.query,b=t(),P=t();return a((()=>{(async()=>{const d=c({productCode:C,withInsureInfo:!0,tenantId:L}),s=l({orderNo:O,tenantId:L});Promise.all([d,s]).then((([d,s])=>{"10000"===d.code&&(b.value=d.data),"10000"===s.code&&(P.value=s.data)}))})()})),(d,s)=>{var t,a,l,c;return e(),r("div",v,[n("div",m,[n("div",p,o(null==(t=i(b))?void 0:t.productName),1),n("div",f,[n("div",j,[I,n("div",null,o(null==(a=i(P))?void 0:a.tenantOrderInsuredList[0].name),1)]),n("div",h,[N,n("div",null,o(null==(l=i(P))?void 0:l.orderNo),1)]),n("div",g,[x,n("div",null,o(i(u)((null==(c=i(P))?void 0:c.tenantOrderInsuredList[0].tenantOrderProductList[0].premium)||""))+" 元",1)])])])])}}});export{y as default};

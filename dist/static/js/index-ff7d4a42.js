import{d,a as e,r as a,y as s,c as t,g as r,i as l,t as o,l as i}from"./index-19454e4d.js";import{g as n}from"./trial-6c631c25.js";import{p as c}from"./product-6ee519ec.js";import{e as u}from"./utils-13503030.js";import"./pdfh5-e5c0db2a.js";import"./infoCollection-72c6a83f.js";import"./trial-710d6cc9.js";const v={class:"page-activity-order"},p={class:"card"},m={class:"title"},f={class:"content"},j={class:"desc"},I=l("div",null,"被保险人：",-1),y={class:"desc"},N=l("div",null,"保单号：",-1),g={class:"desc"},h=l("div",null,"后续每月保费：",-1),C=d({setup(d){const C=e(),{productCode:L,tenantId:O="",orderNo:x=""}=C.query,P=a(),b=a();return s((()=>{(async()=>{const d=c({productCode:L,withInsureInfo:!0,tenantId:O}),e=n({orderNo:x,tenantId:O});Promise.all([d,e]).then((([d,e])=>{"10000"===d.code&&(P.value=d.data),"10000"===e.code&&(b.value=e.data)}))})()})),(d,e)=>{var a,s,n,c;return t(),r("div",v,[l("div",p,[l("div",m,o(null==(a=P.value)?void 0:a.productName),1),l("div",f,[l("div",j,[I,l("div",null,o(null==(s=b.value)?void 0:s.tenantOrderInsuredList[0].name),1)]),l("div",y,[N,l("div",null,o(null==(n=b.value)?void 0:n.orderNo),1)]),l("div",g,[h,l("div",null,o(i(u)((null==(c=b.value)?void 0:c.tenantOrderInsuredList[0].tenantOrderProductList[0].premium)||""))+" 元",1)])])])])}}});export{C as default};

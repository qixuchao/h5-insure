import{d,a,r as e,y as s,c as t,g as r,i as l,t as o,l as i}from"./index-69adfa77.js";import{g as n}from"./trial-521157dc.js";import{p as u}from"./product-e2ebd8ae.js";import{e as c}from"./utils-6b07f363.js";import"./pdfh5-e5c0db2a.js";import"./infoCollection-01781b36.js";import"./trial-10dfd8d5.js";const v={class:"page-activity-order"},p={class:"card"},m={class:"title"},f={class:"content"},j={class:"desc"},I=l("div",null,"被保险人：",-1),b={class:"desc"},y=l("div",null,"保单号：",-1),N={class:"desc"},g=l("div",null,"后续每月保费：",-1),h=d({setup(d){const h=a(),{productCode:C,tenantId:L="",orderNo:O=""}=h.query,x=e(),P=e();return s((()=>{(async()=>{const d=u({productCode:C,withInsureInfo:!0,tenantId:L}),a=n({orderNo:O,tenantId:L});Promise.all([d,a]).then((([d,a])=>{"10000"===d.code&&(x.value=d.data),"10000"===a.code&&(P.value=a.data)}))})()})),(d,a)=>{var e,s,n,u;return t(),r("div",v,[l("div",p,[l("div",m,o(null==(e=x.value)?void 0:e.productName),1),l("div",f,[l("div",j,[I,l("div",null,o(null==(s=P.value)?void 0:s.tenantOrderInsuredList[0].name),1)]),l("div",b,[y,l("div",null,o(null==(n=P.value)?void 0:n.orderNo),1)]),l("div",N,[g,l("div",null,o(i(c)((null==(u=P.value)?void 0:u.tenantOrderInsuredList[0].tenantOrderProductList[0].premium)||""))+" 元",1)])])])])}}});export{h as default};

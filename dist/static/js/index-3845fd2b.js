import{d as a,a as d,r as s,z as t,c as e,g as r,i as l,t as i,l as o}from"./index-98540450.js";import{g as n}from"./trial-ae2ac84a.js";import{p as c}from"./product-8c231aa5.js";import{e as u}from"./utils-71fcd507.js";import"./pdfdist-c1c6a344.js";import"./infoCollection-fd6576eb.js";import"./trial-ddddb1ca.js";const v={class:"page-activity-order"},p={class:"card"},m={class:"title"},f={class:"content"},j={class:"desc"},I=l("div",null,"被保险人：",-1),N={class:"desc"},g=l("div",null,"保单号：",-1),y={class:"desc"},C=l("div",null,"后续每月保费：",-1),L=a({setup(a){const L=d(),{productCode:O,tenantId:b="",orderNo:h=""}=L.query,x=s(),P=s();return t((()=>{(async()=>{const a=c({productCode:O,withInsureInfo:!0,tenantId:b}),d=n({orderNo:h,tenantId:b});Promise.all([a,d]).then((([a,d])=>{"10000"===a.code&&(x.value=a.data),"10000"===d.code&&(P.value=d.data)}))})()})),(a,d)=>{var s,t,n,c;return e(),r("div",v,[l("div",p,[l("div",m,i(null==(s=x.value)?void 0:s.productName),1),l("div",f,[l("div",j,[I,l("div",null,i(null==(t=P.value)?void 0:t.tenantOrderInsuredList[0].name),1)]),l("div",N,[g,l("div",null,i(null==(n=P.value)?void 0:n.orderNo),1)]),l("div",y,[C,l("div",null,i(o(u)((null==(c=P.value)?void 0:c.tenantOrderInsuredList[0].tenantOrderProductList[0].premium)||""))+" 元",1)])])])])}}});export{L as default};

import{h as d,N as e,C as a,j as s,k as t,x as r,y as l,I as o,z as n}from"./vendor-2c18d14d.js";import{g as i}from"./trial-ab14b95b.js";import{p as u}from"./product-c9ff025c.js";import{e as c}from"./utils-5d16d585.js";import"./index-feb421e3.js";import"./infoCollection-6a2f7d5d.js";import"./trial-ebe5a261.js";const v={class:"page-activity-order"},m={class:"card"},p={class:"title"},f={class:"content"},j={class:"desc"},I=l("div",null,"被保险人：",-1),b={class:"desc"},N=l("div",null,"保单号：",-1),y={class:"desc"},C=l("div",null,"后续每月保费：",-1),h=d({setup(d){const h=e(),{productCode:x,tenantId:L="",orderNo:O=""}=h.query,g=a(),P=a();return s((()=>{(async()=>{const d=u({productCode:x,withInsureInfo:!0,tenantId:L}),e=i({orderNo:O,tenantId:L});Promise.all([d,e]).then((([d,e])=>{"10000"===d.code&&(g.value=d.data),"10000"===e.code&&(P.value=e.data)}))})()})),(d,e)=>{var a,s,i,u;return t(),r("div",v,[l("div",m,[l("div",p,o(null==(a=g.value)?void 0:a.productName),1),l("div",f,[l("div",j,[I,l("div",null,o(null==(s=P.value)?void 0:s.tenantOrderInsuredList[0].name),1)]),l("div",b,[N,l("div",null,o(null==(i=P.value)?void 0:i.orderNo),1)]),l("div",y,[C,l("div",null,o(n(c)((null==(u=P.value)?void 0:u.tenantOrderInsuredList[0].tenantOrderProductList[0].premium)||""))+" 元",1)])])])])}}});export{h as default};

import{g as h,O as D,E as l,h as f,j as F,n as g,z as t,J as n,A as y}from"./vendor-17026bfd.js";import{g as A}from"./trial-27fb7bc6.js";import{p as B}from"./product-7a9a1ded.js";import{b as E}from"./utils-a05d3726.js";import"./index-68bb0b47.js";import"./infoCollection-086b7a1f.js";import"./utils-b6782348.js";import"./trial-46d75bee.js";const I={class:"page-activity-order"},O={class:"card"},x={class:"title"},N={class:"content"},q={class:"desc"},C=t("div",null,"\u88AB\u4FDD\u9669\u4EBA\uFF1A",-1),L={class:"desc"},k=t("div",null,"\u4FDD\u5355\u53F7\uFF1A",-1),P={class:"desc"},b=t("div",null,"\u540E\u7EED\u6BCF\u6708\u4FDD\u8D39\uFF1A",-1),G=h({setup(j){const _=D(),{productCode:v,tenantId:a="",orderNo:p=""}=_.query,d=l(),o=l(),m=async()=>{const r=B({productCode:v,withInsureInfo:!0,tenantId:a}),i=A({orderNo:p,tenantId:a});Promise.all([r,i]).then(([e,s])=>{e.code==="10000"&&(d.value=e.data),s.code==="10000"&&(o.value=s.data)})};return f(()=>{m()}),(r,i)=>{var e,s,u,c;return F(),g("div",I,[t("div",O,[t("div",x,n((e=d.value)==null?void 0:e.productName),1),t("div",N,[t("div",q,[C,t("div",null,n((s=o.value)==null?void 0:s.tenantOrderInsuredList[0].name),1)]),t("div",L,[k,t("div",null,n((u=o.value)==null?void 0:u.orderNo),1)]),t("div",P,[b,t("div",null,n(y(E)(((c=o.value)==null?void 0:c.tenantOrderInsuredList[0].tenantOrderProductList[0].premium)||""))+" \u5143",1)])])])])}}});export{G as default};

import{h,P as D,G as l,j as f,k as F,p as B,A as t,L as a,B as g}from"./vendor-b1b61443.js";import{a as y}from"./trial-9fb470ba.js";import{p as A}from"./product-c493bf61.js";import{e as E}from"./utils-aed39651.js";import"./index-92f7e5a0.js";import"./infoCollection-94aa6829.js";import"./trial-5c111350.js";const I={class:"page-activity-order"},x={class:"card"},L={class:"title"},N={class:"content"},O={class:"desc"},k=t("div",null,"\u88AB\u4FDD\u9669\u4EBA\uFF1A",-1),q={class:"desc"},C=t("div",null,"\u4FDD\u5355\u53F7\uFF1A",-1),P={class:"desc"},j=t("div",null,"\u540E\u7EED\u6BCF\u6708\u4FDD\u8D39\uFF1A",-1),z=h({setup(w){const _=D(),{productCode:v,tenantId:n="",orderNo:p=""}=_.query,d=l(),o=l(),m=async()=>{const r=A({productCode:v,withInsureInfo:!0,tenantId:n}),i=y({orderNo:p,tenantId:n});Promise.all([r,i]).then(([e,s])=>{e.code==="10000"&&(d.value=e.data),s.code==="10000"&&(o.value=s.data)})};return f(()=>{m()}),(r,i)=>{var e,s,u,c;return F(),B("div",I,[t("div",x,[t("div",L,a((e=d.value)==null?void 0:e.productName),1),t("div",N,[t("div",O,[k,t("div",null,a((s=o.value)==null?void 0:s.tenantOrderInsuredList[0].name),1)]),t("div",q,[C,t("div",null,a((u=o.value)==null?void 0:u.orderNo),1)]),t("div",P,[j,t("div",null,a(g(E)(((c=o.value)==null?void 0:c.tenantOrderInsuredList[0].tenantOrderProductList[0].premium)||""))+" \u5143",1)])])])])}}});export{z as default};

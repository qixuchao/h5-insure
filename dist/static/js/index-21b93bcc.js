import{g as h,O as D,E as l,h as f,j as F,n as g,z as t,J as a,A as y}from"./vendor-9d7eb2ed.js";import{a as A}from"./trial-fc1b3012.js";import{p as B}from"./product-bcc7dd5f.js";import{a as E}from"./utils-26f4a87f.js";import"./index-66546512.js";import"./trial-04f2e391.js";const I={class:"page-activity-order"},O={class:"card"},x={class:"title"},N={class:"content"},q={class:"desc"},C=t("div",null,"\u88AB\u4FDD\u9669\u4EBA\uFF1A",-1),L={class:"desc"},k=t("div",null,"\u4FDD\u5355\u53F7\uFF1A",-1),P={class:"desc"},j=t("div",null,"\u540E\u7EED\u6BCF\u6708\u4FDD\u8D39\uFF1A",-1),V=h({setup(w){const _=D(),{productCode:v,tenantId:n="",orderNo:p=""}=_.query,d=l(),o=l(),m=async()=>{const r=B({productCode:v,withInsureInfo:!0,tenantId:n}),i=A({orderNo:p,tenantId:n});Promise.all([r,i]).then(([e,s])=>{e.code==="10000"&&(d.value=e.data),s.code==="10000"&&(o.value=s.data)})};return f(()=>{m()}),(r,i)=>{var e,s,u,c;return F(),g("div",I,[t("div",O,[t("div",x,a((e=d.value)==null?void 0:e.productName),1),t("div",N,[t("div",q,[C,t("div",null,a((s=o.value)==null?void 0:s.tenantOrderInsuredList[0].name),1)]),t("div",L,[k,t("div",null,a((u=o.value)==null?void 0:u.orderNo),1)]),t("div",P,[j,t("div",null,a(y(E)(((c=o.value)==null?void 0:c.tenantOrderInsuredList[0].tenantOrderProductList[0].premium)||""))+" \u5143",1)])])])])}}});export{V as default};

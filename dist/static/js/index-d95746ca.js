import{h as e,a8 as a,N as t,C as r,o,k as n,x as s,y as c}from"./vendor-2c18d14d.js";import{Q as d}from"./index-7c9b0931.js";import{f as p,P as l}from"./infoCollection-7f357690.js";import{q as i}from"./trial-90c04a2b.js";const u={class:"page-middle-wrapper"},m=[c("h4",null,null,-1)],f=e({setup(e){const c=a(),f=t(),C=r(""),{extraInfo:y,agencyCode:I,templateId:h,pageCode:g,insurerCode:x,productCode:b}=f.query;let q={};try{q=JSON.parse(decodeURIComponent(y))}catch(E){}const{templateId:w,openId:j,tenantId:$}=q,v=()=>{try{const e=j?h:w;if(e)return`/baseInsurance/${p[e]}`;switch(g){case l.FREE:return`/chuangxin/baigebao/${g}`;case l.COMMON:return"/internet/productDetail";case l.PACKAGE:return"/internet/productDetail/package";default:return""}}catch(e){return""}},D=e=>{d({param:e}).then((({code:a,data:t})=>{if("10000"===a&&t){let a="/productDetail";if("proposalId"in f.query&&(a="/trial"),j){const a=v();c.replace(`${a}?${e}`)}else(e=>{let a=e;const t=v();t&&(a=t),c.replace({path:a,query:f.query})})(a)}else C.value="验证失败"}))};return o((()=>{j?(async()=>{const{code:e,data:a}=await i({insurerCode:x,productCode:b,tenantId:$,agencyCode:I,extraMap:{...q,templateId:h}});"10000"===e&&D((a||"").split("?")[1])})():D(window.location.search.replace("?",""))})),(e,a)=>(n(),s("div",u,m))}});export{f as default};

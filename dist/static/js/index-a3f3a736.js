import{h as e,a8 as a,N as t,r,o,l as n,y as s,z as c}from"./vendor-d6fdc679.js";import{Q as d}from"./index-e450ab26.js";import{f as l,P as p}from"./infoCollection-f88834a6.js";import{q as i}from"./trial-9e2c267d.js";const u={class:"page-middle-wrapper"},f=[c("h4",null,null,-1)],m=e({setup(e){const c=a(),m=t(),I=r(""),{extraInfo:h,templateId:C,insurerCode:y,productCode:g}=m.query;let q={};try{q=JSON.parse(decodeURIComponent(h))}catch(D){}const{pageCode:w,templateId:x,openId:b,tenantId:j}=q,$=()=>{try{const e=b?C:x;if(e)return`/baseInsurance/${l[e]}`;switch(w){case p.FREE:return`/chuangxin/baigebao/${w}`;case p.COMMON:return"/internet/productDetail";case p.PACKAGE:return"/internet/productDetail/package";default:return""}}catch(e){return""}},v=e=>{d({param:e}).then((({code:a,data:t})=>{if("10000"===a&&t){let a="/productDetail";if("proposalId"in m.query&&(a="/trial"),b){const a=$();c.replace(`${a}?${e}`)}else(e=>{let a=e;const t=$();t&&(a=t),c.replace({path:a,query:m.query})})(a)}else I.value="验证失败"}))};return o((()=>{b?(async()=>{const{code:e,data:a}=await i({insurerCode:y,productCode:g,tenantId:j,extraMap:{...q,templateId:C}});"10000"===e&&v((a||"").split("?")[1])})():v(window.location.search.replace("?",""))})),(e,a)=>(n(),s("div",u,f))}});export{m as default};

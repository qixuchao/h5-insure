import{h as e,a8 as a,N as t,r,o,l as n,y as s,z as d}from"./vendor-d6fdc679.js";import{Q as c}from"./index-ed1d5702.js";import{f as l,P as p}from"./infoCollection-13dbfc58.js";import{q as i}from"./trial-d6a5b973.js";const u={class:"page-middle-wrapper"},f=[d("h4",null,null,-1)],m=e({setup(e){const d=a(),m=t(),C=r(""),{extraInfo:y,agencyCode:I,templateId:h,insurerCode:g,productCode:b}=m.query;let q={};try{q=JSON.parse(decodeURIComponent(y))}catch(E){}const{pageCode:w,templateId:x,openId:j,tenantId:$}=q,v=()=>{try{const e=j?h:x;if(e)return`/baseInsurance/${l[e]}`;switch(w){case p.FREE:return`/chuangxin/baigebao/${w}`;case p.COMMON:return"/internet/productDetail";case p.PACKAGE:return"/internet/productDetail/package";default:return""}}catch(e){return""}},D=e=>{c({param:e}).then((({code:a,data:t})=>{if("10000"===a&&t){let a="/productDetail";if("proposalId"in m.query&&(a="/trial"),j){const a=v();d.replace(`${a}?${e}`)}else(e=>{let a=e;const t=v();t&&(a=t),d.replace({path:a,query:m.query})})(a)}else C.value="验证失败"}))};return o((()=>{j?(async()=>{const{code:e,data:a}=await i({insurerCode:g,productCode:b,tenantId:$,agencyCode:I,extraMap:{...q,templateId:h}});"10000"===e&&D((a||"").split("?")[1])})():D(window.location.search.replace("?",""))})),(e,a)=>(n(),s("div",u,f))}});export{m as default};

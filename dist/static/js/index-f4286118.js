import{h as e,a8 as a,N as t,C as r,o,k as n,x as s,y as c}from"./vendor-0ca9ff80.js";import{Q as d}from"./index-cadc56f7.js";import{f as p,P as l}from"./infoCollection-e7702b2f.js";import{q as i}from"./trial-f941e7a2.js";const u={class:"page-middle-wrapper"},f=[c("h4",null,null,-1)],m=e({setup(e){const c=a(),m=t(),C=r(""),{extraInfo:y,agencyCode:I,templateId:h,pageCode:g,insurerCode:x,productCode:q}=m.query;let w={};try{w=JSON.parse(decodeURIComponent(y))}catch(E){}const{templateId:b,openId:j,tenantId:$}=w,v=()=>{try{const e=j?h:b;if(e)return`/baseInsurance/${p[e]}`;switch(g){case l.FREE:return`/chuangxin/baigebao/${g}`;case l.COMMON:return"/internet/productDetail";case l.PACKAGE:return"/internet/productDetail/package";default:return""}}catch(e){return""}},D=e=>{d({param:e}).then((({code:a,data:t})=>{if("10000"===a&&t){let a="/productDetail";if("proposalId"in m.query&&(a="/trial"),j){const a=v();c.replace(`${a}?${e}`)}else(e=>{let a=e;const t=v();t&&(a=t),c.replace({path:a,query:m.query})})(a)}else C.value="验证失败"}))};return o((()=>{j?(async()=>{const{code:e,data:a}=await i({insurerCode:x,productCode:q,tenantId:$,agencyCode:I,extraMap:{...w,templateId:h}});"10000"===e&&D((a||"").split("?")[1])})():D(window.location.search.replace("?",""))})),(e,a)=>(n(),s("div",u,f))}});export{m as default};

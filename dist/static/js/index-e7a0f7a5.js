import{h as e,a8 as a,N as t,r,o,l as n,y as s,z as c}from"./vendor-372f2d73.js";import{Q as d}from"./index-dc10f08b.js";import{f as l,P as p}from"./infoCollection-e90b1711.js";import{q as i}from"./trial-8697ebd0.js";const u={class:"page-middle-wrapper"},f=[c("h4",null,null,-1)],m=e({setup(e){const c=a(),m=t(),C=r(""),{extraInfo:y,agencyCode:I,templateId:h,pageCode:g,insurerCode:b,productCode:q}=m.query;let w={};try{w=JSON.parse(decodeURIComponent(y))}catch(E){}const{templateId:x,openId:j,tenantId:$}=w,v=()=>{try{const e=j?h:x;if(e)return`/baseInsurance/${l[e]}`;switch(g){case p.FREE:return`/chuangxin/baigebao/${g}`;case p.COMMON:return"/internet/productDetail";case p.PACKAGE:return"/internet/productDetail/package";default:return""}}catch(e){return""}},D=e=>{d({param:e}).then((({code:a,data:t})=>{if("10000"===a&&t){let a="/productDetail";if("proposalId"in m.query&&(a="/trial"),j){const a=v();c.replace(`${a}?${e}`)}else(e=>{let a=e;const t=v();t&&(a=t),c.replace({path:a,query:m.query})})(a)}else C.value="验证失败"}))};return o((()=>{j?(async()=>{const{code:e,data:a}=await i({insurerCode:b,productCode:q,tenantId:$,agencyCode:I,extraMap:{...w,templateId:h}});"10000"===e&&D((a||"").split("?")[1])})():D(window.location.search.replace("?",""))})),(e,a)=>(n(),s("div",u,f))}});export{m as default};

import{d as e,u as a,a as t,r,aj as n,c,g as o,ar as s,i as d}from"./index-19454e4d.js";import{l as i}from"./index-c6b2b786.js";import{f as p,P as l}from"./infoCollection-72c6a83f.js";import{q as u}from"./trial-6c631c25.js";import"./pdfh5-e5c0db2a.js";const f={class:"page-middle-wrapper"},m=[d("h4",null,null,-1)],g=e({setup(e){const d=a(),g=t(),C=r(""),{extraInfo:I,agencyCode:h,templateId:y,pageCode:b,insurerCode:j,productCode:x,code:$}=g.query;let w={};try{w=JSON.parse(decodeURIComponent(I))}catch(D){}const{templateId:R,openId:U,tenantId:E}=w,q=()=>{try{const e=U?y:R;if(e)return`/baseInsurance/${p[e]}`;switch(b){case l.FREE:return`/chuangxin/baigebao/${b}`;case l.COMMON:return"/internet/productDetail";case l.UPGRADE:return"/internet/guaranteeUpgrade";case l.PACKAGE:return"/internet/productDetail/package";default:return""}}catch(e){return""}},A=e=>{s({param:e}).then((({code:a,data:t})=>{if("10000"===a&&t)if(U){const a=q();d.replace(encodeURI(`${a}?${e}`))}else(e=>{let a=e;const t=q();t&&(a=t),d.replace(encodeURI(`${a}?${i.stringify(g.query)}`))})();else C.value="验证失败"}))};return n((()=>{U?(async()=>{const{code:e,data:a}=await u({insurerCode:j,productCode:x,tenantId:E,agencyCode:h,extraMap:{...w,templateId:y}});"10000"===e&&A((a||"").split("?")[1])})():A(window.location.search.replace("?",""))})),(e,a)=>(c(),o("div",f,m))}});export{g as default};

import{d as e,u as a,a as t,r,an as n,c as s,g as o,av as c,i as d}from"./index-ede405b0.js";import{l as i}from"./index-c1807f2c.js";import{f as p,P as l}from"./infoCollection-97fe2557.js";import{q as u}from"./trial-549f7489.js";import"./pdfdist-66c75904.js";const f={class:"page-middle-wrapper"},m=[d("h4",null,null,-1)],g=e({setup(e){const d=a(),g=t(),C=r(""),{extraInfo:I,agencyCode:y,templateId:h,pageCode:x,insurerCode:$,productCode:j,code:w}=g.query;let R={};try{R=JSON.parse(decodeURIComponent(I))}catch(A){}const{templateId:U,openId:b,tenantId:E}=R,q=()=>{try{const e=b?h:U;if(e)return`/baseInsurance/${p[e]}`;switch(x){case l.FREE:return`/chuangxin/baigebao/${x}`;case l.COMMON:return"/internet/productDetail";case l.UPGRADE:return"/internet/guaranteeUpgrade";case l.PACKAGE:return"/internet/productDetail/package";default:return""}}catch(e){return""}},v=e=>{c({param:e}).then((({code:a,data:t})=>{if("10000"===a&&t)if(b){const a=q();d.replace(encodeURI(`${a}?${e}`))}else(e=>{let a=e;const t=q();t&&(a=t),d.replace(encodeURI(`${a}?${i.stringify(g.query)}`))})();else C.value="验证失败"}))};return n((()=>{b?(async()=>{const{code:e,data:a}=await u({insurerCode:$,productCode:j,tenantId:E,agencyCode:y,extraMap:{...R,templateId:h}});"10000"===e&&v((a||"").split("?")[1])})():v(window.location.search.replace("?",""))})),(e,a)=>(s(),o("div",f,m))}});export{g as default};

System.register(["./vendor-legacy-105aea5b.js","./index-legacy-f104c86d.js","./infoCollection-legacy-e6ea2d1e.js","./trial-legacy-ad5f4625.js"],(function(e){"use strict";var t,a,n,r,c,o,l,s,u,d,i,p;return{setters:[function(e){t=e.h,a=e.a8,n=e.N,r=e.r,c=e.o,o=e.l,l=e.y,s=e.z},function(e){u=e.Q},function(e){d=e.f,i=e.P},function(e){p=e.q}],execute:function(){const f={class:"page-middle-wrapper"},y=[s("h4",null,null,-1)];e("default",t({setup(e){const t=a(),s=n(),g=r(""),{extraInfo:I,templateId:h,insurerCode:C,productCode:m}=s.query;let q={};try{q=JSON.parse(decodeURIComponent(I))}catch(D){}const{pageCode:w,templateId:x,openId:b,tenantId:j}=q,v=()=>{try{const e=b?h:x;if(e)return`/baseInsurance/${d[e]}`;switch(w){case i.FREE:return`/chuangxin/baigebao/${w}`;case i.COMMON:return"/internet/productDetail";case i.PACKAGE:return"/internet/productDetail/package";default:return""}}catch(e){return""}},$=e=>{u({param:e}).then((({code:a,data:n})=>{if("10000"===a&&n){let a="/productDetail";if("proposalId"in s.query&&(a="/trial"),b){const a=v();t.replace(`${a}?${e}`)}else(e=>{let a=e;const n=v();n&&(a=n),t.replace({path:a,query:s.query})})(a)}else g.value="验证失败"}))};return c((()=>{b?(async()=>{const{code:e,data:t}=await p({insurerCode:C,productCode:m,tenantId:j,extraMap:{...q,templateId:h}});"10000"===e&&$((t||"").split("?")[1])})():$(window.location.search.replace("?",""))})),(e,t)=>(o(),l("div",f,y))}}))}}}));

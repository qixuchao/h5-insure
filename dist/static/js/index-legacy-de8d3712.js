System.register(["./vendor-legacy-f6075170.js","./index-legacy-70167a3a.js","./infoCollection-legacy-7c21ae47.js","./trial-legacy-3bb28e8b.js"],(function(e){"use strict";var t,a,n,r,c,o,l,s,u,i,d,p;return{setters:[function(e){t=e.h,a=e.a8,n=e.N,r=e.r,c=e.o,o=e.l,l=e.y,s=e.z},function(e){u=e.Q},function(e){i=e.f,d=e.P},function(e){p=e.q}],execute:function(){const f={class:"page-middle-wrapper"},y=[s("h4",null,null,-1)];e("default",t({setup(e){const t=a(),s=n(),g=r(""),{extraInfo:I,templateId:h,insurerCode:C,productCode:m}=s.query;let b={};try{b=JSON.parse(decodeURIComponent(I))}catch(D){}const{pageCode:q,templateId:w,openId:x,tenantId:j}=b,v=()=>{try{const e=x?h:w;if(e)return`/baseInsurance/${i[e]}`;switch(q){case d.FREE:return`/chuangxin/baigebao/${q}`;case d.COMMON:return"/internet/productDetail";case d.PACKAGE:return"/internet/productDetail/package";default:return""}}catch(e){return""}},$=e=>{u({param:e}).then((({code:a,data:n})=>{if("10000"===a&&n){let a="/productDetail";if("proposalId"in s.query&&(a="/trial"),x){const a=v();t.replace(`${a}?${e}`)}else(e=>{let a=e;const n=v();n&&(a=n),t.replace({path:a,query:s.query})})(a)}else g.value="验证失败"}))};return c((()=>{x?(async()=>{const{code:e,data:t}=await p({insurerCode:C,productCode:m,tenantId:j,extraMap:{...b,templateId:h}});"10000"===e&&$((t||"").split("?")[1])})():$(window.location.search.replace("?",""))})),(e,t)=>(o(),l("div",f,y))}}))}}}));

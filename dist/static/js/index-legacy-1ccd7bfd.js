System.register(["./vendor-legacy-4de4c413.js","./index-legacy-2dcaf1b5.js","./infoCollection-legacy-c3f9c66b.js","./trial-legacy-cc70f186.js"],(function(e){"use strict";var t,a,n,c,r,o,d,s,u,l,i,p;return{setters:[function(e){t=e.h,a=e.a8,n=e.N,c=e.C,r=e.o,o=e.k,d=e.x,s=e.y},function(e){u=e.Q},function(e){l=e.f,i=e.P},function(e){p=e.q}],execute:function(){const f={class:"page-middle-wrapper"},y=[s("h4",null,null,-1)];e("default",t({setup(e){const t=a(),s=n(),g=c(""),{extraInfo:C,agencyCode:I,templateId:h,pageCode:m,insurerCode:x,productCode:b}=s.query;let q={};try{q=JSON.parse(decodeURIComponent(C))}catch(E){}const{templateId:w,openId:j,tenantId:v}=q,$=()=>{try{const e=j?h:w;if(e)return`/baseInsurance/${l[e]}`;switch(m){case i.FREE:return`/chuangxin/baigebao/${m}`;case i.COMMON:return"/internet/productDetail";case i.PACKAGE:return"/internet/productDetail/package";default:return""}}catch(e){return""}},D=e=>{u({param:e}).then((({code:a,data:n})=>{if("10000"===a&&n){let a="/productDetail";if("proposalId"in s.query&&(a="/trial"),j){const a=$();t.replace(`${a}?${e}`)}else(e=>{let a=e;const n=$();n&&(a=n),t.replace({path:a,query:s.query})})(a)}else g.value="验证失败"}))};return r((()=>{j?(async()=>{const{code:e,data:t}=await p({insurerCode:x,productCode:b,tenantId:v,agencyCode:I,extraMap:{...q,templateId:h}});"10000"===e&&D((t||"").split("?")[1])})():D(window.location.search.replace("?",""))})),(e,t)=>(o(),d("div",f,y))}}))}}}));

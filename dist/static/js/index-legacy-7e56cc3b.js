System.register(["./vendor-legacy-80ec6972.js","./index-legacy-f06d3f03.js","./infoCollection-legacy-1bb67295.js","./trial-legacy-7e23f3c7.js"],(function(e){"use strict";var t,n,a,r,c,o,l,s,u,d,i,p;return{setters:[function(e){t=e.h,n=e.a8,a=e.N,r=e.r,c=e.o,o=e.l,l=e.y,s=e.z},function(e){u=e.Q},function(e){d=e.f,i=e.P},function(e){p=e.q}],execute:function(){const f={class:"page-middle-wrapper"},y=[s("h4",null,null,-1)];e("default",t({setup(e){const t=n(),s=a(),g=r(""),{extraInfo:C,agencyCode:I,templateId:h,insurerCode:m,productCode:b}=s.query;let q={};try{q=JSON.parse(decodeURIComponent(C))}catch(E){}const{pageCode:w,templateId:x,openId:j,tenantId:v}=q,$=()=>{try{const e=j?h:x;if(e)return`/baseInsurance/${d[e]}`;switch(w){case i.FREE:return`/chuangxin/baigebao/${w}`;case i.COMMON:return"/internet/productDetail";case i.PACKAGE:return"/internet/productDetail/package";default:return""}}catch(e){return""}},D=e=>{u({param:e}).then((({code:n,data:a})=>{if("10000"===n&&a){let n="/productDetail";if("proposalId"in s.query&&(n="/trial"),j){const n=$();t.replace(`${n}?${e}`)}else(e=>{let n=e;const a=$();a&&(n=a),t.replace({path:n,query:s.query})})(n)}else g.value="验证失败"}))};return c((()=>{j?(async()=>{const{code:e,data:t}=await p({insurerCode:m,productCode:b,tenantId:v,agencyCode:I,extraMap:{...q,templateId:h}});"10000"===e&&D((t||"").split("?")[1])})():D(window.location.search.replace("?",""))})),(e,t)=>(o(),l("div",f,y))}}))}}}));

System.register(["./vendor-legacy-84c6eb15.js","./index-legacy-7e211eb6.js","./infoCollection-legacy-aaa0244d.js","./trial-legacy-9bc35294.js"],(function(e){"use strict";var t,a,n,r,c,o,s,u,d,l,i,p;return{setters:[function(e){t=e.h,a=e.a8,n=e.N,r=e.C,c=e.o,o=e.k,s=e.x,u=e.y},function(e){d=e.Q},function(e){l=e.f,i=e.P},function(e){p=e.q}],execute:function(){const y={class:"page-middle-wrapper"},f=[u("h4",null,null,-1)];e("default",t({setup(e){const t=a(),u=n(),g=r(""),{extraInfo:C,agencyCode:I,templateId:h,pageCode:m,insurerCode:b,productCode:x}=u.query;let q={};try{q=JSON.parse(decodeURIComponent(C))}catch(E){}const{templateId:w,openId:j,tenantId:v}=q,$=()=>{try{const e=j?h:w;if(e)return`/baseInsurance/${l[e]}`;switch(m){case i.FREE:return`/chuangxin/baigebao/${m}`;case i.COMMON:return"/internet/productDetail";case i.PACKAGE:return"/internet/productDetail/package";default:return""}}catch(e){return""}},D=e=>{d({param:e}).then((({code:a,data:n})=>{if("10000"===a&&n){let a="/productDetail";if("proposalId"in u.query&&(a="/trial"),j){const a=$();t.replace(`${a}?${e}`)}else(e=>{let a=e;const n=$();n&&(a=n),t.replace({path:a,query:u.query})})(a)}else g.value="验证失败"}))};return c((()=>{j?(async()=>{const{code:e,data:t}=await p({insurerCode:b,productCode:x,tenantId:v,agencyCode:I,extraMap:{...q,templateId:h}});"10000"===e&&D((t||"").split("?")[1])})():D(window.location.search.replace("?",""))})),(e,t)=>(o(),s("div",y,f))}}))}}}));

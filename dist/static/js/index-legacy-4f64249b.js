System.register(["./vendor-legacy-0b144948.js","./index-legacy-bb851b14.js","./infoCollection-legacy-4ddd922d.js","./core-legacy-e8b33e2e.js","./trial-legacy-f392c3f3.js","./index-legacy-64b1a070.js"],(function(e){"use strict";var t,n,a,r,c,o,s,u,i,d,l,p,f;return{setters:[function(e){t=e.i,n=e.aa,a=e.P,r=e.r,c=e.o,o=e.m,s=e.s,u=e.B},function(e){i=e.Q},function(e){d=e.f,l=e.P},function(e){p=e.u},function(e){f=e.q},function(){}],execute:function(){const y={class:"page-middle-wrapper"},g=[u("h4",null,null,-1)];e("default",t({setup(e){p();const t=n(),u=a(),I=r(""),{extraInfo:b,templateId:C,insurerCode:h,productCode:m}=u.query;let j={};try{j=JSON.parse(decodeURIComponent(b))}catch(E){}const{pageCode:x,templateId:q,openId:w,tenantId:v}=j,$=()=>{try{const e=w?C:q;if(e)return`/baseInsurance/${d[e]}`;switch(x){case l.FREE:return`/chuangxin/baigebao/${x}`;case l.COMMON:return"/internet/productDetail";case l.PACKAGE:return"/internet/productDetail/package";default:return""}}catch(e){return""}},D=e=>{i({param:e}).then((({code:n,data:a})=>{if("10000"===n&&a){let n="/productDetail";if("proposalId"in u.query&&(n="/trial"),w){const n=$();t.replace(`${n}?${e}`)}else(e=>{let n=e;const a=$();a&&(n=a),t.replace({path:n,query:u.query})})(n)}else I.value="验证失败"}))};return c((()=>{w?(async()=>{const{code:e,data:t}=await f({insurerCode:h,productCode:m,tenantId:v,extraMap:{...j,templateId:C}});"10000"===e&&D((t||"").split("?")[1])})():D(window.location.search.replace("?",""))})),(e,t)=>(o(),s("div",y,g))}}))}}}));

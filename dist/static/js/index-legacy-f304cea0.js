System.register(["./vendor-legacy-4750b114.js","./index-legacy-4313be2d.js","./infoCollection-legacy-3192302e.js","./trial-legacy-ab139463.js"],(function(e){"use strict";var t,n,a,r,c,o,u,s,l,i,d,p;return{setters:[function(e){t=e.m,n=e.ab,a=e.u,r=e.r,c=e.n,o=e.t,u=e.C,s=e.E},function(e){l=e.Q},function(e){i=e.f,d=e.P},function(e){p=e.q}],execute:function(){const f={class:"page-middle-wrapper"},y=[s("h4",null,null,-1)];e("default",t({setup(e){const t=n(),s=a(),g=r(""),{extraInfo:C,templateId:I,insurerCode:h,productCode:m}=s.query;let b={};try{b=JSON.parse(decodeURIComponent(C))}catch($){}const{pageCode:q,templateId:w,openId:x,tenantId:j}=b,v=()=>{try{const e=x?I:w;if(e)return`/baseInsurance/${i[e]}`;switch(q){case d.FREE:return`/chuangxin/baigebao/${q}`;case d.COMMON:return"/internet/productDetail";case d.PACKAGE:return"/internet/productDetail/package";default:return""}}catch(e){return""}},E=e=>{l({param:e}).then((({code:n,data:a})=>{if("10000"===n&&a){let n="/productDetail";if("proposalId"in s.query&&(n="/trial"),x){const n=v();t.replace(`${n}?${e}`)}else(e=>{let n=e;const a=v();a&&(n=a),t.replace({path:n,query:s.query})})(n)}else g.value="验证失败"}))};return c((()=>{x?(async()=>{const{code:e,data:t}=await p({insurerCode:h,productCode:m,tenantId:j,extraMap:{...b,templateId:I}});"10000"===e&&E((t||"").split("?")[1])})():E(window.location.search.replace("?",""))})),(e,t)=>(o(),u("div",f,y))}}))}}}));

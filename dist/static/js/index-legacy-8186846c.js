System.register(["./index-legacy-f6186c79.js","./index-legacy-6167ce30.js","./infoCollection-legacy-ce2a7594.js","./trial-legacy-c82fa601.js","./pdfdist-legacy-3ac4c460.js"],(function(e){"use strict";var t,n,a,c,r,o,d,s,i,u,l,p,f;return{setters:[function(e){t=e.d,n=e.u,a=e.a,c=e.r,r=e.an,o=e.c,d=e.g,s=e.av,i=e.i},function(e){u=e.l},function(e){l=e.f,p=e.P},function(e){f=e.q},function(){}],execute:function(){const g={class:"page-middle-wrapper"},y=[i("h4",null,null,-1)];e("default",t({setup(e){const t=n(),i=a(),C=c(""),{extraInfo:I,agencyCode:h,templateId:m,pageCode:x,insurerCode:$,productCode:j,code:w}=i.query;let R={};try{R=JSON.parse(decodeURIComponent(I))}catch(A){}const{templateId:U,openId:v,tenantId:E}=R,b=()=>{try{const e=v?m:U;if(e)return`/baseInsurance/${l[e]}`;switch(x){case p.FREE:return`/chuangxin/baigebao/${x}`;case p.COMMON:return"/internet/productDetail";case p.UPGRADE:return"/internet/guaranteeUpgrade";case p.PACKAGE:return"/internet/productDetail/package";default:return""}}catch(e){return""}},q=e=>{s({param:e}).then((({code:n,data:a})=>{if("10000"===n&&a)if(v){const n=b();t.replace(encodeURI(`${n}?${e}`))}else(e=>{let n=e;const a=b();a&&(n=a),t.replace(encodeURI(`${n}?${u.stringify(i.query)}`))})();else C.value="验证失败"}))};return r((()=>{v?(async()=>{const{code:e,data:t}=await f({insurerCode:$,productCode:j,tenantId:E,agencyCode:h,extraMap:{...R,templateId:m}});"10000"===e&&q((t||"").split("?")[1])})():q(window.location.search.replace("?",""))})),(e,t)=>(o(),d("div",g,y))}}))}}}));

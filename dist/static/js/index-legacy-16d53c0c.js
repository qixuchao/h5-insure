System.register(["./index-legacy-e92f8d98.js","./index-legacy-f9e5a3d9.js","./infoCollection-legacy-53ec0e51.js","./trial-legacy-1bf98139.js","./pdfdist-legacy-27f39a85.js"],(function(e){"use strict";var t,n,a,c,r,o,d,s,i,u,l,p,f;return{setters:[function(e){t=e.d,n=e.u,a=e.a,c=e.r,r=e.ao,o=e.c,d=e.g,s=e.aw,i=e.i},function(e){u=e.l},function(e){l=e.f,p=e.P},function(e){f=e.q},function(){}],execute:function(){const g={class:"page-middle-wrapper"},y=[i("h4",null,null,-1)];e("default",t({setup(e){const t=n(),i=a(),I=c(""),{extraInfo:C,agencyCode:m,templateId:x,pageCode:h,insurerCode:w,productCode:$,code:j}=i.query;let O={};try{O=JSON.parse(decodeURIComponent(C))}catch(S){}const{templateId:R,openId:b,tenantId:q}=O,v=()=>{try{const e=b?x:R;if(e)return`/baseInsurance/${l[e]}`;switch(h){case p.FREE:return`/chuangxin/baigebao/${h}`;case p.COMMON:return"/internet/productDetail";case p.PACKAGE:return"/internet/productDetail/package";default:return""}}catch(e){return""}},N=e=>{s({param:e}).then((({code:n,data:a})=>{if("10000"===n&&a)if(b){const n=v(),a=u.parse(e);a.extraInfo=encodeURIComponent(JSON.stringify(O)),t.replace((c=`${n}?${u.stringify(a)}`,decodeURIComponent(c).includes("code=")?c:`${c}&code=${j}`))}else(e=>{let n=e;const a=v();a&&(n=a);const c=i.query;c.extraInfo&&(c.extraInfo=encodeURIComponent(JSON.stringify(O))),t.replace({path:n,query:c})})();else I.value="验证失败";var c}))};return r((()=>{b?(async()=>{const{code:e,data:t}=await f({insurerCode:w,productCode:$,tenantId:q,agencyCode:m,extraMap:{...O,templateId:x}});"10000"===e&&N((t||"").split("?")[1])})():N(window.location.search.replace("?",""))})),(e,t)=>(o(),d("div",g,y))}}))}}}));

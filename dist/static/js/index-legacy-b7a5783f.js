System.register(["./vendor-legacy-9974b414.js","./index-legacy-26cf66e4.js","./infoCollection-legacy-7f8426be.js"],(function(e){"use strict";var t,r,n,a,c,u,i,o,l,s;return{setters:[function(e){t=e.h,r=e.aa,n=e.P,a=e.G,c=e.o,u=e.k,i=e.p,o=e.A},function(e){l=e.Q},function(e){s=e.P}],execute:function(){const p={class:"page-middle-wrapper"},d=[o("h4",null,null,-1)];e("default",t({setup(e){const t=r(),o=n(),f=a("");return c((()=>{l({param:window.location.search.replace("?","")}).then((({code:e,data:r})=>{if("10000"===e&&r){let e="/productDetail";"proposalId"in o.query&&(e="/trial");const r=(()=>{try{const{pageCode:e}=o.query||{};switch(e){case s.FREE:return`/chuangxin/baigebao/${e}`;case s.COMMON:return"/internet/productDetail";case s.UPGRADE:return"/internet/guaranteeUpgrade";case s.PACKAGE:return"/internet/productDetail/package";default:return""}}catch(e){return""}})();r&&(e=r),t.replace({path:e,query:o.query})}else f.value="验证失败"}))})),(e,t)=>(u(),i("div",p,d))}}))}}}));

System.register(["./vendor-legacy-9974b414.js","./index-legacy-dd101abb.js","./infoCollection-legacy-41a80aac.js"],(function(e){"use strict";var t,a,r,n,c,u,i,o,l,s;return{setters:[function(e){t=e.h,a=e.aa,r=e.P,n=e.G,c=e.o,u=e.k,i=e.p,o=e.A},function(e){l=e.Q},function(e){s=e.P}],execute:function(){const d={class:"page-middle-wrapper"},p=[o("h4",null,null,-1)];e("default",t({setup(e){const t=a(),o=r(),f=n("");return c((()=>{l({param:window.location.search.replace("?","")}).then((({code:e,data:a})=>{if("10000"===e&&a){let e="/productDetail";"proposalId"in o.query&&(e="/trial");const a=(()=>{try{const{pageCode:e}=o.query||{};switch(e){case s.FREE:return`/chuangxin/baigebao/${e}`;case s.COMMON:return"/internet/productDetail";case s.PACKAGE:return"/internet/productDetail/package";default:return""}}catch(e){return""}})();a&&(e=a),t.replace({path:e,query:o.query})}else f.value="验证失败"}))})),(e,t)=>(u(),i("div",d,p))}}))}}}));

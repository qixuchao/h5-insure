System.register(["./vendor-legacy-da8f33fe.js","./index-legacy-9e84ad02.js","./infoCollection-legacy-01fdd4de.js"],(function(e){"use strict";var t,n,r,a,c,u,i,o,l,s;return{setters:[function(e){t=e.g,n=e.a9,r=e.O,a=e.E,c=e.o,u=e.j,i=e.n,o=e.z},function(e){l=e.Q},function(e){s=e.P}],execute:function(){const d={class:"page-middle-wrapper"},p=[o("h4",null,null,-1)];e("default",t({setup(e){const t=n(),o=r(),f=a("");return c((()=>{l({param:window.location.search.replace("?","")}).then((({code:e,data:n})=>{if("10000"===e&&n){let e="/productDetail";"proposalId"in o.query&&(e="/trial");const n=(()=>{try{const{pageCode:e}=o.query||{};switch(e){case s.FREE:return`/chuangxin/baigebao/${e}`;case s.COMMON:return"/internet/productDetail";case s.PACKAGE:return"/internet/productDetail/package";default:return""}}catch(e){return""}})();n&&(e=n),t.replace({path:e,query:o.query})}else f.value="验证失败"}))})),(e,t)=>(u(),i("div",d,p))}}))}}}));

System.register(["./vendor-legacy-92a8f610.js","./index-legacy-21c4d561.js","./infoCollection-legacy-b5e0bc8b.js","./utils-legacy-20e4723c.js"],(function(e){"use strict";var t,n,r,a,c,u,i,l,o,s;return{setters:[function(e){t=e.g,n=e.a9,r=e.O,a=e.E,c=e.o,u=e.j,i=e.n,l=e.z},function(e){o=e.M},function(e){s=e.P},function(){}],execute:function(){const d={class:"page-middle-wrapper"},p=[l("h4",null,null,-1)];e("default",t({setup(e){const t=n(),l=r(),f=a("");return c((()=>{o({param:window.location.search.replace("?","")}).then((({code:e,data:n})=>{if("10000"===e&&n){let e="/productDetail";"proposalId"in l.query&&(e="/trial");const n=(()=>{try{const{pageCode:e}=l.query||{};switch(e){case s.FREE:return`/chuangxin/baigebao/${e}`;case s.COMMON:return"/internet/productDetail";case s.PACKAGE:return"/internet/productDetail/package";default:return""}}catch(e){return""}})();n&&(e=n),t.replace({path:e,query:l.query})}else f.value="验证失败"}))})),(e,t)=>(u(),i("div",d,p))}}))}}}));

System.register(["./vendor-legacy-da8f33fe.js","./index-legacy-13bfccde.js","./infoCollection-legacy-ab6aeb60.js"],(function(e){"use strict";var t,a,n,r,c,u,i,o,l,s;return{setters:[function(e){t=e.g,a=e.a9,n=e.O,r=e.E,c=e.o,u=e.j,i=e.n,o=e.z},function(e){l=e.Q},function(e){s=e.P}],execute:function(){const d={class:"page-middle-wrapper"},p=[o("h4",null,null,-1)];e("default",t({setup(e){const t=a(),o=n(),f=r("");return c((()=>{l({param:window.location.search.replace("?","")}).then((({code:e,data:a})=>{if("10000"===e&&a){let e="/productDetail";"proposalId"in o.query&&(e="/trial");const a=(()=>{try{const{pageCode:e}=o.query||{};switch(e){case s.FREE:return`/chuangxin/baigebao/${e}`;case s.COMMON:return"/internet/productDetail";case s.PACKAGE:return"/internet/productDetail/package";default:return""}}catch(e){return""}})();a&&(e=a),t.replace({path:e,query:o.query})}else f.value="验证失败"}))})),(e,t)=>(u(),i("div",d,p))}}))}}}));

System.register(["./vendor-legacy-3ea6fac5.js","./index-legacy-aabc01f7.js"],(function(e){"use strict";var a,t,r,n,c,u,o,l,s;return{setters:[function(e){a=e.h,t=e.aa,r=e.P,n=e.G,c=e.o,u=e.k,o=e.p,l=e.A},function(e){s=e.L}],execute:function(){const i={class:"page-middle-wrapper"},p=[l("h4",null,null,-1)];e("default",a({setup(e){const a=t(),l=r(),d=n("");return c((()=>{s({param:window.location.search.replace("?","")}).then((({code:e,data:t})=>{if("10000"===e&&t){let e="/productDetail";"proposalId"in l.query&&(e="/trial");const t=(()=>{try{const{pageCode:e}=l.query||{};return e?`/chuangxin/baigebao/${e}`:""}catch(e){return""}})();t&&(e=t),a.replace({path:e,query:l.query})}else d.value="验证失败"}))})),(e,a)=>(u(),o("div",i,p))}}))}}}));

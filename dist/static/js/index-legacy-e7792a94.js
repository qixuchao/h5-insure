System.register(["./vendor-legacy-92a8f610.js","./index-legacy-e98e2342.js"],(function(e){"use strict";var t,r,a,n,c,u,o,l,s;return{setters:[function(e){t=e.g,r=e.a9,a=e.O,n=e.E,c=e.o,u=e.j,o=e.n,l=e.z},function(e){s=e.L}],execute:function(){const i={class:"page-middle-wrapper"},d=[l("h4",null,null,-1)];e("default",t({setup(e){const t=r(),l=a(),p=n("");return c((()=>{s({param:window.location.search.replace("?","")}).then((({code:e,data:r})=>{if("10000"===e&&r){let e="/productDetail";"proposalId"in l.query&&(e="/trial");const r=(()=>{try{const{pageCode:e}=l.query||{};return e?`/chuangxin/baigebao/${e}`:""}catch(e){return""}})();r&&(e=r),t.replace({path:e,query:l.query})}else p.value="验证失败"}))})),(e,t)=>(u(),o("div",i,d))}}))}}}));

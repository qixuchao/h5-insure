System.register(["./vendor-legacy-2ed1ad67.js","./index-legacy-6cc4a260.js"],(function(e){"use strict";var t,a,r,n,c,u,o,l,s;return{setters:[function(e){t=e.g,a=e.a9,r=e.O,n=e.E,c=e.o,u=e.j,o=e.n,l=e.z},function(e){s=e.L}],execute:function(){const i={class:"page-middle-wrapper"},d=[l("h4",null,null,-1)];e("default",t({setup(e){const t=a(),l=r(),p=n("");return c((()=>{s({param:window.location.search.replace("?","")}).then((({code:e,data:a})=>{if("10000"===e&&a){let e="/productDetail";"proposalId"in l.query&&(e="/trial");const a=(()=>{try{const{pageCode:e}=l.query||{};return e?`/chuangxin/baigebao/${e}`:""}catch(e){return""}})();a&&(e=a),t.replace({path:e,query:l.query})}else p.value="验证失败"}))})),(e,t)=>(u(),o("div",i,d))}}))}}}));

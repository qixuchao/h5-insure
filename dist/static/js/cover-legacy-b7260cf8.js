System.register(["./vendor-legacy-2638a9d6.js","./compositionProposal-legacy-a3083669.js","./index-legacy-f99f36f3.js"],(function(e){"use strict";var t,n,o,a,s,c,r,u,i,l;return{setters:[function(e){t=e.g,n=e.O,o=e.a9,a=e.E,s=e.h,c=e.ag,r=e.j,u=e.n,i=e.z},function(e){l=e.b},function(){}],execute:function(){const d=["src"];e("default",t({setup(e){const t=n(),f=o();let g=null;const{themeId:m,tenantId:p}=t.query,y=a(),v=()=>{f.push({path:"/compositionProposal",query:t.query})};return s((()=>{m?(async()=>{const{code:e,data:t}=await l({id:m,tenantId:p});"10000"===e&&(y.value=t.showConfig,g=setTimeout((()=>{v()}),3e3))})():v()})),c((()=>{clearTimeout(g)})),(e,t)=>(r(),u("div",{class:"cover-wrap",onClick:v},[i("img",{src:y.value?.frontImage,alt:""},null,8,d)]))}}))}}}));

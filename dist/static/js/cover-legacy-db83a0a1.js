System.register(["./vendor-legacy-c308286a.js","./compositionProposal-legacy-e192c165.js","./index-legacy-3a4a46f5.js"],(function(e){"use strict";var t,n,a,o,s,c,r,i,u,l;return{setters:[function(e){t=e.i,n=e.P,a=e.aa,o=e.r,s=e.k,c=e.ah,r=e.m,i=e.s,u=e.B},function(e){l=e.b},function(){}],execute:function(){const d=["src"];e("default",t({setup(e){const t=n(),f=a();let m=null;const{themeId:p,tenantId:y}=t.query,g=o(),v=()=>{f.push({path:"/compositionProposal",query:t.query})};return s((()=>{p?(async()=>{const{code:e,data:t}=await l({id:p,tenantId:y});"10000"===e&&(g.value=t.showConfig,m=setTimeout((()=>{v()}),3e3))})():v()})),c((()=>{clearTimeout(m)})),(e,t)=>(r(),i("div",{class:"cover-wrap",onClick:v},[u("img",{src:g.value?.frontImage,alt:""},null,8,d)]))}}))}}}));

System.register(["./vendor-legacy-c308286a.js","./compositionProposal-legacy-3d32fa00.js","./index-legacy-462719c7.js"],(function(e){"use strict";var t,n,o,a,s,c,r,i,u,l;return{setters:[function(e){t=e.i,n=e.P,o=e.aa,a=e.r,s=e.k,c=e.ah,r=e.m,i=e.s,u=e.B},function(e){l=e.b},function(){}],execute:function(){const d=["src"];e("default",t({setup(e){const t=n(),f=o();let m=null;const{themeId:p,tenantId:y}=t.query,g=a(),v=()=>{f.push({path:"/compositionProposal",query:t.query})};return s((()=>{p?(async()=>{const{code:e,data:t}=await l({id:p,tenantId:y});"10000"===e&&(g.value=t.showConfig,m=setTimeout((()=>{v()}),3e3))})():v()})),c((()=>{clearTimeout(m)})),(e,t)=>(r(),i("div",{class:"cover-wrap",onClick:v},[u("img",{src:g.value?.frontImage,alt:""},null,8,d)]))}}))}}}));

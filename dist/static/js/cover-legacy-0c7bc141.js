System.register(["./vendor-legacy-4a30a9db.js","./compositionProposal-legacy-fa38e083.js","./index-legacy-83db4b71.js"],(function(e){"use strict";var t,n,a,o,s,c,r,u,i,l;return{setters:[function(e){t=e.h,n=e.P,a=e.aa,o=e.G,s=e.j,c=e.ah,r=e.k,u=e.p,i=e.A},function(e){l=e.b},function(){}],execute:function(){const d=["src"];e("default",t({setup(e){const t=n(),f=a();let p=null;const{themeId:m,tenantId:y}=t.query,g=o(),h=()=>{f.push({path:"/compositionProposal",query:t.query})};return s((()=>{m?(async()=>{const{code:e,data:t}=await l({id:m,tenantId:y});"10000"===e&&(g.value=t.showConfig,p=setTimeout((()=>{h()}),3e3))})():h()})),c((()=>{clearTimeout(p)})),(e,t)=>(r(),u("div",{class:"cover-wrap",onClick:h},[i("img",{src:g.value?.frontImage,alt:""},null,8,d)]))}}))}}}));

System.register(["./index-legacy-a9759f65.js","./compositionProposal-legacy-8f811dee.js","./pdfdist-legacy-70b86b2a.js"],(function(e){"use strict";var t,n,o,s,a,c,i,u,r,l;return{setters:[function(e){t=e.d,n=e.a,o=e.u,s=e.r,a=e.z,c=e.aS,i=e.c,u=e.g,r=e.i},function(e){l=e.b},function(){}],execute:function(){const d=["src"];e("default",t({setup(e){const t=n(),f=o();let p=null;const{themeId:g,tenantId:m}=t.query,y=s(),v=()=>{f.push({path:"/compositionProposal",query:t.query})};return a((()=>{g?(async()=>{const{code:e,data:t}=await l({id:g,tenantId:m});"10000"===e&&(y.value=t.showConfig,p=setTimeout((()=>{v()}),3e3))})():v()})),c((()=>{clearTimeout(p)})),(e,t)=>(i(),u("div",{class:"cover-wrap",onClick:v},[r("img",{src:y.value?.frontImage,alt:""},null,8,d)]))}}))}}}));

System.register(["./index-legacy-f3a9334f.js","./compositionProposal-legacy-cb8a84ac.js","./pdfdist-legacy-1192d443.js"],(function(t){"use strict";var e,n,a,c,o,s,i,u,r,l;return{setters:[function(t){e=t.d,n=t.a,a=t.u,c=t.r,o=t.z,s=t.aS,i=t.c,u=t.g,r=t.i},function(t){l=t.b},function(){}],execute:function(){const d=["src"];t("default",e({setup(t){const e=n(),f=a();let p=null;const{themeId:g,tenantId:m}=e.query,y=c(),v=()=>{f.push({path:"/compositionProposal",query:e.query})};return o((()=>{g?(async()=>{const{code:t,data:e}=await l({id:g,tenantId:m});"10000"===t&&(y.value=e.showConfig,p=setTimeout((()=>{v()}),3e3))})():v()})),s((()=>{clearTimeout(p)})),(t,e)=>(i(),u("div",{class:"cover-wrap",onClick:v},[r("img",{src:y.value?.frontImage,alt:""},null,8,d)]))}}))}}}));

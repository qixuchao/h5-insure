System.register(["./index-legacy-888dc198.js","./compositionProposal-legacy-0339a55b.js","./pdfh5-legacy-9f98dc45.js"],(function(e){"use strict";var t,n,c,o,s,a,r,u,i,l,d;return{setters:[function(e){t=e.d,n=e.a,c=e.u,o=e.r,s=e.y,a=e.aQ,r=e.c,u=e.h,i=e.j,l=e.g},function(e){d=e.b},function(){}],execute:function(){const f=["src"];e("default",t({__name:"cover",setup(e){const t=n(),m=c();let p=null;const{themeId:y,tenantId:g}=t.query,h=o(),v=()=>{m.push({path:"/compositionProposal",query:t.query})};return s((()=>{y?(async()=>{const{code:e,data:t}=await d({id:y,tenantId:g});"10000"===e&&(h.value=t.showConfig,p=setTimeout((()=>{v()}),3e3))})():v()})),a((()=>{clearTimeout(p)})),(e,t)=>(r(),u("div",{class:"cover-wrap",onClick:v},[i("img",{src:l(h)?.frontImage,alt:""},null,8,f)]))}}))}}}));

System.register(["./index-legacy-c0acd4e9.js","./compositionProposal-legacy-c8a49b26.js","./pdfh5-legacy-9f98dc45.js"],(function(e){"use strict";var t,n,c,o,a,s,r,u,i,l,d;return{setters:[function(e){t=e.d,n=e.a,c=e.u,o=e.r,a=e.G,s=e.bS,r=e.c,u=e.h,i=e.j,l=e.g},function(e){d=e.b},function(){}],execute:function(){const f=["src"];e("default",t({__name:"cover",setup(e){const t=n(),m=c();let p=null;const{themeId:g,tenantId:v}=t.query,y=o(),h=()=>{m.push({path:"/compositionProposal",query:t.query})};return a((()=>{g?(async()=>{const{code:e,data:t}=await d({id:g,tenantId:v});"10000"===e&&(y.value=t.showConfig,p=setTimeout((()=>{h()}),3e3))})():h()})),s((()=>{clearTimeout(p)})),(e,t)=>{var n;return r(),u("div",{class:"cover-wrap",onClick:h},[i("img",{src:null===(n=l(y))||void 0===n?void 0:n.frontImage,alt:""},null,8,f)])}}}))}}}));

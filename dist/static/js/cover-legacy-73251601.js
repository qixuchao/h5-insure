System.register(["./vendor-legacy-f6dc954c.js","./compositionProposal-legacy-1dc50022.js","./index-legacy-ce641221.js"],(function(e){"use strict";var t,n,o,c,a,s,r,u,i,l;return{setters:[function(e){t=e.h,n=e.P,o=e.aa,c=e.G,a=e.j,s=e.ah,r=e.k,u=e.p,i=e.A},function(e){l=e.b},function(){}],execute:function(){const d=["src"];e("default",t({setup(e){const t=n(),f=o();let p=null;const{themeId:v,tenantId:m}=t.query,y=c(),g=()=>{f.push({path:"/compositionProposal",query:t.query})};return a((()=>{v?(async()=>{const{code:e,data:t}=await l({id:v,tenantId:m});"10000"===e&&(y.value=t.showConfig,p=setTimeout((()=>{g()}),3e3))})():g()})),s((()=>{clearTimeout(p)})),(e,t)=>{var n;return r(),u("div",{class:"cover-wrap",onClick:g},[i("img",{src:null===(n=y.value)||void 0===n?void 0:n.frontImage,alt:""},null,8,d)])}}}))}}}));

System.register(["./vendor-legacy-b4f39fe8.js","./compositionProposal-legacy-73d3c573.js","./index-legacy-728988f3.js"],(function(e){"use strict";var t,n,o,s,a,c,r,u,i,l;return{setters:[function(e){t=e.h,n=e.P,o=e.aa,s=e.r,a=e.j,c=e.ah,r=e.m,u=e.s,i=e.B},function(e){l=e.b},function(){}],execute:function(){const d=["src"];e("default",t({setup(e){const t=n(),f=o();let m=null;const{themeId:p,tenantId:y}=t.query,g=s(),h=()=>{f.push({path:"/compositionProposal",query:t.query})};return a((()=>{p?(async()=>{const{code:e,data:t}=await l({id:p,tenantId:y});"10000"===e&&(g.value=t.showConfig,m=setTimeout((()=>{h()}),3e3))})():h()})),c((()=>{clearTimeout(m)})),(e,t)=>(r(),u("div",{class:"cover-wrap",onClick:h},[i("img",{src:g.value?.frontImage,alt:""},null,8,d)]))}}))}}}));

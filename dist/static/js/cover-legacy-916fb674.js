System.register(["./vendor-legacy-7cfa1af5.js","./compositionProposal-legacy-606a6ff7.js","./index-legacy-65414b08.js"],(function(e){"use strict";var t,n,o,a,s,c,r,u,i,l;return{setters:[function(e){t=e.g,n=e.O,o=e.a9,a=e.E,s=e.h,c=e.ag,r=e.j,u=e.n,i=e.z},function(e){l=e.b},function(){}],execute:function(){const d=["src"];e("default",t({setup(e){const t=n(),f=o();let g=null;const{themeId:v,tenantId:m}=t.query,p=a(),y=()=>{f.push({path:"/compositionProposal",query:t.query})};return s((()=>{v?(async()=>{const{code:e,data:t}=await l({id:v,tenantId:m});"10000"===e&&(p.value=t.showConfig,g=setTimeout((()=>{y()}),3e3))})():y()})),c((()=>{clearTimeout(g)})),(e,t)=>{var n;return r(),u("div",{class:"cover-wrap",onClick:y},[i("img",{src:null===(n=p.value)||void 0===n?void 0:n.frontImage,alt:""},null,8,d)])}}}))}}}));

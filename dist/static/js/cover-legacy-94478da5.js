System.register(["./index-legacy-9d74f2b7.js","./compositionProposal-legacy-ed6dee1c.js","./pdfh5-legacy-783b46b8.js"],(function(e){"use strict";var t,n,o,c,s,a,u,i,r,l;return{setters:[function(e){t=e.d,n=e.a,o=e.u,c=e.r,s=e.y,a=e.aQ,u=e.c,i=e.g,r=e.i},function(e){l=e.b},function(){}],execute:function(){const d=["src"];e("default",t({setup(e){const t=n(),f=o();let p=null;const{themeId:y,tenantId:g}=t.query,m=c(),h=()=>{f.push({path:"/compositionProposal",query:t.query})};return s((()=>{y?(async()=>{const{code:e,data:t}=await l({id:y,tenantId:g});"10000"===e&&(m.value=t.showConfig,p=setTimeout((()=>{h()}),3e3))})():h()})),a((()=>{clearTimeout(p)})),(e,t)=>(u(),i("div",{class:"cover-wrap",onClick:h},[r("img",{src:m.value?.frontImage,alt:""},null,8,d)]))}}))}}}));

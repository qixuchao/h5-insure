System.register(["./index-legacy-7492f254.js","./compositionProposal-legacy-a9f317ba.js","./pdfh5-legacy-783b46b8.js"],(function(t){"use strict";var e,n,o,a,s,c,u,i,r,l;return{setters:[function(t){e=t.d,n=t.a,o=t.u,a=t.r,s=t.y,c=t.aN,u=t.c,i=t.g,r=t.i},function(t){l=t.b},function(){}],execute:function(){const d=["src"];t("default",e({setup(t){const e=n(),f=o();let p=null;const{themeId:y,tenantId:g}=e.query,m=a(),h=()=>{f.push({path:"/compositionProposal",query:e.query})};return s((()=>{y?(async()=>{const{code:t,data:e}=await l({id:y,tenantId:g});"10000"===t&&(m.value=e.showConfig,p=setTimeout((()=>{h()}),3e3))})():h()})),c((()=>{clearTimeout(p)})),(t,e)=>(u(),i("div",{class:"cover-wrap",onClick:h},[r("img",{src:m.value?.frontImage,alt:""},null,8,d)]))}}))}}}));

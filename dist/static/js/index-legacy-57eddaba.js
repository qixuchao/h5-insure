System.register(["./index-legacy-b3b7dca5.js","./infoCollection-legacy-b66aa230.js","./constant-legacy-c9c30061.js","./pdfh5-legacy-9f98dc45.js"],(function(e){"use strict";var n,t,a,o,r,d,c,s,u,i,l,f,p,g;return{setters:[function(e){n=e.d,t=e.u,a=e.a,o=e.r,r=e.aE,d=e.c,c=e.h,s=e.aR,u=e.aS,i=e.j,l=e.am,f=e.T},function(e){p=e.f},function(e){g=e.T},function(){}],execute:function(){const y={class:"page-middle-wrapper"},I=[i("h4",null,null,-1)];e("default",n({__name:"index",setup(e){const n=t(),i=a(),C=o(""),{extraInfo:m,agencyCode:h,insurerCode:v,productCode:x,agentCode:b,saleChannelId:j}=i.query;console.log("middlePage route.query-------",i.query);let q={};try{q=JSON.parse(decodeURIComponent(m))}catch($){}const{templateId:R,tenantId:N,orderNo:S}=q,U=e=>{s({param:e}).then((({code:e,data:t})=>{"10000"===e&&t?(()=>{if(R===g.UPGRADE&&S){var e;const t={insurerCode:v,productCode:x,tenantId:N||(null===(e=i.query)||void 0===e?void 0:e.tenantId),agencyCode:h,agentCode:b,orderNo:S,saleChannelId:j};return t.extraInfo=decodeURIComponent(JSON.stringify({...q,templateId:R})),void n.push(`/baseInsurance/upgrade?${l.stringify(t)}`)}if(!R||!p[R])return void f("链接上模板ID不正确不正确，请检查链接");const t=`/baseInsurance/${p[R]}`;n.replace(encodeURI(`${t}?${l.stringify(i.query)}`))})():C.value="验证失败"}))};return r((()=>{var e;U((e=window.location.search,u(["ext"],e).split("?")[1]))})),(e,n)=>(d(),c("div",y,I))}}))}}}));

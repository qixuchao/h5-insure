System.register(["./index-legacy-f1256a32.js","./infoCollection-legacy-a20bfe08.js","./pdfh5-legacy-9f98dc45.js"],(function(e){"use strict";var n,t,c,o,r,a,s,u;return{setters:[function(e){n=e.d,t=e.u,c=e.a,o=e.aE,r=e.c,a=e.h,s=e.j},function(e){u=e.f},function(){}],execute:function(){const l={class:"page-middle-wrapper"},f=[s("h4",null,null,-1)];e("default",n({__name:"index",setup(e){const n=t(),s=c(),{extraInfo:i}=s.query;console.log("route.query-------",s.query);let d={};try{d=JSON.parse(decodeURIComponent(i))}catch(y){}console.log("extraInfo",d);const{templateId:p}=d;return o((()=>{(()=>{const e=`/baseInsurance/${u[p]}`;n.replace({path:e,query:{...s.query,preview:"1"}})})()})),(e,n)=>(r(),a("div",l,f))}}))}}}));

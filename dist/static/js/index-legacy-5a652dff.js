System.register(["./index-legacy-9e14c636.js","./infoCollection-legacy-6d787a79.js","./pdfh5-legacy-9f98dc45.js"],(function(e){"use strict";var n,t,c,o,r,a,s,u;return{setters:[function(e){n=e.d,t=e.u,c=e.a,o=e.aE,r=e.c,a=e.h,s=e.j},function(e){u=e.f},function(){}],execute:function(){const l={class:"page-middle-wrapper"},i=[s("h4",null,null,-1)];e("default",n({__name:"index",setup(e){const n=t(),s=c(),{extraInfo:d}=s.query;console.log("route.query-------",s.query);let f={};try{f=JSON.parse(decodeURIComponent(d))}catch(y){}console.log("extraInfo",f);const{templateId:p}=f;return o((()=>{(()=>{const e=`/baseInsurance/${u[p]}`;n.replace({path:e,query:{...s.query,preview:"1"}})})()})),(e,n)=>(r(),a("div",l,i))}}))}}}));

System.register(["./index-legacy-a5e5a4bc.js","./pdfh5-legacy-9f98dc45.js"],(function(e){"use strict";var t,n,r,l,c,o,u,s,d,i;return{setters:[function(e){t=e.d,n=e.a,r=e.D,l=e.r,c=e.G,o=e.T,u=e.c,s=e.h,d=e.g},function(e){i=e.P}],execute:function(){const a=["id"];e("default",t({__name:"index",setup(e){const t=n(),f=r(),g=l(null);return c((()=>{const{title:e,url:n}=t.query;document.title=e||"",n?(e=>{try{var t;g.value=new i(`#${f}`,{pdfurl:e,renderType:"svg",lazy:!0}),null===(t=g.value)||void 0===t||t.on("complete",((e,t,n)=>{console.log(`状态：${e}，信息：${t}，耗时：${n}毫秒`),"error"===e&&o("文件损坏，无法打开！")}))}catch(n){console.log("error",n)}})(n):o("pdf文件为空")})),(e,t)=>(u(),s("div",{id:d(f)},null,8,a))}}))}}}));

System.register(["./index-legacy-888dc198.js","./pdfh5-legacy-9f98dc45.js"],(function(e){"use strict";var t,n,r,c,u,l,d,i,s,o;return{setters:[function(e){t=e.d,n=e.a,r=e.v,c=e.r,u=e.y,l=e.T,d=e.c,i=e.h,s=e.g},function(e){o=e.P}],execute:function(){const a=["id"];e("default",t({__name:"index",setup(e){const t=n(),f=r(),y=c(null);return u((()=>{const{title:e,url:n}=t.query;document.title=e||"",n?(e=>{try{y.value=new o(`#${f}`,{pdfurl:e,renderType:"svg",lazy:!0}),y.value?.on("complete",((e,t,n)=>{"error"===e&&l("文件损坏，无法打开！")}))}catch(t){}})(n):l("pdf文件为空")})),(e,t)=>(d(),i("div",{id:s(f)},null,8,a))}}))}}}));

System.register(["./vendor-legacy-76daf859.js","./index-legacy-dc74abd8.js"],(function(e){"use strict";var t,n,o,r,c,s,d,i,a,l;return{setters:[function(e){t=e.h,n=e.ad,o=e.ae,r=e.P,c=e.af,s=e.j,d=e.T,i=e.k,a=e.p,l=e.B},function(){}],execute:function(){const u=["id"];e("default",t({setup(e){n.exports.GlobalWorkerOptions.workerSrc=o;const t=r(),g=c();return s((()=>{const{title:e,url:o}=t.query;document.title=e||"",o?(e=>{d.loading({forbidClick:!0});const t=document.getElementById(g);t.hasChildNodes()||n.exports.getDocument({url:e}).promise.then((e=>{const n=e.numPages;for(let o=1;o<=n;o++)e.getPage(o).then((e=>{const n=e.getViewport({scale:1}),o=document.createElement("canvas"),r=o.getContext("2d");o.width=n.width,o.height=n.height,o.style.width="100%",t.append(o);const c={canvasContext:r,viewport:n};e.render(c)}));d.clear()}))})(o):d("pdf文件为空")})),(e,t)=>(i(),a("div",{id:l(g)},null,8,u))}}))}}}));

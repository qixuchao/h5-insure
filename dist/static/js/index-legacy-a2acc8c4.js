System.register(["./vendor-legacy-92a8f610.js","./index-legacy-13de687e.js"],(function(e){"use strict";var t,n,o,r,c,s,i,d,a,l;return{setters:[function(e){t=e.g,n=e.ac,o=e.ad,r=e.O,c=e.ae,s=e.h,i=e.T,d=e.j,a=e.n,l=e.A},function(){}],execute:function(){const u=["id"];e("default",t({setup(e){n.exports.GlobalWorkerOptions.workerSrc=o;const t=r(),g=c();return s((()=>{const{title:e,url:o}=t.query;document.title=e||"",o?(e=>{i.loading({forbidClick:!0});const t=document.getElementById(g);t.hasChildNodes()||n.exports.getDocument({url:e}).promise.then((e=>{const n=e.numPages;for(let o=1;o<=n;o++)e.getPage(o).then((e=>{const n=e.getViewport({scale:1}),o=document.createElement("canvas"),r=o.getContext("2d");o.width=n.width,o.height=n.height,o.style.width="100%",t.append(o);const c={canvasContext:r,viewport:n};e.render(c)}));i.clear()}))})(o):i("pdf文件为空")})),(e,t)=>(d(),a("div",{id:l(g)},null,8,u))}}))}}}));

System.register(["./vendor-legacy-eaff06a9.js","./index-legacy-dd3d5bf5.js"],(function(e){"use strict";var t,n,o,r,c,s,d,i,a,l;return{setters:[function(e){t=e.h,n=e.ab,o=e.ac,r=e.N,c=e.ad,s=e.j,d=e.T,i=e.k,a=e.x,l=e.z},function(){}],execute:function(){const u=["id"];e("default",t({setup(e){n.exports.GlobalWorkerOptions.workerSrc=o;const t=r(),g=c();return s((()=>{const{title:e,url:o}=t.query;document.title=e||"",o?(e=>{d.loading({forbidClick:!0});const t=document.getElementById(g);t.hasChildNodes()||n.exports.getDocument({url:e}).promise.then((e=>{const n=e.numPages;for(let o=1;o<=n;o++)e.getPage(o).then((e=>{const n=e.getViewport({scale:1}),o=document.createElement("canvas"),r=o.getContext("2d");o.width=n.width,o.height=n.height,o.style.width="100%",t.append(o);const c={canvasContext:r,viewport:n};e.render(c)}));d.clear()}))})(o):d("pdf文件为空")})),(e,t)=>(i(),a("div",{id:l(g)},null,8,u))}}))}}}));

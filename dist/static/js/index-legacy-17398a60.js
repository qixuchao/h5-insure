System.register(["./vendor-legacy-1a1e7db0.js","./pdf.worker.entry-legacy-c1f90c18.js","./pdf_viewer-legacy-7eb12e2a.js"],(function(e){"use strict";var t,n,r,o,c,s,i,d,a,l;return{setters:[function(e){t=e.g,n=e.Q,r=e.M,o=e.T,c=e.h,s=e.m,i=e.z},function(e){d=e.w,a=e.n},function(e){l=e.p}],execute:function(){const u=["id"];e("default",t({setup(e){l.exports.GlobalWorkerOptions.workerSrc=d;const t=n(),g=a();return r((()=>{const{url:e}=t.query;e?(e=>{o.loading({forbidClick:!0});const t=document.getElementById(g);t.hasChildNodes()||l.exports.getDocument({url:e}).promise.then((e=>{const n=e.numPages;for(let r=1;r<=n;r++)e.getPage(r).then((e=>{const n=e.getViewport({scale:1}),r=document.createElement("canvas"),o=r.getContext("2d");r.width=n.width,r.height=n.height,r.style.width="100%",t.append(r);const c={canvasContext:o,viewport:n};e.render(c)}));o.clear()}))})(e):o("pdf文件为空")})),(e,t)=>(c(),s("div",{id:i(g)},null,8,u))}}))}}}));

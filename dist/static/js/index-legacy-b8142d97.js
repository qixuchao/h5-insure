System.register(["./vendor-legacy-d53398f7.js","./index-legacy-f8050e98.js"],(function(e){"use strict";var t,n,o,r,s,c,i,d,a,l;return{setters:[function(e){t=e.h,n=e.ad,o=e.ae,r=e.P,s=e.af,c=e.j,i=e.T,d=e.m,a=e.s,l=e.C},function(){}],execute:function(){const u=["id"];e("default",t({setup(e){n.exports.GlobalWorkerOptions.workerSrc=o;const t=r(),g=s();return c((()=>{const{title:e,url:o}=t.query;document.title=e||"",o?(e=>{i.loading({forbidClick:!0});const t=document.getElementById(g);t.hasChildNodes()||n.exports.getDocument({url:e}).promise.then((e=>{const n=e.numPages;for(let o=1;o<=n;o++)e.getPage(o).then((e=>{const n=e.getViewport({scale:1}),o=document.createElement("canvas"),r=o.getContext("2d");o.width=n.width,o.height=n.height,o.style.width="100%",t.append(o);const s={canvasContext:r,viewport:n};e.render(s)}));i.clear()}))})(o):i("pdf文件为空")})),(e,t)=>(d(),a("div",{id:l(g)},null,8,u))}}))}}}));

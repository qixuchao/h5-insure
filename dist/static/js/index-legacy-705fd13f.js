System.register(["./index-legacy-4316b797.js","./pdfdist-legacy-f452325c.js","./pdf_viewer-legacy-49167d18.js"],(function(e){"use strict";var t,n,o,c,r,s,i,d,l,u;return{setters:[function(e){t=e.d,n=e.v,o=e.a,c=e.x,r=e.z,s=e.T,i=e.c,d=e.g,l=e.l},function(e){u=e.p},function(){}],execute:function(){const a=["id"];e("default",t({setup(e){u.exports.GlobalWorkerOptions.workerSrc=n;const t=o(),g=c();return r((()=>{const{title:e,url:n}=t.query;document.title=e||"",n?(e=>{s.loading({forbidClick:!0});const t=document.getElementById(g);t.hasChildNodes()||u.exports.getDocument({url:e}).promise.then((e=>{const n=e.numPages;for(let o=1;o<=n;o++)e.getPage(o).then((e=>{const n=e.getViewport({scale:1}),o=document.createElement("canvas"),c=o.getContext("2d");o.width=n.width,o.height=n.height,o.style.width="100%",t.append(o);const r={canvasContext:c,viewport:n};e.render(r)}));s.clear()}))})(n):s("pdf文件为空")})),(e,t)=>(i(),d("div",{id:l(g)},null,8,a))}}))}}}));

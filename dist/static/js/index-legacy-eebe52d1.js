System.register(["./vendor-legacy-7fe5c3e9.js","./index-legacy-aa063c2c.js"],(function(e){"use strict";var t,n,o,c,r,s,i,a,d,l;return{setters:[function(e){t=e.i,n=e.ad,o=e.ae,c=e.P,r=e.af,s=e.k,i=e.T,a=e.m,d=e.s,l=e.C},function(){}],execute:function(){const u=["id"];e("default",t({setup(e){n.exports.GlobalWorkerOptions.workerSrc=o;const t=c(),g=r();return s((()=>{const{title:e,url:o}=t.query;document.title=e||"",o?(e=>{i.loading({forbidClick:!0});const t=document.getElementById(g);t.hasChildNodes()||n.exports.getDocument({url:e}).promise.then((e=>{const n=e.numPages;for(let o=1;o<=n;o++)e.getPage(o).then((e=>{const n=e.getViewport({scale:1}),o=document.createElement("canvas"),c=o.getContext("2d");o.width=n.width,o.height=n.height,o.style.width="100%",t.append(o);const r={canvasContext:c,viewport:n};e.render(r)}));i.clear()}))})(o):i("pdf文件为空")})),(e,t)=>(a(),d("div",{id:l(g)},null,8,u))}}))}}}));

import{i as e,ad as t,ae as s,P as o,af as n,k as a,T as r,m as i,s as d,C as c}from"./vendor-6e9e6128.js";import"./index-6908eebb.js";const l=["id"],p=e({setup(e){t.exports.GlobalWorkerOptions.workerSrc=s;const p=o(),u=n();return a((()=>{const{title:e,url:s}=p.query;document.title=e||"",s?(e=>{r.loading({forbidClick:!0});const s=document.getElementById(u);if(s.hasChildNodes())return;t.exports.getDocument({url:e}).promise.then((e=>{const t=e.numPages;for(let o=1;o<=t;o++)e.getPage(o).then((e=>{const t=e.getViewport({scale:1}),o=document.createElement("canvas"),n=o.getContext("2d");o.width=t.width,o.height=t.height,o.style.width="100%",s.append(o);const a={canvasContext:n,viewport:t};e.render(a)}));r.clear()}))})(s):r("pdf文件为空")})),(e,t)=>(i(),d("div",{id:c(u)},null,8,l))}});export{p as default};

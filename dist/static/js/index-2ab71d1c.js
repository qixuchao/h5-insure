import{m as e,ae as t,af as o,u as s,ag as a,o as n,T as r,t as i,C as d,F as c}from"./vendor-533c215b.js";import"./index-b8acfffb.js";const l=["id"],u=e({setup(e){t.exports.GlobalWorkerOptions.workerSrc=o;const u=s(),p=a();return n((()=>{const{title:e,url:o}=u.query;document.title=e||"",o?(e=>{r.loading({forbidClick:!0});const o=document.getElementById(p);if(o.hasChildNodes())return;t.exports.getDocument({url:e}).promise.then((e=>{const t=e.numPages;for(let s=1;s<=t;s++)e.getPage(s).then((e=>{const t=e.getViewport({scale:1}),s=document.createElement("canvas"),a=s.getContext("2d");s.width=t.width,s.height=t.height,s.style.width="100%",o.append(s);const n={canvasContext:a,viewport:t};e.render(n)}));r.clear()}))})(o):r("pdf文件为空")})),(e,t)=>(i(),d("div",{id:c(p)},null,8,l))}});export{u as default};

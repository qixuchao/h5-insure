import{h as f,ad as d,ae as g,P as k,af as w,j as x,T as a,k as _,p as C,B as v}from"./vendor-d6b13173.js";import"./index-32e043dc.js";const E=["id"],A=f({setup(B){d.exports.GlobalWorkerOptions.workerSrc=g;const u=k(),r=w(),l=o=>{a.loading({forbidClick:!0});const e=document.getElementById(r);if(e.hasChildNodes())return;d.exports.getDocument({url:o}).promise.then(c=>{const p=c.numPages;for(let n=1;n<=p;n++)c.getPage(n).then(i=>{const s=i.getViewport({scale:1}),t=document.createElement("canvas"),m=t.getContext("2d");t.width=s.width,t.height=s.height,t.style.width="100%",e.append(t);const h={canvasContext:m,viewport:s};i.render(h)});a.clear()})};return x(()=>{const{title:o,url:e}=u.query;if(document.title=o||"",!e){a("pdf\u6587\u4EF6\u4E3A\u7A7A");return}l(e)}),(o,e)=>(_(),C("div",{id:v(r)},null,8,E))}});export{A as default};

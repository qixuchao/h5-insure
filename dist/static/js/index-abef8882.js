import{g,Q as f,M as w,T as r,h as k,m as x,z as _}from"./vendor-94f9fb13.js";import{p as d,w as C,n as v}from"./pdf_viewer-f051cdbc.js";const E=["id"],P=g({setup(T){d.exports.GlobalWorkerOptions.workerSrc=C;const u=f(),a=v(),l=e=>{r.loading({forbidClick:!0});const o=document.getElementById(a);if(o.hasChildNodes())return;d.exports.getDocument({url:e}).promise.then(c=>{const p=c.numPages;for(let n=1;n<=p;n++)c.getPage(n).then(i=>{const s=i.getViewport({scale:1}),t=document.createElement("canvas"),m=t.getContext("2d");t.width=s.width,t.height=s.height,t.style.width="100%",o.append(t);const h={canvasContext:m,viewport:s};i.render(h)});r.clear()})};return w(()=>{const{url:e}=u.query;if(!e){r("pdf\u6587\u4EF6\u4E3A\u7A7A");return}l(e)}),(e,o)=>(k(),x("div",{id:_(a)},null,8,E))}});export{P as default};

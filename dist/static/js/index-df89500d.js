import{d as e,a as t,v as s,y as o,T as r,c as a,g as n,l as d}from"./index-ede405b0.js";import{p as i}from"./pdfdist-66c75904.js";import{w as c}from"./pdf_viewer-da107a60.js";const l=["id"],p=e({setup(e){i.exports.GlobalWorkerOptions.workerSrc=c;const p=t(),m=s();return o((()=>{const{title:e,url:t}=p.query;document.title=e||"",t?(e=>{r.loading({forbidClick:!0});const t=document.getElementById(m);if(t.hasChildNodes())return;i.exports.getDocument({url:e}).promise.then((e=>{const s=e.numPages;for(let o=1;o<=s;o++)e.getPage(o).then((e=>{const s=e.getViewport({scale:1}),o=document.createElement("canvas"),r=o.getContext("2d");o.width=s.width,o.height=s.height,o.style.width="100%",t.append(o);const a={canvasContext:r,viewport:s};e.render(a)}));r.clear()}))})(t):r("pdf文件为空")})),(e,t)=>(a(),n("div",{id:d(m)},null,8,l))}});export{p as default};

import{g as C,a8 as u,a9 as P,aa as B,C as _,r as v,h,m as N,y as f,I as V,n as D,k as m,j as S,s as b,z as E,B as T}from"./vendor-bf3e5d1d.js";import{_ as I}from"./index-a0f77215.js";const z={class:"pdf-viewer"},F=T("\u52A0\u8F7D\u4E2D..."),U=["id","isee_pdf"],j=C({props:{title:{type:String,default:""},url:{type:String,default:""}},setup(c){const g=c;u.exports.GlobalWorkerOptions.workerSrc=P;const d=B(),a=_(!1),n=_(!0),w=()=>{const o=document.getElementById(d);if(o.hasChildNodes()){n.value=!1;return}u.exports.getDocument({url:g.url}).promise.then(s=>{const l=s.numPages;for(let e=1;e<=l;e++)s.getPage(e).then(p=>{const i=p.getViewport({scale:1}),t=document.createElement("canvas"),y=t.getContext("2d");t.width=i.width,t.height=i.height,t.style.width="100%",o.append(t);const k={canvasContext:y,viewport:i};p.render(k),n.value=!1})})},x=async()=>{a.value=!0,setTimeout(()=>{w()},0)};return(o,r)=>{const s=v("van-loading"),l=v("van-popup");return h(),N("span",z,[f("span",{class:"title",onClick:x},V(c.title),1),D(l,{show:a.value,"onUpdate:show":r[0]||(r[0]=e=>a.value=e),closeable:"","close-icon":"close",position:"bottom",style:{height:"600px"}},{default:m(()=>[n.value?(h(),S(s,{key:0,type:"spinner",vertical:"",class:"loading",size:"30px"},{default:m(()=>[F]),_:1})):b("",!0),f("div",{id:E(d),isee_pdf:o.pdfUrl,style:{height:"600px",width:"100%",overflow:"auto"}},null,8,U)]),_:1},8,["show"])])}}});var O=I(j,[["__scopeId","data-v-61756b88"]]);export{O as P};

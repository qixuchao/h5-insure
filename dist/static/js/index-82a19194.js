import{d as e,bY as a,bZ as t,r as l,E as s,an as i,b6 as o,c as r,e as n,w as d,g as u,a7 as c,k as v,j as m,h as f,F as p,i as h,t as b,f as y,a5 as w,V as C,a8 as k}from"./index-40904ad2.js";import{u as x}from"./theme-65292714.js";import{P as g}from"./index-9e678f26.js";import{o as R}from"./utils-5bd63d91.js";import"./pdfh5-008ca364.js";import"./infoCollection-a0ef6c70.js";import"./trial-48f90195.js";const j={key:0,class:"item"},_={key:1,class:"attachment-list"},T=["onClick"],D={class:"attachment-list-item-name"},S={class:"attachment-list-item-icon"},E={class:"footer"},L=e({__name:"index",props:{show:{type:Boolean,default:!1},contentList:{type:Array,default:()=>[]},activeIndex:{type:Number,default:0},text:{type:String,default:""},beforeReadOverText:{type:String,default:"同意，下一条"},forceReadCound:{type:Number,default:0},isOnlyView:{type:Boolean,default:!1}},emits:["update:show","submit","onCloseFilePreviewByMask"],setup(e,{emit:L}){const N=e,O=a((()=>t((()=>import("./index-40904ad2.js").then((function(e){return e.cJ}))),["static/js/index-40904ad2.js","static/css/index-3c0adaf7.css","static/js/pdfh5-008ca364.js"]))),B=x(),H=l(!0),I=l(N.show),P=l(N.contentList.map(((e,a)=>({...e,disabled:!0,readDisabled:!0})))),V=l(N.activeIndex),$=l(0),F=l(null),M=s((()=>{var e,a;return null==(a=null==(e=P.value)?void 0:e[V.value])?void 0:a.attachmentList})),U=s((()=>{var e;return null==(e=P.value[V.value])?void 0:e.readDisabled})),q=s((()=>!(V.value>=N.forceReadCound-1)&&(!($.value>=N.forceReadCound)&&($.value<N.forceReadCound&&V.value!==N.forceReadCound-1)))),A=()=>{V.value+=1},J=()=>{N.isOnlyView?L("update:show",!1):(L("update:show",!1),L("submit"))};i((()=>N),(()=>{I.value=N.show,V.value=N.activeIndex}),{deep:!0,immediate:!0});const Y=e=>{var a,t,l;if(e){const s=(null==(a=e.target)?void 0:a.scrollHeight)||e.scrollHeight,i=(null==(t=e.target)?void 0:t.scrollTop)||e.scrollTop,o=(null==(l=e.target)?void 0:l.clientHeight)||e.clientHeight;Math.floor(s-i-15)<=o&&H.value&&P.value[V.value].readDisabled&&(P.value[V.value].disabled=!1,P.value[V.value].readDisabled=!1,P.value[V.value+1].disabled=!1,$.value+=1)}};return i((()=>V.value),(()=>{H.value=!1,N.show&&($.value>=N.forceReadCound&&P.value.forEach((e=>{e.disabled=!1,e.readDisabled=!1})),setTimeout((()=>{H.value=!0}),800)),o((()=>{setTimeout((()=>{const e=document.querySelector(".viewerContainer")||document.querySelector(".com-file-preview .content");e&&(e.removeEventListener("scroll",Y),Y(e),e.addEventListener("scroll",Y))}),2e3)}))}),{immediate:!0}),(a,t)=>{const l=w,s=C,i=k;return r(),n(i,{show:u(I),"onUpdate:show":t[1]||(t[1]=e=>c(I)?I.value=e:null),class:"file-preview-popup-wrap",closeable:!1,onClose:t[2]||(t[2]=e=>L("onCloseFilePreviewByMask"))},{default:d((()=>[u(I)?(r(),n(l,{key:0,active:u(V),"onUpdate:active":t[0]||(t[0]=e=>c(V)?V.value=e:null),list:u(P).map(((e,a)=>({title:e.attachmentName,disabled:a!=u(V)&&(e.disabled||!1),slotName:`guarantee-${a}`}))),class:"tab"},null,8,["active","list"])):v("",!0),m("div",{ref_key:"previewRef",ref:F,class:"list"},[1===u(M).length?(r(),f("div",j,[(r(),n(u(O),{key:u(M)[0].materialSourceDesc,content:u(M)[0].materialContent,type:u(M)[0].materialSource,"forbid-click":!0},null,8,["content","type"]))])):(r(),f("div",_,[(r(!0),f(p,null,h(u(M),((e,a)=>(r(),f("div",{key:a,class:"attachment-list-item",onClick:a=>(e=>{const a={fileType:e.materialSource,fileUri:e.materialContent};R(a)})(e)},[m("div",D,b(e.materialName),1),m("div",S,[y(s,{name:"arrow-right"})])],8,T)))),128))]))],512),m("div",E,[u(q)?(r(),n(g,{key:0,shadow:!1,"theme-vars":u(B),disabled:u(U),class:"right",text:`${e.beforeReadOverText}(${u(V)+1}/${e.forceReadCound})`,onClick:A},null,8,["theme-vars","disabled","text"])):(r(),n(g,{key:1,disabled:u(U),shadow:!1,"theme-vars":u(B),text:N.text,onClick:J},null,8,["disabled","theme-vars","text"]))])])),_:1},8,["show"])}}});export{L as default};

import{d as e,bY as a,bZ as t,r as l,E as s,an as i,b6 as o,c as r,e as n,w as d,g as u,a7 as c,k as v,j as m,h as f,F as p,i as h,t as b,f as y,a5 as w,V as C,a8 as k}from"./index-0fe7bae3.js";import{u as x}from"./theme-65292714.js";import{P as g}from"./index-a37e1c9e.js";import{o as R}from"./utils-6b171a58.js";import"./pdfh5-008ca364.js";import"./infoCollection-c0331be0.js";import"./trial-84736b54.js";const j={key:0,class:"item"},_={key:1,class:"attachment-list"},T=["onClick"],D={class:"attachment-list-item-name"},S={class:"attachment-list-item-icon"},E={class:"footer"},L=e({__name:"index",props:{show:{type:Boolean,default:!1},contentList:{type:Array,default:()=>[]},activeIndex:{type:Number,default:0},text:{type:String,default:""},beforeReadOverText:{type:String,default:"同意，下一条"},forceReadCound:{type:Number,default:0},isOnlyView:{type:Boolean,default:!1}},emits:["update:show","submit","onCloseFilePreviewByMask"],setup(e,{emit:L}){const I=e,N=a((()=>t((()=>import("./index-0fe7bae3.js").then((function(e){return e.cI}))),["static/js/index-0fe7bae3.js","static/css/index-3c0adaf7.css","static/js/pdfh5-008ca364.js"]))),O=x(),B=l(!0),H=l(I.show),P=l(I.contentList.map(((e,a)=>({...e,disabled:!0,readDisabled:!0})))),V=l(I.activeIndex),$=l(0),F=l(null),M=s((()=>{var e,a;return null==(a=null==(e=P.value)?void 0:e[V.value])?void 0:a.attachmentList})),U=s((()=>{var e;return null==(e=P.value[V.value])?void 0:e.readDisabled})),q=s((()=>!(V.value>=I.forceReadCound-1)&&(!($.value>=I.forceReadCound)&&($.value<I.forceReadCound&&V.value!==I.forceReadCound-1)))),A=()=>{V.value+=1},Y=()=>{I.isOnlyView?L("update:show",!1):(L("update:show",!1),L("submit"))};i((()=>I),(()=>{H.value=I.show,V.value=I.activeIndex}),{deep:!0,immediate:!0});const Z=e=>{var a,t,l;if(e){const s=(null==(a=e.target)?void 0:a.scrollHeight)||e.scrollHeight,i=(null==(t=e.target)?void 0:t.scrollTop)||e.scrollTop,o=(null==(l=e.target)?void 0:l.clientHeight)||e.clientHeight;Math.floor(s-i-15)<=o&&B.value&&P.value[V.value].readDisabled&&(P.value[V.value].disabled=!1,P.value[V.value].readDisabled=!1,P.value[V.value+1].disabled=!1,$.value+=1)}};return i((()=>V.value),(()=>{B.value=!1,I.show&&($.value>=I.forceReadCound&&P.value.forEach((e=>{e.disabled=!1,e.readDisabled=!1})),setTimeout((()=>{B.value=!0}),800)),o((()=>{setTimeout((()=>{const e=document.querySelector(".viewerContainer")||document.querySelector(".com-file-preview .content");e&&(e.removeEventListener("scroll",Z),Z(e),e.addEventListener("scroll",Z))}),2e3)}))}),{immediate:!0}),(a,t)=>{const l=w,s=C,i=k;return r(),n(i,{show:u(H),"onUpdate:show":t[1]||(t[1]=e=>c(H)?H.value=e:null),class:"file-preview-popup-wrap",closeable:!1,onClose:t[2]||(t[2]=e=>L("onCloseFilePreviewByMask"))},{default:d((()=>[u(H)?(r(),n(l,{key:0,active:u(V),"onUpdate:active":t[0]||(t[0]=e=>c(V)?V.value=e:null),list:u(P).map(((e,a)=>({title:e.attachmentName,disabled:a!=u(V)&&(e.disabled||!1),slotName:`guarantee-${a}`}))),class:"tab"},null,8,["active","list"])):v("",!0),m("div",{ref_key:"previewRef",ref:F,class:"list"},[1===u(M).length?(r(),f("div",j,[(r(),n(u(N),{key:u(M)[0].materialSourceDesc,content:u(M)[0].materialContent,type:u(M)[0].materialSource,"forbid-click":!0},null,8,["content","type"]))])):(r(),f("div",_,[(r(!0),f(p,null,h(u(M),((e,a)=>(r(),f("div",{key:a,class:"attachment-list-item",onClick:a=>(e=>{const a={fileType:e.materialSource,fileUri:e.materialContent};R(a)})(e)},[m("div",D,b(e.materialName),1),m("div",S,[y(s,{name:"arrow-right"})])],8,T)))),128))]))],512),m("div",E,[u(q)?(r(),n(g,{key:0,shadow:!1,"theme-vars":u(O),disabled:u(U),class:"right",text:`${e.beforeReadOverText}(${u(V)+1}/${e.forceReadCound})`,onClick:A},null,8,["theme-vars","disabled","text"])):(r(),n(g,{key:1,disabled:u(U),shadow:!1,"theme-vars":u(O),text:I.text,onClick:Y},null,8,["disabled","theme-vars","text"]))])])),_:1},8,["show"])}}});export{L as default};

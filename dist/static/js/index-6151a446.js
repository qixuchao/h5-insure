import{d as e,a4 as a,a5 as t,j as l,k as s,z as i,E as o,o as n,m as r,w as d,u,p as c,f as v,a as m,c as f,F as p,q as h,e as b,b as w,du as y,ae as C,aD as k}from"./index-01270b83.js";import{u as x}from"./theme-94cf7d00.js";import{P as g}from"./index-1051e3f7.js";import{o as R}from"./utils-600e8464.js";import"./infoCollection-f09007f3.js";import"./trial-4c3d8912.js";const j={key:0,class:"item"},D={key:1,class:"attachment-list"},T=["onClick"],_={class:"attachment-list-item-name"},E={class:"attachment-list-item-icon"},L={class:"footer"},O=e({name:"filePreview"}),P=e({...O,props:{show:{type:Boolean,default:!1},contentList:{default:()=>[]},activeIndex:{default:0},text:{default:""},beforeReadOverText:{default:"同意，下一条"},forceReadCount:{default:0},isOnlyView:{type:Boolean,default:!1}},emits:["update:show","submit","onCloseFilePreviewByMask"],setup(e,{emit:O}){const P=e,S=a((()=>t((()=>import("./index-01270b83.js").then((function(e){return e.e2}))),["static/js/index-01270b83.js","static/css/index-57d74d44.css"]))),B=x(),H=l(!0),I=l(P.show),$=l(P.contentList.map(((e,a)=>({...e,disabled:!0,readDisabled:!0})))),q=l(P.activeIndex),F=l(0),M=l(null),N=s((()=>{var e,a;return null==(a=null==(e=$.value)?void 0:e[q.value])?void 0:a.attachmentList})),U=s((()=>{var e;return null==(e=$.value[q.value])?void 0:e.readDisabled})),V=s((()=>!(q.value>=P.forceReadCount-1)&&(!(F.value>=P.forceReadCount)&&(F.value<P.forceReadCount&&q.value!==P.forceReadCount-1)))),z=()=>{q.value+=1},A=()=>{P.isOnlyView?O("update:show",!1):(O("update:show",!1),O("submit"))};i((()=>P),(()=>{I.value=P.show,q.value=P.activeIndex}),{deep:!0,immediate:!0});const G=e=>{var a,t,l;if(e){const s=(null==(a=e.target)?void 0:a.scrollHeight)||e.scrollHeight,i=(null==(t=e.target)?void 0:t.scrollTop)||e.scrollTop,o=(null==(l=e.target)?void 0:l.clientHeight)||e.clientHeight;Math.floor(s-i-15)<=o&&H.value&&$.value[q.value].readDisabled&&($.value[q.value].disabled=!1,$.value[q.value].readDisabled=!1,$.value[q.value+1].disabled=!1,F.value+=1)}};return i((()=>q.value),(()=>{H.value=!1,P.show&&(F.value>=P.forceReadCount&&$.value.forEach((e=>{e.disabled=!1,e.readDisabled=!1})),setTimeout((()=>{H.value=!0}),800)),o((()=>{setTimeout((()=>{const e=document.querySelector(".viewerContainer")||document.querySelector(".com-file-preview .content");e&&(e.removeEventListener("scroll",G),G(e),e.addEventListener("scroll",G))}),2e3)}))}),{immediate:!0}),(e,a)=>{const t=y,l=C,s=k;return n(),r(s,{show:u(I),"onUpdate:show":a[1]||(a[1]=e=>c(I)?I.value=e:null),class:"file-preview-popup-wrap",closeable:!1,onClose:a[2]||(a[2]=e=>O("onCloseFilePreviewByMask"))},{default:d((()=>[u(I)?(n(),r(t,{key:0,active:u(q),"onUpdate:active":a[0]||(a[0]=e=>c(q)?q.value=e:null),list:u($).map(((e,a)=>({title:e.attachmentName,disabled:a!=u(q)&&(e.disabled||!1),slotName:`guarantee-${a}`}))),class:"tab"},null,8,["active","list"])):v("",!0),m("div",{ref_key:"previewRef",ref:M,class:"list"},[1===u(N).length?(n(),f("div",j,[(n(),r(u(S),{key:u(N)[0].materialSourceDesc,content:u(N)[0].materialContent,type:u(N)[0].materialSource,"forbid-click":!0},null,8,["content","type"]))])):(n(),f("div",D,[(n(!0),f(p,null,h(u(N),((e,a)=>(n(),f("div",{key:a,class:"attachment-list-item",onClick:a=>(e=>{const a={fileType:e.materialSource,fileUri:e.materialContent};R(a)})(e)},[m("div",_,b(e.materialName),1),m("div",E,[w(l,{name:"arrow-right"})])],8,T)))),128))]))],512),m("div",L,[u(V)?(n(),r(g,{key:0,shadow:!1,"theme-vars":u(B),disabled:u(U),class:"right",text:`${e.beforeReadOverText}(${u(q)+1}/${e.forceReadCount})`,onClick:z},null,8,["theme-vars","disabled","text"])):(n(),r(g,{key:1,disabled:u(U),shadow:!1,"theme-vars":u(B),text:P.text,onClick:A},null,8,["disabled","theme-vars","text"]))])])),_:1},8,["show"])}}});export{P as default};

import{d as e,ad as a,ae as t,j as l,k as s,E as i,M as o,o as n,p as r,w as d,u,q as c,f as v,a as m,c as f,F as p,s as h,e as b,b as w,dT as y,an as C,aC as k}from"./index-67e7dac2.js";import{u as x}from"./theme-94cf7d00.js";import{P as g}from"./index-f2af212d.js";import{o as R}from"./utils-85238c86.js";import"./infoCollection-4d83360f.js";import"./trial-b0463c9f.js";const T={key:0,class:"item"},j={key:1,class:"attachment-list"},D=["onClick"],_={class:"attachment-list-item-name"},E={class:"attachment-list-item-icon"},L={class:"footer"},O=e({name:"filePreview"}),P=e({...O,props:{show:{type:Boolean,default:!1},contentList:{default:()=>[]},activeIndex:{default:0},text:{default:""},beforeReadOverText:{default:"同意，下一条"},forceReadCount:{default:0},isOnlyView:{type:Boolean,default:!1}},emits:["update:show","submit","onCloseFilePreviewByMask"],setup(e,{emit:O}){const P=e,S=a((()=>t((()=>import("./index-67e7dac2.js").then((function(e){return e.es}))),["static/js/index-67e7dac2.js","static/css/index-78940258.css"]))),B=x(),H=l(!0),I=l(P.show),M=l(P.contentList.map(((e,a)=>({...e,disabled:!0,readDisabled:!0})))),$=l(P.activeIndex),q=l(0),F=l(null),N=s((()=>{var e,a;return null==(a=null==(e=M.value)?void 0:e[$.value])?void 0:a.attachmentList})),U=s((()=>{var e;return null==(e=M.value[$.value])?void 0:e.readDisabled})),V=s((()=>!($.value>=P.forceReadCount-1)&&(!(q.value>=P.forceReadCount)&&(q.value<P.forceReadCount&&$.value!==P.forceReadCount-1)))),A=()=>{$.value+=1},z=()=>{P.isOnlyView?O("update:show",!1):(O("update:show",!1),O("submit"))};i((()=>P),(()=>{I.value=P.show,$.value=P.activeIndex}),{deep:!0,immediate:!0});const G=e=>{var a,t,l;if(e){const s=(null==(a=e.target)?void 0:a.scrollHeight)||e.scrollHeight,i=(null==(t=e.target)?void 0:t.scrollTop)||e.scrollTop,o=(null==(l=e.target)?void 0:l.clientHeight)||e.clientHeight;Math.floor(s-i-15)<=o&&H.value&&M.value[$.value].readDisabled&&(M.value[$.value].disabled=!1,M.value[$.value].readDisabled=!1,M.value[$.value+1].disabled=!1,q.value+=1)}};return i((()=>$.value),(()=>{H.value=!1,P.show&&(q.value>=P.forceReadCount&&M.value.forEach((e=>{e.disabled=!1,e.readDisabled=!1})),setTimeout((()=>{H.value=!0}),800)),o((()=>{setTimeout((()=>{const e=document.querySelector(".viewerContainer")||document.querySelector(".com-file-preview .content");e&&(e.removeEventListener("scroll",G),G(e),e.addEventListener("scroll",G))}),2e3)}))}),{immediate:!0}),(e,a)=>{const t=y,l=C,s=k;return n(),r(s,{show:u(I),"onUpdate:show":a[1]||(a[1]=e=>c(I)?I.value=e:null),class:"file-preview-popup-wrap",closeable:!1,onClose:a[2]||(a[2]=e=>O("onCloseFilePreviewByMask"))},{default:d((()=>[u(I)?(n(),r(t,{key:0,active:u($),"onUpdate:active":a[0]||(a[0]=e=>c($)?$.value=e:null),list:u(M).map(((e,a)=>({title:e.attachmentName,disabled:a!=u($)&&(e.disabled||!1),slotName:`guarantee-${a}`}))),class:"tab"},null,8,["active","list"])):v("",!0),m("div",{ref_key:"previewRef",ref:F,class:"list"},[1===u(N).length?(n(),f("div",T,[(n(),r(u(S),{key:u(N)[0].materialSourceDesc,content:u(N)[0].materialContent,type:u(N)[0].materialSource,"forbid-click":!0},null,8,["content","type"]))])):(n(),f("div",j,[(n(!0),f(p,null,h(u(N),((e,a)=>(n(),f("div",{key:a,class:"attachment-list-item",onClick:a=>(e=>{const a={fileType:e.materialSource,fileUri:e.materialContent};R(a)})(e)},[m("div",_,b(e.materialName),1),m("div",E,[w(l,{name:"arrow-right"})])],8,D)))),128))]))],512),m("div",L,[u(V)?(n(),r(g,{key:0,shadow:!1,"theme-vars":u(B),disabled:u(U),class:"right",text:`${e.beforeReadOverText}(${u($)+1}/${e.forceReadCount})`,onClick:A},null,8,["theme-vars","disabled","text"])):(n(),r(g,{key:1,disabled:u(U),shadow:!1,"theme-vars":u(B),text:P.text,onClick:z},null,8,["disabled","theme-vars","text"]))])])),_:1},8,["show"])}}});export{P as default};

import{d as e,a4 as a,a5 as t,j as l,k as s,A as i,G as o,o as n,p as r,w as d,u,q as c,f as v,a as m,c as f,F as p,s as h,e as w,b,dT as y,af as C,au as k}from"./index-86787787.js";import{u as x}from"./theme-94cf7d00.js";import{P as g}from"./index-ca08edc0.js";import{o as R}from"./utils-73471810.js";import"./infoCollection-df55a2f9.js";import"./trial-d2d53a91.js";const T={key:0,class:"item"},j={key:1,class:"attachment-list"},D=["onClick"],_={class:"attachment-list-item-name"},L={class:"attachment-list-item-icon"},E={class:"footer"},O=e({name:"filePreview"}),P=e({...O,props:{show:{type:Boolean,default:!1},contentList:{default:()=>[]},activeIndex:{default:0},text:{default:""},beforeReadOverText:{default:"同意，下一条"},forceReadCount:{default:0},isOnlyView:{type:Boolean,default:!1}},emits:["update:show","submit","onCloseFilePreviewByMask"],setup(e,{emit:O}){const P=e,S=a((()=>t((()=>import("./index-86787787.js").then((function(e){return e.eq}))),["static/js/index-86787787.js","static/css/index-972c27e5.css"]))),q=x(),B=l(!0),H=l(P.show),I=l(P.contentList.map(((e,a)=>({...e,disabled:!0,readDisabled:!0})))),$=l(P.activeIndex),F=l(0),M=l(null),N=s((()=>{var e,a;return null==(a=null==(e=I.value)?void 0:e[$.value])?void 0:a.attachmentList})),U=s((()=>{var e;return null==(e=I.value[$.value])?void 0:e.readDisabled})),V=s((()=>!($.value>=P.forceReadCount-1)&&(!(F.value>=P.forceReadCount)&&(F.value<P.forceReadCount&&$.value!==P.forceReadCount-1)))),A=()=>{$.value+=1},G=()=>{P.isOnlyView?O("update:show",!1):(O("update:show",!1),O("submit"))};i((()=>P),(()=>{H.value=P.show,$.value=P.activeIndex}),{deep:!0,immediate:!0});const z=e=>{var a,t,l;if(e){const s=(null==(a=e.target)?void 0:a.scrollHeight)||e.scrollHeight,i=(null==(t=e.target)?void 0:t.scrollTop)||e.scrollTop,o=(null==(l=e.target)?void 0:l.clientHeight)||e.clientHeight;Math.floor(s-i-15)<=o&&B.value&&I.value[$.value].readDisabled&&(I.value[$.value].disabled=!1,I.value[$.value].readDisabled=!1,I.value[$.value+1].disabled=!1,F.value+=1)}};return i((()=>$.value),(()=>{B.value=!1,P.show&&(F.value>=P.forceReadCount&&I.value.forEach((e=>{e.disabled=!1,e.readDisabled=!1})),setTimeout((()=>{B.value=!0}),800)),o((()=>{setTimeout((()=>{const e=document.querySelector(".viewerContainer")||document.querySelector(".com-file-preview .content");e&&(e.removeEventListener("scroll",z),z(e),e.addEventListener("scroll",z))}),2e3)}))}),{immediate:!0}),(a,t)=>{const l=y,s=C,i=k;return n(),r(i,{show:u(H),"onUpdate:show":t[1]||(t[1]=e=>c(H)?H.value=e:null),class:"file-preview-popup-wrap",closeable:!1,onClose:t[2]||(t[2]=e=>O("onCloseFilePreviewByMask"))},{default:d((()=>[u(H)?(n(),r(l,{key:0,active:u($),"onUpdate:active":t[0]||(t[0]=e=>c($)?$.value=e:null),list:u(I).map(((e,a)=>({title:e.attachmentName,disabled:a!=u($)&&(e.disabled||!1),slotName:`guarantee-${a}`}))),class:"tab"},null,8,["active","list"])):v("",!0),m("div",{ref_key:"previewRef",ref:M,class:"list"},[1===u(N).length?(n(),f("div",T,[(n(),r(u(S),{key:u(N)[0].materialSourceDesc,content:u(N)[0].materialContent,type:u(N)[0].materialSource,"forbid-click":!0},null,8,["content","type"]))])):(n(),f("div",j,[(n(!0),f(p,null,h(u(N),((e,a)=>(n(),f("div",{key:a,class:"attachment-list-item",onClick:a=>(e=>{const a={fileType:e.materialSource,fileUri:e.materialContent};R(a)})(e)},[m("div",_,w(e.materialName),1),m("div",L,[b(s,{name:"arrow-right"})])],8,D)))),128))]))],512),m("div",E,[u(V)?(n(),r(g,{key:0,shadow:!1,"theme-vars":u(q),disabled:u(U),class:"right",text:`${e.beforeReadOverText}(${u($)+1}/${e.forceReadCount})`,onClick:A},null,8,["theme-vars","disabled","text"])):(n(),r(g,{key:1,disabled:u(U),shadow:!1,"theme-vars":u(q),text:P.text,onClick:G},null,8,["disabled","theme-vars","text"]))])])),_:1},8,["show"])}}});export{P as default};

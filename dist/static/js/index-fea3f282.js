import{d as e,aV as a,aW as t,r as l,x as s,aa as i,aQ as o,b as r,c as d,e as n,w as u,f as c,g as v,X as m,k as p,j as f,h,F as b,i as y,t as w}from"./index-d7f8e361.js";import{u as g}from"./theme-65292714.js";import x from"./index-689937fe.js";import{o as k}from"./utils-e9125a79.js";import"./pdfh5-008ca364.js";import"./infoCollection-7a015558.js";import"./useStorage-143a4fe6.js";import"./trial-7025d71d.js";const C={key:0,class:"item"},R={key:1,class:"attachment-list"},T=["onClick"],j={class:"attachment-list-item-name"},_={class:"attachment-list-item-icon"},P={class:"footer"},D=e({__name:"index",props:{show:{type:Boolean,default:!1},contentList:{type:Array,default:()=>[]},activeIndex:{type:Number,default:0},text:{type:String,default:""},beforeReadOverText:{type:String,default:"同意，下一条"},forceReadCound:{type:Number,default:0},isOnlyView:{type:Boolean,default:!1}},emits:["update:show","submit","onCloseFilePreviewByMask"],setup(e,{emit:D}){const L=e,N=a((()=>t((()=>import("./index-d7f8e361.js").then((function(e){return e.bq}))),["static/js/index-d7f8e361.js","static/css/index-af7e8c1f.css","static/js/pdfh5-008ca364.js"]))),E=g(),O=l(!0),S=l(L.show),U=l(L.contentList.map(((e,a)=>({...e,disabled:!0,readDisabled:!0})))),B=l(L.activeIndex),H=l(0),I=l(null),V=s((()=>{var e,a;return null==(a=null==(e=U.value)?void 0:e[B.value])?void 0:a.attachmentList})),$=s((()=>{var e;return null==(e=U.value[B.value])?void 0:e.readDisabled})),F=s((()=>!(B.value>=L.forceReadCound-1)&&(!(H.value>=L.forceReadCound)&&(H.value<L.forceReadCound&&B.value!==L.forceReadCound-1)))),M=()=>{B.value+=1},q=()=>{L.isOnlyView?D("update:show",!1):(D("update:show",!1),D("submit"))};i((()=>L),(()=>{S.value=L.show,B.value=L.activeIndex}),{deep:!0,immediate:!0});const A=e=>{var a,t,l;if(e){const s=(null==(a=e.target)?void 0:a.scrollHeight)||e.scrollHeight,i=(null==(t=e.target)?void 0:t.scrollTop)||e.scrollTop,o=(null==(l=e.target)?void 0:l.clientHeight)||e.clientHeight;Math.floor(s-i-15)<=o&&O.value&&U.value[B.value].readDisabled&&(U.value[B.value].disabled=!1,U.value[B.value].readDisabled=!1,U.value[B.value+1].disabled=!1,H.value+=1)}};return i((()=>B.value),(()=>{O.value=!1,L.show&&(H.value>=L.forceReadCound&&U.value.forEach((e=>{e.disabled=!1,e.readDisabled=!1})),setTimeout((()=>{O.value=!0}),800)),o((()=>{setTimeout((()=>{const e=document.querySelector(".viewerContainer");e&&(e.removeEventListener("scroll",A),A(e),e.addEventListener("scroll",A))}),2e3)}))}),{immediate:!0}),(a,t)=>{const l=r("ProTab"),s=r("ProSvg"),i=r("van-config-provider"),o=r("ProPopup");return d(),n(o,{show:v(S),"onUpdate:show":t[1]||(t[1]=e=>m(S)?S.value=e:null),class:"file-preview-popup-wrap",closeable:!1,onClose:t[2]||(t[2]=e=>D("onCloseFilePreviewByMask"))},{default:u((()=>[c(i,{"theme-vars":v(E),class:"custom-provider"},{default:u((()=>[v(S)?(d(),n(l,{key:0,active:v(B),"onUpdate:active":t[0]||(t[0]=e=>m(B)?B.value=e:null),list:v(U).map(((e,a)=>({title:e.attachmentName,disabled:a!=v(B)&&(e.disabled||!1),slotName:`guarantee-${a}`}))),class:"tab"},null,8,["active","list"])):p("",!0),f("div",{ref_key:"previewRef",ref:I,class:"list"},[1===v(V).length?(d(),h("div",C,[(d(),n(v(N),{key:v(V)[0].attachmentName,content:v(V)[0].attachmentUri,type:v(V)[0].attachmentType,"forbid-click":!0},null,8,["content","type"]))])):(d(),h("div",R,[(d(!0),h(b,null,y(v(V),((e,a)=>(d(),h("div",{key:a,class:"attachment-list-item",onClick:a=>(e=>{const a={fileType:e.attachmentType,fileUri:e.attachmentUri};k(a)})(e)},[f("div",j,w(e.attachmentName),1),f("div",_,[c(s,{name:"arrow-right"})])],8,T)))),128))]))],512),f("div",P,[v(F)?(d(),n(x,{key:0,shadow:!1,"theme-vars":v(E),disabled:v($),class:"right",text:`${e.beforeReadOverText}(${v(B)+1}/${e.forceReadCound})`,onClick:M},null,8,["theme-vars","disabled","text"])):(d(),n(x,{key:1,disabled:v($),shadow:!1,"theme-vars":v(E),text:L.text,onClick:q},null,8,["disabled","theme-vars","text"]))])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}});export{D as default};

import{d as e,aW as a,aZ as t,r as l,x as s,a8 as i,b as o,c as r,e as d,w as n,f as u,j as c,i as v,l as m,g as p,F as h,h as f,t as b}from"./index-8524819b.js";import{u as y}from"./theme-65292714.js";import w from"./index-416888bb.js";import{o as x}from"./utils-0001f89b.js";import"./pdfh5-e5c0db2a.js";import"./infoCollection-73b39c38.js";import"./useStorage-38c3fd42.js";import"./trial-51a44a5e.js";const g={key:0,class:"item"},k={key:1,class:"attachment-list"},C=["onClick"],R={class:"attachment-list-item-name"},j={class:"attachment-list-item-icon"},T={class:"footer"},_=e({props:{show:{type:Boolean,default:!1},contentList:{type:Array,default:()=>[]},activeIndex:{type:Number,default:0},text:{type:String,default:""},beforeReadOverText:{type:String,default:"同意，下一条"},forceReadCound:{type:Number,default:0},isOnlyView:{type:Boolean,default:!1}},emits:["update:show","submit","onCloseFilePreviewByMask"],setup(e,{emit:_}){const P=e,D=a((()=>t((()=>import("./index-8524819b.js").then((function(e){return e.bm}))),["static/js/index-8524819b.js","static/css/index-fa349f8e.css","static/js/pdfh5-e5c0db2a.js"]))),N=y(),O=l(P.show),S=l(P.contentList.map(((e,a)=>({...e,disabled:!0,readDisabled:!0})))),U=l(P.activeIndex),B=l(0),I=l(null),L=s((()=>{var e,a;return null==(a=null==(e=S.value)?void 0:e[U.value])?void 0:a.attachmentList})),$=s((()=>{var e;return null==(e=S.value[U.value])?void 0:e.readDisabled})),E=s((()=>!(U.value>=P.forceReadCound-1)&&(!(B.value>=P.forceReadCound)&&(B.value<P.forceReadCound&&U.value!==P.forceReadCound-1)))),F=()=>{U.value+=1},M=()=>{P.isOnlyView?_("update:show",!1):(_("update:show",!1),_("submit"))};i((()=>P),(()=>{O.value=P.show,U.value=P.activeIndex}),{deep:!0,immediate:!0});const V=e=>{e&&Math.floor(e.target.scrollHeight-e.target.scrollTop)===e.target.clientHeight&&S.value[U.value].readDisabled&&(S.value[U.value].disabled=!1,S.value[U.value].readDisabled=!1,S.value[U.value+1].disabled=!1,B.value+=1)};return i((()=>U.value),(()=>{P.show&&(B.value>=P.forceReadCound&&S.value.forEach((e=>{e.disabled=!1,e.readDisabled=!1})),I.value&&(I.value.scrollTop=0))}),{immediate:!0}),(a,t)=>{const l=o("ProTab"),s=o("ProSvg"),i=o("van-config-provider"),y=o("ProPopup");return r(),d(y,{show:O.value,"onUpdate:show":t[1]||(t[1]=e=>O.value=e),class:"file-preview-popup-wrap",closeable:!1,onClose:t[2]||(t[2]=e=>_("onCloseFilePreviewByMask"))},{default:n((()=>[u(i,{"theme-vars":m(N),class:"custom-provider"},{default:n((()=>[O.value?(r(),d(l,{key:0,active:U.value,"onUpdate:active":t[0]||(t[0]=e=>U.value=e),list:S.value.map(((e,a)=>({title:e.attachmentName,disabled:a!=U.value&&(e.disabled||!1),slotName:`guarantee-${a}`}))),class:"tab"},null,8,["active","list"])):c("",!0),v("div",{ref_key:"previewRef",ref:I,class:"list",onScroll:V},[1===m(L).length?(r(),p("div",g,[(r(),d(m(D),{key:m(L)[0].attachmentName,content:m(L)[0].attachmentUri,type:m(L)[0].attachmentType,"forbid-click":!0},null,8,["content","type"]))])):(r(),p("div",k,[(r(!0),p(h,null,f(m(L),((e,a)=>(r(),p("div",{key:a,class:"attachment-list-item",onClick:a=>(e=>{const a={fileType:e.attachmentType,fileUri:e.attachmentUri};x(a)})(e)},[v("div",R,b(e.attachmentName),1),v("div",j,[u(s,{name:"arrow-right"})])],8,C)))),128))]))],544),v("div",T,[m(E)?(r(),d(w,{key:0,shadow:!1,"theme-vars":m(N),disabled:m($),class:"right",text:`${e.beforeReadOverText}(${U.value+1}/${e.forceReadCound})`,onClick:F},null,8,["theme-vars","disabled","text"])):(r(),d(w,{key:1,disabled:m($),shadow:!1,"theme-vars":m(N),text:P.text,onClick:M},null,8,["disabled","theme-vars","text"]))])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}});export{_ as default};

import{u as e}from"./theme-bc16780d.js";import{P as a}from"./index-d7655abd.js";import{o as t}from"./utils-149a0f46.js";import{h as l,r as s,x as i,Z as o,k as d,l as r,m as u,n,Q as v,s as c,z as m,A as p,y as h,F as f,E as b,I as y}from"./vendor-0381d15c.js";const w={key:0,class:"item"},k={key:1,class:"attachment-list"},x=["onClick"],C={class:"attachment-list-item-name"},g={class:"attachment-list-item-icon"},R={class:"footer"},P=l({props:{show:{type:Boolean,default:!1},contentList:{type:Array,default:()=>[]},activeIndex:{type:Number,default:0},text:{type:String,default:""},beforeReadOverText:{type:String,default:"同意，下一条"},forceReadCound:{type:Number,default:0},isOnlyView:{type:Boolean,default:!1}},emits:["update:show","submit","onCloseFilePreview"],setup(l,{emit:P}){const T=l,N=e(),D=s(T.show),U=s(T.contentList.map(((e,a)=>({...e,disabled:!0,readDisabled:!0})))),j=s(T.activeIndex),F=s(0),I=s(null),O=i((()=>{var e,a;return null==(a=null==(e=U.value)?void 0:e[j.value])?void 0:a.attachmentList})),S=i((()=>{var e;return null==(e=U.value[j.value])?void 0:e.readDisabled})),$=i((()=>!(j.value>=T.forceReadCound-1)&&(!(F.value>=T.forceReadCound)&&(F.value<T.forceReadCound&&j.value!==T.forceReadCound-1)))),_=()=>{j.value+=1},L=()=>{T.isOnlyView?P("update:show",!1):(P("update:show",!1),P("submit"))};o((()=>T),(()=>{D.value=T.show,j.value=T.activeIndex}),{deep:!0,immediate:!0});const A=e=>{e&&Math.floor(e.target.scrollHeight-e.target.scrollTop)===e.target.clientHeight&&U.value[j.value].readDisabled&&(U.value[j.value].disabled=!1,U.value[j.value].readDisabled=!1,U.value[j.value+1].disabled=!1,F.value+=1)};return o((()=>j.value),(()=>{T.show&&(F.value>=T.forceReadCound&&U.value.forEach((e=>{e.disabled=!1,e.readDisabled=!1})),I.value&&(I.value.scrollTop=0))}),{immediate:!0}),(e,s)=>{const i=d("ProTab"),o=d("ProFilePreview"),F=d("ProSvg"),B=d("van-config-provider"),E=d("ProPopup");return r(),u(E,{show:D.value,"onUpdate:show":s[1]||(s[1]=e=>D.value=e),class:"file-preview-popup-wrap",closeable:!1,onClose:s[2]||(s[2]=e=>P("onCloseFilePreview"))},{default:n((()=>[v(B,{"theme-vars":p(N),class:"custom-provider"},{default:n((()=>[D.value?(r(),u(i,{key:0,active:j.value,"onUpdate:active":s[0]||(s[0]=e=>j.value=e),list:U.value.map(((e,a)=>({title:e.attachmentName,disabled:a!=j.value&&(e.disabled||!1),slotName:`guarantee-${a}`}))),class:"tab"},null,8,["active","list"])):c("",!0),m("div",{ref_key:"previewRef",ref:I,class:"list",onScroll:A},[1===p(O).length?(r(),h("div",w,[(r(),u(o,{key:p(O)[0].attachmentName,content:p(O)[0].attachmentUri,type:p(O)[0].attachmentType,"forbid-click":!0},null,8,["content","type"]))])):(r(),h("div",k,[(r(!0),h(f,null,b(p(O),((e,a)=>(r(),h("div",{key:a,class:"attachment-list-item",onClick:a=>(e=>{const a={fileType:e.attachmentType,fileUri:e.attachmentUri};t(a)})(e)},[m("div",C,y(e.attachmentName),1),m("div",g,[v(F,{name:"arrow-right"})])],8,x)))),128))]))],544),m("div",R,[p($)?(r(),u(a,{key:0,shadow:!1,"theme-vars":p(N),disabled:p(S),class:"right",text:`${l.beforeReadOverText}(${j.value+1}/${l.forceReadCound})`,onClick:_},null,8,["theme-vars","disabled","text"])):(r(),u(a,{key:1,disabled:p(S),shadow:!1,"theme-vars":p(N),text:T.text,onClick:L},null,8,["disabled","theme-vars","text"]))])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}});export{P as _};

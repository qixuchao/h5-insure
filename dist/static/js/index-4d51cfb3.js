import{t as e}from"./theme-ea709837.js";import{m as a,r as l,e as t,a1 as o,_ as s,s as d,t as u,v as r,x as i,z as v,B as n,G as c,H as p,J as f,O as m}from"./vendor-ec128989.js";const b={class:"item"},h={class:"footer"},y=a({props:{show:{type:Boolean,default:!1},contentList:{type:Array,default:()=>[]},activeIndex:{type:Number,default:0},text:{type:String,default:""},beforeReadOverText:{type:String,default:"同意，下一条"},forceReadCound:{type:Number,default:0}},emits:["update:show","submit","onCloseFilePreview"],setup(a,{emit:y}){const w=a,C=l(w.show),g=l(!0),k=l(w.contentList.map(((e,a)=>({...e,disabled:!0,readDisabled:!0})))),R=l(w.activeIndex),x=l(0),P=l(null),T=t((()=>{var e,a;return null==(a=null==(e=k.value)?void 0:e[R.value])?void 0:a.attachmentUri})),_=t((()=>{var e;return null==(e=k.value[R.value])?void 0:e.readDisabled})),D=t((()=>!(R.value>=w.forceReadCound-1)&&(!(x.value>=w.forceReadCound)&&(x.value<w.forceReadCound&&R.value!==w.forceReadCound-1)))),H=()=>{R.value+=1},N=()=>{y("update:show",!1),y("submit")};o((()=>w),(()=>{C.value=w.show,R.value=w.activeIndex}),{deep:!0,immediate:!0});const $=e=>{var a,l,t;if(e){const o=(null==(a=e.target)?void 0:a.scrollHeight)||e.scrollHeight,s=(null==(l=e.target)?void 0:l.scrollTop)||e.scrollTop,d=(null==(t=e.target)?void 0:t.clientHeight)||e.clientHeight;Math.floor(o-s-15)<=d&&g.value&&k.value[R.value].readDisabled&&(k.value[R.value].disabled=!1,k.value[R.value].readDisabled=!1,k.value[R.value+1].disabled=!1,x.value+=1)}};return o((()=>R.value),(()=>{g.value=!1,w.show&&(x.value>=w.forceReadCound&&k.value.forEach((e=>{e.disabled=!1,e.readDisabled=!1})),setTimeout((()=>{g.value=!0}),800)),s((()=>{setTimeout((()=>{$(P.value)}),2e3)}))}),{immediate:!0}),(l,t)=>{const o=d("ProTab"),s=d("ProFilePreview"),g=d("VanButton"),x=d("van-config-provider"),B=d("ProPopup");return u(),r(B,{show:C.value,"onUpdate:show":t[1]||(t[1]=e=>C.value=e),class:"file-preview-popup-wrap",closeable:!1,onClose:t[2]||(t[2]=e=>y("onCloseFilePreview"))},{default:i((()=>[v(x,{"theme-vars":p(e),class:"custom-provider"},{default:i((()=>[C.value?(u(),r(o,{key:0,active:R.value,"onUpdate:active":t[0]||(t[0]=e=>R.value=e),list:k.value.map(((e,a)=>({title:e.attachmentName,disabled:a!=R.value&&(e.disabled||!1),slotName:`guarantee-${a}`}))),class:"tab"},null,8,["active","list"])):n("",!0),c("div",{ref_key:"previewRef",ref:P,class:"list",onScroll:$},[c("div",b,[(u(),r(s,{key:p(T),content:p(T),type:"pdf","forbid-click":!0},null,8,["content"]))])],544),c("div",h,[p(D)?(u(),r(g,{key:0,disabled:p(_),type:"primary",block:"",round:"",onClick:H},{default:i((()=>[f(m(`${a.beforeReadOverText}(${R.value+1}/${a.forceReadCound})`),1)])),_:1},8,["disabled"])):(u(),r(g,{key:1,disabled:p(_),type:"primary",block:"",round:"",onClick:N},{default:i((()=>[f(m(w.text),1)])),_:1},8,["disabled"]))])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}});export{y as _};

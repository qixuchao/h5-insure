import{d as e,j as a,k as t,A as s,o as l,p as n,w as o,a as i,e as c,u,b as d,a8 as p,q as r,bU as v,aj as h,au as m}from"./index-e5e6a3c6.js";const f=i("div",{class:"tip"},[i("div",{class:"content"},[i("span",null,[i("span",{class:"important-text"},"重要"),p(" 请确认被保险人是否存在下列问题，请如实告知，否则将对您的理赔权益或合同效力产生影响 ")])])],-1),w={class:"title"},y={class:"list"},k={class:"item"},C={class:"footer"},x=e({name:"healthNoticePreview"}),b=e({...x,props:{show:{type:Boolean,default:!0},activeIndex:{default:0},contentList:{default:()=>[]}},emits:["update:show","onConfirmHealth","onCloseHealthByMask"],setup(e,{emit:x}){const b=e,H=a(b.show),L=a(b.activeIndex),j=t((()=>{var e;return null==(e=b.contentList[L.value])?void 0:e.attachmentUri})),B=t((()=>{var e;return null==(e=b.contentList[L.value])?void 0:e.attachmentType})),I=a(!0),N=e=>{"allFalse"===e&&(I.value=!1,x("update:show",!1)),x("onConfirmHealth",e)};return s((()=>b),(()=>{H.value=b.show,L.value=b.activeIndex}),{deep:!0,immediate:!0}),(a,t)=>{const s=v,b=h,L=m;return l(),n(L,{show:u(H),"onUpdate:show":t[2]||(t[2]=e=>r(H)?H.value=e:null),height:80,class:"health-notice-preview-popup-wrap",closeable:!1,onClose:t[3]||(t[3]=e=>{I.value&&x("onCloseHealthByMask")})},{default:o((()=>[f,i("div",w,c(e.contentList[0].attachmentName),1),i("div",y,[i("div",k,[(l(),n(s,{key:u(j),content:u(j),type:u(B)},null,8,["content","type"]))])]),i("div",C,[d(b,{block:"",round:"",class:"left",onClick:t[0]||(t[0]=e=>N("N"))},{default:o((()=>[p("部分为是")])),_:1}),d(b,{type:"primary",plain:"",block:"",round:"",onClick:t[1]||(t[1]=e=>N("allFalse"))},{default:o((()=>[p("以上全否，立即投保")])),_:1})])])),_:1},8,["show"])}}});export{b as default};

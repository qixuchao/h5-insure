import{d as a,r as e,L as t,V as s,b as l,g as n,w as o,i,E as c,f as u,e as d,j as r,a0 as p,_ as v,B as h,a$ as m}from"./index-2aa81fa9.js";const f=i("div",{class:"tip"},[i("div",{class:"content"},[i("span",null,[i("span",{class:"important-text"},"重要"),r(" 请确认被保险人是否存在下列问题，请如实告知，否则将对您的理赔权益或合同效力产生影响 ")])])],-1),w={class:"title"},y={class:"list"},k={class:"item"},C={class:"footer"},x=a({name:"healthNoticePreview"}),L=a({...x,props:{show:{type:Boolean,default:!0},activeIndex:{default:0},contentList:{default:()=>[]}},emits:["update:show","onConfirmHealth","onCloseHealthByMask"],setup(a,{emit:x}){const L=a,b=e(L.show),B=e(L.activeIndex),H=t((()=>{var a;return null==(a=L.contentList[B.value])?void 0:a.attachmentUri})),_=t((()=>{var a;return null==(a=L.contentList[B.value])?void 0:a.attachmentType})),I=e(!0),N=a=>{"allFalse"===a&&(I.value=!1,x("update:show",!1)),x("onConfirmHealth",a)};return s((()=>L),(()=>{b.value=L.show,B.value=L.activeIndex}),{deep:!0,immediate:!0}),(e,t)=>{const s=v,L=h,B=m;return l(),n(B,{show:u(b),"onUpdate:show":t[2]||(t[2]=a=>p(b)?b.value=a:null),height:80,class:"health-notice-preview-popup-wrap",closeable:!1,onClose:t[3]||(t[3]=a=>{I.value&&x("onCloseHealthByMask")})},{default:o((()=>[f,i("div",w,c(a.contentList[0].attachmentName),1),i("div",y,[i("div",k,[(l(),n(s,{key:u(H),content:u(H),type:u(_)},null,8,["content","type"]))])]),i("div",C,[d(L,{block:"",round:"",class:"left",onClick:t[0]||(t[0]=a=>N("N"))},{default:o((()=>[r("部分为是")])),_:1}),d(L,{type:"primary",plain:"",block:"",round:"",onClick:t[1]||(t[1]=a=>N("allFalse"))},{default:o((()=>[r("以上全否，立即投保")])),_:1})])])),_:1},8,["show"])}}});export{L as default};

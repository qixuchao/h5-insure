import{d as a,j as e,k as t,E as s,o as l,p as n,w as o,a as i,e as c,u,b as d,v as r,q as p,c7 as v,ar as h,aB as m}from"./index-2cf2a2f4.js";const f=i("div",{class:"tip"},[i("div",{class:"content"},[i("span",null,[i("span",{class:"important-text"},"重要"),r(" 请确认被保险人是否存在下列问题，请如实告知，否则将对您的理赔权益或合同效力产生影响 ")])])],-1),w={class:"title"},y={class:"list"},k={class:"item"},C={class:"footer"},x=a({name:"healthNoticePreview"}),b=a({...x,props:{show:{type:Boolean,default:!0},activeIndex:{default:0},contentList:{default:()=>[]}},emits:["update:show","onConfirmHealth","onCloseHealthByMask"],setup(a,{emit:x}){const b=a,B=e(b.show),H=e(b.activeIndex),L=t((()=>{var a;return null==(a=b.contentList[H.value])?void 0:a.attachmentUri})),I=t((()=>{var a;return null==(a=b.contentList[H.value])?void 0:a.attachmentType})),N=e(!0),_=a=>{"allFalse"===a&&(N.value=!1,x("update:show",!1)),x("onConfirmHealth",a)};return s((()=>b),(()=>{B.value=b.show,H.value=b.activeIndex}),{deep:!0,immediate:!0}),(a,e)=>{const t=v,s=h,b=m;return l(),n(b,{show:u(B),"onUpdate:show":e[2]||(e[2]=a=>p(B)?B.value=a:null),height:80,class:"health-notice-preview-popup-wrap",closeable:!1,onClose:e[3]||(e[3]=a=>{N.value&&x("onCloseHealthByMask")})},{default:o((()=>[f,i("div",w,c(a.contentList[0].attachmentName),1),i("div",y,[i("div",k,[(l(),n(t,{key:u(L),content:u(L),type:u(I)},null,8,["content","type"]))])]),i("div",C,[d(s,{block:"",round:"",class:"left",onClick:e[0]||(e[0]=a=>_("N"))},{default:o((()=>[r("部分为是")])),_:1}),d(s,{type:"primary",plain:"",block:"",round:"",onClick:e[1]||(e[1]=a=>_("allFalse"))},{default:o((()=>[r("以上全否，立即投保")])),_:1})])])),_:1},8,["show"])}}});export{b as default};

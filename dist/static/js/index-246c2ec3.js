import{d as e,i as a,j as t,z as s,o as l,l as n,w as o,a as i,e as c,u,b as d,a8 as r,m as p,bR as v,an as h,as as m}from"./index-cb6244e5.js";const f=i("div",{class:"tip"},[i("div",{class:"content"},[i("span",null,[i("span",{class:"important-text"},"重要"),r(" 请确认被保险人是否存在下列问题，请如实告知，否则将对您的理赔权益或合同效力产生影响 ")])])],-1),w={class:"title"},y={class:"list"},k={class:"item"},C={class:"footer"},b=e({name:"healthNoticePreview"}),x=e({...b,props:{show:{type:Boolean,default:!0},activeIndex:{default:0},contentList:{default:()=>[]}},emits:["update:show","onConfirmHealth","onCloseHealthByMask"],setup(e,{emit:b}){const x=e,H=a(x.show),L=a(x.activeIndex),B=t((()=>{var e;return null==(e=x.contentList[L.value])?void 0:e.attachmentUri})),I=t((()=>{var e;return null==(e=x.contentList[L.value])?void 0:e.attachmentType})),N=a(!0),_=e=>{"allFalse"===e&&(N.value=!1,b("update:show",!1)),b("onConfirmHealth",e)};return s((()=>x),(()=>{H.value=x.show,L.value=x.activeIndex}),{deep:!0,immediate:!0}),(e,a)=>{const t=v,s=h,x=m;return l(),n(x,{show:u(H),"onUpdate:show":a[2]||(a[2]=e=>p(H)?H.value=e:null),height:80,class:"health-notice-preview-popup-wrap",closeable:!1,onClose:a[3]||(a[3]=e=>{N.value&&b("onCloseHealthByMask")})},{default:o((()=>[f,i("div",w,c(e.contentList[0].attachmentName),1),i("div",y,[i("div",k,[(l(),n(t,{key:u(B),content:u(B),type:u(I)},null,8,["content","type"]))])]),i("div",C,[d(s,{block:"",round:"",class:"left",onClick:a[0]||(a[0]=e=>_("N"))},{default:o((()=>[r("部分为是")])),_:1}),d(s,{type:"primary",plain:"",block:"",round:"",onClick:a[1]||(a[1]=e=>_("allFalse"))},{default:o((()=>[r("以上全否，立即投保")])),_:1})])])),_:1},8,["show"])}}});export{x as default};

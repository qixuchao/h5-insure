import{d as a,i as e,j as t,z as s,o as l,l as n,w as o,a as i,e as c,u,b as d,a8 as r,m as p,bR as v,an as h,as as m}from"./index-a6b4898c.js";const f=i("div",{class:"tip"},[i("div",{class:"content"},[i("span",null,[i("span",{class:"important-text"},"重要"),r(" 请确认被保险人是否存在下列问题，请如实告知，否则将对您的理赔权益或合同效力产生影响 ")])])],-1),w={class:"title"},y={class:"list"},k={class:"item"},C={class:"footer"},b=a({name:"healthNoticePreview"}),x=a({...b,props:{show:{type:Boolean,default:!0},activeIndex:{default:0},contentList:{default:()=>[]}},emits:["update:show","onConfirmHealth","onCloseHealthByMask"],setup(a,{emit:b}){const x=a,H=e(x.show),L=e(x.activeIndex),B=t((()=>{var a;return null==(a=x.contentList[L.value])?void 0:a.attachmentUri})),I=t((()=>{var a;return null==(a=x.contentList[L.value])?void 0:a.attachmentType})),N=e(!0),_=a=>{"allFalse"===a&&(N.value=!1,b("update:show",!1)),b("onConfirmHealth",a)};return s((()=>x),(()=>{H.value=x.show,L.value=x.activeIndex}),{deep:!0,immediate:!0}),(a,e)=>{const t=v,s=h,x=m;return l(),n(x,{show:u(H),"onUpdate:show":e[2]||(e[2]=a=>p(H)?H.value=a:null),height:80,class:"health-notice-preview-popup-wrap",closeable:!1,onClose:e[3]||(e[3]=a=>{N.value&&b("onCloseHealthByMask")})},{default:o((()=>[f,i("div",w,c(a.contentList[0].attachmentName),1),i("div",y,[i("div",k,[(l(),n(t,{key:u(B),content:u(B),type:u(I)},null,8,["content","type"]))])]),i("div",C,[d(s,{block:"",round:"",class:"left",onClick:e[0]||(e[0]=a=>_("N"))},{default:o((()=>[r("部分为是")])),_:1}),d(s,{type:"primary",plain:"",block:"",round:"",onClick:e[1]||(e[1]=a=>_("allFalse"))},{default:o((()=>[r("以上全否，立即投保")])),_:1})])])),_:1},8,["show"])}}});export{x as default};

import{d as a,r as e,E as t,an as s,c as l,e as n,w as o,j as i,t as c,g as u,f as d,n as r,a7 as p,aQ as h,B as v,a8 as m}from"./index-0fe7bae3.js";import{u as f}from"./theme-65292714.js";import"./pdfh5-008ca364.js";const w=i("div",{class:"tip"},[i("div",{class:"content"},[i("span",null,[i("span",{class:"important-text"},"重要"),r(" 请确认被保险人是否存在下列问题，请如实告知，否则将对您的理赔权益或合同效力产生影响 ")])])],-1),y={class:"title"},k={class:"list"},x={class:"item"},C={class:"footer"},_=a({__name:"index",props:{show:{type:Boolean,default:!0},activeIndex:{default:0},contentList:{default:()=>[]}},emits:["update:show","onConfirmHealth","onCloseHealthByMask"],setup(a,{emit:_}){const b=a;f();const j=e(b.show),B=e(b.activeIndex),H=t((()=>{var a;return null==(a=b.contentList[B.value])?void 0:a.attachmentUri})),L=t((()=>{var a;return null==(a=b.contentList[B.value])?void 0:a.attachmentType})),I=e(!0),g=a=>{"allFalse"===a&&(I.value=!1,_("update:show",!1)),_("onConfirmHealth",a)};return s((()=>b),(()=>{j.value=b.show,B.value=b.activeIndex}),{deep:!0,immediate:!0}),(e,t)=>{const s=h,f=v,b=m;return l(),n(b,{show:u(j),"onUpdate:show":t[2]||(t[2]=a=>p(j)?j.value=a:null),height:80,class:"health-notice-preview-popup-wrap",closeable:!1,onClose:t[3]||(t[3]=a=>{I.value&&_("onCloseHealthByMask")})},{default:o((()=>[w,i("div",y,c(a.contentList[0].attachmentName),1),i("div",k,[i("div",x,[(l(),n(s,{key:u(H),content:u(H),type:u(L)},null,8,["content","type"]))])]),i("div",C,[d(f,{block:"",round:"",class:"left",onClick:t[0]||(t[0]=a=>g("N"))},{default:o((()=>[r("部分为是")])),_:1}),d(f,{type:"primary",plain:"",block:"",round:"",onClick:t[1]||(t[1]=a=>g("allFalse"))},{default:o((()=>[r("以上全否，立即投保")])),_:1})])])),_:1},8,["show"])}}});export{_ as default};

import{d as e,r as a,L as t,R as s,b as l,g as n,w as o,i,E as c,f as d,e as u,j as r,a2 as p,_ as h,B as v,ak as f}from"./index-fdf9fbd9.js";import"./pdfh5-008ca364.js";const m=i("div",{class:"tip"},[i("div",{class:"content"},[i("span",null,[i("span",{class:"important-text"},"重要"),r(" 请确认被保险人是否存在下列问题，请如实告知，否则将对您的理赔权益或合同效力产生影响 ")])])],-1),w={class:"title"},y={class:"list"},k={class:"item"},C={class:"footer"},x=e({name:"healthNoticePreview"}),b=e({...x,props:{show:{type:Boolean,default:!0},activeIndex:{default:0},contentList:{default:()=>[]}},emits:["update:show","onConfirmHealth","onCloseHealthByMask"],setup(e,{emit:x}){const b=e,L=a(b.show),B=a(b.activeIndex),H=t((()=>{var e;return null==(e=b.contentList[B.value])?void 0:e.attachmentUri})),_=t((()=>{var e;return null==(e=b.contentList[B.value])?void 0:e.attachmentType})),j=a(!0),I=e=>{"allFalse"===e&&(j.value=!1,x("update:show",!1)),x("onConfirmHealth",e)};return s((()=>b),(()=>{L.value=b.show,B.value=b.activeIndex}),{deep:!0,immediate:!0}),(a,t)=>{const s=h,b=v,B=f;return l(),n(B,{show:d(L),"onUpdate:show":t[2]||(t[2]=e=>p(L)?L.value=e:null),height:80,class:"health-notice-preview-popup-wrap",closeable:!1,onClose:t[3]||(t[3]=e=>{j.value&&x("onCloseHealthByMask")})},{default:o((()=>[m,i("div",w,c(e.contentList[0].attachmentName),1),i("div",y,[i("div",k,[(l(),n(s,{key:d(H),content:d(H),type:d(_)},null,8,["content","type"]))])]),i("div",C,[u(b,{block:"",round:"",class:"left",onClick:t[0]||(t[0]=e=>I("N"))},{default:o((()=>[r("部分为是")])),_:1}),u(b,{type:"primary",plain:"",block:"",round:"",onClick:t[1]||(t[1]=e=>I("allFalse"))},{default:o((()=>[r("以上全否，立即投保")])),_:1})])])),_:1},8,["show"])}}});export{b as default};

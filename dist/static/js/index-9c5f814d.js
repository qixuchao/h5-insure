import{d as a,r as e,L as t,R as s,c as l,e as n,w as o,f as i,E as c,g as u,i as d,j as r,a2 as p,_ as h,B as v,ak as m}from"./index-6a03a03c.js";import"./pdfh5-008ca364.js";const f=i("div",{class:"tip"},[i("div",{class:"content"},[i("span",null,[i("span",{class:"important-text"},"重要"),r(" 请确认被保险人是否存在下列问题，请如实告知，否则将对您的理赔权益或合同效力产生影响 ")])])],-1),w={class:"title"},y={class:"list"},k={class:"item"},C={class:"footer"},x=a({name:"healthNoticePreview"}),L=a({...x,props:{show:{type:Boolean,default:!0},activeIndex:{default:0},contentList:{default:()=>[]}},emits:["update:show","onConfirmHealth","onCloseHealthByMask"],setup(a,{emit:x}){const L=a,B=e(L.show),H=e(L.activeIndex),_=t((()=>{var a;return null==(a=L.contentList[H.value])?void 0:a.attachmentUri})),b=t((()=>{var a;return null==(a=L.contentList[H.value])?void 0:a.attachmentType})),j=e(!0),I=a=>{"allFalse"===a&&(j.value=!1,x("update:show",!1)),x("onConfirmHealth",a)};return s((()=>L),(()=>{B.value=L.show,H.value=L.activeIndex}),{deep:!0,immediate:!0}),(e,t)=>{const s=h,L=v,H=m;return l(),n(H,{show:u(B),"onUpdate:show":t[2]||(t[2]=a=>p(B)?B.value=a:null),height:80,class:"health-notice-preview-popup-wrap",closeable:!1,onClose:t[3]||(t[3]=a=>{j.value&&x("onCloseHealthByMask")})},{default:o((()=>[f,i("div",w,c(a.contentList[0].attachmentName),1),i("div",y,[i("div",k,[(l(),n(s,{key:u(_),content:u(_),type:u(b)},null,8,["content","type"]))])]),i("div",C,[d(L,{block:"",round:"",class:"left",onClick:t[0]||(t[0]=a=>I("N"))},{default:o((()=>[r("部分为是")])),_:1}),d(L,{type:"primary",plain:"",block:"",round:"",onClick:t[1]||(t[1]=a=>I("allFalse"))},{default:o((()=>[r("以上全否，立即投保")])),_:1})])])),_:1},8,["show"])}}});export{L as default};

import{u as e}from"./theme-65292714.js";import{d as t,r as a,x as s,a8 as l,b as o,c as n,e as i,w as r,f as c,i as d,t as u,l as p,n as v}from"./index-deabd4b0.js";import"./pdfh5-e5c0db2a.js";const h=d("div",{class:"tip"},[d("div",{class:"content"},[d("span",null,[d("span",{class:"important-text"},"重要"),v(" 请确认被保险人是否存在下列问题，请如实告知，否则将对您的理赔权益或合同效力产生影响 ")])])],-1),m={class:"title"},f={class:"list"},w={class:"item"},y={class:"footer"},b=v("部分为是"),k=v("以上全否，立即投保"),x=t({props:{show:{type:Boolean,default:!0},activeIndex:{default:0},contentList:{default:()=>[]}},emits:["update:show","onConfirmHealth","onCloseHealthByMask"],setup(t,{emit:v}){const x=t,C=e(),B=a(x.show),H=a(x.activeIndex),L=s((()=>{var e;return null==(e=x.contentList[H.value])?void 0:e.attachmentUri})),P=s((()=>{var e;return null==(e=x.contentList[H.value])?void 0:e.attachmentType})),_=a(!0),j=e=>{"allFalse"===e&&(_.value=!1,v("update:show",!1)),v("onConfirmHealth",e)};return l((()=>x),(()=>{B.value=x.show,H.value=x.activeIndex}),{deep:!0,immediate:!0}),(e,a)=>{const s=o("ProFilePreview"),l=o("VanButton"),x=o("van-config-provider"),H=o("ProPopup");return n(),i(H,{show:B.value,"onUpdate:show":a[2]||(a[2]=e=>B.value=e),height:80,class:"health-notice-preview-popup-wrap",closeable:!1,onClose:a[3]||(a[3]=e=>{_.value&&v("onCloseHealthByMask")})},{default:r((()=>[c(x,{"theme-vars":p(C),class:"custom-provider"},{default:r((()=>[h,d("div",m,u(t.contentList[0].attachmentName),1),d("div",f,[d("div",w,[(n(),i(s,{key:p(L),content:p(L),type:p(P)},null,8,["content","type"]))])]),d("div",y,[c(l,{block:"",round:"",class:"left",onClick:a[0]||(a[0]=e=>j("N"))},{default:r((()=>[b])),_:1}),c(l,{type:"primary",plain:"",block:"",round:"",onClick:a[1]||(a[1]=e=>j("allFalse"))},{default:r((()=>[k])),_:1})])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}});export{x as default};

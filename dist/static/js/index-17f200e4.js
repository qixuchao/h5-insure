import{t as g}from"./theme-eeb93d73.js";import{h as k,G as m,z as B,$ as V,r as a,k as i,m as l,n as c,s as _,v as C,A as u,B as p,E as N,L as I}from"./vendor-b1b61443.js";const L={class:"list"},U={class:"item"},T={class:"footer"},S=k({props:{show:{type:Boolean,default:!0},activeIndex:{default:0},contentList:{default:()=>[]},text:{default:""}},emits:["update:show","submit"],setup(d,{emit:r}){const e=d,n=m(e.show),s=m(e.activeIndex),v=B(()=>e.contentList[s.value].attachmentUri),f=()=>{r("update:show",!1),r("submit")};return V(()=>e,()=>{n.value=e.show,s.value=e.activeIndex},{deep:!0,immediate:!0}),($,t)=>{const h=a("ProTab"),w=a("ProFilePreview"),x=a("VanButton"),P=a("van-config-provider"),y=a("ProPopup");return i(),l(y,{show:n.value,"onUpdate:show":t[1]||(t[1]=o=>n.value=o),height:80,class:"file-preview-popup-wrap",closeable:!1,onClose:t[2]||(t[2]=o=>r("update:show",!1))},{default:c(()=>[_(P,{"theme-vars":p(g)},{default:c(()=>[n.value?(i(),l(h,{key:0,active:s.value,"onUpdate:active":t[0]||(t[0]=o=>s.value=o),list:d.contentList.map((o,b)=>({title:o.attachmentName,slotName:`guarantee-${b}`})),class:"tab"},null,8,["active","list"])):C("",!0),u("div",L,[u("div",U,[(i(),l(w,{key:p(v),content:p(v),type:"pdf"},null,8,["content"]))])]),u("div",T,[_(x,{type:"primary",block:"",round:"",onClick:f},{default:c(()=>[N(I(e.text),1)]),_:1})])]),_:1},8,["theme-vars"])]),_:1},8,["show"])}}});export{S as _};

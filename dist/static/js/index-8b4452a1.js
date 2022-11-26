var U=Object.defineProperty,L=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var k=(l,a,e)=>a in l?U(l,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[a]=e,R=(l,a)=>{for(var e in a||(a={}))M.call(a,e)&&k(l,e,a[e]);if(x)for(var e of x(a))O.call(a,e)&&k(l,e,a[e]);return l},P=(l,a)=>L(l,H(a));import{t as j}from"./theme-3c294048.js";import{g as z,E as d,y as _,_ as B,r as i,j as c,k as v,m,p as J,t as q,z as h,A as u,C as F,J as N}from"./vendor-c3c577f2.js";const G={class:"item"},K={class:"footer"},Y=z({props:{show:{type:Boolean,default:!1},contentList:{type:Array,default:()=>[]},activeIndex:{type:Number,default:0},text:{type:String,default:""},beforeReadOverText:{type:String,default:"\u540C\u610F\uFF0C\u4E0B\u4E00\u6761"},forceReadCound:{type:Number,default:0}},emits:["update:show","submit","onCloseFilePreview"],setup(l,{emit:a}){const e=l,f=d(e.show),s=d(e.contentList.map((t,r)=>P(R({},t),{disabled:!0,readDisabled:!0}))),o=d(e.activeIndex),p=d(0),b=d(null),w=_(()=>{var t,r;return(r=(t=s.value)==null?void 0:t[o.value])==null?void 0:r.attachmentUri}),y=_(()=>{var t;return(t=s.value[o.value])==null?void 0:t.readDisabled}),D=_(()=>o.value>=e.forceReadCound-1||p.value>=e.forceReadCound?!1:p.value<e.forceReadCound?o.value!==e.forceReadCound-1:!1),T=()=>{o.value+=1},V=()=>{a("update:show",!1),a("submit")};B(()=>e,()=>{f.value=e.show,o.value=e.activeIndex},{deep:!0,immediate:!0});const S=t=>{t&&Math.floor(t.target.scrollHeight-t.target.scrollTop)===t.target.clientHeight&&s.value[o.value].readDisabled&&(s.value[o.value].disabled=!1,s.value[o.value].readDisabled=!1,s.value[o.value+1].disabled=!1,p.value+=1)};return B(()=>o.value,()=>{e.show&&(p.value>=e.forceReadCound&&s.value.forEach(t=>{t.disabled=!1,t.readDisabled=!1}),b.value&&(b.value.scrollTop=0))},{immediate:!0}),(t,r)=>{const $=i("ProTab"),A=i("ProFilePreview"),C=i("VanButton"),E=i("van-config-provider"),I=i("ProPopup");return c(),v(I,{show:f.value,"onUpdate:show":r[1]||(r[1]=n=>f.value=n),class:"file-preview-popup-wrap",closeable:!1,onClose:r[2]||(r[2]=n=>a("onCloseFilePreview"))},{default:m(()=>[J(E,{"theme-vars":u(j),class:"custom-provider"},{default:m(()=>[f.value?(c(),v($,{key:0,active:o.value,"onUpdate:active":r[0]||(r[0]=n=>o.value=n),list:s.value.map((n,g)=>({title:n.attachmentName,disabled:g==o.value?!1:n.disabled||!1,slotName:`guarantee-${g}`})),class:"tab"},null,8,["active","list"])):q("",!0),h("div",{ref_key:"previewRef",ref:b,class:"list",onScroll:S},[h("div",G,[(c(),v(A,{key:u(w),content:u(w),type:"pdf","forbid-click":!0},null,8,["content"]))])],544),h("div",K,[u(D)?(c(),v(C,{key:0,disabled:u(y),type:"primary",block:"",round:"",onClick:T},{default:m(()=>[F(N(`${l.beforeReadOverText}(${o.value+1}/${l.forceReadCound})`),1)]),_:1},8,["disabled"])):(c(),v(C,{key:1,disabled:u(y),type:"primary",block:"",round:"",onClick:V},{default:m(()=>[F(N(e.text),1)]),_:1},8,["disabled"]))])]),_:1},8,["theme-vars"])]),_:1},8,["show"])}}});export{Y as _};

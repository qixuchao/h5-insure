import{d as e,r as a,a8 as l,V as n,b as t,c as s,i as d,f as i,e as r,h as o,E as u,$ as c,w as p,k as m,j as f,a9 as h,ab as v,a4 as y}from"./index-99d2dbe5.js";import{P as k}from"./index-9860fce8.js";const C={class:"trial-button-wrap"},x={class:"footer-area"},S=d("span",null,"分享",-1),g={class:"price"},E={key:0},P=e({name:"trialButton"}),$=e({...P,props:{premium:{default:0},tenantProductDetail:{default:()=>({})},planCode:{default:void 0},loadingText:{default:""},paymentFrequency:{default:""},shareInfo:{default:()=>({})},isShare:{type:Boolean,default:!1},handleShare:{}},emits:["handleClick"],setup(e,{emit:P}){const $=e,b=a(""),q=a(""),A=l(),F=a(),j=a(),w=()=>{$.handleShare?$.handleShare((()=>j.value.handleShare(F.value))):j.value.handleShare(F.value)};return n([()=>$.premium,()=>$.tenantProductDetail,()=>$.paymentFrequency,()=>$.planCode],(([e])=>{const{PREMIUM:a=[]}=$.tenantProductDetail||{};let l={};if(null==a?void 0:a.length){l=(a||[]).find((e=>e.planCode===$.planCode||!e.planCode))||{};const n=((null==l?void 0:l.data)||[]).find((e=>e.paymentFrequency===$.paymentFrequency)),{premium:t,minActualUnit:s}=n||{};e?(q.value=s,b.value=e&&`${e}`):(q.value=t,b.value="")}else e&&(q.value="",b.value=e&&`${e}`)}),{deep:!0,immediate:!0}),n((()=>$.shareInfo),(e=>{F.value=e}),{deep:!0,immediate:!0}),(e,a)=>{const l=y;return t(),s("div",C,[d("div",x,[e.isShare&&i(A)?(t(),s("div",{key:0,class:"com-share",onClick:w},[r(l,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),S])):o("",!0),d("div",g,[e.loadingText?(t(),s("span",E,u(e.loadingText),1)):(t(),s(c,{key:1},[d("span",null,u(i(b)),1),d("span",null,u(i(q)),1)],64))]),r(k,h(e.$attrs,{shadow:!1,class:"right",onClick:a[0]||(a[0]=e=>P("handleClick"))}),{default:p((()=>[m(e.$slots,"default",{},(()=>[f("立即投保")]))])),_:3},16)]),r(v,h({ref_key:"shareRef",ref:j},i(F)),null,16)])}}});export{$ as _};

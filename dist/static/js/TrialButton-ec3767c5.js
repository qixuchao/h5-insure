import{d as a,r as e,a5 as l,N as n,b as t,c as s,i as d,f as i,e as r,h as o,$ as u,U as c,w as p,ac as f,j as m,a6 as h,a8 as v,a1 as y}from"./index-13fff9e3.js";import{P as C}from"./index-fa8e7514.js";const k={class:"trial-button-wrap","safe-area-inset-bottom":""},x={class:"footer-area"},S=d("span",null,"分享",-1),g={class:"price"},P={key:0},$=a({name:"trialButton"}),q=a({...$,props:{premium:{default:0},tenantProductDetail:{default:()=>({})},planCode:{default:void 0},loadingText:{default:""},paymentFrequency:{default:""},shareInfo:{default:()=>({})},isShare:{type:Boolean,default:!1},handleShare:{}},emits:["handleClick"],setup(a,{emit:$}){const q=a,A=e(""),E=e(""),F=l(),b=e(),j=e(),w=()=>{q.handleShare?q.handleShare((()=>j.value.handleShare(b.value))):j.value.handleShare(b.value)};return n([()=>q.premium,()=>q.tenantProductDetail,()=>q.paymentFrequency,()=>q.planCode],(([a])=>{const{PREMIUM:e=[]}=q.tenantProductDetail||{};let l={};if(null==e?void 0:e.length){l=(e||[]).find((a=>a.planCode===q.planCode||!a.planCode))||{};const n=((null==l?void 0:l.data)||[]).find((a=>a.paymentFrequency===q.paymentFrequency)),{premium:t,minActualUnit:s}=n||{};a?(E.value=s,A.value=a&&`${a}`):(E.value=t,A.value="")}else a&&(E.value="",A.value=a&&`${a}`)}),{deep:!0,immediate:!0}),n((()=>q.shareInfo),(a=>{b.value=a}),{deep:!0,immediate:!0}),(a,e)=>{const l=y;return t(),s("div",k,[d("div",x,[a.isShare&&i(F)?(t(),s("div",{key:0,class:"com-share",onClick:w},[r(l,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),S])):o("",!0),d("div",g,[a.loadingText?(t(),s("span",P,u(a.loadingText),1)):(t(),s(c,{key:1},[d("span",null,u(i(A)),1),d("span",null,u(i(E)),1)],64))]),r(C,h(a.$attrs,{shadow:!1,class:"right",onClick:e[0]||(e[0]=a=>$("handleClick"))}),{default:p((()=>[f(a.$slots,"default",{},(()=>[m("立即投保")]))])),_:3},16)]),r(v,h({ref_key:"shareRef",ref:j},i(b)),null,16)])}}});export{q as _};

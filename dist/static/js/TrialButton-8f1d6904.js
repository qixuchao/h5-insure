import{d as a,r as e,a5 as l,N as n,b as t,c as s,i as d,f as i,e as r,h as o,$ as u,U as p,w as c,ae as m,j as f,a6 as h,a7 as v,a1 as y}from"./index-4b06130d.js";import{P as C}from"./index-a4b39ea6.js";const k={class:"trial-button-wrap","safe-area-inset-bottom":""},x={class:"footer-area"},S=d("span",null,"分享",-1),b={class:"price"},g={key:0},P=a({name:"trialButton"}),$=a({...P,props:{premium:{default:0},tenantProductDetail:{default:()=>({})},planCode:{default:void 0},loadingText:{default:""},paymentFrequency:{default:""},shareInfo:{default:()=>({})},isShare:{type:Boolean,default:!1},handleShare:{}},emits:["handleClick"],setup(a,{emit:P}){const $=a,q=e(""),A=e(""),E=l(),F=e(),j=e(),w=()=>{$.handleShare?$.handleShare((()=>j.value.handleShare(F.value))):j.value.handleShare(F.value)};return n([()=>$.premium,()=>$.tenantProductDetail,()=>$.paymentFrequency,()=>$.planCode],(([a])=>{const{PREMIUM:e=[]}=$.tenantProductDetail||{};let l={};if(null==e?void 0:e.length){l=(e||[]).find((a=>a.planCode===$.planCode||!a.planCode))||{};const n=((null==l?void 0:l.data)||[]).find((a=>a.paymentFrequency===$.paymentFrequency)),{premium:t,minActualUnit:s}=n||{};a?(A.value=s,q.value=a&&`${a}`):(A.value=t,q.value="")}else a&&(A.value="",q.value=a&&`${a}`)}),{deep:!0,immediate:!0}),n((()=>$.shareInfo),(a=>{F.value=a}),{deep:!0,immediate:!0}),(a,e)=>{const l=y;return t(),s("div",k,[d("div",x,[a.isShare&&i(E)?(t(),s("div",{key:0,class:"com-share",onClick:w},[r(l,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),S])):o("",!0),d("div",b,[a.loadingText?(t(),s("span",g,u(a.loadingText),1)):(t(),s(p,{key:1},[d("span",null,u(i(q)),1),d("span",null,u(i(A)),1)],64))]),r(C,h(a.$attrs,{shadow:!1,class:"right",onClick:e[0]||(e[0]=a=>P("handleClick"))}),{default:c((()=>[m(a.$slots,"default",{},(()=>[f("立即投保")]))])),_:3},16)]),r(v,h({ref_key:"shareRef",ref:j},i(F)),null,16)])}}});export{$ as _};

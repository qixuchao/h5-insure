import{d as a,i as e,ac as l,z as n,o as t,c as s,a as d,f as i,u as o,b as r,q as u,e as c,F as p,w as m,a8 as f,a0 as h,ad as v,ae as y}from"./index-2b9d0680.js";import{P as C}from"./index-23854e29.js";const k={class:"trial-button-wrap","safe-area-inset-bottom":""},x={class:"footer-area"},S=d("span",null,"分享",-1),g={class:"price"},b=d("div",{class:"label"},"首期总保费",-1),q={key:0},F=a({name:"trialButton"}),P=a({...F,props:{premium:{default:0},tenantProductDetail:{default:()=>({})},planCode:{default:void 0},loadingText:{default:""},paymentFrequency:{default:""},shareInfo:{default:()=>({})},isShare:{type:Boolean,default:!1},handleShare:null},emits:["handleClick"],setup(a,{emit:F}){const P=a,$=e(""),A=e(""),E=l(),w=e(),D=e(),I=()=>{P.handleShare?P.handleShare((()=>D.value.handleShare(w.value))):D.value.handleShare(w.value)};return n([()=>P.premium,()=>P.tenantProductDetail,()=>P.paymentFrequency,()=>P.planCode],(([a])=>{const{PREMIUM:e=[]}=P.tenantProductDetail||{};let l={};if(null==e?void 0:e.length){l=(e||[]).find((a=>a.planCode===P.planCode||!a.planCode))||{};const n=((null==l?void 0:l.data)||[]).find((a=>a.paymentFrequency===P.paymentFrequency)),{premium:t,minActualUnit:s}=n||{};a?(A.value=s,$.value=a&&`${a}`):(A.value=t,$.value="")}else a&&(A.value="",$.value=a&&`${a}`)}),{deep:!0,immediate:!0}),n((()=>P.shareInfo),(a=>{w.value=a}),{deep:!0,immediate:!0}),(e,l)=>{const n=y;return t(),s("div",k,[d("div",x,[i(e.$slots,"right",{},(()=>[a.isShare&&o(E)?(t(),s("div",{key:0,class:"com-share",onClick:I},[r(n,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),S])):u("",!0)])),d("div",g,[b,a.loadingText?(t(),s("span",q,c(a.loadingText),1)):(t(),s(p,{key:1},[d("span",null,c(o($)),1),d("span",null,c(o(A)),1)],64))]),r(C,h(e.$attrs,{shadow:!1,class:"right",onClick:l[0]||(l[0]=a=>F("handleClick"))}),{default:m((()=>[i(e.$slots,"default",{},(()=>[f("立即投保")]))])),_:3},16)]),r(v,h({ref_key:"shareRef",ref:D},o(w)),null,16)])}}});export{P as _};

import{d as a,r as e,a8 as l,V as n,b as t,c as s,i as d,f as i,e as r,h as u,E as o,$ as c,w as p,k as m,j as f,a9 as h,ab as v,a4 as y}from"./index-2aa81fa9.js";import{P as k}from"./index-5857444c.js";const C={class:"trial-button-wrap"},x={class:"footer-area"},S=d("span",null,"分享",-1),g={class:"price"},E={key:0},P=a({name:"trialButton"}),$=a({...P,props:{premium:{default:0},tenantProductDetail:{default:()=>({})},planCode:{default:void 0},loadingText:{default:""},paymentFrequency:{default:""},shareInfo:{default:()=>({})},isShare:{type:Boolean,default:!1},handleShare:null},emits:["handleClick"],setup(a,{emit:P}){const $=a,q=e(""),A=e(""),F=l(),b=e(),j=e(),w=()=>{$.handleShare?$.handleShare((()=>j.value.handleShare(b.value))):j.value.handleShare(b.value)};return n([()=>$.premium,()=>$.tenantProductDetail,()=>$.paymentFrequency,()=>$.planCode],(([a])=>{const{PREMIUM:e=[]}=$.tenantProductDetail||{};let l={};if(null==e?void 0:e.length){l=(e||[]).find((a=>a.planCode===$.planCode||!a.planCode))||{};const n=((null==l?void 0:l.data)||[]).find((a=>a.paymentFrequency===$.paymentFrequency)),{premium:t,minActualUnit:s}=n||{};a?(A.value=s,q.value=a&&`${a}`):(A.value=t,q.value="")}else a&&(A.value="",q.value=a&&`${a}`)}),{deep:!0,immediate:!0}),n((()=>$.shareInfo),(a=>{b.value=a}),{deep:!0,immediate:!0}),(e,l)=>{const n=y;return t(),s("div",C,[d("div",x,[a.isShare&&i(F)?(t(),s("div",{key:0,class:"com-share",onClick:w},[r(n,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),S])):u("",!0),d("div",g,[a.loadingText?(t(),s("span",E,o(a.loadingText),1)):(t(),s(c,{key:1},[d("span",null,o(i(q)),1),d("span",null,o(i(A)),1)],64))]),r(k,h(e.$attrs,{shadow:!1,class:"right",onClick:l[0]||(l[0]=a=>P("handleClick"))}),{default:p((()=>[m(e.$slots,"default",{},(()=>[f("立即投保")]))])),_:3},16)]),r(v,h({ref_key:"shareRef",ref:j},i(b)),null,16)])}}});export{$ as _};

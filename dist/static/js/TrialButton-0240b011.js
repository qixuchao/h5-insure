import{d as a,r as e,a8 as l,V as n,b as t,c as s,i as d,f as i,e as r,h as o,E as u,$ as c,w as p,k as m,j as h,a9 as f,ab as v,a4 as y}from"./index-1c6c7a49.js";import{P as k}from"./index-6a9aa811.js";const C={class:"trial-button-wrap"},x={class:"footer-area"},S=d("span",null,"分享",-1),g={class:"price"},E={key:0},P=a({name:"trialButton"}),$=a({...P,props:{premium:{default:0},tenantProductDetail:{default:()=>({})},planCode:{default:void 0},loadingText:{default:""},paymentFrequency:{default:""},shareInfo:{default:()=>({})},isShare:{type:Boolean,default:!1},handleShare:{}},emits:["handleClick"],setup(a,{emit:P}){const $=a,q=e(""),A=e(""),F=l(),b=e(),j=e(),w=()=>{$.handleShare?$.handleShare((()=>j.value.handleShare(b.value))):j.value.handleShare(b.value)};return n([()=>$.premium,()=>$.tenantProductDetail,()=>$.paymentFrequency,()=>$.planCode],(([a])=>{const{PREMIUM:e=[]}=$.tenantProductDetail||{};let l={};if(null==e?void 0:e.length){l=(e||[]).find((a=>a.planCode===$.planCode||!a.planCode))||{};const n=((null==l?void 0:l.data)||[]).find((a=>a.paymentFrequency===$.paymentFrequency)),{premium:t,minActualUnit:s}=n||{};a?(A.value=s,q.value=a&&`${a}`):(A.value=t,q.value="")}else a&&(A.value="",q.value=a&&`${a}`)}),{deep:!0,immediate:!0}),n((()=>$.shareInfo),(a=>{b.value=a}),{deep:!0,immediate:!0}),(a,e)=>{const l=y;return t(),s("div",C,[d("div",x,[a.isShare&&i(F)?(t(),s("div",{key:0,class:"com-share",onClick:w},[r(l,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),S])):o("",!0),d("div",g,[a.loadingText?(t(),s("span",E,u(a.loadingText),1)):(t(),s(c,{key:1},[d("span",null,u(i(q)),1),d("span",null,u(i(A)),1)],64))]),r(k,f(a.$attrs,{shadow:!1,class:"right",onClick:e[0]||(e[0]=a=>P("handleClick"))}),{default:p((()=>[m(a.$slots,"default",{},(()=>[h("立即投保")]))])),_:3},16)]),r(v,f({ref_key:"shareRef",ref:j},i(b)),null,16)])}}});export{$ as _};

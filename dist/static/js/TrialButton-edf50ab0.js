import{d as a,j as e,ad as l,A as t,o as n,c as s,a as d,g as o,u as r,b as i,f as u,e as c,F as p,w as m,a8 as f,a0 as h,ae as v,af as y}from"./index-86787787.js";import{P as C}from"./index-ca08edc0.js";import{t as k}from"./format-31cde443.js";const g={class:"trial-button-wrap","safe-area-inset-bottom":""},x={class:"footer-area"},S=d("span",null,"分享",-1),A={class:"price"},F=d("div",{class:"label"},"首期总保费",-1),P={key:0},$=a({name:"trialButton"}),b=a({...$,props:{premium:{default:null},tenantProductDetail:{default:()=>({})},planCode:{default:void 0},loadingText:{default:""},paymentFrequency:{default:""},shareInfo:{default:()=>({})},isShare:{type:Boolean,default:!1},handleShare:null},emits:["handleClick"],setup(a,{emit:$}){const b=a,j=e(""),q=e(""),E=l(),w=e(),D=e(),I=()=>{b.handleShare?b.handleShare((()=>D.value.handleShare(w.value))):D.value.handleShare(w.value)};return t([()=>b.premium,()=>b.tenantProductDetail,()=>b.paymentFrequency,()=>b.planCode],(([a])=>{const{PREMIUM:e=[]}=b.tenantProductDetail||{};let l={};if(null==e?void 0:e.length){l=(e||[]).find((a=>a.planCode===b.planCode||!a.planCode))||{};const t=((null==l?void 0:l.data)||[]).find((a=>a.paymentFrequency===b.paymentFrequency)),{premium:n,minActualUnit:s}=t||{};a?(q.value=s,j.value=a&&`${a}`):(q.value=n,j.value="")}else j.value=null,a&&(q.value="",j.value=a&&`${a}`)}),{deep:!0,immediate:!0}),t((()=>b.shareInfo),(a=>{w.value=a}),{deep:!0,immediate:!0}),(e,l)=>{const t=y;return n(),s("div",g,[d("div",x,[o(e.$slots,"right",{},(()=>[a.isShare&&r(E)?(n(),s("div",{key:0,class:"com-share",onClick:I},[i(t,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),S])):u("",!0)])),d("div",A,[F,a.loadingText?(n(),s("span",P,c(a.loadingText),1)):(n(),s(p,{key:1},[d("span",null,c(r(k)(r(j))),1),d("span",null,c(r(q)),1)],64))]),i(C,h(e.$attrs,{shadow:!1,class:"right",onClick:l[0]||(l[0]=a=>$("handleClick"))}),{default:m((()=>[o(e.$slots,"default",{},(()=>[f("立即投保")]))])),_:3},16)]),i(v,h({ref_key:"shareRef",ref:D},r(w)),null,16)])}}});export{b as _};

import{d as a,j as e,ad as l,z as t,o as n,c as s,a as o,g as d,u as r,b as i,f as u,e as c,F as p,w as f,a8 as m,a0 as h,ae as v,af as y}from"./index-0aeac8ce.js";import{P as C}from"./index-fe7ef698.js";import{t as k}from"./format-31cde443.js";const g={class:"trial-button-wrap","safe-area-inset-bottom":""},x={class:"footer-area"},S=o("span",null,"分享",-1),F={class:"price"},P=o("div",{class:"label"},"首期总保费",-1),$={key:0},b=a({name:"trialButton"}),j=a({...b,props:{premium:{default:null},tenantProductDetail:{default:()=>({})},planCode:{default:void 0},loadingText:{default:""},paymentFrequency:{default:""},shareInfo:{default:()=>({})},isShare:{type:Boolean,default:!1},handleShare:null},emits:["handleClick"],setup(a,{emit:b}){const j=a,q=e(""),A=e(""),E=l(),w=e(),D=e(),I=()=>{j.handleShare?j.handleShare((()=>D.value.handleShare(w.value))):D.value.handleShare(w.value)};return t([()=>j.premium,()=>j.tenantProductDetail,()=>j.paymentFrequency,()=>j.planCode],(([a])=>{const{PREMIUM:e=[]}=j.tenantProductDetail||{};let l={};if(null==e?void 0:e.length){l=(e||[]).find((a=>a.planCode===j.planCode||!a.planCode))||{};const t=((null==l?void 0:l.data)||[]).find((a=>a.paymentFrequency===j.paymentFrequency)),{premium:n,minActualUnit:s}=t||{};a?(A.value=s,q.value=a&&`${a}`):(A.value=n,q.value="")}else q.value=null,a&&(A.value="",q.value=a&&`${a}`)}),{deep:!0,immediate:!0}),t((()=>j.shareInfo),(a=>{w.value=a}),{deep:!0,immediate:!0}),(e,l)=>{const t=y;return n(),s("div",g,[o("div",x,[d(e.$slots,"right",{},(()=>[a.isShare&&r(E)?(n(),s("div",{key:0,class:"com-share",onClick:I},[i(t,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),S])):u("",!0)])),o("div",F,[P,a.loadingText?(n(),s("span",$,c(a.loadingText),1)):(n(),s(p,{key:1},[o("span",null,c(r(k)(r(q))),1),o("span",null,c(r(A)),1)],64))]),i(C,h(e.$attrs,{shadow:!1,class:"right",onClick:l[0]||(l[0]=a=>b("handleClick"))}),{default:f((()=>[d(e.$slots,"default",{},(()=>[m("立即投保")]))])),_:3},16)]),i(v,h({ref_key:"shareRef",ref:D},r(w)),null,16)])}}});export{j as _};

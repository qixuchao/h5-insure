import{d as e,r as a,aX as l,R as n,c as t,A as s,f as d,g as i,i as r,h as u,E as o,U as c,w as p,k as m,j as f,aa as h,aY as v,ab as y}from"./index-1c56e4ee.js";import{P as k}from"./index-ce8fa660.js";const C={class:"trial-button-wrap"},x={class:"footer-area"},S=d("span",null,"分享",-1),g={class:"price"},A={key:0},E=e({name:"trialButton"}),P=e({...E,props:{premium:{default:0},tenantProductDetail:{default:()=>({})},planCode:{default:void 0},loadingText:{default:""},paymentFrequency:{default:""},shareInfo:{default:()=>({})},isShare:{type:Boolean,default:!1},handleShare:null},emits:["handleClick"],setup(e,{emit:E}){const P=e,q=a(""),F=a(""),j=l(),w=a(),D=a(),I=()=>{P.handleShare?P.handleShare((()=>D.value.handleShare(w.value))):D.value.handleShare(w.value)};return n([()=>P.premium,()=>P.tenantProductDetail,()=>P.paymentFrequency,()=>P.planCode],(([e])=>{const{PREMIUM:a=[]}=P.tenantProductDetail||{};let l={};if(null==a?void 0:a.length){l=(a||[]).find((e=>e.planCode===P.planCode||!e.planCode))||{};const n=((null==l?void 0:l.data)||[]).find((e=>e.paymentFrequency===P.paymentFrequency)),{premium:t,minActualUnit:s}=n||{};e?(F.value=s,q.value=e&&`${e}`):(F.value=t,q.value="")}else e&&(F.value="",q.value=e&&`${e}`)}),{deep:!0,immediate:!0}),n((()=>P.shareInfo),(e=>{w.value=e}),{deep:!0,immediate:!0}),(a,l)=>{const n=y;return t(),s("div",C,[d("div",x,[e.isShare&&i(j)?(t(),s("div",{key:0,class:"com-share",onClick:I},[r(n,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),S])):u("",!0),d("div",g,[e.loadingText?(t(),s("span",A,o(e.loadingText),1)):(t(),s(c,{key:1},[d("span",null,o(i(q)),1),d("span",null,o(i(F)),1)],64))]),r(k,{shadow:!1,class:"right",onClick:l[0]||(l[0]=e=>E("handleClick"))},{default:p((()=>[m(a.$slots,"default",{},(()=>[f("立即投保")]))])),_:3})]),r(v,h({ref_key:"shareRef",ref:D},i(w)),null,16)])}}});export{P as _};

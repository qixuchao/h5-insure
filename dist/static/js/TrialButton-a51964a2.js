import{d as e,r as a,aW as l,R as n,b as t,c as s,i as d,f as i,e as r,h as u,E as o,U as p,w as c,k as m,j as h,a9 as f,aX as v,aa as y}from"./index-30e705a3.js";import{P as k}from"./index-58e4e4e9.js";const C={class:"trial-button-wrap"},x={class:"footer-area"},S=d("span",null,"分享",-1),g={class:"price"},E={key:0},P=e({name:"trialButton"}),q=e({...P,props:{premium:{default:0},tenantProductDetail:{default:()=>({})},planCode:{default:void 0},loadingText:{default:""},paymentFrequency:{default:""},shareInfo:{default:()=>({})},isShare:{type:Boolean,default:!1},handleShare:null},emits:["handleClick"],setup(e,{emit:P}){const q=e,A=a(""),F=a(""),$=l(),j=a(),w=a(),D=()=>{q.handleShare?q.handleShare((()=>w.value.handleShare(j.value))):w.value.handleShare(j.value)};return n([()=>q.premium,()=>q.tenantProductDetail,()=>q.paymentFrequency,()=>q.planCode],(([e])=>{const{PREMIUM:a=[]}=q.tenantProductDetail||{};let l={};if(null==a?void 0:a.length){l=(a||[]).find((e=>e.planCode===q.planCode||!e.planCode))||{};const n=((null==l?void 0:l.data)||[]).find((e=>e.paymentFrequency===q.paymentFrequency)),{premium:t,minActualUnit:s}=n||{};e?(F.value=s,A.value=e&&`${e}`):(F.value=t,A.value="")}else e&&(F.value="",A.value=e&&`${e}`)}),{deep:!0,immediate:!0}),n((()=>q.shareInfo),(e=>{j.value=e}),{deep:!0,immediate:!0}),(a,l)=>{const n=y;return t(),s("div",C,[d("div",x,[e.isShare&&i($)?(t(),s("div",{key:0,class:"com-share",onClick:D},[r(n,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),S])):u("",!0),d("div",g,[e.loadingText?(t(),s("span",E,o(e.loadingText),1)):(t(),s(p,{key:1},[d("span",null,o(i(A)),1),d("span",null,o(i(F)),1)],64))]),r(k,f(a.$attrs,{shadow:!1,class:"right",onClick:l[0]||(l[0]=e=>P("handleClick"))}),{default:c((()=>[m(a.$slots,"default",{},(()=>[h("立即投保")]))])),_:3},16)]),r(v,f({ref_key:"shareRef",ref:w},i(j)),null,16)])}}});export{q as _};

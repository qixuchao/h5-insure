import{d as a,r as e,aX as l,R as n,c as t,A as s,f as d,g as i,i as r,h as u,E as o,U as c,w as p,k as m,j as f,aa as h,aY as v,ab as y}from"./index-f4bb765d.js";import{P as k}from"./index-c9e10b4c.js";const C={class:"trial-button-wrap"},x={class:"footer-area"},S=d("span",null,"分享",-1),g={class:"price"},b={key:0},A=a({name:"trialButton"}),E=a({...A,props:{premium:{default:0},tenantProductDetail:{default:()=>({})},planCode:{default:void 0},loadingText:{default:""},paymentFrequency:{default:""},shareInfo:{default:()=>({})},isShare:{type:Boolean,default:!1},handleShare:null},emits:["handleClick"],setup(a,{emit:A}){const E=a,P=e(""),q=e(""),F=l(),$=e(),j=e(),w=()=>{E.handleShare?E.handleShare((()=>j.value.handleShare($.value))):j.value.handleShare($.value)};return n([()=>E.premium,()=>E.tenantProductDetail,()=>E.paymentFrequency,()=>E.planCode],(([a])=>{const{PREMIUM:e=[]}=E.tenantProductDetail||{};let l={};if(null==e?void 0:e.length){l=(e||[]).find((a=>a.planCode===E.planCode||!a.planCode))||{};const n=((null==l?void 0:l.data)||[]).find((a=>a.paymentFrequency===E.paymentFrequency)),{premium:t,minActualUnit:s}=n||{};a?(q.value=s,P.value=a&&`${a}`):(q.value=t,P.value="")}else a&&(q.value="",P.value=a&&`${a}`)}),{deep:!0,immediate:!0}),n((()=>E.shareInfo),(a=>{$.value=a}),{deep:!0,immediate:!0}),(e,l)=>{const n=y;return t(),s("div",C,[d("div",x,[a.isShare&&i(F)?(t(),s("div",{key:0,class:"com-share",onClick:w},[r(n,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),S])):u("",!0),d("div",g,[a.loadingText?(t(),s("span",b,o(a.loadingText),1)):(t(),s(c,{key:1},[d("span",null,o(i(P)),1),d("span",null,o(i(q)),1)],64))]),r(k,h(e.$attrs,{shadow:!1,class:"right",onClick:l[0]||(l[0]=a=>A("handleClick"))}),{default:p((()=>[m(e.$slots,"default",{},(()=>[f("立即投保")]))])),_:3},16)]),r(v,h({ref_key:"shareRef",ref:j},i($)),null,16)])}}});export{E as _};

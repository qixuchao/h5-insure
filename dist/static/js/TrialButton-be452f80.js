import{d as a,r as e,aX as l,R as n,c as t,A as s,f as d,g as i,i as r,h as u,E as o,U as c,w as p,k as m,j as f,aa as h,aY as v,ab as y}from"./index-079afe73.js";import{P as k}from"./index-dcdbc2e3.js";const C={class:"trial-button-wrap"},x={class:"footer-area"},S=d("span",null,"分享",-1),g={class:"price"},A={key:0},E=a({name:"trialButton"}),P=a({...E,props:{premium:{default:0},tenantProductDetail:{default:()=>({})},planCode:{default:void 0},loadingText:{default:""},paymentFrequency:{default:""},shareInfo:{default:()=>({})},isShare:{type:Boolean,default:!1},handleShare:null},emits:["handleClick"],setup(a,{emit:E}){const P=a,q=e(""),F=e(""),$=l(),b=e(),j=e(),w=()=>{P.handleShare?P.handleShare((()=>j.value.handleShare(b.value))):j.value.handleShare(b.value)};return n([()=>P.premium,()=>P.tenantProductDetail,()=>P.paymentFrequency,()=>P.planCode],(([a])=>{const{PREMIUM:e=[]}=P.tenantProductDetail||{};let l={};if(null==e?void 0:e.length){l=(e||[]).find((a=>a.planCode===P.planCode||!a.planCode))||{};const n=((null==l?void 0:l.data)||[]).find((a=>a.paymentFrequency===P.paymentFrequency)),{premium:t,minActualUnit:s}=n||{};a?(F.value=s,q.value=a&&`${a}`):(F.value=t,q.value="")}else a&&(F.value="",q.value=a&&`${a}`)}),{deep:!0,immediate:!0}),n((()=>P.shareInfo),(a=>{b.value=a}),{deep:!0,immediate:!0}),(e,l)=>{const n=y;return t(),s("div",C,[d("div",x,[a.isShare&&i($)?(t(),s("div",{key:0,class:"com-share",onClick:w},[r(n,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),S])):u("",!0),d("div",g,[a.loadingText?(t(),s("span",A,o(a.loadingText),1)):(t(),s(c,{key:1},[d("span",null,o(i(q)),1),d("span",null,o(i(F)),1)],64))]),r(k,h(e.$attrs,{shadow:!1,class:"right",onClick:l[0]||(l[0]=a=>E("handleClick"))}),{default:p((()=>[m(e.$slots,"default",{},(()=>[f("立即投保")]))])),_:3},16)]),r(v,h({ref_key:"shareRef",ref:j},i(b)),null,16)])}}});export{P as _};

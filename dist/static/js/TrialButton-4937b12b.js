import{ref as e,watch as a}from"vue";import{P as t}from"./index-88613e6f.js";import{H as n,I as l}from"./index-d66a20d8.js";const o={class:"trial-button-wrap"},u={class:"footer-area"},r=vue.createElementVNode("span",null,"分享",-1),d={class:"price"},v={key:0},i=vue.defineComponent({name:"trialButton"}),c=vue.defineComponent({...i,props:{premium:{default:0},tenantProductDetail:{default:()=>({})},planCode:{default:void 0},loadingText:{default:""},paymentFrequency:{default:""},shareInfo:{default:()=>({})},isShare:{type:Boolean,default:!1},handleShare:{}},emits:["handleClick"],setup(i,{emit:c}){const s=i,m=e(""),p=e(""),f=n(),h=e(),k=e(),y=()=>{s.handleShare?s.handleShare((()=>k.value.handleShare(h.value))):k.value.handleShare(h.value)};return a([()=>s.premium,()=>s.tenantProductDetail,()=>s.paymentFrequency,()=>s.planCode],(([e])=>{const{PREMIUM:a=[]}=s.tenantProductDetail||{};let t={};if(null==a?void 0:a.length){t=(a||[]).find((e=>e.planCode===s.planCode||!e.planCode))||{};const n=((null==t?void 0:t.data)||[]).find((e=>e.paymentFrequency===s.paymentFrequency)),{premium:l,minActualUnit:o}=n||{};e?(p.value=o,m.value=e&&`${e}`):(p.value=l,m.value="")}else e&&(p.value="",m.value=e&&`${e}`)}),{deep:!0,immediate:!0}),a((()=>s.shareInfo),(e=>{h.value=e}),{deep:!0,immediate:!0}),(e,a)=>{const n=vue.resolveComponent("ProSvg");return vue.openBlock(),vue.createElementBlock("div",o,[vue.createElementVNode("div",u,[e.isShare&&vue.unref(f)?(vue.openBlock(),vue.createElementBlock("div",{key:0,class:"com-share",onClick:y},[vue.createVNode(n,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),r])):vue.createCommentVNode("",!0),vue.createElementVNode("div",d,[e.loadingText?(vue.openBlock(),vue.createElementBlock("span",v,vue.toDisplayString(e.loadingText),1)):(vue.openBlock(),vue.createElementBlock(vue.Fragment,{key:1},[vue.createElementVNode("span",null,vue.toDisplayString(vue.unref(m)),1),vue.createElementVNode("span",null,vue.toDisplayString(vue.unref(p)),1)],64))]),vue.createVNode(t,vue.mergeProps(e.$attrs,{shadow:!1,class:"right",onClick:a[0]||(a[0]=e=>c("handleClick"))}),{default:vue.withCtx((()=>[vue.renderSlot(e.$slots,"default",{},(()=>[vue.createTextVNode("立即投保")]))])),_:3},16)]),vue.createVNode(l,vue.mergeProps({ref_key:"shareRef",ref:k},vue.unref(h)),null,16)])}}});export{c as _};

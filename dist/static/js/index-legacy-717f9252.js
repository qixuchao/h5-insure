!function(){var e=document.createElement("style");e.innerHTML=".com-field-info[data-v-74e2bdf6]{display:flex;align-items:center;justify-content:space-between;height:1.41333rem;border-top:1px solid #eeeff4}.com-field-info .title[data-v-74e2bdf6]{flex:0 0 3.33333rem;font-size:.4rem;font-weight:600;color:#393d46}.com-field-info .desc[data-v-74e2bdf6]{flex:1;text-align:right;font-size:.4rem;color:#515865;line-height:.56rem}.pro-modal .pro-overlay[data-v-39527d44]{position:fixed;top:0;left:0;z-index:99;width:100%;height:100%;background:var(--van-overlay-background-color)}.pro-modal .pro-modal-wrapper[data-v-39527d44]{position:fixed;top:0;left:0;z-index:100;width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:1.2rem;text-align:center}.pro-modal .pro-modal-wrapper .pro-modal-body[data-v-39527d44]{width:100%;height:60%;background:url(/static/assets/upgrade_success.7fcab77e.png) no-repeat;background-size:contain;padding:.4rem}.pro-modal .pro-modal-wrapper .pro-modal-body .pro-modal-body-bg[data-v-39527d44],.pro-modal .pro-modal-wrapper .pro-modal-body .pro-modal-body-bg img[data-v-39527d44]{width:100%}.pro-modal .pro-modal-wrapper .pro-modal-body .pro-modal-btn[data-v-39527d44]{width:5.6rem;height:1.17333rem;background:var(--van-primary-color);border-radius:.58667rem;font-size:.45333rem;font-weight:700;color:#fff;line-height:1.17333rem;text-align:center;margin:auto}.pro-modal .pro-modal-wrapper .pro-modal-content[data-v-39527d44]{padding:4.13333rem 0 .8rem;font-size:.4rem;font-weight:500;color:#9f5012;line-height:.61333rem}.pro-modal .pro-modal-wrapper .pro-modal-close[data-v-39527d44]{padding:.53333rem}.pro-modal .pro-modal-wrapper .pro-modal-close img[data-v-39527d44]{width:.77333rem;height:.77333rem}.page-activity-upgrade[data-v-914eaa42]{background:linear-gradient(180deg,#fea64a 0%,#fc7429 88%,#fc6d24 100%);position:relative;height:100%;width:100%}.page-activity-upgrade .banner[data-v-914eaa42]{width:100%}.page-activity-upgrade .container[data-v-914eaa42]{position:absolute;left:0;width:100%;padding:.26667rem;bottom:.8rem}.page-activity-upgrade .container .main-form[data-v-914eaa42]{background:url(/static/assets/bg.c7f48ab0.png) no-repeat;background-size:100% 100%;position:relative;padding:.26667rem}.page-activity-upgrade .container .main-form .com-field-info[data-v-914eaa42]:first-child{border-top:none}.page-activity-upgrade .container .main-form .upgrade-btn[data-v-914eaa42]{margin-bottom:.26667rem;background-color:var(--van-primary-color);border-color:var(--van-primary-color)}.page-activity-upgrade .container .main-form .submit[data-v-914eaa42]{height:1.33333rem;margin-top:.53333rem;margin-bottom:.46667rem;background:url(/static/assets/up.66fa7d45.png) no-repeat;background-size:contain;background-position:center;border:none}.page-activity-upgrade[data-v-914eaa42] .com-check-btn.activated-disabled,[data-v-914eaa42] .com-check-btn.activated-disabled{background-color:#ff6d23}[data-v-914eaa42] .van-cell{padding:.26667rem 0;border-top:1px solid #eeeff4}[data-v-914eaa42] .van-field__label{font-size:.4rem;font-weight:600;color:#393d46}\n",document.head.appendChild(e),System.register(["./vendor-legacy-92a8f610.js","./infoCollection-legacy-463c6cf6.js","./index-legacy-60fc8b86.js","./close-legacy-d9c2a5df.js","./order-legacy-c2bcb521.js","./trial-legacy-09564f5f.js","./theme-legacy-0d67cf8b.js","./utils-legacy-caa8bbf8.js","./product-legacy-ba8a3676.js","./trial-legacy-05a98547.js"],(function(e){"use strict";var a,o,t,d,r,n,i,l,c,s,u,p,v,m,g,f,b,h,y,I,w,k,x,C,S,O,j,N,_,D,z,L,U,$,P,R,V,E,H;return{setters:[function(e){a=e.g,o=e.j,t=e.n,d=e.z,r=e.J,n=e.A,i=e.t,l=e.a4,c=e.a5,s=e.a9,u=e.O,p=e.E,v=e.h,m=e.r,g=e.k,f=e.m,b=e.p,h=e.T},function(e){y=e.S},function(e){I=e._,w=e.a1},function(e){k=e.c},function(e){x=e.a},function(e){C=e.d,S=e.i,O=e.a,j=e.s,N=e.e,_=e.E},function(e){D=e.t},function(e){z=e.n,L=e.i,U=e.m,$=e.a,P=e.g,R=e.t,V=e.d,E=e.b},function(e){H=e.p},function(){}],execute:function(){const J={class:"com-field-info"},B={class:"title"},F={class:"desc"};var M=I(a({props:{title:{type:String,default:""},desc:{type:String,default:""}},setup:e=>(a,n)=>(o(),t("div",J,[d("div",B,r(e.title),1),d("div",F,r(e.desc),1)]))}),[["__scopeId","data-v-74e2bdf6"]]);const T=e=>(l("data-v-39527d44"),e=e(),c(),e),q={key:0,class:"pro-modal"},K=T((()=>d("div",{class:"pro-overlay"},null,-1))),A={class:"pro-modal-wrapper"},G=T((()=>d("div",{class:"pro-modal-content"},[d("p",null,"恭喜您"),d("p",null,"保障升级成功")],-1))),W=["src"],Y=a({props:{bg:{type:String,default:""},btn:{type:String,default:""},isShow:{type:Boolean,default:()=>{}}},emits:["on-confirm","on-close"],setup(e,{emit:a}){const r=e,l=()=>{a("on-close")};return(e,a)=>r.isShow?(o(),t("div",q,[K,d("div",A,[d("div",{class:"pro-modal-body"},[G,d("div",{class:"pro-modal-btn",onClick:l},"我知道了")]),d("div",{class:"pro-modal-close",onClick:l},[d("img",{src:n(k)},null,8,W)])])])):i("",!0)}});var Q=I(Y,[["__scopeId","data-v-39527d44"]]);const X={class:"page-activity-upgrade"},Z=["src"],ee={class:"container"},ae={class:"main-form"};e("default",I(a({setup(e){const a=s(),t=u(),{productCode:r="BWYL2022",tenantId:i,orderNo:l,agentCode:c="",from:I}=t.query,k=p(),J=p(),B=p(),F=p(),T=p(),q=p(),K=p(!1),A="check"===I,G=()=>{K.value=!1},W=e=>`${w}/chuangxin/baigebao/orderDetail?orderNo=${e}&productCode=${r}&tenantId=${i}`,Y=async e=>{try{h.loading({forbidClick:!0,message:"升级中"});const e=await(async()=>{var e,a,o,t,d;const r=P({tenantId:i,applicationNo:B.value.applicationNo,policyNo:B.value.policyNo,saleUserId:c,saleChannelId:B.value.saleChannelId,orderStatus:x.UP_PROCESSING,orderTopStatus:"-1",orderCategory:2,detail:k.value,insureDetail:J.value,paymentMethod:null===(e=B.value.extInfo)||void 0===e||null===(a=e.extraInfo)||void 0===a?void 0:a.paymentMethod,renewalDK:null===(o=B.value.extInfo)||void 0===o||null===(t=o.extraInfo)||void 0===t?void 0:t.renewalDK,successJumpUrl:"",premium:F.value,holder:{...B.value.tenantOrderHolder,socialFlag:B.value.tenantOrderHolder.extInfo.hasSocialInsurance},insured:{...B.value.tenantOrderInsuredList[0],socialFlag:B.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance},tenantOrderRiskList:R({tenantId:i,riskList:V(J.value.productRiskVoList[0].riskDetailVOList,k.value),riskPremium:{},productId:null===(d=k.value)||void 0===d?void 0:d.id})}),n=await j(r),{code:l,data:s}=n;return"10000"===l?s.data:""})();await C({tenantId:i,applicationNo:B.value.applicationNo});if(q.value){const a=encodeURIComponent(encodeURIComponent(W(e))),o=`${q.value}&successUrl=${a}`;window.location.href=A?o:q.value}else(async e=>{const o=E({tenantId:i,premium:F.value,orderDetail:B.value,productDetail:k.value,insureDetail:J.value,successJumpUrl:W(e)}),t=await _({orderNo:e,...o}),{code:d,data:n}=t;"10000"===d&&(A?a.replace(`/chuangxin/baigebao/orderDetail?orderNo=${e}&productCode=${r}&tenantId=${i}`):K.value=!0)})(e)}catch(o){h.clear()}},oe=()=>{h.loading({forbidClick:!0,duration:2e4,message:"试算中"});const e=H({productCode:r,withInsureInfo:!0,tenantId:i}),a=S({productCode:r}),o=O({orderNo:l,tenantId:i});Promise.all([e,a,o]).then((([e,a,o])=>{"10000"===e.code&&(k.value=e.data),"10000"===a.code&&(J.value=a.data),"10000"===o.code&&(B.value=o.data,T.value=o.data.tenantOrderInsuredList[0].extInfo.hasSocialInsurance),(async()=>{try{const e=E({tenantId:i,premium:F.value,orderDetail:B.value,productDetail:k.value,insureDetail:J.value,successJumpUrl:""}),a=await N(e),{code:o,data:t}=a;"10000"===o&&(F.value=t.installmentPremium,q.value=t.signUrl),h.clear()}catch(e){}})()}))};return v((()=>{oe()})),(e,a)=>{const t=m("ProRadioButton"),r=m("ProField"),i=m("van-config-provider");return o(),g(i,{"theme-vars":n(D)},{default:f((()=>{var e,o,i,l,c,s,u,p;return[d("div",X,[d("img",{src:null===(e=k.value)||void 0===e||null===(o=e.tenantProductInsureVO)||void 0===o?void 0:o.banner[0],class:"banner"},null,8,Z),d("div",ee,[d("div",ae,[b(M,{title:"姓名",desc:n(z)(null===(i=B.value)||void 0===i||null===(l=i.tenantOrderInsuredList)||void 0===l?void 0:l[0].name)},null,8,["desc"]),b(M,{title:"证件号码",desc:n(L)(null===(c=B.value)||void 0===c||null===(s=c.tenantOrderInsuredList)||void 0===s?void 0:s[0].certNo)},null,8,["desc"]),b(M,{title:"手机号码",desc:n(U)(null===(u=B.value)||void 0===u||null===(p=u.tenantOrderHolder)||void 0===p?void 0:p.mobile)},null,8,["desc"]),b(M,{title:"每月保费",desc:`${n($)(F.value||0)}元 / 每月`},null,8,["desc"]),b(r,{label:"有无社保",name:"name",required:"",placeholder:"请选择"},{input:f((()=>[b(t,{modelValue:T.value,"onUpdate:modelValue":a[0]||(a[0]=e=>T.value=e),disabled:!0,options:n(y)},null,8,["modelValue","options"])])),_:1}),d("div",{class:"submit",onClick:Y})])]),b(Q,{"is-show":K.value,onOnClose:G},null,8,["is-show"])])]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-914eaa42"]]))}}}))}();

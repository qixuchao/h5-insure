!function(){var e=document.createElement("style");e.innerHTML=".com-field-info[data-v-74e2bdf6]{display:flex;align-items:center;justify-content:space-between;height:1.41333rem;border-top:1px solid #eeeff4}.com-field-info .title[data-v-74e2bdf6]{flex:0 0 3.33333rem;font-size:.4rem;font-weight:600;color:#393d46}.com-field-info .desc[data-v-74e2bdf6]{flex:1;text-align:right;font-size:.4rem;color:#515865;line-height:.56rem}.pro-modal .pro-overlay[data-v-39527d44]{position:fixed;top:0;left:0;z-index:99;width:100%;height:100%;background:var(--van-overlay-background-color)}.pro-modal .pro-modal-wrapper[data-v-39527d44]{position:fixed;top:0;left:0;z-index:100;width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:1.2rem;text-align:center}.pro-modal .pro-modal-wrapper .pro-modal-body[data-v-39527d44]{width:100%;height:60%;background:url(/static/assets/upgrade_success.e9f0a44d.png) no-repeat;background-size:contain;padding:.4rem}.pro-modal .pro-modal-wrapper .pro-modal-body .pro-modal-body-bg[data-v-39527d44],.pro-modal .pro-modal-wrapper .pro-modal-body .pro-modal-body-bg img[data-v-39527d44]{width:100%}.pro-modal .pro-modal-wrapper .pro-modal-body .pro-modal-btn[data-v-39527d44]{width:5.6rem;height:1.17333rem;background:var(--van-primary-color);border-radius:.58667rem;font-size:.45333rem;font-weight:700;color:#fff;line-height:1.17333rem;text-align:center;margin:auto}.pro-modal .pro-modal-wrapper .pro-modal-content[data-v-39527d44]{padding:4.13333rem 0 .8rem;font-size:.4rem;font-weight:500;color:#9f5012;line-height:.61333rem}.pro-modal .pro-modal-wrapper .pro-modal-close[data-v-39527d44]{padding:.53333rem}.pro-modal .pro-modal-wrapper .pro-modal-close img[data-v-39527d44]{width:.77333rem;height:.77333rem}.page-activity-upgrade[data-v-9855824a]{background:linear-gradient(180deg,#fea64a 0%,#fc7429 88%,#fc6d24 100%);position:relative;height:100%;width:100%}.page-activity-upgrade .logo[data-v-9855824a]{width:50%;margin:.4rem;position:absolute}.page-activity-upgrade .banner[data-v-9855824a]{width:100%}.page-activity-upgrade .container[data-v-9855824a]{position:absolute;left:0;width:100%;padding:.26667rem;bottom:.8rem}.page-activity-upgrade .container .main-form[data-v-9855824a]{background:url(/static/assets/bg.c7f48ab0.png) no-repeat;background-size:100% 100%;position:relative;padding:.26667rem}.page-activity-upgrade .container .main-form .com-field-info[data-v-9855824a]:first-child{border-top:none}.page-activity-upgrade .container .main-form .upgrade-btn[data-v-9855824a]{margin-bottom:.26667rem;background-color:var(--van-primary-color);border-color:var(--van-primary-color)}.page-activity-upgrade .container .main-form .submit[data-v-9855824a]{height:1.33333rem;margin-top:.53333rem;margin-bottom:.46667rem;background:url(/static/assets/up.66fa7d45.png) no-repeat;background-size:contain;background-position:center;border:none}.page-activity-upgrade[data-v-9855824a] .com-check-btn.activated-disabled,[data-v-9855824a] .com-check-btn.activated-disabled{background-color:#ff6d23}[data-v-9855824a] .van-cell{padding:.26667rem 0;border-top:1px solid #eeeff4}[data-v-9855824a] .van-field__label{font-size:.4rem;font-weight:600;color:#393d46}\n",document.head.appendChild(e),System.register(["./vendor-legacy-1e86c4b9.js","./infoCollection-legacy-f3c4910f.js","./index-legacy-86ce44e7.js","./close-legacy-d9c2a5df.js","./order-legacy-c2bcb521.js","./trial-legacy-2ccf7271.js","./theme-legacy-0cd02d1a.js","./product-legacy-fe0ccfa5.js","./trial-legacy-71389a9d.js"],(function(e){"use strict";var a,t,o,d,r,n,i,l,c,s,u,p,v,m,g,f,h,b,y,w,I,k,x,S,C,O,_,j,z,L,D,P,N;return{setters:[function(e){a=e.g,t=e.j,o=e.n,d=e.z,r=e.J,n=e.A,i=e.t,l=e.a4,c=e.a5,s=e.O,u=e.E,p=e.h,v=e.r,m=e.k,g=e.m,f=e.p,h=e.T},function(e){b=e.S},function(e){y=e._},function(e){w=e.c},function(e){I=e.a},function(e){k=e.i,x=e.a,S=e.s,C=e.e,O=e.E},function(e){_=e.a,j=e.t,z=e.g,L=e.c,D=e.d,P=e.e},function(e){N=e.p},function(){}],execute:function(){const V={class:"com-field-info"},E={class:"title"},H={class:"desc"};var R=y(a({props:{title:{type:String,default:""},desc:{type:String,default:""}},setup:e=>(a,n)=>(t(),o("div",V,[d("div",E,r(e.title),1),d("div",H,r(e.desc),1)]))}),[["__scopeId","data-v-74e2bdf6"]]);const U=e=>(l("data-v-39527d44"),e=e(),c(),e),B={key:0,class:"pro-modal"},F=U((()=>d("div",{class:"pro-overlay"},null,-1))),M={class:"pro-modal-wrapper"},T=U((()=>d("div",{class:"pro-modal-content"},[d("p",null,"恭喜您"),d("p",null,"保障升级成功")],-1))),q=["src"],J=a({props:{bg:{type:String,default:""},btn:{type:String,default:""},isShow:{type:Boolean,default:()=>{}}},emits:["on-confirm","on-close"],setup(e,{emit:a}){const r=e,l=()=>{a("on-close")};return(e,a)=>r.isShow?(t(),o("div",B,[F,d("div",M,[d("div",{class:"pro-modal-body"},[T,d("div",{class:"pro-modal-btn",onClick:l},"我知道了")]),d("div",{class:"pro-modal-close",onClick:l},[d("img",{src:n(w)},null,8,q)])])])):i("",!0)}});var K=y(J,[["__scopeId","data-v-39527d44"]]);const A={class:"page-activity-upgrade"},G=["src"],W={class:"container"},Y={class:"main-form"};e("default",y(a({setup(e){const a=s(),{productCode:o="BWYL2022",tenantId:r,orderId:i}=a.query,l=u(),c=u(),y=u(),w=u(),V=u(),E=u(),H=u(!1),U=()=>{H.value=!1},B=async()=>{const e=P({tenantId:r,premium:w.value,orderDetail:y.value,productDetail:l.value,insureDetail:c.value}),a=await C(e),{code:t,data:o}=a;"10000"===t&&(w.value=o.installmentPremium,E.value=o.signUrl)},F=async e=>{try{h.loading({forbidClick:!0,message:"升级中"}),await B();const e=await(async()=>{var e,a,t,o,d;const n=z({tenantId:r,applicationNo:y.value.applicationNo,policyNo:y.value.policyNo,saleChannelId:y.value.saleChannelId,orderStatus:I.UP_PROCESSING,orderTopStatus:"-1",orderCategory:2,detail:l.value,insureDetail:c.value,paymentMethod:null===(e=y.value.extInfo)||void 0===e||null===(a=e.extraInfo)||void 0===a?void 0:a.paymentMethod,renewalDK:null===(t=y.value.extInfo)||void 0===t||null===(o=t.extraInfo)||void 0===o?void 0:o.renewalDK,successJumpUrl:"",premium:w.value,holder:{...y.value.tenantOrderHolder,socialFlag:y.value.tenantOrderHolder.extInfo.hasSocialInsurance},insured:{...y.value.tenantOrderInsuredList[0],socialFlag:y.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance},tenantOrderRiskList:L({tenantId:r,riskList:D(c.value.productRiskVoList[0].riskDetailVOList,l.value),riskPremium:{},productId:null===(d=l.value)||void 0===d?void 0:d.id})}),i=await S(n),{code:s,data:u}=i;return"10000"===s?u.data:""})();E.value?window.location.href=E.value:(async e=>{const a=P({tenantId:r,premium:w.value,orderDetail:y.value,productDetail:l.value,insureDetail:c.value}),t=await O({id:e,...a}),{code:o,data:d}=t;"10000"===o&&(H.value=!0)})(e)}catch(a){h.clear()}};return p((()=>{(()=>{const e=N({productCode:o,withInsureInfo:!0,tenantId:r}),a=k({productCode:o}),t=x({id:i,tenantId:r});Promise.all([e,a,t]).then((([e,a,t])=>{"10000"===e.code&&(l.value=e.data),"10000"===a.code&&(c.value=a.data),"10000"===t.code&&(y.value=t.data,V.value=t.data.tenantOrderInsuredList[0].extInfo.hasSocialInsurance),B()}))})()})),(e,a)=>{const o=v("ProRadioButton"),r=v("ProField"),i=v("van-config-provider");return t(),m(i,{"theme-vars":n(j)},{default:g((()=>{var e,t,i,c,s,u,p,v;return[d("div",A,[d("img",{src:null===(e=l.value)||void 0===e||null===(t=e.tenantProductInsureVO)||void 0===t?void 0:t.banner[0],class:"banner"},null,8,G),d("div",W,[d("div",Y,[f(R,{title:"姓名",desc:null===(i=y.value)||void 0===i||null===(c=i.tenantOrderInsuredList)||void 0===c?void 0:c[0].name},null,8,["desc"]),f(R,{title:"证件号码",desc:null===(s=y.value)||void 0===s||null===(u=s.tenantOrderInsuredList)||void 0===u?void 0:u[0].certNo},null,8,["desc"]),f(R,{title:"手机号码",desc:null===(p=y.value)||void 0===p||null===(v=p.tenantOrderHolder)||void 0===v?void 0:v.mobile},null,8,["desc"]),f(R,{title:"每月保费",desc:`${n(_)(w.value||0)}元 / 每月`},null,8,["desc"]),f(r,{label:"有无社保",name:"name",required:"",placeholder:"请选择"},{input:g((()=>[f(o,{modelValue:V.value,"onUpdate:modelValue":a[0]||(a[0]=e=>V.value=e),disabled:!0,options:n(b)},null,8,["modelValue","options"])])),_:1}),d("div",{class:"submit",onClick:F})])]),f(K,{"is-show":H.value,onOnClose:U},null,8,["is-show"])])]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-9855824a"]]))}}}))}();

!function(){var e=document.createElement("style");e.innerHTML=".health-notice-preview-popup-wrap .custom-provider{height:100%}.health-notice-preview-popup-wrap .tab{height:1.41333rem;width:100%}.health-notice-preview-popup-wrap .tab .van-tab{padding:0 var(--zaui-card-border, .4rem)}.health-notice-preview-popup-wrap .tab .van-tabs__line{background:var(--van-primary-color)}.health-notice-preview-popup-wrap .tip{margin:0px .42667rem .53333rem;padding-top:.53333rem}.health-notice-preview-popup-wrap .tip .content{padding:.42667rem;background:#fff8f3;border-radius:.26667rem;display:flex;align-items:center}.health-notice-preview-popup-wrap .tip .content span{display:inline-block;font-size:.37333rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#333;line-height:.53333rem}.health-notice-preview-popup-wrap .tip .important-text{height:.53333rem;padding:0px .10667rem;border-radius:.10667rem;margin-top:-.08rem;font-size:.26667rem!important;font-family:PingFangSC-Medium,PingFang SC;background:var(--van-linear-bg)!important;color:#fff!important;line-height:.53333rem!important}.health-notice-preview-popup-wrap .title{text-align:center;height:.74667rem;font-size:.53333rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#333;line-height:.74667rem}.health-notice-preview-popup-wrap .list{height:calc(100% - 5.6rem);overflow-y:scroll}.health-notice-preview-popup-wrap .footer{display:flex;align-items:center;justify-content:center;position:absolute;width:100%;bottom:0;background-color:#fff;z-index:1;padding:.21333rem .26667rem}.health-notice-preview-popup-wrap .footer .van-button--primary{background:var(--van-linear-bg)!important;font-size:.32rem}.health-notice-preview-popup-wrap .footer .van-button--plain.van-button--primary{color:#fff;margin-left:.4rem}.health-notice-preview-popup-wrap .footer .left{width:50%!important}\n",document.head.appendChild(e),System.register(["./index-legacy-991c023d.js","./theme-legacy-14f266cb.js","./pdfh5-legacy-9f98dc45.js"],(function(e){"use strict";var t,a,n,i,o,r,p,l,c,s,h,u,d,m,f,v,g;return{setters:[function(e){t=e.d,a=e.r,n=e.E,i=e.am,o=e.c,r=e.e,p=e.w,l=e.f,c=e.i,s=e.t,h=e.m,u=e.n,d=e.aP,m=e.B,f=e.bT,v=e.a7},function(e){g=e.u},function(){}],execute:function(){const w=c("div",{class:"tip"},[c("div",{class:"content"},[c("span",null,[c("span",{class:"important-text"},"重要"),u(" 请确认被保险人是否存在下列问题，请如实告知，否则将对您的理赔权益或合同效力产生影响 ")])])],-1),b={class:"title"},y={class:"list"},C={class:"item"},k={class:"footer"},x=u("部分为是"),F=u("以上全否，立即投保");e("default",t({props:{show:{type:Boolean,default:!0},activeIndex:{default:0},contentList:{default:()=>[]}},emits:["update:show","onConfirmHealth","onCloseHealthByMask"],setup(e,{emit:t}){const u=e,P=g(),S=a(u.show),z=a(u.activeIndex),M=n((()=>{var e;return null===(e=u.contentList[z.value])||void 0===e?void 0:e.attachmentUri})),_=n((()=>{var e;return null===(e=u.contentList[z.value])||void 0===e?void 0:e.attachmentType})),H=a(!0),L=e=>{"allFalse"===e&&(H.value=!1,t("update:show",!1)),t("onConfirmHealth",e)};return i((()=>u),(()=>{S.value=u.show,z.value=u.activeIndex}),{deep:!0,immediate:!0}),(a,n)=>{const i=d,u=m,g=f,z=v;return o(),r(z,{show:S.value,"onUpdate:show":n[2]||(n[2]=e=>S.value=e),height:80,class:"health-notice-preview-popup-wrap",closeable:!1,onClose:n[3]||(n[3]=e=>{H.value&&t("onCloseHealthByMask")})},{default:p((()=>[l(g,{"theme-vars":h(P),class:"custom-provider"},{default:p((()=>[w,c("div",b,s(e.contentList[0].attachmentName),1),c("div",y,[c("div",C,[(o(),r(i,{key:h(M),content:h(M),type:h(_)},null,8,["content","type"]))])]),c("div",k,[l(u,{block:"",round:"",class:"left",onClick:n[0]||(n[0]=e=>L("N"))},{default:p((()=>[x])),_:1}),l(u,{type:"primary",plain:"",block:"",round:"",onClick:n[1]||(n[1]=e=>L("allFalse"))},{default:p((()=>[F])),_:1})])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}}))}}}))}();

!function(){var e=document.createElement("style");e.innerHTML=".health-notice-preview-popup-wrap .custom-provider{height:100%}.health-notice-preview-popup-wrap .tab{height:1.41333rem;width:100%}.health-notice-preview-popup-wrap .tab .van-tab{padding:0 var(--zaui-card-border, .4rem)}.health-notice-preview-popup-wrap .tab .van-tabs__line{background:var(--van-primary-color)}.health-notice-preview-popup-wrap .tip{margin:0px .42667rem .53333rem;padding-top:.53333rem}.health-notice-preview-popup-wrap .tip .content{padding:.42667rem;background:#fff8f3;border-radius:.26667rem;display:flex;align-items:center}.health-notice-preview-popup-wrap .tip .content span{display:inline-block;font-size:.37333rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#333;line-height:.53333rem}.health-notice-preview-popup-wrap .tip .important-text{height:.53333rem;padding:0px .10667rem;border-radius:.10667rem;margin-top:-.08rem;font-size:.26667rem!important;font-family:PingFangSC-Medium,PingFang SC;background:var(--van-linear-bg)!important;color:#fff!important;line-height:.53333rem!important}.health-notice-preview-popup-wrap .title{text-align:center;height:.74667rem;font-size:.53333rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#333;line-height:.74667rem}.health-notice-preview-popup-wrap .list{height:calc(100% - 5.6rem);overflow-y:scroll}.health-notice-preview-popup-wrap .footer{display:flex;align-items:center;justify-content:center;position:absolute;width:100%;bottom:0;background-color:#fff;z-index:1;padding:.21333rem .26667rem}.health-notice-preview-popup-wrap .footer .van-button--primary{background:var(--van-linear-bg)!important;font-size:.32rem}.health-notice-preview-popup-wrap .footer .van-button--plain.van-button--primary{color:#fff;margin-left:.4rem}.health-notice-preview-popup-wrap .footer .left{width:50%!important}\n",document.head.appendChild(e),System.register(["./theme-legacy-14f266cb.js","./index-legacy-888dc198.js","./pdfh5-legacy-9f98dc45.js"],(function(e){"use strict";var t,a,n,i,o,r,p,l,c,s,h,u,d,m,f;return{setters:[function(e){t=e.u},function(e){a=e.d,n=e.r,i=e.x,o=e.ac,r=e.b,p=e.c,l=e.e,c=e.w,s=e.f,h=e.g,u=e.j,d=e.t,m=e.n,f=e.X},function(){}],execute:function(){const v=u("div",{class:"tip"},[u("div",{class:"content"},[u("span",null,[u("span",{class:"important-text"},"重要"),m(" 请确认被保险人是否存在下列问题，请如实告知，否则将对您的理赔权益或合同效力产生影响 ")])])],-1),g={class:"title"},w={class:"list"},b={class:"item"},y={class:"footer"};e("default",a({__name:"index",props:{show:{type:Boolean,default:!0},activeIndex:{default:0},contentList:{default:()=>[]}},emits:["update:show","onConfirmHealth","onCloseHealthByMask"],setup(e,{emit:a}){const x=e,C=t(),k=n(x.show),P=n(x.activeIndex),F=i((()=>x.contentList[P.value]?.attachmentUri)),_=i((()=>x.contentList[P.value]?.attachmentType)),S=n(!0),z=e=>{"allFalse"===e&&(S.value=!1,a("update:show",!1)),a("onConfirmHealth",e)};return o((()=>x),(()=>{k.value=x.show,P.value=x.activeIndex}),{deep:!0,immediate:!0}),(t,n)=>{const i=r("ProFilePreview"),o=r("VanButton"),x=r("van-config-provider"),P=r("ProPopup");return p(),l(P,{show:h(k),"onUpdate:show":n[2]||(n[2]=e=>f(k)?k.value=e:null),height:80,class:"health-notice-preview-popup-wrap",closeable:!1,onClose:n[3]||(n[3]=e=>{S.value&&a("onCloseHealthByMask")})},{default:c((()=>[s(x,{"theme-vars":h(C),class:"custom-provider"},{default:c((()=>[v,u("div",g,d(e.contentList[0].attachmentName),1),u("div",w,[u("div",b,[(p(),l(i,{key:h(F),content:h(F),type:h(_)},null,8,["content","type"]))])]),u("div",y,[s(o,{block:"",round:"",class:"left",onClick:n[0]||(n[0]=e=>z("N"))},{default:c((()=>[m("部分为是")])),_:1}),s(o,{type:"primary",plain:"",block:"",round:"",onClick:n[1]||(n[1]=e=>z("allFalse"))},{default:c((()=>[m("以上全否，立即投保")])),_:1})])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}}))}}}))}();

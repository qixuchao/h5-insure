!function(){var e=document.createElement("style");e.innerHTML=".health-notice-preview-popup-wrap .custom-provider{height:100%}.health-notice-preview-popup-wrap .tab{height:1.41333rem;width:100%}.health-notice-preview-popup-wrap .tab .van-tab{padding:0 var(--zaui-card-border, .4rem)}.health-notice-preview-popup-wrap .tab .van-tabs__line{background:var(--van-primary-color)}.health-notice-preview-popup-wrap .tip{margin:0px .42667rem .53333rem;padding-top:.53333rem}.health-notice-preview-popup-wrap .tip .content{padding:.42667rem;background:#fff8f3;border-radius:.26667rem;display:flex;align-items:center}.health-notice-preview-popup-wrap .tip .content span{display:inline-block;font-size:.37333rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#333;line-height:.53333rem}.health-notice-preview-popup-wrap .tip .important-text{height:.53333rem;padding:0px .10667rem;border-radius:.10667rem;margin-top:-.08rem;font-size:.26667rem!important;font-family:PingFangSC-Medium,PingFang SC;background:var(--van-linear-bg)!important;color:#fff!important;line-height:.53333rem!important}.health-notice-preview-popup-wrap .title{text-align:center;height:.74667rem;font-size:.53333rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#333;line-height:.74667rem}.health-notice-preview-popup-wrap .list{height:calc(100% - 5.6rem);overflow-y:scroll}.health-notice-preview-popup-wrap .footer{display:flex;align-items:center;justify-content:center;position:absolute;width:100%;bottom:0;background-color:#fff;z-index:1;padding:.21333rem .26667rem}.health-notice-preview-popup-wrap .footer .van-button--primary{background:var(--van-linear-bg)!important;font-size:.32rem}.health-notice-preview-popup-wrap .footer .van-button--plain.van-button--primary{color:#fff;margin-left:.4rem}.health-notice-preview-popup-wrap .footer .left{width:50%!important}\n",document.head.appendChild(e),System.register(["./theme-legacy-14f266cb.js","./index-legacy-355b370b.js","./pdfh5-legacy-783b46b8.js"],(function(e){"use strict";var t,a,n,i,o,r,p,l,c,s,h,u,m,d;return{setters:[function(e){t=e.u},function(e){a=e.d,n=e.r,i=e.x,o=e.a8,r=e.b,p=e.c,l=e.e,c=e.w,s=e.f,h=e.i,u=e.t,m=e.l,d=e.n},function(){}],execute:function(){const f=h("div",{class:"tip"},[h("div",{class:"content"},[h("span",null,[h("span",{class:"important-text"},"重要"),d(" 请确认被保险人是否存在下列问题，请如实告知，否则将对您的理赔权益或合同效力产生影响 ")])])],-1),v={class:"title"},g={class:"list"},w={class:"item"},b={class:"footer"},y=d("部分为是"),x=d("以上全否，立即投保");e("default",a({props:{show:{type:Boolean,default:!0},activeIndex:{default:0},contentList:{default:()=>[]}},emits:["update:show","onConfirmHealth","onCloseHealthByMask"],setup(e,{emit:a}){const d=e,C=t(),k=n(d.show),P=n(d.activeIndex),F=i((()=>d.contentList[P.value]?.attachmentUri)),S=i((()=>d.contentList[P.value]?.attachmentType)),z=n(!0),M=e=>{"allFalse"===e&&(z.value=!1,a("update:show",!1)),a("onConfirmHealth",e)};return o((()=>d),(()=>{k.value=d.show,P.value=d.activeIndex}),{deep:!0,immediate:!0}),(t,n)=>{const i=r("ProFilePreview"),o=r("VanButton"),d=r("van-config-provider"),P=r("ProPopup");return p(),l(P,{show:k.value,"onUpdate:show":n[2]||(n[2]=e=>k.value=e),height:80,class:"health-notice-preview-popup-wrap",closeable:!1,onClose:n[3]||(n[3]=e=>{z.value&&a("onCloseHealthByMask")})},{default:c((()=>[s(d,{"theme-vars":m(C),class:"custom-provider"},{default:c((()=>[f,h("div",v,u(e.contentList[0].attachmentName),1),h("div",g,[h("div",w,[(p(),l(i,{key:m(F),content:m(F),type:m(S)},null,8,["content","type"]))])]),h("div",b,[s(o,{block:"",round:"",class:"left",onClick:n[0]||(n[0]=e=>M("N"))},{default:c((()=>[y])),_:1}),s(o,{type:"primary",plain:"",block:"",round:"",onClick:n[1]||(n[1]=e=>M("allFalse"))},{default:c((()=>[x])),_:1})])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}}))}}}))}();

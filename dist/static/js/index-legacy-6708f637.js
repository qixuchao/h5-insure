!function(){var e=document.createElement("style");e.innerHTML=".page-pay-fail[data-v-5e0f128c]{text-align:center;padding:.4rem}.page-pay-fail img[data-v-5e0f128c]{width:70%}.page-pay-fail .title[data-v-5e0f128c]{font-size:.64rem;font-weight:500;color:var(--zaui-text, #393d46);line-height:.90667rem}.page-pay-fail .desc[data-v-5e0f128c]{font-size:.4rem;font-weight:400;color:#a0a0a0;line-height:.66667rem;margin-top:.26667rem}.page-pay-fail .btn[data-v-5e0f128c]{width:60%;background:var(--van-primary-color);margin:auto;margin-top:.8rem;border-color:var(--van-primary-color)}\n",document.head.appendChild(e),System.register(["./vendor-legacy-ac3956f6.js","./trial-legacy-17b38e81.js","./theme-legacy-0d67cf8b.js","./index-legacy-d250320e.js"],(function(e){"use strict";var a,t,n,r,i,c,o,d,s,l,f,g,p,u,m,v;return{setters:[function(e){a=e.g,t=e.a9,n=e.O,r=e.r,i=e.j,c=e.k,o=e.m,d=e.z,s=e.A,l=e.p,f=e.a4,g=e.a5,p=e.C},function(e){u=e.b},function(e){m=e.t},function(e){v=e._}],execute:function(){const y=e=>(f("data-v-5e0f128c"),e=e(),g(),e),h={class:"page-pay-fail"},b=["src"],w=y((()=>d("div",{class:"title"},"支付失败",-1))),j=y((()=>d("div",{class:"desc"},"支付遇到问题，请尝试重新支付",-1))),_=p("重新支付");e("default",v(a({setup(e){t();const a=n(),{tenantId:f,orderNo:g}=a.query,p=async()=>{const e=await u({orderNo:g,tenantId:f}),{code:a,data:t}=e;"10000"===a&&(window.location.href=t)};return(e,a)=>{const t=r("VanButton"),n=r("van-config-provider");return i(),c(n,{"theme-vars":s(m)},{default:o((()=>[d("div",h,[d("img",{src:s("/static/assets/fail.f828edf4.png")},null,8,b),w,j,l(t,{class:"btn",type:"primary",round:"",block:"",onClick:p},{default:o((()=>[_])),_:1})])])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-5e0f128c"]]))}}}))}();

!function(){var a=document.createElement("style");a.innerHTML=".page-pay-fail[data-v-32a9774e]{text-align:center;padding:.4rem}.page-pay-fail img[data-v-32a9774e]{width:70%}.page-pay-fail .title[data-v-32a9774e]{font-size:.64rem;font-weight:500;color:var(--zaui-text, #393d46);line-height:.90667rem}.page-pay-fail .desc[data-v-32a9774e]{font-size:.4rem;font-weight:400;color:#a0a0a0;line-height:.66667rem;margin-top:.26667rem}.page-pay-fail .btn[data-v-32a9774e]{width:60%;background:var(--van-primary-color);margin:auto;margin-top:.8rem;border-color:var(--van-primary-color)}\n",document.head.appendChild(a),System.register(["./index-legacy-080a8765.js","./trial-legacy-ccbb7859.js","./theme-legacy-a8152f06.js","./pdfdist-legacy-3ac4c460.js"],(function(a){"use strict";var e,t,n,i,r,c,o,d,s,l,f,g,p,u,m,v,y;return{setters:[function(a){e=a._,t=a.d,n=a.u,i=a.a,r=a.b,c=a.c,o=a.e,d=a.w,s=a.i,l=a.l,f=a.f,g=a.n,p=a.T,u=a.K,m=a.L},function(a){v=a.a},function(a){y=a.t},function(){}],execute:function(){const h=a=>(u("data-v-32a9774e"),a=a(),m(),a),b={class:"page-pay-fail"},w=["src"],_=h((()=>s("div",{class:"title"},"支付失败",-1))),j=h((()=>s("div",{class:"desc"},"支付遇到问题，请尝试重新支付",-1))),k=g("重新支付");a("default",e(t({setup(a){n();const e=i(),{tenantId:t,orderNo:g}=e.query,u=async()=>{p.loading({forbidClick:!0,message:"获取支付链接"});const a=await v({orderNo:g,tenantId:t}),{code:e,data:n}=a;"10000"===e&&(window.location.href=n)};return(a,e)=>{const t=r("VanButton"),n=r("van-config-provider");return c(),o(n,{"theme-vars":l(y)},{default:d((()=>[s("div",b,[s("img",{src:l("/static/assets/fail.c5500a28.png")},null,8,w),_,j,f(t,{class:"btn",type:"primary",round:"",block:"",onClick:u},{default:d((()=>[k])),_:1})])])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-32a9774e"]]))}}}))}();

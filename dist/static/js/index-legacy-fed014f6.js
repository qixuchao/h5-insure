!function(){var a=document.createElement("style");a.innerHTML=".page-pay-fail[data-v-32a9774e]{text-align:center;padding:.4rem}.page-pay-fail img[data-v-32a9774e]{width:70%}.page-pay-fail .title[data-v-32a9774e]{font-size:.64rem;font-weight:500;color:var(--zaui-text, #393d46);line-height:.90667rem}.page-pay-fail .desc[data-v-32a9774e]{font-size:.4rem;font-weight:400;color:#a0a0a0;line-height:.66667rem;margin-top:.26667rem}.page-pay-fail .btn[data-v-32a9774e]{width:60%;background:var(--van-primary-color);margin:auto;margin-top:.8rem;border-color:var(--van-primary-color)}\n",document.head.appendChild(a),System.register(["./vendor-legacy-da8f33fe.js","./trial-legacy-7039d722.js","./theme-legacy-a8152f06.js","./index-legacy-bfd8123c.js"],(function(a){"use strict";var e,t,n,r,i,o,c,d,s,l,f,g,p,u,m,v,y;return{setters:[function(a){e=a.g,t=a.a9,n=a.O,r=a.r,i=a.j,o=a.k,c=a.m,d=a.z,s=a.A,l=a.p,f=a.a4,g=a.a5,p=a.C,u=a.T},function(a){m=a.b},function(a){v=a.t},function(a){y=a._}],execute:function(){const h=a=>(f("data-v-32a9774e"),a=a(),g(),a),b={class:"page-pay-fail"},w=["src"],j=h((()=>d("div",{class:"title"},"支付失败",-1))),k=h((()=>d("div",{class:"desc"},"支付遇到问题，请尝试重新支付",-1))),_=p("重新支付");a("default",y(e({setup(a){t();const e=n(),{tenantId:f,orderNo:g}=e.query,p=async()=>{u.loading({forbidClick:!0,message:"获取支付链接"});const a=await m({orderNo:g,tenantId:f}),{code:e,data:t}=a;"10000"===e&&(window.location.href=t)};return(a,e)=>{const t=r("VanButton"),n=r("van-config-provider");return i(),o(n,{"theme-vars":s(v)},{default:c((()=>[d("div",b,[d("img",{src:s("/static/assets/fail.48a38259.png")},null,8,w),j,k,l(t,{class:"btn",type:"primary",round:"",block:"",onClick:p},{default:c((()=>[_])),_:1})])])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-32a9774e"]]))}}}))}();

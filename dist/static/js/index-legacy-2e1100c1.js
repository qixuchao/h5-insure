!function(){var a=document.createElement("style");a.innerHTML=".page-pay-fail[data-v-1324f12b]{text-align:center;padding:.4rem}.page-pay-fail img[data-v-1324f12b]{width:70%}.page-pay-fail .title[data-v-1324f12b]{font-size:.64rem;font-weight:500;color:var(--zaui-text, #393d46);line-height:.90667rem}.page-pay-fail .desc[data-v-1324f12b]{font-size:.4rem;font-weight:400;color:#a0a0a0;line-height:.66667rem;margin-top:.26667rem}.page-pay-fail .btn[data-v-1324f12b]{width:60%;background:var(--van-primary-color);margin:auto;margin-top:.8rem;border-color:var(--van-primary-color)}\n",document.head.appendChild(a),System.register(["./vendor-legacy-4a30a9db.js","./trial-legacy-0de41778.js","./theme-legacy-1caf6c52.js","./fail-legacy-409392b6.js","./index-legacy-a47aa417.js"],(function(a){"use strict";var e,t,n,r,i,o,c,d,l,s,f,g,u,m,p,v,y,b;return{setters:[function(a){e=a.h,t=a.aa,n=a.P,r=a.r,i=a.k,o=a.m,c=a.n,d=a.A,l=a.B,s=a.s,f=a.E,g=a.T,u=a.a5,m=a.a6},function(a){p=a.a},function(a){v=a.t},function(a){y=a.f},function(a){b=a._}],execute:function(){const h=a=>(u("data-v-1324f12b"),a=a(),m(),a),w={class:"page-pay-fail"},j=["src"],k=h((()=>d("div",{class:"title"},"支付失败",-1))),_=h((()=>d("div",{class:"desc"},"支付遇到问题，请尝试重新支付",-1))),x=f("重新支付");a("default",b(e({setup(a){t();const e=n(),{tenantId:f,orderNo:u}=e.query,m=async()=>{g.loading({forbidClick:!0,message:"获取支付链接"});const a=await p({orderNo:u,tenantId:f}),{code:e,data:t}=a;"10000"===e&&(window.location.href=t)};return(a,e)=>{const t=r("VanButton"),n=r("van-config-provider");return i(),o(n,{"theme-vars":l(v)},{default:c((()=>[d("div",w,[d("img",{src:l(y)},null,8,j),k,_,s(t,{class:"btn",type:"primary",round:"",block:"",onClick:m},{default:c((()=>[x])),_:1})])])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-1324f12b"]]))}}}))}();

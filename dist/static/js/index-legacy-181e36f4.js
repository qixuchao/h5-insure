!function(){var a=document.createElement("style");a.innerHTML=".page-pay-fail[data-v-f7616586]{text-align:center;padding:.4rem}.page-pay-fail img[data-v-f7616586]{width:70%}.page-pay-fail .title[data-v-f7616586]{font-size:.64rem;font-weight:500;color:var(--zaui-text, #393d46);line-height:.90667rem}.page-pay-fail .desc[data-v-f7616586]{font-size:.4rem;font-weight:400;color:#a0a0a0;line-height:.66667rem;margin-top:.26667rem}.page-pay-fail .btn[data-v-f7616586]{width:60%;background:var(--van-primary-color);margin:auto;margin-top:.8rem;border-color:var(--van-primary-color)}\n",document.head.appendChild(a),System.register(["./index-legacy-cb3bdc8a.js","./trial-legacy-0bdcd207.js","./theme-legacy-a8152f06.js","./pdfh5-legacy-9f98dc45.js"],(function(a){"use strict";var e,t,n,i,r,c,d,o,s,l,f,g,p,u,m,v,y,h;return{setters:[function(a){e=a._,t=a.d,n=a.u,i=a.a,r=a.c,c=a.e,d=a.w,o=a.j,s=a.g,l=a.f,f=a.n,g=a.T,p=a.B,u=a.bT,m=a.X,v=a.Y},function(a){y=a.a},function(a){h=a.t},function(){}],execute:function(){const b=a=>(m("data-v-f7616586"),a=a(),v(),a),w={class:"page-pay-fail"},_=["src"],j=b((()=>o("div",{class:"title"},"支付失败",-1))),x=b((()=>o("div",{class:"desc"},"支付遇到问题，请尝试重新支付",-1)));a("default",e(t({__name:"index",setup(a){n();const e=i(),{tenantId:t,orderNo:m}=e.query,v=async()=>{g.loading({forbidClick:!0,message:"获取支付链接"});const a=await y({orderNo:m,tenantId:t}),{code:e,data:n}=a;"10000"===e&&(window.location.href=n)};return(a,e)=>{const t=p,n=u;return r(),c(n,{"theme-vars":s(h)},{default:d((()=>[o("div",w,[o("img",{src:s("/static/assets/fail.c5500a28.png")},null,8,_),j,x,l(t,{class:"btn",type:"primary",round:"",block:"",onClick:v},{default:d((()=>[f("重新支付")])),_:1})])])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-f7616586"]]))}}}))}();

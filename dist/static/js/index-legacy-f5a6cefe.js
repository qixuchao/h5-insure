!function(){var a=document.createElement("style");a.innerHTML=".page-pay-fail[data-v-6cacb82a]{text-align:center;padding:.4rem}.page-pay-fail img[data-v-6cacb82a]{width:70%}.page-pay-fail .title[data-v-6cacb82a]{font-size:.64rem;font-weight:500;color:var(--zaui-text, #393d46);line-height:.90667rem}.page-pay-fail .desc[data-v-6cacb82a]{font-size:.4rem;font-weight:400;color:#a0a0a0;line-height:.66667rem;margin-top:.26667rem}.page-pay-fail .btn[data-v-6cacb82a]{width:60%;background:var(--van-primary-color);margin:auto;margin-top:.8rem;border-color:var(--van-primary-color)}\n",document.head.appendChild(a),System.register(["./vendor-legacy-2ed1ad67.js","./trial-legacy-a307496c.js","./theme-legacy-0d67cf8b.js","./index-legacy-69565efb.js"],(function(a){"use strict";var e,t,n,c,r,i,o,d,s,l,g,f,p,u,m,v,y;return{setters:[function(a){e=a.g,t=a.a9,n=a.O,c=a.r,r=a.j,i=a.k,o=a.m,d=a.z,s=a.A,l=a.p,g=a.a4,f=a.a5,p=a.C,u=a.T},function(a){m=a.b},function(a){v=a.t},function(a){y=a._}],execute:function(){const b=a=>(g("data-v-6cacb82a"),a=a(),f(),a),h={class:"page-pay-fail"},w=["src"],j=b((()=>d("div",{class:"title"},"支付失败",-1))),k=b((()=>d("div",{class:"desc"},"支付遇到问题，请尝试重新支付",-1))),_=p("重新支付");a("default",y(e({setup(a){t();const e=n(),{tenantId:g,orderNo:f}=e.query,p=async()=>{u.loading({forbidClick:!0,message:"获取支付链接"});const a=await m({orderNo:f,tenantId:g}),{code:e,data:t}=a;"10000"===e&&(window.location.href=t)};return(a,e)=>{const t=c("VanButton"),n=c("van-config-provider");return r(),i(n,{"theme-vars":s(v)},{default:o((()=>[d("div",h,[d("img",{src:s("/static/assets/fail.48a38259.png")},null,8,w),j,k,l(t,{class:"btn",type:"primary",round:"",block:"",onClick:p},{default:o((()=>[_])),_:1})])])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-6cacb82a"]]))}}}))}();

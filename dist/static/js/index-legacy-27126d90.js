!function(){var e=document.createElement("style");e.innerHTML=".page-phone-verify[data-v-05d52b52]{width:100%;height:100%;padding:.8rem .66667rem;background-image:url(/static/assets/bg.cc4a49ed.png)}.page-phone-verify .title[data-v-05d52b52]{font-size:.66667rem;font-weight:500;color:#000}.page-phone-verify .phone[data-v-05d52b52]{margin-top:.8rem;font-size:.64rem;font-family:DINAlternate-Bold,DINAlternate;font-weight:700;color:#393d46}.page-phone-verify .input-wrapper[data-v-05d52b52]{margin-top:.29333rem;width:100%;display:flex;align-items:center;height:1.33333rem;background:#ffffff;border-radius:.10667rem;border:.02667rem solid #d7dce9}.page-phone-verify .input-wrapper .input[data-v-05d52b52]{flex:1;height:100%;border:none;padding-left:.4rem;font-size:.4rem;color:#393d46}.page-phone-verify .input-wrapper .input[data-v-05d52b52]::placeholder{color:#99a9c0}.page-phone-verify .input-wrapper .btn[data-v-05d52b52]{flex:0 0 2.8rem;line-height:.8rem;text-align:center;border-left:1px solid #EEEFF4;font-size:.4rem;font-weight:400;color:var(--zaui-brand, #0d6efe)}.page-phone-verify .input-wrapper .btn.second[data-v-05d52b52]{color:#99a9c0}.page-phone-verify .submit-btn[data-v-05d52b52]{width:100%;height:1.2rem;margin-top:.8rem;background:var(--zaui-brand, #0d6efe);border-radius:.10667rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-da8f33fe.js","./index-legacy-bfd8123c.js","./phoneVerify-legacy-27c992d2.js","./format-legacy-6721bd32.js","./order-legacy-470125e3.js","./utils-legacy-20e4723c.js"],(function(e){"use strict";var a,t,r,n,d,o,i,l,c,p,u,s,f,v,g,h,m,b,y,w,I,j,x,z,C,k;return{setters:[function(e){a=e.g,t=e.E,r=e.O,n=e.h,d=e.r,o=e.j,i=e.k,l=e.m,c=e.z,p=e.J,u=e.A,s=e.H,f=e.ap,v=e.L,g=e.p,h=e.a4,m=e.a5,b=e.C,y=e.T},function(e){w=e._,I=e.g,j=e.q},function(e){x=e.s,z=e.c},function(e){C=e.c},function(e){k=e.a},function(){}],execute:function(){const E={class:"page-phone-verify"},N=(e=>(h("data-v-05d52b52"),e=e(),m(),e))((()=>c("div",{class:"title"},"通过投保人手机号验证后，可进行投保信息预",-1))),_={class:"phone"},q={class:"input-wrapper"},P=b("下一步");e("default",w(a({setup(e){const a=t(""),h=t(""),m=t(0);let b;const w=r(),{agentCode:A,tenantId:D,templateId:H,productCode:F,insurerCode:L,orderNo:O}=w.query,S=()=>{x(a.value).then((({code:e})=>{"10000"===e&&(m.value=60,b=setInterval((()=>{m.value-=1,m.value<=0&&clearInterval(b)}),1e3))}))},T=()=>{z(a.value,h.value).then((({code:e,data:a})=>{"10000"===e&&a?(y.success("验证成功"),j("infoPreview",w.query)):y.fail("验证失败")}))};return n((()=>{I({orderNo:O,saleUserId:A,tenantId:D}).then((e=>{const{code:t,data:r}=e;var n;"10000"===t&&(r.orderStatus!==k.PENDING?j("paymentResult",w.query):a.value=null==r||null===(n=r.tenantOrderHolder)||void 0===n?void 0:n.mobile)}))})),(e,t)=>{const r=d("van-button"),n=d("ProPageWrap");return o(),i(n,null,{default:l((()=>[c("div",E,[N,c("div",_,p(u(C)(a.value)),1),c("div",q,[s(c("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>h.value=e),placeholder:"请输入验证码",class:"input"},null,512),[[f,h.value]]),c("div",{class:v(["btn",{second:m.value}]),onClick:S},p(m.value?`${m.value}s`:"发送验证码"),3)]),g(r,{type:"primary",class:"submit-btn",onClick:T},{default:l((()=>[P])),_:1})])])),_:1})}}}),[["__scopeId","data-v-05d52b52"]]))}}}))}();

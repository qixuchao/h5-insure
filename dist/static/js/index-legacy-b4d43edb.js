!function(){var e=document.createElement("style");e.innerHTML=".page-phone-verify[data-v-29510ea1]{width:100%;height:100%;padding:.8rem .66667rem;background-image:url(/static/assets/bg.1ba5d5bd.png)}.page-phone-verify .title[data-v-29510ea1]{font-size:.66667rem;font-weight:500;color:#000}.page-phone-verify .phone[data-v-29510ea1]{margin-top:.8rem;font-size:.64rem;font-family:DINAlternate-Bold,DINAlternate;font-weight:700;color:#393d46}.page-phone-verify .input-wrapper[data-v-29510ea1]{margin-top:.29333rem;width:100%;display:flex;align-items:center;height:1.33333rem;background:#ffffff;border-radius:.10667rem;border:.02667rem solid #d7dce9}.page-phone-verify .input-wrapper .input[data-v-29510ea1]{flex:1;height:100%;border:none;padding-left:.4rem;font-size:.4rem;color:#393d46}.page-phone-verify .input-wrapper .input[data-v-29510ea1]::placeholder{color:#99a9c0}.page-phone-verify .input-wrapper .btn[data-v-29510ea1]{flex:0 0 2.8rem;line-height:.8rem;text-align:center;border-left:1px solid #EEEFF4;font-size:.4rem;font-weight:400;color:var(--van-primary-color, var(--zaui-brand))}.page-phone-verify .input-wrapper .btn.second[data-v-29510ea1]{color:#99a9c0}.page-phone-verify .submit-btn[data-v-29510ea1]{width:100%;height:1.2rem;margin-top:.8rem;background:var(--van-primary-color, var(--zaui-brand));border-radius:.10667rem}\n",document.head.appendChild(e),System.register(["./index-legacy-fcf08e87.js","./phoneVerify-legacy-7747ea0b.js","./format-legacy-f45acaa1.js","./order-legacy-089648ba.js","./pdfh5-legacy-9f98dc45.js"],(function(e){"use strict";var a,t,r,n,o,i,d,l,p,c,u,s,v,f,g,h,m,y,b,w,I,E,N,C,_,x,z;return{setters:[function(e){a=e._,t=e.d,r=e.r,n=e.a,o=e.G,i=e.b,d=e.c,l=e.e,p=e.w,c=e.i,u=e.t,s=e.m,v=e.A,f=e.aS,g=e.L,h=e.f,m=e.n,y=e.p,b=e.ah,w=e.T,I=e.B,E=e.X,N=e.Y},function(e){C=e.s,_=e.c},function(e){x=e.c},function(e){z=e.a},function(){}],execute:function(){const S={class:"page-phone-verify"},j=(e=>(E("data-v-29510ea1"),e=e(),N(),e))((()=>c("div",{class:"title"},"通过投保人手机号验证后，可进行投保信息预",-1))),k={class:"phone"},A={class:"input-wrapper"},D=m("下一步");e("default",a(t({setup(e){const a=r(""),t=r(""),m=r(0);let E;const N=n(),{agentCode:P,tenantId:T,templateId:U,productCode:q,insurerCode:F,orderNo:G}=N.query,L=()=>{C(a.value).then((({code:e})=>{"10000"===e&&(m.value=60,E=setInterval((()=>{m.value-=1,m.value<=0&&clearInterval(E)}),1e3))}))},R=()=>{_(a.value,t.value).then((({code:e,data:a})=>{"10000"===e&&a?(w.success("验证成功"),b("infoPreview",N.query)):w.fail("验证失败")}))};return o((()=>{y({orderNo:G,saleUserId:P,tenantId:T}).then((e=>{const{code:t,data:r}=e;var n;"10000"===t&&([z.PENDING,z.PAYMENT_FAILED,z.UNDER_WRITING_SUCCESS].includes(r.orderStatus)?a.value=null==r||null===(n=r.tenantOrderHolder)||void 0===n?void 0:n.mobile:b("paymentResult",N.query))}))})),(e,r)=>{const n=I,o=i("ProPageWrap");return d(),l(o,null,{default:p((()=>[c("div",S,[j,c("div",k,u(s(x)(a.value)),1),c("div",A,[v(c("input",{"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),placeholder:"请输入验证码",class:"input"},null,512),[[f,t.value]]),c("div",{class:g(["btn",{second:m.value}]),onClick:L},u(m.value?`${m.value}s`:"发送验证码"),3)]),h(n,{type:"primary",class:"submit-btn",onClick:R},{default:p((()=>[D])),_:1})])])),_:1})}}}),[["__scopeId","data-v-29510ea1"]]))}}}))}();

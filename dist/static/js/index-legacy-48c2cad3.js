!function(){var e=document.createElement("style");e.innerHTML=".page-phone-verify[data-v-29510ea1]{width:100%;height:100%;padding:.8rem .66667rem;background-image:url(/h5-cloud-insure/static/assets/bg.1ba5d5bd.png)}.page-phone-verify .title[data-v-29510ea1]{font-size:.66667rem;font-weight:500;color:#000}.page-phone-verify .phone[data-v-29510ea1]{margin-top:.8rem;font-size:.64rem;font-family:DINAlternate-Bold,DINAlternate;font-weight:700;color:#393d46}.page-phone-verify .input-wrapper[data-v-29510ea1]{margin-top:.29333rem;width:100%;display:flex;align-items:center;height:1.33333rem;background:#ffffff;border-radius:.10667rem;border:.02667rem solid #d7dce9}.page-phone-verify .input-wrapper .input[data-v-29510ea1]{flex:1;height:100%;border:none;padding-left:.4rem;font-size:.4rem;color:#393d46}.page-phone-verify .input-wrapper .input[data-v-29510ea1]::placeholder{color:#99a9c0}.page-phone-verify .input-wrapper .btn[data-v-29510ea1]{flex:0 0 2.8rem;line-height:.8rem;text-align:center;border-left:1px solid #EEEFF4;font-size:.4rem;font-weight:400;color:var(--van-primary-color, var(--zaui-brand))}.page-phone-verify .input-wrapper .btn.second[data-v-29510ea1]{color:#99a9c0}.page-phone-verify .submit-btn[data-v-29510ea1]{width:100%;height:1.2rem;margin-top:.8rem;background:var(--van-primary-color, var(--zaui-brand));border-radius:.10667rem}\n",document.head.appendChild(e),System.register(["./index-legacy-cd3003a5.js","./phoneVerify-legacy-cfbc74c1.js","./format-legacy-f45acaa1.js","./order-legacy-085335e3.js","./pdfh5-legacy-a219347c.js","./pdfdist-legacy-c3ea4af6.js"],(function(e){"use strict";var a,t,r,n,o,i,d,l,c,p,u,s,f,v,g,h,m,y,b,w,I,C,E,N,x,_;return{setters:[function(e){a=e._,t=e.d,r=e.r,n=e.a,o=e.z,i=e.b,d=e.c,l=e.e,c=e.w,p=e.i,u=e.t,s=e.l,f=e.s,v=e.ax,g=e.C,h=e.f,m=e.n,y=e.p,b=e.a4,w=e.T,I=e.L,C=e.M},function(e){E=e.s,N=e.c},function(e){x=e.c},function(e){_=e.a},function(){},function(){}],execute:function(){const z={class:"page-phone-verify"},j=(e=>(I("data-v-29510ea1"),e=e(),C(),e))((()=>p("div",{class:"title"},"通过投保人手机号验证后，可进行投保信息预",-1))),k={class:"phone"},D={class:"input-wrapper"},P=m("下一步");e("default",a(t({setup(e){const a=r(""),t=r(""),m=r(0);let I;const C=n(),{agentCode:S,tenantId:A,templateId:T,productCode:U,insurerCode:q,orderNo:F}=C.query,L=()=>{E(a.value).then((({code:e})=>{"10000"===e&&(m.value=60,I=setInterval((()=>{m.value-=1,m.value<=0&&clearInterval(I)}),1e3))}))},M=()=>{N(a.value,t.value).then((({code:e,data:a})=>{"10000"===e&&a?(w.success("验证成功"),b("infoPreview",C.query)):w.fail("验证失败")}))};return o((()=>{y({orderNo:F,saleUserId:S,tenantId:A}).then((e=>{const{code:t,data:r}=e;"10000"===t&&([_.PENDING,_.PAYMENT_FAILED,_.UNDER_WRITING_SUCCESS].includes(r.orderStatus)?a.value=r?.tenantOrderHolder?.mobile:b("paymentResult",C.query))}))})),(e,r)=>{const n=i("van-button"),o=i("ProPageWrap");return d(),l(o,null,{default:c((()=>[p("div",z,[j,p("div",k,u(s(x)(a.value)),1),p("div",D,[f(p("input",{"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),placeholder:"请输入验证码",class:"input"},null,512),[[v,t.value]]),p("div",{class:g(["btn",{second:m.value}]),onClick:L},u(m.value?`${m.value}s`:"发送验证码"),3)]),h(n,{type:"primary",class:"submit-btn",onClick:M},{default:c((()=>[P])),_:1})])])),_:1})}}}),[["__scopeId","data-v-29510ea1"]]))}}}))}();

!function(){var e=document.createElement("style");e.innerHTML=".page-phone-verify[data-v-37951b0a]{width:100%;height:100%;padding:.8rem .66667rem;background-image:url(/static/assets/bg.cc4a49ed.png)}.page-phone-verify .title[data-v-37951b0a]{font-size:.66667rem;font-weight:500;color:#000}.page-phone-verify .phone[data-v-37951b0a]{margin-top:.8rem;font-size:.64rem;font-family:DINAlternate-Bold,DINAlternate;font-weight:700;color:#393d46}.page-phone-verify .input-wrapper[data-v-37951b0a]{margin-top:.29333rem;width:100%;display:flex;align-items:center;height:1.33333rem;background:#ffffff;border-radius:.10667rem;border:.02667rem solid #d7dce9}.page-phone-verify .input-wrapper .input[data-v-37951b0a]{flex:1;height:100%;border:none;padding-left:.4rem;font-size:.4rem;color:#393d46}.page-phone-verify .input-wrapper .input[data-v-37951b0a]::placeholder{color:#99a9c0}.page-phone-verify .input-wrapper .btn[data-v-37951b0a]{flex:0 0 2.8rem;line-height:.8rem;text-align:center;border-left:1px solid #eeeff4;font-size:.4rem;font-weight:400;color:#0d6efe}.page-phone-verify .input-wrapper .btn.second[data-v-37951b0a]{color:#99a9c0}.page-phone-verify .submit-btn[data-v-37951b0a]{width:100%;height:1.2rem;margin-top:.8rem;background:#0d6efe;border-radius:.10667rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-5d3b395b.js","./index-legacy-92e6914a.js","./format-legacy-5c7a4129.js"],(function(e){"use strict";var a,t,r,n,o,i,d,l,p,s,c,u,v,f,m,g,h,b,y,w,C,I,k,x;return{setters:[function(e){a=e.g,t=e.E,r=e.O,n=e.h,o=e.r,i=e.j,d=e.k,l=e.m,p=e.z,s=e.J,c=e.A,u=e.H,v=e.aq,f=e.L,m=e.p,g=e.a4,h=e.a5,b=e.C,y=e.T},function(e){w=e.b,C=e._,I=e.r,k=e.K},function(e){x=e.b}],execute:function(){const z={class:"page-phone-verify"},_=(e=>(g("data-v-37951b0a"),e=e(),h(),e))((()=>p("div",{class:"title"},"通过投保人手机号验证后，可进行投保信息预",-1))),j={class:"phone"},N={class:"input-wrapper"},q=b("下一步");e("default",C(a({setup(e){const a=t(""),g=t(""),h=t(0);let b;const C=r(),{saleUserId:A="D1234567-1",tenantId:D="9991000007",templateId:H=1,productCode:P="CQ75CQ76",insurerCode:S="ancheng",orderNo:T}=C.query,U=()=>{var e;(e=a.value,w.post("/api/app/insure/insurance/sendSmsCodeToC",{},{params:{mobile:e}})).then((({code:e})=>{"10000"===e&&(h.value=60,b=setInterval((()=>{h.value-=1,h.value<=0&&clearInterval(b)}),1e3))}))},E=()=>{((e,a)=>w.post("/api/app/insure/insurance/checkSmsCode",{},{params:{mobile:e,smsCode:a}}))(a.value,g.value).then((({code:e,data:a})=>{"10000"===e&&a?(y.success("验证成功"),k("infoPreview",C.query)):y.fail("验证失败")}))};return n((()=>{I({orderNo:T,saleUserId:A,tenantId:D}).then((e=>{const{code:t,data:r}=e;var n;"10000"===t&&(a.value=null==r||null===(n=r.tenantOrderHolder)||void 0===n?void 0:n.mobile)}))})),(e,t)=>{const r=o("van-button"),n=o("ProPageWrap");return i(),d(n,null,{default:l((()=>[p("div",z,[_,p("div",j,s(c(x)(a.value)),1),p("div",N,[u(p("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>g.value=e),placeholder:"请输入验证码",class:"input"},null,512),[[v,g.value]]),p("div",{class:f(["btn",{second:h.value}]),onClick:U},s(h.value?`${h.value}s`:"发送验证码"),3)]),m(r,{type:"primary",class:"submit-btn",onClick:E},{default:l((()=>[q])),_:1})])])),_:1})}}}),[["__scopeId","data-v-37951b0a"]]))}}}))}();

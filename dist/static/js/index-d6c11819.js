import{h as a,C as e,N as s,j as t,r,k as l,l as o,m as n,y as d,I as u,z as c,G as v,aq as i,J as p,Q as f,B as m,T as I,a3 as b,a4 as y}from"./vendor-2c18d14d.js";import{_ as h,g as C,s as N}from"./index-f7a362ab.js";import{s as _,c as j}from"./phoneVerify-8f523fd3.js";import{c as E}from"./format-12461bbc.js";import{a as P}from"./order-07fbf65c.js";const g={class:"page-phone-verify"},q=(a=>(b("data-v-29510ea1"),a=a(),y(),a))((()=>d("div",{class:"title"},"通过投保人手机号验证后，可进行投保信息预",-1))),S={class:"phone"},U={class:"input-wrapper"},k=m("下一步");var D=h(a({setup(a){const m=e(""),b=e(""),y=e(0);let h;const D=s(),{agentCode:G,tenantId:R,templateId:T,productCode:w,insurerCode:x,orderNo:A}=D.query,V=()=>{_(m.value).then((({code:a})=>{"10000"===a&&(y.value=60,h=setInterval((()=>{y.value-=1,y.value<=0&&clearInterval(h)}),1e3))}))},W=()=>{j(m.value,b.value).then((({code:a,data:e})=>{"10000"===a&&e?(I.success("验证成功"),N("infoPreview",D.query)):I.fail("验证失败")}))};return t((()=>{C({orderNo:A,saleUserId:G,tenantId:R}).then((a=>{var e;const{code:s,data:t}=a;"10000"===s&&([P.PENDING,P.PAYMENT_FAILED,P.UNDER_WRITING_SUCCESS].includes(t.orderStatus)?m.value=null==(e=null==t?void 0:t.tenantOrderHolder)?void 0:e.mobile:N("paymentResult",D.query))}))})),(a,e)=>{const s=r("van-button"),t=r("ProPageWrap");return l(),o(t,null,{default:n((()=>[d("div",g,[q,d("div",S,u(c(E)(m.value)),1),d("div",U,[v(d("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>b.value=a),placeholder:"请输入验证码",class:"input"},null,512),[[i,b.value]]),d("div",{class:p(["btn",{second:y.value}]),onClick:V},u(y.value?`${y.value}s`:"发送验证码"),3)]),f(s,{type:"primary",class:"submit-btn",onClick:W},{default:n((()=>[k])),_:1})])])),_:1})}}}),[["__scopeId","data-v-29510ea1"]]);export{D as default};

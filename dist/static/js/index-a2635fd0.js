import{_ as a,d as e,r as s,a as t,y as l,b as r,c as o,e as n,w as d,i as u,t as c,l as i,s as v,as as p,B as m,f,n as b,p as I,a4 as y,T as h,K as _,L as C}from"./index-47b8fe54.js";import{s as N,c as j}from"./phoneVerify-e34c1ebd.js";import{c as E}from"./format-12461bbc.js";import{a as P}from"./order-b7361016.js";import"./pdfh5-e5c0db2a.js";const S={class:"page-phone-verify"},U=(a=>(_("data-v-29510ea1"),a=a(),C(),a))((()=>u("div",{class:"title"},"通过投保人手机号验证后，可进行投保信息预",-1))),g={class:"phone"},q={class:"input-wrapper"},w=b("下一步");var D=a(e({setup(a){const e=s(""),b=s(""),_=s(0);let C;const D=t(),{agentCode:R,tenantId:T,templateId:k,productCode:x,insurerCode:A,orderNo:G}=D.query,L=()=>{N(e.value).then((({code:a})=>{"10000"===a&&(_.value=60,C=setInterval((()=>{_.value-=1,_.value<=0&&clearInterval(C)}),1e3))}))},V=()=>{j(e.value,b.value).then((({code:a,data:e})=>{"10000"===a&&e?(h.success("验证成功"),y("infoPreview",D.query)):h.fail("验证失败")}))};return l((()=>{I({orderNo:G,saleUserId:R,tenantId:T}).then((a=>{var s;const{code:t,data:l}=a;"10000"===t&&([P.PENDING,P.PAYMENT_FAILED,P.UNDER_WRITING_SUCCESS].includes(l.orderStatus)?e.value=null==(s=null==l?void 0:l.tenantOrderHolder)?void 0:s.mobile:y("paymentResult",D.query))}))})),(a,s)=>{const t=r("van-button"),l=r("ProPageWrap");return o(),n(l,null,{default:d((()=>[u("div",S,[U,u("div",g,c(i(E)(e.value)),1),u("div",q,[v(u("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>b.value=a),placeholder:"请输入验证码",class:"input"},null,512),[[p,b.value]]),u("div",{class:m(["btn",{second:_.value}]),onClick:L},c(_.value?`${_.value}s`:"发送验证码"),3)]),f(t,{type:"primary",class:"submit-btn",onClick:V},{default:d((()=>[w])),_:1})])])),_:1})}}}),[["__scopeId","data-v-29510ea1"]]);export{D as default};

import{g as E,E as d,O as I,h as x,r as p,j as S,k as b,m as _,z as o,J as v,A as N,H as P,ar as k,L as w,p as T,a4 as O,a5 as R,C as U,T as m}from"./vendor-af6fda0a.js";import{_ as V,r as q,H as C}from"./index-f17e13f1.js";import{s as H,c as M}from"./phoneVerify-a8fa8f91.js";import{b as z}from"./format-691c0ce1.js";import{a as J}from"./order-b675ac95.js";const W=u=>(O("data-v-6c91a4a1"),u=u(),R(),u),j={class:"page-phone-verify"},G=W(()=>o("div",{class:"title"},"\u901A\u8FC7\u6295\u4FDD\u4EBA\u624B\u673A\u53F7\u9A8C\u8BC1\u540E\uFF0C\u53EF\u8FDB\u884C\u6295\u4FDD\u4FE1\u606F\u9884",-1)),L={class:"phone"},$={class:"input-wrapper"},K=U("\u4E0B\u4E00\u6B65"),Q=E({setup(u){const n=d(""),l=d(""),e=d(0);let i;const c=I(),{agentCode:f,tenantId:h,templateId:X,productCode:Y,insurerCode:Z,orderNo:B}=c.query,D=()=>{i=setInterval(()=>{e.value-=1,e.value<=0&&clearInterval(i)},1e3)},F=()=>{q({orderNo:B,saleUserId:f,tenantId:h}).then(t=>{var r;const{code:a,data:s}=t;a==="10000"&&(s.orderStatus!==J.PENDING?C("paymentResult",c.query):n.value=(r=s==null?void 0:s.tenantOrderHolder)==null?void 0:r.mobile)})},g=()=>{H(n.value).then(({code:t})=>{t==="10000"&&(e.value=60,D())})},y=()=>{M(n.value,l.value).then(({code:t,data:a})=>{t==="10000"&&a?(m.success("\u9A8C\u8BC1\u6210\u529F"),C("infoPreview",c.query)):m.fail("\u9A8C\u8BC1\u5931\u8D25")})};return x(()=>{F()}),(t,a)=>{const s=p("van-button"),r=p("ProPageWrap");return S(),b(r,null,{default:_(()=>[o("div",j,[G,o("div",L,v(N(z)(n.value)),1),o("div",$,[P(o("input",{"onUpdate:modelValue":a[0]||(a[0]=A=>l.value=A),placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",class:"input"},null,512),[[k,l.value]]),o("div",{class:w(["btn",{second:e.value}]),onClick:g},v(e.value?`${e.value}s`:"\u53D1\u9001\u9A8C\u8BC1\u7801"),3)]),T(s,{type:"primary",class:"submit-btn",onClick:y},{default:_(()=>[K]),_:1})])]),_:1})}}});var ue=V(Q,[["__scopeId","data-v-6c91a4a1"]]);export{ue as default};

import{g as E,E as d,O as I,h as b,r as p,j as x,k as S,m as _,z as a,J as v,A as N,H as P,ap as k,L as w,p as T,a4 as O,a5 as R,C as U,T as m}from"./vendor-9d7eb2ed.js";import{_ as V,g as q,p as C}from"./index-c5d88440.js";import{s as M,c as z}from"./phoneVerify-fce8f4e0.js";import{c as H}from"./format-99418f69.js";import{a as J}from"./order-b675ac95.js";const W=u=>(O("data-v-05d52b52"),u=u(),R(),u),j={class:"page-phone-verify"},G=W(()=>a("div",{class:"title"},"\u901A\u8FC7\u6295\u4FDD\u4EBA\u624B\u673A\u53F7\u9A8C\u8BC1\u540E\uFF0C\u53EF\u8FDB\u884C\u6295\u4FDD\u4FE1\u606F\u9884",-1)),L={class:"phone"},$={class:"input-wrapper"},K=U("\u4E0B\u4E00\u6B65"),Q=E({setup(u){const n=d(""),l=d(""),e=d(0);let i;const c=I(),{agentCode:f,tenantId:h,templateId:X,productCode:Y,insurerCode:Z,orderNo:B}=c.query,D=()=>{i=setInterval(()=>{e.value-=1,e.value<=0&&clearInterval(i)},1e3)},F=()=>{q({orderNo:B,saleUserId:f,tenantId:h}).then(t=>{var r;const{code:s,data:o}=t;s==="10000"&&(o.orderStatus!==J.PENDING?C("paymentResult",c.query):n.value=(r=o==null?void 0:o.tenantOrderHolder)==null?void 0:r.mobile)})},g=()=>{M(n.value).then(({code:t})=>{t==="10000"&&(e.value=60,D())})},y=()=>{z(n.value,l.value).then(({code:t,data:s})=>{t==="10000"&&s?(m.success("\u9A8C\u8BC1\u6210\u529F"),C("infoPreview",c.query)):m.fail("\u9A8C\u8BC1\u5931\u8D25")})};return b(()=>{F()}),(t,s)=>{const o=p("van-button"),r=p("ProPageWrap");return x(),S(r,null,{default:_(()=>[a("div",j,[G,a("div",L,v(N(H)(n.value)),1),a("div",$,[P(a("input",{"onUpdate:modelValue":s[0]||(s[0]=A=>l.value=A),placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",class:"input"},null,512),[[k,l.value]]),a("div",{class:w(["btn",{second:e.value}]),onClick:g},v(e.value?`${e.value}s`:"\u53D1\u9001\u9A8C\u8BC1\u7801"),3)]),T(o,{type:"primary",class:"submit-btn",onClick:y},{default:_(()=>[K]),_:1})])]),_:1})}}});var ue=V(Q,[["__scopeId","data-v-05d52b52"]]);export{ue as default};

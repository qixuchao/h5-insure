import{g,E as d,O as y,h as N,r as _,j as x,k as P,m as v,z as a,J as m,A as T,H as b,ap as k,L as w,p as R,a4 as U,a5 as q,C as M,T as C}from"./vendor-9d7eb2ed.js";import{_ as O,g as V,q as f}from"./index-a65406ce.js";import{s as W,c as z}from"./phoneVerify-439c841e.js";import{c as G}from"./format-99418f69.js";import{a as i}from"./order-26db6dbf.js";import"./utils-b6782348.js";const H=u=>(U("data-v-29510ea1"),u=u(),q(),u),J={class:"page-phone-verify"},L=H(()=>a("div",{class:"title"},"\u901A\u8FC7\u6295\u4FDD\u4EBA\u624B\u673A\u53F7\u9A8C\u8BC1\u540E\uFF0C\u53EF\u8FDB\u884C\u6295\u4FDD\u4FE1\u606F\u9884",-1)),j={class:"phone"},Y={class:"input-wrapper"},$=M("\u4E0B\u4E00\u6B65"),K=g({setup(u){const n=d(""),l=d(""),e=d(0);let p;const c=y(),{agentCode:h,tenantId:D,templateId:Q,productCode:X,insurerCode:Z,orderNo:B}=c.query,E=()=>{p=setInterval(()=>{e.value-=1,e.value<=0&&clearInterval(p)},1e3)},F=()=>{V({orderNo:B,saleUserId:h,tenantId:D}).then(t=>{var r;const{code:s,data:o}=t;s==="10000"&&([i.PENDING,i.PAYMENT_FAILED,i.UNDER_WRITING_SUCCESS].includes(o.orderStatus)?n.value=(r=o==null?void 0:o.tenantOrderHolder)==null?void 0:r.mobile:f("paymentResult",c.query))})},I=()=>{W(n.value).then(({code:t})=>{t==="10000"&&(e.value=60,E())})},A=()=>{z(n.value,l.value).then(({code:t,data:s})=>{t==="10000"&&s?(C.success("\u9A8C\u8BC1\u6210\u529F"),f("infoPreview",c.query)):C.fail("\u9A8C\u8BC1\u5931\u8D25")})};return N(()=>{F()}),(t,s)=>{const o=_("van-button"),r=_("ProPageWrap");return x(),P(r,null,{default:v(()=>[a("div",J,[L,a("div",j,m(T(G)(n.value)),1),a("div",Y,[b(a("input",{"onUpdate:modelValue":s[0]||(s[0]=S=>l.value=S),placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",class:"input"},null,512),[[k,l.value]]),a("div",{class:w(["btn",{second:e.value}]),onClick:I},m(e.value?`${e.value}s`:"\u53D1\u9001\u9A8C\u8BC1\u7801"),3)]),R(o,{type:"primary",class:"submit-btn",onClick:A},{default:v(()=>[$]),_:1})])]),_:1})}}});var ne=O(K,[["__scopeId","data-v-29510ea1"]]);export{ne as default};

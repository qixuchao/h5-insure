import{_ as a,d as e,j as s,i as t,h as l,O as o,l as r,o as n,m as d,w as u,a as c,e as i,u as p,V as v,p as f,cg as m,n as h,b,a8 as g,ch as j,ci as y,cj as _,T as C,ag as I,aC as P,aD as q}from"./index-f312854e.js";import{c as x}from"./format-b5e9d8b9.js";import{u as O}from"./useOrder-504137da.js";import{P as V}from"./constants-fe95ef6f.js";const k={class:"page-phone-verify"},w=(a=>(P("data-v-a255a2be"),a=a(),q(),a))((()=>c("div",{class:"title"},"通过投保人手机号验证后，可进行投保信息填写",-1))),N={class:"phone"},U={class:"input-wrapper"};var D=a(e({__name:"phoneVerify",setup(a){const e=O(),P=s(""),q=s(""),D=s(0);let T;const W=t(),$=l(),{agentCode:z,tenantId:A,nextPageCode:B,orderNo:E,orderCode:F}=W.query,G=()=>{y(P.value).then((({code:a})=>{"10000"===a&&(D.value=60,T=setInterval((()=>{D.value-=1,D.value<=0&&clearInterval(T)}),1e3))}))},H=()=>{_(P.value,q.value).then((({code:a,data:e})=>{"10000"===a&&e?(C.success("验证成功"),$.push({path:V[B.replace("/","")],query:W.query})):C.fail("验证失败")}))};return o((()=>{j({orderNo:F||E,saleUserId:z,tenantId:A}).then((({code:a,data:s})=>{var t;"10000"===a&&(Object.assign(e.value,s),P.value=null==(t=null==s?void 0:s.holder)?void 0:t.mobile)}))})),(a,e)=>{const s=I,t=r("ProPageWrap");return n(),d(t,null,{default:u((()=>[c("div",k,[w,c("div",N,i(p(x)(p(P)||"")),1),c("div",U,[v(c("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>f(q)?q.value=a:null),placeholder:"请输入验证码",class:"input"},null,512),[[m,p(q)]]),c("div",{class:h(["btn",{second:p(D)}]),onClick:G},i(p(D)?`${p(D)}s`:"发送验证码"),3)]),b(s,{type:"primary",class:"submit-btn",onClick:H},{default:u((()=>[g("下一步")])),_:1})])])),_:1})}}}),[["__scopeId","data-v-a255a2be"]]);export{D as default};

import{_ as a,d as e,j as s,i as l,h as t,O as o,l as r,o as n,m as d,w as u,a as c,e as i,u as p,V as v,p as m,ci as f,n as b,b as h,a8 as j,cj as y,ck as _,cl as g,T as C,ag as I,aC as P,aD as k}from"./index-df1d7325.js";import{c as q}from"./format-b5e9d8b9.js";import{u as x}from"./useOrder-e61339f4.js";import{P as O}from"./constants-b6eb977d.js";const V={class:"page-phone-verify"},w=(a=>(P("data-v-a255a2be"),a=a(),k(),a))((()=>c("div",{class:"title"},"通过投保人手机号验证后，可进行投保信息填写",-1))),N={class:"phone"},U={class:"input-wrapper"};var D=a(e({__name:"phoneVerify",setup(a){const e=x(),P=s(""),k=s(""),D=s(0);let T;const W=l(),$=t(),{agentCode:z,tenantId:A,nextPageCode:B,orderNo:E,orderCode:F}=W.query,G=()=>{_(P.value).then((({code:a})=>{"10000"===a&&(D.value=60,T=setInterval((()=>{D.value-=1,D.value<=0&&clearInterval(T)}),1e3))}))},H=()=>{g(P.value,k.value).then((({code:a,data:e})=>{"10000"===a&&e?(C.success("验证成功"),$.push({path:O[B.replace("/","")],query:W.query})):C.fail("验证失败")}))};return o((()=>{y({orderNo:F||E,saleUserId:z,tenantId:A}).then((({code:a,data:s})=>{var l;"10000"===a&&(Object.assign(e.value,s),P.value=null==(l=null==s?void 0:s.holder)?void 0:l.mobile)}))})),(a,e)=>{const s=I,l=r("ProPageWrap");return n(),d(l,null,{default:u((()=>[c("div",V,[w,c("div",N,i(p(q)(p(P)||"")),1),c("div",U,[v(c("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>m(k)?k.value=a:null),placeholder:"请输入验证码",class:"input"},null,512),[[f,p(k)]]),c("div",{class:b(["btn",{second:p(D)}]),onClick:G},i(p(D)?`${p(D)}s`:"发送验证码"),3)]),h(s,{type:"primary",class:"submit-btn",onClick:H},{default:u((()=>[j("下一步")])),_:1})])])),_:1})}}}),[["__scopeId","data-v-a255a2be"]]);export{D as default};

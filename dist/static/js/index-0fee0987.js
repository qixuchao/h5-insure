import{h as _,G as f,j as g,r as u,k as v,m as B,n as t,s as n,A as w,E as V,T as S}from"./vendor-b80b3531.js";import{r as b,S as k}from"./index-68918492.js";const y=(r={})=>b({url:"/api/app/login",method:"POST",data:r}),C={style:{margin:"16px"}},N=V(" \u63D0\u4EA4 "),x=_({setup(r){const o=f({loginName:"13122312351",password:"M5p8uqT3RS3u89B2",loginType:"1"}),p=()=>{const l=new k({source:"localStorage"});y(o.value).then(({code:e,data:a})=>{e==="10000"&&(S("\u767B\u5F55\u6210\u529F"),l.set("token",a.token),l.set("userInfo",JSON.stringify(a)),window.location.href="/")})};return g(()=>{localStorage.clear(),document.cookie=""}),(l,e)=>{const a=u("van-field"),m=u("van-cell-group"),d=u("van-button"),c=u("van-form"),i=u("ProPageWrap");return v(),B(i,{class:"page-login-wrapper"},{default:t(()=>[n(c,{onSubmit:p},{default:t(()=>[n(m,{inset:""},{default:t(()=>[n(a,{modelValue:o.value.loginName,"onUpdate:modelValue":e[0]||(e[0]=s=>o.value.loginName=s),name:"\u7528\u6237\u540D",label:"\u7528\u6237\u540D",placeholder:"\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u7528\u6237\u540D"}]},null,8,["modelValue"]),n(a,{modelValue:o.value.password,"onUpdate:modelValue":e[1]||(e[1]=s=>o.value.password=s),type:"password",name:"\u5BC6\u7801",label:"\u5BC6\u7801",placeholder:"\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u5BC6\u7801"}]},null,8,["modelValue"])]),_:1}),w("div",C,[n(d,{round:"",block:"",type:"primary","native-type":"submit"},{default:t(()=>[N]),_:1})])]),_:1})]),_:1})}}});export{x as default};

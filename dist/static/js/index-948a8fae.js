import{g as _,E as g,h as f,r as n,j as v,k as B,m as t,p as u,z as w,C as V,T as b}from"./vendor-af6fda0a.js";import{b as C,S as k}from"./index-b4caab31.js";const y=(r={})=>C.post("/api/app/login",r),N={style:{margin:"16px"}},S=V(" \u63D0\u4EA4 "),D=_({setup(r){const o=g({loginName:"13122312351",password:"M5p8uqT3RS3u89B2",loginType:"1"}),p=()=>{const s=new k({source:"localStorage"});y(o.value).then(({code:e,data:a})=>{e==="10000"&&(b("\u767B\u5F55\u6210\u529F"),s.set("token",a.token),s.set("userInfo",JSON.stringify(a)),window.location.href="/")})};return f(()=>{localStorage.clear(),document.cookie=""}),(s,e)=>{const a=n("van-field"),m=n("van-cell-group"),c=n("van-button"),d=n("van-form"),i=n("ProPageWrap");return v(),B(i,{class:"page-login-wrapper"},{default:t(()=>[u(d,{onSubmit:p},{default:t(()=>[u(m,{inset:""},{default:t(()=>[u(a,{modelValue:o.value.loginName,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value.loginName=l),name:"\u7528\u6237\u540D",label:"\u7528\u6237\u540D",placeholder:"\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u7528\u6237\u540D"}]},null,8,["modelValue"]),u(a,{modelValue:o.value.password,"onUpdate:modelValue":e[1]||(e[1]=l=>o.value.password=l),type:"password",name:"\u5BC6\u7801",label:"\u5BC6\u7801",placeholder:"\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u5BC6\u7801"}]},null,8,["modelValue"])]),_:1}),w("div",N,[u(c,{round:"",block:"",type:"primary","native-type":"submit"},{default:t(()=>[S]),_:1})])]),_:1})]),_:1})}}});export{D as default};

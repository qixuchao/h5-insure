import{g as _,E as g,h as f,r as u,j as v,k as B,m as t,p as n,z as w,C as V,T as C}from"./vendor-9d7eb2ed.js";import{r as S,S as b}from"./index-c5d88440.js";const k=(r={})=>S({url:"/api/app/login",method:"POST",data:r}),y={style:{margin:"16px"}},N=V(" \u63D0\u4EA4 "),x=_({setup(r){const o=g({loginName:"13122312351",password:"M5p8uqT3RS3u89B2",loginType:"1"}),p=()=>{const l=new b({source:"localStorage"});k(o.value).then(({code:e,data:a})=>{e==="10000"&&(C("\u767B\u5F55\u6210\u529F"),l.set("token",a.token),l.set("userInfo",JSON.stringify(a)),window.location.href="/")})};return f(()=>{localStorage.clear(),document.cookie=""}),(l,e)=>{const a=u("van-field"),m=u("van-cell-group"),d=u("van-button"),c=u("van-form"),i=u("ProPageWrap");return v(),B(i,{class:"page-login-wrapper"},{default:t(()=>[n(c,{onSubmit:p},{default:t(()=>[n(m,{inset:""},{default:t(()=>[n(a,{modelValue:o.value.loginName,"onUpdate:modelValue":e[0]||(e[0]=s=>o.value.loginName=s),name:"\u7528\u6237\u540D",label:"\u7528\u6237\u540D",placeholder:"\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u7528\u6237\u540D"}]},null,8,["modelValue"]),n(a,{modelValue:o.value.password,"onUpdate:modelValue":e[1]||(e[1]=s=>o.value.password=s),type:"password",name:"\u5BC6\u7801",label:"\u5BC6\u7801",placeholder:"\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u5BC6\u7801"}]},null,8,["modelValue"])]),_:1}),w("div",y,[n(d,{round:"",block:"",type:"primary","native-type":"submit"},{default:t(()=>[N]),_:1})])]),_:1})]),_:1})}}});export{x as default};

import{g as _,C as g,r as n,h as f,j as v,k as s,n as u,y as B,B as V,T as b}from"./vendor-afffae61.js";import{b as k,S as y}from"./index-6bbeb80b.js";const C=(r={})=>k.post("/api/app/login",r),w={style:{margin:"16px"}},N=V(" \u63D0\u4EA4 "),D=_({setup(r){const o=g({loginName:"13122312351",password:"M5p8uqT3RS3u89B2",loginType:"1"}),p=m=>{const e=new y({source:"localStorage"});console.log(e.get("userInfo")),C(o.value).then(({code:t,data:a})=>{t==="10000"&&(b("\u767B\u5F55\u6210\u529F"),console.log("data.token",a.token),e.set("token",a.token),e.set("userInfo",JSON.stringify(a)))})};return(m,e)=>{const t=n("van-field"),a=n("van-cell-group"),c=n("van-button"),d=n("van-form"),i=n("ProPageWrap");return f(),v(i,{class:"page-login-wrapper"},{default:s(()=>[u(d,{onSubmit:p},{default:s(()=>[u(a,{inset:""},{default:s(()=>[u(t,{modelValue:o.value.loginName,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value.loginName=l),name:"\u7528\u6237\u540D",label:"\u7528\u6237\u540D",placeholder:"\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u7528\u6237\u540D"}]},null,8,["modelValue"]),u(t,{modelValue:o.value.password,"onUpdate:modelValue":e[1]||(e[1]=l=>o.value.password=l),type:"password",name:"\u5BC6\u7801",label:"\u5BC6\u7801",placeholder:"\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u5BC6\u7801"}]},null,8,["modelValue"])]),_:1}),B("div",w,[u(c,{round:"",block:"",type:"primary","native-type":"submit"},{default:s(()=>[N]),_:1})])]),_:1})]),_:1})}}});export{D as default};

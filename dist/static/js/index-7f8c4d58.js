import{h as m,aa as f,P as v,r,k as h,m as B,n as u,A as o,B as c,s as D,E as g,T as y,a5 as C,a6 as E}from"./vendor-3a8faf02.js";import{a as F}from"./trial-73b847aa.js";import{t as x}from"./theme-3c294048.js";import{f as k}from"./fail-4a2d7ee1.js";import{_ as I}from"./index-cf71facf.js";const n=e=>(C("data-v-55bd9c96"),e=e(),E(),e),V={class:"page-pay-fail"},b=["src"],w=n(()=>o("div",{class:"title"},"\u652F\u4ED8\u5931\u8D25",-1)),N=n(()=>o("div",{class:"desc"},"\u652F\u4ED8\u9047\u5230\u95EE\u9898\uFF0C\u8BF7\u5C1D\u8BD5\u91CD\u65B0\u652F\u4ED8",-1)),S=g("\u91CD\u65B0\u652F\u4ED8"),T=m({setup(e){f();const _=v(),{tenantId:d,orderNo:i}=_.query,p=async()=>{y.loading({forbidClick:!0,message:"\u83B7\u53D6\u652F\u4ED8\u94FE\u63A5"});const s=await F({orderNo:i,tenantId:d}),{code:a,data:t}=s;a==="10000"&&(window.location.href=t)};return(s,a)=>{const t=r("VanButton"),l=r("van-config-provider");return h(),B(l,{"theme-vars":c(x)},{default:u(()=>[o("div",V,[o("img",{src:c(k)},null,8,b),w,N,D(t,{class:"btn",type:"primary",round:"",block:"",onClick:p},{default:u(()=>[S]),_:1})])]),_:1},8,["theme-vars"])}}});var j=I(T,[["__scopeId","data-v-55bd9c96"]]);export{j as default};

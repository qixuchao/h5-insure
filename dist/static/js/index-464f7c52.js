import{h as m,aa as f,P as v,r as c,k as h,m as B,n as r,A as o,B as u,s as D,a5 as g,a6 as y,E as C,T as E}from"./vendor-b1b61443.js";import{b as F}from"./trial-9fb470ba.js";import{t as x}from"./theme-eeb93d73.js";import{f as b}from"./fail-4a2d7ee1.js";import{_ as k}from"./index-92f7e5a0.js";const n=e=>(g("data-v-6cacb82a"),e=e(),y(),e),I={class:"page-pay-fail"},V=["src"],w=n(()=>o("div",{class:"title"},"\u652F\u4ED8\u5931\u8D25",-1)),N=n(()=>o("div",{class:"desc"},"\u652F\u4ED8\u9047\u5230\u95EE\u9898\uFF0C\u8BF7\u5C1D\u8BD5\u91CD\u65B0\u652F\u4ED8",-1)),S=C("\u91CD\u65B0\u652F\u4ED8"),T=m({setup(e){f();const _=v(),{tenantId:i,orderNo:d}=_.query,p=async()=>{E.loading({forbidClick:!0,message:"\u83B7\u53D6\u652F\u4ED8\u94FE\u63A5"});const a=await F({orderNo:d,tenantId:i}),{code:s,data:t}=a;s==="10000"&&(window.location.href=t)};return(a,s)=>{const t=c("VanButton"),l=c("van-config-provider");return h(),B(l,{"theme-vars":u(x)},{default:r(()=>[o("div",I,[o("img",{src:u(b)},null,8,V),w,N,D(t,{class:"btn",type:"primary",round:"",block:"",onClick:p},{default:r(()=>[S]),_:1})])]),_:1},8,["theme-vars"])}}});var j=k(T,[["__scopeId","data-v-6cacb82a"]]);export{j as default};

import{g as m,a9 as f,O as v,r as c,j as h,k as g,m as r,z as t,A as u,p as D,a4 as B,a5 as C,C as y,T as F}from"./vendor-9d7eb2ed.js";import{b as x}from"./trial-c65995de.js";import{t as E}from"./theme-eeb93d73.js";import{_ as b}from"./index-1be2f5bc.js";var k="/static/assets/fail.48a38259.png";const n=e=>(B("data-v-6cacb82a"),e=e(),C(),e),I={class:"page-pay-fail"},V=["src"],w=n(()=>t("div",{class:"title"},"\u652F\u4ED8\u5931\u8D25",-1)),N=n(()=>t("div",{class:"desc"},"\u652F\u4ED8\u9047\u5230\u95EE\u9898\uFF0C\u8BF7\u5C1D\u8BD5\u91CD\u65B0\u652F\u4ED8",-1)),S=y("\u91CD\u65B0\u652F\u4ED8"),T=m({setup(e){f();const _=v(),{tenantId:i,orderNo:d}=_.query,p=async()=>{F.loading({forbidClick:!0,message:"\u83B7\u53D6\u652F\u4ED8\u94FE\u63A5"});const o=await x({orderNo:d,tenantId:i}),{code:s,data:a}=o;s==="10000"&&(window.location.href=a)};return(o,s)=>{const a=c("VanButton"),l=c("van-config-provider");return h(),g(l,{"theme-vars":u(E)},{default:r(()=>[t("div",I,[t("img",{src:u(k)},null,8,V),w,N,D(a,{class:"btn",type:"primary",round:"",block:"",onClick:p},{default:r(()=>[S]),_:1})])]),_:1},8,["theme-vars"])}}});var z=b(T,[["__scopeId","data-v-6cacb82a"]]);export{z as default};

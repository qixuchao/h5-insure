import{h as a,a8 as s,N as t,k as e,l as r,m as o,n,z as i,A as d,Q as c,C as l,T as m,a3 as f,a4 as p}from"./vendor-8ce3e007.js";import{a as v}from"./trial-7f378009.js";import{t as u}from"./theme-ea709837.js";import{_ as g}from"./index-b395e119.js";const h=a=>(f("data-v-32a9774e"),a=a(),p(),a),y={class:"page-pay-fail"},_=["src"],b=h((()=>i("div",{class:"title"},"支付失败",-1))),j=h((()=>i("div",{class:"desc"},"支付遇到问题，请尝试重新支付",-1))),k=l("重新支付");var w=g(a({setup(a){s();const l=t(),{tenantId:f,orderNo:p}=l.query,g=async()=>{m.loading({forbidClick:!0,message:"获取支付链接"});const a=await v({orderNo:p,tenantId:f}),{code:s,data:t}=a;"10000"===s&&(window.location.href=t)};return(a,s)=>{const t=e("VanButton"),l=e("van-config-provider");return r(),o(l,{"theme-vars":d(u)},{default:n((()=>[i("div",y,[i("img",{src:d("/static/assets/fail.c5500a28.png")},null,8,_),b,j,c(t,{class:"btn",type:"primary",round:"",block:"",onClick:g},{default:n((()=>[k])),_:1})])])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-32a9774e"]]);export{w as default};

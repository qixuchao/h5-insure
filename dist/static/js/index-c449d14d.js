import{h as a,a8 as s,N as t,k as e,l as r,m as o,n as d,z as n,A as i,Q as c,C as l,T as m,a3 as f,a4 as p}from"./vendor-0381d15c.js";import{a as v}from"./trial-1cdb71f9.js";import{t as u}from"./theme-ea709837.js";import{_ as g}from"./index-d1ea62ad.js";const h=a=>(f("data-v-32a9774e"),a=a(),p(),a),y={class:"page-pay-fail"},_=["src"],b=h((()=>n("div",{class:"title"},"支付失败",-1))),j=h((()=>n("div",{class:"desc"},"支付遇到问题，请尝试重新支付",-1))),k=l("重新支付");var w=g(a({setup(a){s();const l=t(),{tenantId:f,orderNo:p}=l.query,g=async()=>{m.loading({forbidClick:!0,message:"获取支付链接"});const a=await v({orderNo:p,tenantId:f}),{code:s,data:t}=a;"10000"===s&&(window.location.href=t)};return(a,s)=>{const t=e("VanButton"),l=e("van-config-provider");return r(),o(l,{"theme-vars":i(u)},{default:d((()=>[n("div",y,[n("img",{src:i("/static/assets/fail.c5500a28.png")},null,8,_),b,j,c(t,{class:"btn",type:"primary",round:"",block:"",onClick:g},{default:d((()=>[k])),_:1})])])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-32a9774e"]]);export{w as default};

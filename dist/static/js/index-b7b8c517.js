import{h as a,a8 as s,N as t,k as e,l as r,m as o,n,z as d,A as i,Q as c,C as l,T as m,a3 as f,a4 as p}from"./vendor-0381d15c.js";import{a as v}from"./trial-806af83a.js";import{t as u}from"./theme-ea709837.js";import{_ as g}from"./index-7fdce580.js";const h=a=>(f("data-v-32a9774e"),a=a(),p(),a),y={class:"page-pay-fail"},_=["src"],j=h((()=>d("div",{class:"title"},"支付失败",-1))),k=h((()=>d("div",{class:"desc"},"支付遇到问题，请尝试重新支付",-1))),b=l("重新支付");var w=g(a({setup(a){s();const l=t(),{tenantId:f,orderNo:p}=l.query,g=async()=>{m.loading({forbidClick:!0,message:"获取支付链接"});const a=await v({orderNo:p,tenantId:f}),{code:s,data:t}=a;"10000"===s&&(window.location.href=t)};return(a,s)=>{const t=e("VanButton"),l=e("van-config-provider");return r(),o(l,{"theme-vars":i(u)},{default:n((()=>[d("div",y,[d("img",{src:i("/static/assets/fail.c5500a28.png")},null,8,_),j,k,c(t,{class:"btn",type:"primary",round:"",block:"",onClick:g},{default:n((()=>[b])),_:1})])])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-32a9774e"]]);export{w as default};

import{h as a,a8 as s,N as t,r as e,k as r,l as o,m as d,y as n,z as i,Q as c,B as l,T as m,a3 as p,a4 as f}from"./vendor-2c1461d1.js";import{a as v}from"./trial-29204a46.js";import{t as u}from"./theme-ea709837.js";import{_ as g}from"./index-ab85a7ad.js";const y=a=>(p("data-v-32a9774e"),a=a(),f(),a),h={class:"page-pay-fail"},_=["src"],b=y((()=>n("div",{class:"title"},"支付失败",-1))),j=y((()=>n("div",{class:"desc"},"支付遇到问题，请尝试重新支付",-1))),k=l("重新支付");var w=g(a({setup(a){s();const l=t(),{tenantId:p,orderNo:f}=l.query,g=async()=>{m.loading({forbidClick:!0,message:"获取支付链接"});const a=await v({orderNo:f,tenantId:p}),{code:s,data:t}=a;"10000"===s&&(window.location.href=t)};return(a,s)=>{const t=e("VanButton"),l=e("van-config-provider");return r(),o(l,{"theme-vars":i(u)},{default:d((()=>[n("div",h,[n("img",{src:i("/static/assets/fail.c5500a28.png")},null,8,_),b,j,c(t,{class:"btn",type:"primary",round:"",block:"",onClick:g},{default:d((()=>[k])),_:1})])])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-32a9774e"]]);export{w as default};

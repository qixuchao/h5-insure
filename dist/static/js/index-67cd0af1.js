import{_ as a,d as s,u as e,a as t,c as r,e as o,w as d,j as c,g as i,f as n,n as l,T as f,B as m,bT as p,X as u,Y as v}from"./index-fe1081ea.js";import{a as _}from"./trial-3d1cafe4.js";import{t as g}from"./theme-ea709837.js";import"./pdfh5-008ca364.js";const h=a=>(u("data-v-f7616586"),a=a(),v(),a),j={class:"page-pay-fail"},y=["src"],b=h((()=>c("div",{class:"title"},"支付失败",-1))),w=h((()=>c("div",{class:"desc"},"支付遇到问题，请尝试重新支付",-1)));var k=a(s({__name:"index",setup(a){e();const s=t(),{tenantId:u,orderNo:v}=s.query,h=async()=>{f.loading({forbidClick:!0,message:"获取支付链接"});const a=await _({orderNo:v,tenantId:u}),{code:s,data:e}=a;"10000"===s&&(window.location.href=e)};return(a,s)=>{const e=m,t=p;return r(),o(t,{"theme-vars":i(g)},{default:d((()=>[c("div",j,[c("img",{src:i("/static/assets/fail.c5500a28.png")},null,8,y),b,w,n(e,{class:"btn",type:"primary",round:"",block:"",onClick:h},{default:d((()=>[l("重新支付")])),_:1})])])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-f7616586"]]);export{k as default};

import{_ as a,d as s,u as t,a as e,c as r,e as o,w as d,j as n,g as c,f as i,n as l,T as f,B as m,bT as p,X as u,Y as v}from"./index-9021af4d.js";import{a as g}from"./trial-03211c09.js";import{t as _}from"./theme-ea709837.js";import"./pdfh5-008ca364.js";const h=a=>(u("data-v-f7616586"),a=a(),v(),a),j={class:"page-pay-fail"},y=["src"],b=h((()=>n("div",{class:"title"},"支付失败",-1))),w=h((()=>n("div",{class:"desc"},"支付遇到问题，请尝试重新支付",-1)));var k=a(s({__name:"index",setup(a){t();const s=e(),{tenantId:u,orderNo:v}=s.query,h=async()=>{f.loading({forbidClick:!0,message:"获取支付链接"});const a=await g({orderNo:v,tenantId:u}),{code:s,data:t}=a;"10000"===s&&(window.location.href=t)};return(a,s)=>{const t=m,e=p;return r(),o(e,{"theme-vars":c(_)},{default:d((()=>[n("div",j,[n("img",{src:c("/static/png/fail-c5500a28.png")},null,8,y),b,w,i(t,{class:"btn",type:"primary",round:"",block:"",onClick:h},{default:d((()=>[l("重新支付")])),_:1})])])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-f7616586"]]);export{k as default};

import{_ as a,d as s,u as t,a as e,c as r,e as d,w as o,j as i,g as n,f as c,n as l,T as f,B as m,bT as p,X as u,Y as v}from"./index-b8ef7d55.js";import{a as _}from"./trial-d5b83a74.js";import{t as b}from"./theme-ea709837.js";import"./pdfh5-008ca364.js";const g=a=>(u("data-v-f7616586"),a=a(),v(),a),h={class:"page-pay-fail"},j=["src"],y=g((()=>i("div",{class:"title"},"支付失败",-1))),w=g((()=>i("div",{class:"desc"},"支付遇到问题，请尝试重新支付",-1)));var k=a(s({__name:"index",setup(a){t();const s=e(),{tenantId:u,orderNo:v}=s.query,g=async()=>{f.loading({forbidClick:!0,message:"获取支付链接"});const a=await _({orderNo:v,tenantId:u}),{code:s,data:t}=a;"10000"===s&&(window.location.href=t)};return(a,s)=>{const t=m,e=p;return r(),d(e,{"theme-vars":n(b)},{default:o((()=>[i("div",h,[i("img",{src:n("/static/assets/fail.c5500a28.png")},null,8,j),y,w,c(t,{class:"btn",type:"primary",round:"",block:"",onClick:g},{default:o((()=>[l("重新支付")])),_:1})])])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-f7616586"]]);export{k as default};

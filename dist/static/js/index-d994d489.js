import{_ as a,d as s,u as t,a as e,c as r,e as o,w as d,j as i,g as n,f as c,n as l,T as f,B as m,bT as p,X as u,Y as v}from"./index-3a7a8438.js";import{a as _}from"./trial-426b93f5.js";import{t as g}from"./theme-ea709837.js";import"./pdfh5-008ca364.js";const b=a=>(u("data-v-f7616586"),a=a(),v(),a),h={class:"page-pay-fail"},j=["src"],y=b((()=>i("div",{class:"title"},"支付失败",-1))),w=b((()=>i("div",{class:"desc"},"支付遇到问题，请尝试重新支付",-1)));var k=a(s({__name:"index",setup(a){t();const s=e(),{tenantId:u,orderNo:v}=s.query,b=async()=>{f.loading({forbidClick:!0,message:"获取支付链接"});const a=await _({orderNo:v,tenantId:u}),{code:s,data:t}=a;"10000"===s&&(window.location.href=t)};return(a,s)=>{const t=m,e=p;return r(),o(e,{"theme-vars":n(g)},{default:d((()=>[i("div",h,[i("img",{src:n("/static/assets/fail.c5500a28.png")},null,8,j),y,w,c(t,{class:"btn",type:"primary",round:"",block:"",onClick:b},{default:d((()=>[l("重新支付")])),_:1})])])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-f7616586"]]);export{k as default};

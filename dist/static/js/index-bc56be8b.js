import{_ as a,d as s,u as t,a as e,c as r,e as o,w as d,i as c,m as i,f as n,n as l,T as f,B as m,bT as p,X as u,Y as v}from"./index-9effc651.js";import{a as g}from"./trial-190aded3.js";import{t as h}from"./theme-ea709837.js";import"./pdfh5-008ca364.js";const y=a=>(u("data-v-f7616586"),a=a(),v(),a),_={class:"page-pay-fail"},b=["src"],j=y((()=>c("div",{class:"title"},"支付失败",-1))),w=y((()=>c("div",{class:"desc"},"支付遇到问题，请尝试重新支付",-1))),k=l("重新支付");var I=a(s({setup(a){t();const s=e(),{tenantId:l,orderNo:u}=s.query,v=async()=>{f.loading({forbidClick:!0,message:"获取支付链接"});const a=await g({orderNo:u,tenantId:l}),{code:s,data:t}=a;"10000"===s&&(window.location.href=t)};return(a,s)=>{const t=m,e=p;return r(),o(e,{"theme-vars":i(h)},{default:d((()=>[c("div",_,[c("img",{src:i("/static/assets/fail.c5500a28.png")},null,8,b),j,w,n(t,{class:"btn",type:"primary",round:"",block:"",onClick:v},{default:d((()=>[k])),_:1})])])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-f7616586"]]);export{I as default};

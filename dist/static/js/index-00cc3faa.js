import{_ as a,d as s,u as t,a as e,b as r,c as o,e as d,w as i,i as n,l as c,f as l,n as p,T as f,K as m,L as u}from"./index-8524819b.js";import{a as v}from"./trial-09c641e4.js";import{t as b}from"./theme-ea709837.js";import"./pdfh5-e5c0db2a.js";const g=a=>(m("data-v-32a9774e"),a=a(),u(),a),h={class:"page-pay-fail"},y=["src"],_=g((()=>n("div",{class:"title"},"支付失败",-1))),j=g((()=>n("div",{class:"desc"},"支付遇到问题，请尝试重新支付",-1))),w=p("重新支付");var k=a(s({setup(a){t();const s=e(),{tenantId:p,orderNo:m}=s.query,u=async()=>{f.loading({forbidClick:!0,message:"获取支付链接"});const a=await v({orderNo:m,tenantId:p}),{code:s,data:t}=a;"10000"===s&&(window.location.href=t)};return(a,s)=>{const t=r("VanButton"),e=r("van-config-provider");return o(),d(e,{"theme-vars":c(b)},{default:i((()=>[n("div",h,[n("img",{src:c("/static/assets/fail.c5500a28.png")},null,8,y),_,j,l(t,{class:"btn",type:"primary",round:"",block:"",onClick:u},{default:i((()=>[w])),_:1})])])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-32a9774e"]]);export{k as default};

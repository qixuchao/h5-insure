import{_ as a,d as s,u as t,a as e,b as r,c as o,e as d,w as c,i,l as n,f as l,n as p,T as f,K as m,L as u}from"./index-62d72c22.js";import{a as v}from"./trial-12ec8e84.js";import{t as g}from"./theme-ea709837.js";import"./pdfh5-e5c0db2a.js";const b=a=>(m("data-v-32a9774e"),a=a(),u(),a),h={class:"page-pay-fail"},y=["src"],_=b((()=>i("div",{class:"title"},"支付失败",-1))),j=b((()=>i("div",{class:"desc"},"支付遇到问题，请尝试重新支付",-1))),w=p("重新支付");var k=a(s({setup(a){t();const s=e(),{tenantId:p,orderNo:m}=s.query,u=async()=>{f.loading({forbidClick:!0,message:"获取支付链接"});const a=await v({orderNo:m,tenantId:p}),{code:s,data:t}=a;"10000"===s&&(window.location.href=t)};return(a,s)=>{const t=r("VanButton"),e=r("van-config-provider");return o(),d(e,{"theme-vars":n(g)},{default:c((()=>[i("div",h,[i("img",{src:n("/static/assets/fail.c5500a28.png")},null,8,y),_,j,l(t,{class:"btn",type:"primary",round:"",block:"",onClick:u},{default:c((()=>[w])),_:1})])])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-32a9774e"]]);export{k as default};

import{_ as a,d as s,u as e,a as t,b as r,c as o,e as c,w as d,i,l as n,f as l,n as p,T as f,K as m,L as u}from"./index-614b2684.js";import{a as v}from"./trial-becc3bee.js";import{t as b}from"./theme-ea709837.js";import"./pdfh5-e5c0db2a.js";const g=a=>(m("data-v-32a9774e"),a=a(),u(),a),h={class:"page-pay-fail"},y=["src"],_=g((()=>i("div",{class:"title"},"支付失败",-1))),j=g((()=>i("div",{class:"desc"},"支付遇到问题，请尝试重新支付",-1))),w=p("重新支付");var k=a(s({setup(a){e();const s=t(),{tenantId:p,orderNo:m}=s.query,u=async()=>{f.loading({forbidClick:!0,message:"获取支付链接"});const a=await v({orderNo:m,tenantId:p}),{code:s,data:e}=a;"10000"===s&&(window.location.href=e)};return(a,s)=>{const e=r("VanButton"),t=r("van-config-provider");return o(),c(t,{"theme-vars":n(b)},{default:d((()=>[i("div",h,[i("img",{src:n("/static/assets/fail.c5500a28.png")},null,8,y),_,j,l(e,{class:"btn",type:"primary",round:"",block:"",onClick:u},{default:d((()=>[w])),_:1})])])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-32a9774e"]]);export{k as default};

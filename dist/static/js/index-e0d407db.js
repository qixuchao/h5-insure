import{h as a,a8 as s,N as t,k as e,l as r,m as o,n,z as d,A as i,Q as c,C as l,T as m,a3 as p,a4 as f}from"./vendor-ec956704.js";import{a as v}from"./trial-8e3986c2.js";import{t as u}from"./theme-ea709837.js";import{_ as b}from"./index-47bb3bde.js";const g=a=>(p("data-v-32a9774e"),a=a(),f(),a),h={class:"page-pay-fail"},y=["src"],_=g((()=>d("div",{class:"title"},"支付失败",-1))),j=g((()=>d("div",{class:"desc"},"支付遇到问题，请尝试重新支付",-1))),k=l("重新支付");var w=b(a({setup(a){s();const l=t(),{tenantId:p,orderNo:f}=l.query,b=async()=>{m.loading({forbidClick:!0,message:"获取支付链接"});const a=await v({orderNo:f,tenantId:p}),{code:s,data:t}=a;"10000"===s&&(window.location.href=t)};return(a,s)=>{const t=e("VanButton"),l=e("van-config-provider");return r(),o(l,{"theme-vars":i(u)},{default:n((()=>[d("div",h,[d("img",{src:i("/static/assets/fail.c5500a28.png")},null,8,y),_,j,c(t,{class:"btn",type:"primary",round:"",block:"",onClick:b},{default:n((()=>[k])),_:1})])])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-32a9774e"]]);export{w as default};

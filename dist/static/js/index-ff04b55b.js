import{k as a,aa as s,u as t,p as e,s as r,t as o,v as d,C as n,E as i,S as c,G as l,T as f,a5 as m,a6 as p}from"./vendor-fb30fd59.js";import{a as v}from"./trial-fad5a63a.js";import{t as u}from"./theme-ea709837.js";import{_ as g}from"./index-d438dc19.js";const y=a=>(m("data-v-32a9774e"),a=a(),p(),a),_={class:"page-pay-fail"},b=["src"],h=y((()=>n("div",{class:"title"},"支付失败",-1))),j=y((()=>n("div",{class:"desc"},"支付遇到问题，请尝试重新支付",-1))),k=l("重新支付");var w=g(a({setup(a){s();const l=t(),{tenantId:m,orderNo:p}=l.query,g=async()=>{f.loading({forbidClick:!0,message:"获取支付链接"});const a=await v({orderNo:p,tenantId:m}),{code:s,data:t}=a;"10000"===s&&(window.location.href=t)};return(a,s)=>{const t=e("VanButton"),l=e("van-config-provider");return r(),o(l,{"theme-vars":i(u)},{default:d((()=>[n("div",_,[n("img",{src:i("/static/assets/fail.c5500a28.png")},null,8,b),h,j,c(t,{class:"btn",type:"primary",round:"",block:"",onClick:g},{default:d((()=>[k])),_:1})])])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-32a9774e"]]);export{w as default};

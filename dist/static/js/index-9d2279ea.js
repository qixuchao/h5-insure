import{m as a,ab as s,u as e,s as t,t as r,v as o,x as d,E as i,F as n,U as c,H as l,T as m,a6 as f,a7 as p}from"./vendor-fd650291.js";import{a as v}from"./trial-46e5d06e.js";import{t as u}from"./theme-ea709837.js";import{f as b}from"./fail-cee451a6.js";import{_ as g}from"./index-823b7915.js";const j=a=>(f("data-v-32a9774e"),a=a(),p(),a),y={class:"page-pay-fail"},_=["src"],h=j((()=>i("div",{class:"title"},"支付失败",-1))),k=j((()=>i("div",{class:"desc"},"支付遇到问题，请尝试重新支付",-1))),w=l("重新支付");var x=g(a({setup(a){s();const l=e(),{tenantId:f,orderNo:p}=l.query,g=async()=>{m.loading({forbidClick:!0,message:"获取支付链接"});const a=await v({orderNo:p,tenantId:f}),{code:s,data:e}=a;"10000"===s&&(window.location.href=e)};return(a,s)=>{const e=t("VanButton"),l=t("van-config-provider");return r(),o(l,{"theme-vars":n(u)},{default:d((()=>[i("div",y,[i("img",{src:n(b)},null,8,_),h,k,c(e,{class:"btn",type:"primary",round:"",block:"",onClick:g},{default:d((()=>[w])),_:1})])])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-32a9774e"]]);export{x as default};

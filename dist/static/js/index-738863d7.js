import{h as a,a8 as s,N as t,k as e,l as r,m as o,n,z as d,A as i,Q as c,C as l,T as f,a3 as m,a4 as p}from"./vendor-372f2d73.js";import{a as v}from"./trial-ab3d42cf.js";import{t as u}from"./theme-ea709837.js";import{_ as g}from"./index-a020f0b2.js";const b=a=>(m("data-v-32a9774e"),a=a(),p(),a),h={class:"page-pay-fail"},y=["src"],_=b((()=>d("div",{class:"title"},"支付失败",-1))),j=b((()=>d("div",{class:"desc"},"支付遇到问题，请尝试重新支付",-1))),k=l("重新支付");var w=g(a({setup(a){s();const l=t(),{tenantId:m,orderNo:p}=l.query,g=async()=>{f.loading({forbidClick:!0,message:"获取支付链接"});const a=await v({orderNo:p,tenantId:m}),{code:s,data:t}=a;"10000"===s&&(window.location.href=t)};return(a,s)=>{const t=e("VanButton"),l=e("van-config-provider");return r(),o(l,{"theme-vars":i(u)},{default:n((()=>[d("div",h,[d("img",{src:i("/static/assets/fail.c5500a28.png")},null,8,y),_,j,c(t,{class:"btn",type:"primary",round:"",block:"",onClick:g},{default:n((()=>[k])),_:1})])])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-32a9774e"]]);export{w as default};

import{d as a,c5 as e,u as s,ap as t,r as l,R as n,T as r,B as o,bM as i,b as u,g as c,w as d,i as f,f as p,a5 as _,c as v,e as m,j as h,a7 as w,h as y,M as k,cK as $}from"./index-726a2051.js";const b={class:"pdf-viewer-wrap"},g=["id"],j={key:0,class:"footer-btn"},x=a({__name:"index",setup(a){const x=e(),T=s(),E=window.location.href,{title:M,url:R}=T.query,q=t(),z=l(null),A=()=>{R&&$(R)};return n((()=>{document.title=M||"",R?(async()=>{var a;try{const{default:e}=await k((()=>import("./pdfh5-6aa7533c.js").then((function(a){return a.p}))),["static/js/pdfh5-6aa7533c.js","static/js/index-726a2051.js","static/css/index-ba84430f.css"]);z.value=new e(`#${q}`,{pdfurl:R,renderType:"canvas",lazy:!0}),null==(a=z.value)||a.on("complete",((a,e,s)=>{console.log(`状态：${a}，信息：${e}，耗时：${s}毫秒`),"error"===a&&r("文件损坏，无法打开！")}))}catch(e){console.log("error",e)}})():r("pdf文件为空")})),(a,e)=>{const s=o,t=i;return u(),c(t,{"theme-vars":p(x)},{default:d((()=>[f("div",b,[f("div",{id:p(q)},null,8,g),p(_)()?(u(),v("div",j,[m(w,{link:p(E),title:p(M)},{default:d((()=>[m(s,null,{default:d((()=>[h("分享")])),_:1})])),_:1},8,["link","title"]),m(s,{onClick:A},{default:d((()=>[h("下载")])),_:1})])):y("",!0)])])),_:1},8,["theme-vars"])}}});export{x as default};

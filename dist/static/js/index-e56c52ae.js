import{d as a,cI as e,i as s,bk as t,j as l,O as n,T as r,ag as o,bb as d,o as c,m as i,w as u,a as f,u as p,ac as _,c as m,b as v,a8 as b,ad as w,f as h,a5 as y,dm as k}from"./index-c2ab9f9d.js";const $={class:"pdf-viewer-wrap"},g=["id"],j={key:0,class:"footer-btn"},x=a({__name:"index",setup(a){const x=e(),T=s(),E=window.location.href,{title:I,url:O}=T.query,q=t(),z=l(null),A=()=>{O&&k(O)};return n((()=>{document.title=I||"",O?(async()=>{var a;try{const{default:e}=await y((()=>import("./pdfh5-cb657dd8.js").then((function(a){return a.p}))),["static/js/pdfh5-cb657dd8.js","static/js/index-c2ab9f9d.js","static/css/index-a0dcf2b9.css"]);z.value=new e(`#${q}`,{pdfurl:O,renderType:"canvas",lazy:!0}),null==(a=z.value)||a.on("complete",((a,e,s)=>{console.log(`状态：${a}，信息：${e}，耗时：${s}毫秒`),"error"===a&&r("文件损坏，无法打开！")}))}catch(e){console.log("error",e)}})():r("pdf文件为空")})),(a,e)=>{const s=o,t=d;return c(),i(t,{"theme-vars":p(x)},{default:u((()=>[f("div",$,[f("div",{id:p(q)},null,8,g),p(_)()?(c(),m("div",j,[v(w,{link:p(E),title:p(I)},{default:u((()=>[v(s,null,{default:u((()=>[b("分享")])),_:1})])),_:1},8,["link","title"]),v(s,{onClick:A},{default:u((()=>[b("下载")])),_:1})])):h("",!0)])])),_:1},8,["theme-vars"])}}});export{x as default};

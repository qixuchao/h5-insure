import{d as a,d6 as e,i as s,bs as t,j as l,O as r,T as n,aj as o,bh as d,o as i,m as u,w as c,a as f,u as p,ad as m,c as _,b as v,a8 as h,ae as w,f as b,a5 as j}from"./index-48eb641c.js";import{d as y}from"./jsbridgePromise-1a7f0ae2.js";const k={class:"pdf-viewer-wrap"},$=["id"],g={key:0,class:"footer-btn"},x=a({__name:"index",setup(a){const x=e(),T=s(),E=window.location.href,{title:O,url:P}=T.query,q=t(),z=l(null),A=()=>{P&&y(P)};return r((()=>{document.title=O||"",P?(async()=>{var a;try{const{default:e}=await j((()=>import("./pdfh5-4766e109.js").then((function(a){return a.p}))),["static/js/pdfh5-4766e109.js","static/js/index-48eb641c.js","static/css/index-f1c5cfcb.css"]);z.value=new e(`#${q}`,{pdfurl:P,renderType:"canvas",lazy:!0}),null==(a=z.value)||a.on("complete",((a,e,s)=>{console.log(`状态：${a}，信息：${e}，耗时：${s}毫秒`),"error"===a&&n("文件损坏，无法打开！")}))}catch(e){console.log("error",e)}})():n("pdf文件为空")})),(a,e)=>{const s=o,t=d;return i(),u(t,{"theme-vars":p(x)},{default:c((()=>[f("div",k,[f("div",{id:p(q)},null,8,$),p(m)()?(i(),_("div",g,[v(w,{link:p(E),title:p(O)},{default:c((()=>[v(s,null,{default:c((()=>[h("分享")])),_:1})])),_:1},8,["link","title"]),v(s,{onClick:A},{default:c((()=>[h("下载")])),_:1})])):b("",!0)])])),_:1},8,["theme-vars"])}}});export{x as default};

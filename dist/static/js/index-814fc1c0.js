import{d as a,cA as e,h as s,bf as t,i as l,O as n,T as r,an as o,b6 as d,o as i,l as u,w as c,a as f,u as p,ac as _,c as v,b as m,a8 as h,ad as w,q as y,a5 as b,de as k}from"./index-a6b4898c.js";const $={class:"pdf-viewer-wrap"},x=["id"],T={key:0,class:"footer-btn"},g=a({__name:"index",setup(a){const g=e(),j=s(),q=window.location.href,{title:A,url:E}=j.query,O=t(),z=l(null),C=()=>{E&&k(E)};return n((()=>{document.title=A||"",E?(async()=>{var a;try{const{default:e}=await b((()=>import("./pdfh5-5421502d.js").then((function(a){return a.p}))),["static/js/pdfh5-5421502d.js","static/js/index-a6b4898c.js","static/css/index-858bf1e3.css"]);z.value=new e(`#${O}`,{pdfurl:E,renderType:"canvas",lazy:!0}),null==(a=z.value)||a.on("complete",((a,e,s)=>{console.log(`状态：${a}，信息：${e}，耗时：${s}毫秒`),"error"===a&&r("文件损坏，无法打开！")}))}catch(e){console.log("error",e)}})():r("pdf文件为空")})),(a,e)=>{const s=o,t=d;return i(),u(t,{"theme-vars":p(g)},{default:c((()=>[f("div",$,[f("div",{id:p(O)},null,8,x),p(_)()?(i(),v("div",T,[m(w,{link:p(q),title:p(A)},{default:c((()=>[m(s,null,{default:c((()=>[h("分享")])),_:1})])),_:1},8,["link","title"]),m(s,{onClick:C},{default:c((()=>[h("下载")])),_:1})])):y("",!0)])])),_:1},8,["theme-vars"])}}});export{g as default};

import{d as a,d2 as e,i as s,bo as t,j as l,O as n,T as r,ai as o,be as d,o as i,m as u,w as c,a as f,u as p,ac as _,c as v,b as m,a8 as w,ad as h,f as y,a5 as b,dQ as k}from"./index-6027c89f.js";const $={class:"pdf-viewer-wrap"},j=["id"],x={key:0,class:"footer-btn"},T=a({__name:"index",setup(a){const T=e(),g=s(),E=window.location.href,{title:O,url:q}=g.query,z=t(),A=l(null),C=()=>{q&&k(q)};return n((()=>{document.title=O||"",q?(async()=>{var a;try{const{default:e}=await b((()=>import("./pdfh5-ea361e64.js").then((function(a){return a.p}))),["static/js/pdfh5-ea361e64.js","static/js/index-6027c89f.js","static/css/index-f1c5cfcb.css"]);A.value=new e(`#${z}`,{pdfurl:q,renderType:"canvas",lazy:!0}),null==(a=A.value)||a.on("complete",((a,e,s)=>{console.log(`状态：${a}，信息：${e}，耗时：${s}毫秒`),"error"===a&&r("文件损坏，无法打开！")}))}catch(e){console.log("error",e)}})():r("pdf文件为空")})),(a,e)=>{const s=o,t=d;return i(),u(t,{"theme-vars":p(T)},{default:c((()=>[f("div",$,[f("div",{id:p(z)},null,8,j),p(_)()?(i(),v("div",x,[m(h,{link:p(E),title:p(O)},{default:c((()=>[m(s,null,{default:c((()=>[w("分享")])),_:1})])),_:1},8,["link","title"]),m(s,{onClick:C},{default:c((()=>[w("下载")])),_:1})])):y("",!0)])])),_:1},8,["theme-vars"])}}});export{T as default};

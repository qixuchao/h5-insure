import{d as a,bI as e,u as s,ao as t,r as l,Z as n,T as r,B as o,bs as d,b as i,g as u,w as c,i as f,f as p,a8 as _,c as v,e as m,j as h,ab as w,h as y,U as b,cx as k}from"./index-c1d07286.js";const x={class:"pdf-viewer-wrap"},$=["id"],g={key:0,class:"footer-btn"},j=a({__name:"index",setup(a){const j=e(),T=s(),E=window.location.href,{title:I,url:q}=T.query,z=t(),A=l(null),B=()=>{q&&k(q)};return n((()=>{document.title=I||"",q?(async()=>{var a;try{const{default:e}=await b((()=>import("./pdfh5-85f2cd5f.js").then((function(a){return a.p}))),["static/js/pdfh5-85f2cd5f.js","static/js/index-c1d07286.js","static/css/index-16e2a454.css"]);A.value=new e(`#${z}`,{pdfurl:q,renderType:"canvas",lazy:!0}),null==(a=A.value)||a.on("complete",((a,e,s)=>{console.log(`状态：${a}，信息：${e}，耗时：${s}毫秒`),"error"===a&&r("文件损坏，无法打开！")}))}catch(e){console.log("error",e)}})():r("pdf文件为空")})),(a,e)=>{const s=o,t=d;return i(),u(t,{"theme-vars":p(j)},{default:c((()=>[f("div",x,[f("div",{id:p(z)},null,8,$),p(_)()?(i(),v("div",g,[m(w,{link:p(E),title:p(I)},{default:c((()=>[m(s,null,{default:c((()=>[h("分享")])),_:1})])),_:1},8,["link","title"]),m(s,{onClick:B},{default:c((()=>[h("下载")])),_:1})])):y("",!0)])])),_:1},8,["theme-vars"])}}});export{j as default};

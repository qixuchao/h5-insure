import{d as a,bI as e,u as s,am as t,r as l,Z as n,T as r,B as o,bq as i,b as u,g as c,w as d,i as f,f as p,a8 as v,c as _,e as m,j as b,ab as h,h as w,U as y,cv as k}from"./index-82e1b056.js";const $={class:"pdf-viewer-wrap"},g=["id"],j={key:0,class:"footer-btn"},x=a({__name:"index",setup(a){const x=e(),T=s(),q=window.location.href,{title:E,url:I}=T.query,z=t(),A=l(null),B=()=>{I&&k(I)};return n((()=>{document.title=E||"",I?(async()=>{var a;try{const{default:e}=await y((()=>import("./pdfh5-c40bc092.js").then((function(a){return a.p}))),["static/js/pdfh5-c40bc092.js","static/js/index-82e1b056.js","static/css/index-9494d932.css"]);A.value=new e(`#${z}`,{pdfurl:I,renderType:"canvas",lazy:!0}),null==(a=A.value)||a.on("complete",((a,e,s)=>{console.log(`状态：${a}，信息：${e}，耗时：${s}毫秒`),"error"===a&&r("文件损坏，无法打开！")}))}catch(e){console.log("error",e)}})():r("pdf文件为空")})),(a,e)=>{const s=o,t=i;return u(),c(t,{"theme-vars":p(x)},{default:d((()=>[f("div",$,[f("div",{id:p(z)},null,8,g),p(v)()?(u(),_("div",j,[m(h,{link:p(q),title:p(E)},{default:d((()=>[m(s,null,{default:d((()=>[b("分享")])),_:1})])),_:1},8,["link","title"]),m(s,{onClick:B},{default:d((()=>[b("下载")])),_:1})])):w("",!0)])])),_:1},8,["theme-vars"])}}});export{x as default};

import{d as a,bQ as e,u as s,aT as t,r as l,a1 as n,T as r,B as o,aX as i,b as d,g as u,w as c,i as f,f as p,aw as _,c as v,e as m,j as h,ax as w,h as y,Y as j,ct as k}from"./index-ef733660.js";import"./pdfh5-947e5c06.js";const x={class:"pdf-viewer-wrap"},T=["id"],$={key:0,class:"footer-btn"},b=a({__name:"index",setup(a){const b=e(),g=s(),E=window.location.href,{title:q,url:z}=g.query,A=t(),B=l(null),C=()=>{z&&k(z)};return n((()=>{document.title=q||"",z?(async()=>{var a;try{const{default:e}=await j((()=>import("./pdfh5-947e5c06.js").then((function(a){return a.p}))),[]);B.value=new e(`#${A}`,{pdfurl:z,renderType:"canvas",lazy:!0}),null==(a=B.value)||a.on("complete",((a,e,s)=>{console.log(`状态：${a}，信息：${e}，耗时：${s}毫秒`),"error"===a&&r("文件损坏，无法打开！")}))}catch(e){console.log("error",e)}})():r("pdf文件为空")})),(a,e)=>{const s=o,t=i;return d(),u(t,{"theme-vars":p(b)},{default:c((()=>[f("div",x,[f("div",{id:p(A)},null,8,T),p(_)()?(d(),v("div",$,[m(w,{link:p(E),title:p(q)},{default:c((()=>[m(s,null,{default:c((()=>[h("分享")])),_:1})])),_:1},8,["link","title"]),m(s,{onClick:C},{default:c((()=>[h("下载")])),_:1})])):y("",!0)])])),_:1},8,["theme-vars"])}}});export{b as default};

import{d as a,d3 as e,i as s,aj as t,j as l,l as r,T as n,bj as o,o as d,p as u,w as i,a as c,u as f,b as p,v,aG as _,az as m,aI as w}from"./index-dca1ad48.js";const h={class:"pdf-viewer-wrap"},j=["id"],y={class:"footer-btn"},b=a({__name:"index",setup(a){const b=e(),$=s(),x=window.location.href,{title:T,url:g}=$.query,z=t(),E=l(null);return r((()=>{document.title=T||"",g?(async()=>{var a;try{const{default:e}=await m((()=>import("./pdfh5-c8a645bf.js").then((function(a){return a.p}))),["static/js/pdfh5-c8a645bf.js","static/js/index-dca1ad48.js","static/css/index-efad381f.css"]);E.value=new e(`#${z}`,{pdfurl:g,renderType:"canvas",lazy:!0}),null==(a=E.value)||a.on("complete",((a,e,s)=>{console.log(`状态：${a}，信息：${e}，耗时：${s}毫秒`),"error"===a&&n("文件损坏，无法打开！")}))}catch(e){console.log("error",e)}})():n("pdf文件为空")})),(a,e)=>{const s=w,t=o;return d(),u(t,{"theme-vars":f(b)},{default:i((()=>[c("div",h,[c("div",{id:f(z)},null,8,j),c("div",y,[p(_,{url:f(x),title:f(T)},{default:i((()=>[p(s,null,{default:i((()=>[v("分享")])),_:1})])),_:1},8,["url","title"])])])])),_:1},8,["theme-vars"])}}});export{b as default};

import{d as a,dc as e,i as s,bC as t,j as l,l as r,T as n,br as o,o as u,p as d,w as c,a as i,u as f,b as p,v,an as _,ag as m,ar as w}from"./index-54fc417c.js";const h={class:"pdf-viewer-wrap"},b=["id"],y={class:"footer-btn"},$=a({__name:"index",setup(a){const $=e(),g=s(),j=window.location.href,{title:x,url:T}=g.query,E=t(),q=l(null);return r((()=>{document.title=x||"",T?(async()=>{var a;try{const{default:e}=await m((()=>import("./pdfh5-85b75301.js").then((function(a){return a.p}))),["static/js/pdfh5-85b75301.js","static/js/index-54fc417c.js","static/css/index-f5b78af1.css"]);q.value=new e(`#${E}`,{pdfurl:T,renderType:"canvas",lazy:!0}),null==(a=q.value)||a.on("complete",((a,e,s)=>{console.log(`状态：${a}，信息：${e}，耗时：${s}毫秒`),"error"===a&&n("文件损坏，无法打开！")}))}catch(e){console.log("error",e)}})():n("pdf文件为空")})),(a,e)=>{const s=w,t=o;return u(),d(t,{"theme-vars":f($)},{default:c((()=>[i("div",h,[i("div",{id:f(E)},null,8,b),i("div",y,[p(_,{url:f(j),title:f(x)},{default:c((()=>[p(s,null,{default:c((()=>[v("分享")])),_:1})])),_:1},8,["url","title"])])])])),_:1},8,["theme-vars"])}}});export{$ as default};

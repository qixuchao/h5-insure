import{d as e,a,D as r,r as s,G as l,T as o,c as t,h as n,g as d}from"./index-40904ad2.js";import{P as u}from"./pdfh5-008ca364.js";const c=["id"],i=e({__name:"index",setup(e){const i=a(),p=r(),m=s(null);return l((()=>{const{title:e,url:a}=i.query;document.title=e||"",a?(e=>{var a;try{m.value=new u(`#${p}`,{pdfurl:e,renderType:"svg",lazy:!0}),null==(a=m.value)||a.on("complete",((e,a,r)=>{console.log(`状态：${e}，信息：${a}，耗时：${r}毫秒`),"error"===e&&o("文件损坏，无法打开！")}))}catch(r){console.log("error",r)}})(a):o("pdf文件为空")})),(e,a)=>(t(),n("div",{id:d(p)},null,8,c))}});export{i as default};

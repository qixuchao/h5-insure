import{d as e,u as a,av as r,r as s,a1 as l,T as o,c as n,A as t,g as c}from"./index-b419c4de.js";import{P as d}from"./pdfh5-008ca364.js";const u=["id"],i=e({__name:"index",setup(e){const i=a(),p=r(),m=s(null);return l((()=>{const{title:e,url:a}=i.query;document.title=e||"",a?(e=>{var a;try{m.value=new d(`#${p}`,{pdfurl:e,renderType:"canvas",lazy:!0}),null==(a=m.value)||a.on("complete",((e,a,r)=>{console.log(`状态：${e}，信息：${a}，耗时：${r}毫秒`),"error"===e&&o("文件损坏，无法打开！")}))}catch(r){console.log("error",r)}})(a):o("pdf文件为空")})),(e,a)=>(n(),t("div",{id:c(p)},null,8,u))}});export{i as default};

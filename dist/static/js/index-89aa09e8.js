import{d as a,u as e,aB as r,r as s,a1 as l,T as o,c as n,A as t,g as c}from"./index-196cd882.js";import{P as d}from"./pdfh5-008ca364.js";const u=["id"],i=a({__name:"index",setup(a){const i=e(),p=r(),m=s(null);return l((()=>{const{title:a,url:e}=i.query;document.title=a||"",e?(a=>{var e;try{m.value=new d(`#${p}`,{pdfurl:a,renderType:"canvas",lazy:!0}),null==(e=m.value)||e.on("complete",((a,e,r)=>{console.log(`状态：${a}，信息：${e}，耗时：${r}毫秒`),"error"===a&&o("文件损坏，无法打开！")}))}catch(r){console.log("error",r)}})(e):o("pdf文件为空")})),(a,e)=>(n(),t("div",{id:c(p)},null,8,u))}});export{i as default};

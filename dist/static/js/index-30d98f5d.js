import{d as a,u as e,aQ as r,r as s,a1 as l,T as o,c as n,A as t,g as c}from"./index-4c8f1960.js";import{P as u}from"./pdfh5-008ca364.js";const d=["id"],i=a({__name:"index",setup(a){const i=e(),p=r(),f=s(null);return l((()=>{const{title:a,url:e}=i.query;document.title=a||"",e?(a=>{var e;try{f.value=new u(`#${p}`,{pdfurl:a,renderType:"canvas",lazy:!0}),null==(e=f.value)||e.on("complete",((a,e,r)=>{console.log(`状态：${a}，信息：${e}，耗时：${r}毫秒`),"error"===a&&o("文件损坏，无法打开！")}))}catch(r){console.log("error",r)}})(e):o("pdf文件为空")})),(a,e)=>(n(),t("div",{id:c(p)},null,8,d))}});export{i as default};

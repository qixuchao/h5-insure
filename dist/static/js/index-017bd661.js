import{d as a,u as e,aS as r,r as s,a1 as l,T as o,c as n,A as t,g as d}from"./index-d4c3d055.js";import{P as c}from"./pdfh5-008ca364.js";const u=["id"],p=a({__name:"index",setup(a){const p=e(),i=r(),f=s(null);return l((()=>{const{title:a,url:e}=p.query;document.title=a||"",e?(a=>{var e;try{f.value=new c(`#${i}`,{pdfurl:a,renderType:"canvas",lazy:!0}),null==(e=f.value)||e.on("complete",((a,e,r)=>{console.log(`状态：${a}，信息：${e}，耗时：${r}毫秒`),"error"===a&&o("文件损坏，无法打开！")}))}catch(r){console.log("error",r)}})(e):o("pdf文件为空")})),(a,e)=>(n(),t("div",{id:d(i),class:"pdf-viewer-wrap"},null,8,u))}});export{p as default};

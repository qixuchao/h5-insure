import{d as e,a as r,D as a,r as s,G as l,T as o,c as t,h as n,g as d}from"./index-952b7b68.js";import{P as u}from"./pdfh5-008ca364.js";const c=["id"],i=e({__name:"index",setup(e){const i=r(),p=a(),m=s(null);return l((()=>{const{title:e,url:r}=i.query;document.title=e||"",r?(e=>{var r;try{m.value=new u(`#${p}`,{pdfurl:e,renderType:"svg",lazy:!0}),null==(r=m.value)||r.on("complete",((e,r,a)=>{console.log(`状态：${e}，信息：${r}，耗时：${a}毫秒`),"error"===e&&o("文件损坏，无法打开！")}))}catch(a){console.log("error",a)}})(r):o("pdf文件为空")})),(e,r)=>(t(),n("div",{id:d(p)},null,8,c))}});export{i as default};

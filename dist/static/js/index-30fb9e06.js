import{d as a,a as e,v as r,r as s,y as t,T as l,c as d,g as n,l as o}from"./index-27f97798.js";import{P as u}from"./pdfh5-e5c0db2a.js";const c=["id"],p=a({setup(a){const p=e(),i=r(),f=s(null);return t((()=>{const{title:a,url:e}=p.query;document.title=a||"",e?(a=>{var e;try{f.value=new u(`#${i}`,{pdfurl:a,renderType:"svg",lazy:!0}),null==(e=f.value)||e.on("complete",((a,e,r)=>{"error"===a&&l("文件损坏，无法打开！")}))}catch(r){}})(e):l("pdf文件为空")})),(a,e)=>(d(),n("div",{id:o(i)},null,8,c))}});export{p as default};

import{d as e,a,v as r,r as s,y as t,T as l,c as d,g as n,l as o}from"./index-e396ee59.js";import{P as u}from"./pdfh5-e5c0db2a.js";const c=["id"],p=e({setup(e){const p=a(),i=r(),f=s(null);return t((()=>{const{title:e,url:a}=p.query;document.title=e||"",a?(e=>{var a;try{f.value=new u(`#${i}`,{pdfurl:e,renderType:"svg",lazy:!0}),null==(a=f.value)||a.on("complete",((e,a,r)=>{"error"===e&&l("文件损坏，无法打开！")}))}catch(r){}})(a):l("pdf文件为空")})),(e,a)=>(d(),n("div",{id:o(i)},null,8,c))}});export{p as default};

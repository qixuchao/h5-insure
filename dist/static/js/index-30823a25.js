import{d as a,a as e,v as r,r as s,y as t,T as l,c as d,g as n,l as o}from"./index-fdfba5cf.js";import{P as u}from"./pdfh5-e5c0db2a.js";const c=["id"],f=a({setup(a){const f=e(),p=r(),i=s(null);return t((()=>{const{title:a,url:e}=f.query;document.title=a||"",e?(a=>{var e;try{i.value=new u(`#${p}`,{pdfurl:a,renderType:"svg",lazy:!0}),null==(e=i.value)||e.on("complete",((a,e,r)=>{"error"===a&&l("文件损坏，无法打开！")}))}catch(r){}})(e):l("pdf文件为空")})),(a,e)=>(d(),n("div",{id:o(p)},null,8,c))}});export{f as default};

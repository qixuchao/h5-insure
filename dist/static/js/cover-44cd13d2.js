import{d as a,a as s,u as o,r as t,G as e,bS as r,c as n,h as c,j as i,g as l}from"./index-e28abb00.js";import{b as u}from"./compositionProposal-65b2e0a3.js";import"./pdfh5-008ca364.js";const m=["src"],p=a({__name:"cover",setup(a){const p=s(),d=o();let f=null;const{themeId:h,tenantId:v}=p.query,b=t(),g=()=>{d.push({path:"/compositionProposal",query:p.query})};return e((()=>{h?(async()=>{const{code:a,data:s}=await u({id:h,tenantId:v});"10000"===a&&(b.value=s.showConfig,f=setTimeout((()=>{g()}),3e3))})():g()})),r((()=>{clearTimeout(f)})),(a,s)=>{var o;return n(),c("div",{class:"cover-wrap",onClick:g},[i("img",{src:null==(o=l(b))?void 0:o.frontImage,alt:""},null,8,m)])}}});export{p as default};

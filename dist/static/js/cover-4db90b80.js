import{d as a,a as s,u as o,r as t,G as e,bS as r,c as n,g as c,i}from"./index-9effc651.js";import{b as l}from"./compositionProposal-14cd8fb3.js";import"./pdfh5-008ca364.js";const u=["src"],d=a({setup(a){const d=s(),p=o();let m=null;const{themeId:f,tenantId:v}=d.query,h=t(),g=()=>{p.push({path:"/compositionProposal",query:d.query})};return e((()=>{f?(async()=>{const{code:a,data:s}=await l({id:f,tenantId:v});"10000"===a&&(h.value=s.showConfig,m=setTimeout((()=>{g()}),3e3))})():g()})),r((()=>{clearTimeout(m)})),(a,s)=>{var o;return n(),c("div",{class:"cover-wrap",onClick:g},[i("img",{src:null==(o=h.value)?void 0:o.frontImage,alt:""},null,8,u)])}}});export{d as default};

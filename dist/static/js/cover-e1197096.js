import{d as a,a as s,u as e,r as o,y as t,aN as r,c as n,g as c,i}from"./index-ecc21e7e.js";import{b as l}from"./compositionProposal-a0847e15.js";import"./pdfh5-e5c0db2a.js";const u=["src"],d=a({setup(a){const d=s(),p=e();let m=null;const{themeId:f,tenantId:v}=d.query,h=o(),y=()=>{p.push({path:"/compositionProposal",query:d.query})};return t((()=>{f?(async()=>{const{code:a,data:s}=await l({id:f,tenantId:v});"10000"===a&&(h.value=s.showConfig,m=setTimeout((()=>{y()}),3e3))})():y()})),r((()=>{clearTimeout(m)})),(a,s)=>{var e;return n(),c("div",{class:"cover-wrap",onClick:y},[i("img",{src:null==(e=h.value)?void 0:e.frontImage,alt:""},null,8,u)])}}});export{d as default};

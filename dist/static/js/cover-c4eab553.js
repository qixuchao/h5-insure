import{d as a,a as s,u as o,r as t,y as e,aN as r,c as n,g as c,i}from"./index-a90c3162.js";import{b as l}from"./compositionProposal-19621c7e.js";import"./pdfh5-e5c0db2a.js";const u=["src"],d=a({setup(a){const d=s(),p=o();let m=null;const{themeId:f,tenantId:v}=d.query,h=t(),y=()=>{p.push({path:"/compositionProposal",query:d.query})};return e((()=>{f?(async()=>{const{code:a,data:s}=await l({id:f,tenantId:v});"10000"===a&&(h.value=s.showConfig,m=setTimeout((()=>{y()}),3e3))})():y()})),r((()=>{clearTimeout(m)})),(a,s)=>{var o;return n(),c("div",{class:"cover-wrap",onClick:y},[i("img",{src:null==(o=h.value)?void 0:o.frontImage,alt:""},null,8,u)])}}});export{d as default};

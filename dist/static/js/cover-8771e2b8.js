import{d as s,a,u as o,r as t,z as e,aS as r,c as i,g as n,i as c}from"./index-24c1b645.js";import{b as d}from"./compositionProposal-1de5e52e.js";import"./pdfh5-3b8067b2.js";import"./pdfdist-964d560e.js";const l=["src"],u=s({setup(s){const u=a(),p=o();let m=null;const{themeId:f,tenantId:v}=u.query,h=t(),b=()=>{p.push({path:"/compositionProposal",query:u.query})};return e((()=>{f?(async()=>{const{code:s,data:a}=await d({id:f,tenantId:v});"10000"===s&&(h.value=a.showConfig,m=setTimeout((()=>{b()}),3e3))})():b()})),r((()=>{clearTimeout(m)})),(s,a)=>{var o;return i(),n("div",{class:"cover-wrap",onClick:b},[c("img",{src:null==(o=h.value)?void 0:o.frontImage,alt:""},null,8,l)])}}});export{u as default};

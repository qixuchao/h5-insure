import{d as a,u as s,a as o,r as t,a1 as e,cg as r,c as n,A as c,f as i,g as l}from"./index-cd20886f.js";import{b as u}from"./compositionProposal-de827135.js";import"./pdfh5-008ca364.js";const d=["src"],m=a({name:"cover"}),p=a({...m,setup(a){const m=s(),p=o();let f=null;const{themeId:v,tenantId:g}=m.query,h=t(),y=()=>{p.push({path:"/compositionProposal",query:m.query})};return e((()=>{v?(async()=>{const{code:a,data:s}=await u({id:v,tenantId:g});"10000"===a&&(h.value=s.showConfig,f=setTimeout((()=>{y()}),3e3))})():y()})),r((()=>{clearTimeout(f)})),(a,s)=>{var o;return n(),c("div",{class:"cover-wrap",onClick:y},[i("img",{src:null==(o=l(h))?void 0:o.frontImage,alt:""},null,8,d)])}}});export{p as default};

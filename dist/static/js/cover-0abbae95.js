import{d as a,u as s,a as o,r as t,a1 as e,cg as r,c as n,A as c,f as i,g as l}from"./index-04929464.js";import{b as u}from"./compositionProposal-b31e288a.js";import"./pdfh5-008ca364.js";const m=["src"],p=a({name:"cover"}),d=a({...p,setup(a){const p=s(),d=o();let f=null;const{themeId:v,tenantId:g}=p.query,h=t(),y=()=>{d.push({path:"/compositionProposal",query:p.query})};return e((()=>{v?(async()=>{const{code:a,data:s}=await u({id:v,tenantId:g});"10000"===a&&(h.value=s.showConfig,f=setTimeout((()=>{y()}),3e3))})():y()})),r((()=>{clearTimeout(f)})),(a,s)=>{var o;return n(),c("div",{class:"cover-wrap",onClick:y},[i("img",{src:null==(o=l(h))?void 0:o.frontImage,alt:""},null,8,m)])}}});export{d as default};

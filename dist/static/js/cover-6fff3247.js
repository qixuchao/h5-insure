import{d as a,i as s,h as o,j as t,O as e,bY as r,o as n,c,a as i,u as l}from"./index-9122cfbb.js";import{b as u}from"./compositionProposal-b9001bca.js";const m=["src"],d=a({name:"cover"}),p=a({...d,setup(a){const d=s(),p=o();let b=null;const{themeId:f,tenantId:v}=d.query,h=t(),y=()=>{p.push({path:"/compositionProposal",query:d.query})};return e((()=>{f?(async()=>{const{code:a,data:s}=await u({id:f,tenantId:v});"10000"===a&&(h.value=s.showConfig,b=setTimeout((()=>{y()}),3e3))})():y()})),r((()=>{clearTimeout(b)})),(a,s)=>{var o;return n(),c("div",{class:"cover-wrap",onClick:y},[i("img",{src:null==(o=l(h))?void 0:o.frontImage,alt:""},null,8,m)])}}});export{p as default};

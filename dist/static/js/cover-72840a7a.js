import{d as a,i as s,h as o,j as t,l as e,ca as r,o as n,c,a as i,u as l}from"./index-a2b9e947.js";import{b as u}from"./compositionProposal-b6d7d8db.js";const d=["src"],m=a({name:"cover"}),p=a({...m,setup(a){const m=s(),p=o();let v=null;const{themeId:f,tenantId:h}=m.query,b=t(),y=()=>{p.push({path:"/compositionProposal",query:m.query})};return e((()=>{f?(async()=>{const{code:a,data:s}=await u({id:f,tenantId:h});"10000"===a&&(b.value=s.showConfig,v=setTimeout((()=>{y()}),3e3))})():y()})),r((()=>{clearTimeout(v)})),(a,s)=>{var o;return n(),c("div",{class:"cover-wrap",onClick:y},[i("img",{src:null==(o=l(b))?void 0:o.frontImage,alt:""},null,8,d)])}}});export{p as default};

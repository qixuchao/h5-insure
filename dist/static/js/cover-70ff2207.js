import{d as a,i as s,h as o,j as t,O as e,bV as r,o as n,c as i,a as c,u as l}from"./index-9a4aba42.js";import{b as u}from"./compositionProposal-1528bda0.js";const d=["src"],m=a({name:"cover"}),p=a({...m,setup(a){const m=s(),p=o();let v=null;const{themeId:f,tenantId:h}=m.query,b=t(),y=()=>{p.push({path:"/compositionProposal",query:m.query})};return e((()=>{f?(async()=>{const{code:a,data:s}=await u({id:f,tenantId:h});"10000"===a&&(b.value=s.showConfig,v=setTimeout((()=>{y()}),3e3))})():y()})),r((()=>{clearTimeout(v)})),(a,s)=>{var o;return n(),i("div",{class:"cover-wrap",onClick:y},[c("img",{src:null==(o=l(b))?void 0:o.frontImage,alt:""},null,8,d)])}}});export{p as default};

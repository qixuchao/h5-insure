import{d as a,i as s,h as o,j as t,O as e,bV as r,o as n,c,a as i,u as l}from"./index-249cbd63.js";import{b as u}from"./compositionProposal-ab7b9a0a.js";const d=["src"],m=a({name:"cover"}),p=a({...m,setup(a){const m=s(),p=o();let v=null;const{themeId:b,tenantId:f}=m.query,h=t(),y=()=>{p.push({path:"/compositionProposal",query:m.query})};return e((()=>{b?(async()=>{const{code:a,data:s}=await u({id:b,tenantId:f});"10000"===a&&(h.value=s.showConfig,v=setTimeout((()=>{y()}),3e3))})():y()})),r((()=>{clearTimeout(v)})),(a,s)=>{var o;return n(),c("div",{class:"cover-wrap",onClick:y},[i("img",{src:null==(o=l(h))?void 0:o.frontImage,alt:""},null,8,d)])}}});export{p as default};

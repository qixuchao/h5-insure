import{d as a,h as s,g as o,i as t,O as e,cR as r,o as n,c,a as i,u as l}from"./index-af98f288.js";import{b as u}from"./compositionProposal-c2db2aad.js";const d=["src"],m=a({name:"cover"}),p=a({...m,setup(a){const m=s(),p=o();let f=null;const{themeId:v,tenantId:h}=m.query,g=t(),y=()=>{p.push({path:"/compositionProposal",query:m.query})};return e((()=>{v?(async()=>{const{code:a,data:s}=await u({id:v,tenantId:h});"10000"===a&&(g.value=s.showConfig,f=setTimeout((()=>{y()}),3e3))})():y()})),r((()=>{clearTimeout(f)})),(a,s)=>{var o;return n(),c("div",{class:"cover-wrap",onClick:y},[i("img",{src:null==(o=l(g))?void 0:o.frontImage,alt:""},null,8,d)])}}});export{p as default};

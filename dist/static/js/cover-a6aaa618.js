import{d as a,h as s,g as o,i as e,O as t,cR as r,o as n,c,a as i,u as l}from"./index-0bb786f6.js";import{b as u}from"./compositionProposal-f4e8ce5c.js";const m=["src"],d=a({name:"cover"}),p=a({...d,setup(a){const d=s(),p=o();let f=null;const{themeId:v,tenantId:h}=d.query,g=e(),y=()=>{p.push({path:"/compositionProposal",query:d.query})};return t((()=>{v?(async()=>{const{code:a,data:s}=await u({id:v,tenantId:h});"10000"===a&&(g.value=s.showConfig,f=setTimeout((()=>{y()}),3e3))})():y()})),r((()=>{clearTimeout(f)})),(a,s)=>{var o;return n(),c("div",{class:"cover-wrap",onClick:y},[i("img",{src:null==(o=l(g))?void 0:o.frontImage,alt:""},null,8,m)])}}});export{p as default};

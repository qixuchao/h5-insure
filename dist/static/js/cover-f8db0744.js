import{d as a,h as s,g as o,i as e,O as t,cm as r,o as n,c,a as i,u as l}from"./index-e18db70e.js";import{b as u}from"./compositionProposal-463328b3.js";const m=["src"],d=a({name:"cover"}),p=a({...d,setup(a){const d=s(),p=o();let v=null;const{themeId:f,tenantId:h}=d.query,g=e(),y=()=>{p.push({path:"/compositionProposal",query:d.query})};return t((()=>{f?(async()=>{const{code:a,data:s}=await u({id:f,tenantId:h});"10000"===a&&(g.value=s.showConfig,v=setTimeout((()=>{y()}),3e3))})():y()})),r((()=>{clearTimeout(v)})),(a,s)=>{var o;return n(),c("div",{class:"cover-wrap",onClick:y},[i("img",{src:null==(o=l(g))?void 0:o.frontImage,alt:""},null,8,m)])}}});export{p as default};

import{k as a,u as s,aa as o,r as t,o as e,ah as r,s as n,B as i,C as l}from"./vendor-9bab628e.js";import{b as u}from"./compositionProposal-72dbba2d.js";import"./index-8e7f5f4c.js";const c=["src"],d=a({setup(a){const d=s(),m=o();let p=null;const{themeId:f,tenantId:v}=d.query,b=t(),h=()=>{m.push({path:"/compositionProposal",query:d.query})};return e((()=>{f?(async()=>{const{code:a,data:s}=await u({id:f,tenantId:v});"10000"===a&&(b.value=s.showConfig,p=setTimeout((()=>{h()}),3e3))})():h()})),r((()=>{clearTimeout(p)})),(a,s)=>{var o;return n(),i("div",{class:"cover-wrap",onClick:h},[l("img",{src:null==(o=b.value)?void 0:o.frontImage,alt:""},null,8,c)])}}});export{d as default};

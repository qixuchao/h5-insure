import{k as a,u as s,aa as o,r as t,o as e,ah as r,s as n,B as i,C as l}from"./vendor-9bab628e.js";import{b as u}from"./compositionProposal-39da1469.js";import"./index-aa4ec275.js";const c=["src"],d=a({setup(a){const d=s(),m=o();let p=null;const{themeId:v,tenantId:f}=d.query,h=t(),y=()=>{m.push({path:"/compositionProposal",query:d.query})};return e((()=>{v?(async()=>{const{code:a,data:s}=await u({id:v,tenantId:f});"10000"===a&&(h.value=s.showConfig,p=setTimeout((()=>{y()}),3e3))})():y()})),r((()=>{clearTimeout(p)})),(a,s)=>{var o;return n(),i("div",{class:"cover-wrap",onClick:y},[l("img",{src:null==(o=h.value)?void 0:o.frontImage,alt:""},null,8,c)])}}});export{d as default};

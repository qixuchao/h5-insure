import{h as a,N as s,a8 as o,r as t,j as e,af as r,l as n,y as i,z as l}from"./vendor-d6fdc679.js";import{b as c}from"./compositionProposal-35110840.js";import"./index-60277a18.js";const u=["src"],d=a({setup(a){const d=s(),m=o();let p=null;const{themeId:f,tenantId:v}=d.query,h=t(),y=()=>{m.push({path:"/compositionProposal",query:d.query})};return e((()=>{f?(async()=>{const{code:a,data:s}=await c({id:f,tenantId:v});"10000"===a&&(h.value=s.showConfig,p=setTimeout((()=>{y()}),3e3))})():y()})),r((()=>{clearTimeout(p)})),(a,s)=>{var o;return n(),i("div",{class:"cover-wrap",onClick:y},[l("img",{src:null==(o=h.value)?void 0:o.frontImage,alt:""},null,8,u)])}}});export{d as default};

import{h as a,N as s,a8 as o,r as t,j as e,af as r,l as n,y as i,z as l}from"./vendor-0381d15c.js";import{b as c}from"./compositionProposal-30baaa72.js";import"./index-e427a2b7.js";const u=["src"],d=a({setup(a){const d=s(),m=o();let p=null;const{themeId:v,tenantId:f}=d.query,h=t(),y=()=>{m.push({path:"/compositionProposal",query:d.query})};return e((()=>{v?(async()=>{const{code:a,data:s}=await c({id:v,tenantId:f});"10000"===a&&(h.value=s.showConfig,p=setTimeout((()=>{y()}),3e3))})():y()})),r((()=>{clearTimeout(p)})),(a,s)=>{var o;return n(),i("div",{class:"cover-wrap",onClick:y},[l("img",{src:null==(o=h.value)?void 0:o.frontImage,alt:""},null,8,u)])}}});export{d as default};

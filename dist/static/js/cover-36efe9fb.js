import{h as a,N as s,a8 as o,r as e,j as t,af as r,l as n,y as i,z as l}from"./vendor-ec956704.js";import{b as c}from"./compositionProposal-d0313beb.js";import"./index-47bb3bde.js";const u=["src"],d=a({setup(a){const d=s(),m=o();let p=null;const{themeId:v,tenantId:b}=d.query,f=e(),h=()=>{m.push({path:"/compositionProposal",query:d.query})};return t((()=>{v?(async()=>{const{code:a,data:s}=await c({id:v,tenantId:b});"10000"===a&&(f.value=s.showConfig,p=setTimeout((()=>{h()}),3e3))})():h()})),r((()=>{clearTimeout(p)})),(a,s)=>{var o;return n(),i("div",{class:"cover-wrap",onClick:h},[l("img",{src:null==(o=f.value)?void 0:o.frontImage,alt:""},null,8,u)])}}});export{d as default};

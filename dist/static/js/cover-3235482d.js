import{d as a,i as s,h as o,j as t,l as e,ca as r,o as n,c,a as i,u as l}from"./index-658553ed.js";import{b as u}from"./compositionProposal-39c57511.js";const d=["src"],m=a({name:"cover"}),p=a({...m,setup(a){const m=s(),p=o();let v=null;const{themeId:f,tenantId:h}=m.query,y=t(),I=()=>{p.push({path:"/compositionProposal",query:m.query})};return e((()=>{f?(async()=>{const{code:a,data:s}=await u({id:f,tenantId:h});"10000"===a&&(y.value=s.showConfig,v=setTimeout((()=>{I()}),3e3))})():I()})),r((()=>{clearTimeout(v)})),(a,s)=>{var o;return n(),c("div",{class:"cover-wrap",onClick:I},[i("img",{src:null==(o=l(y))?void 0:o.frontImage,alt:""},null,8,d)])}}});export{p as default};

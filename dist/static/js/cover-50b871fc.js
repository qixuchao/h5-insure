import{d as a,i as s,h as o,j as e,O as t,bW as r,o as n,c,a as i,u as l}from"./index-0aeac8ce.js";import{b as u}from"./compositionProposal-6c039664.js";const m=["src"],d=a({name:"cover"}),p=a({...d,setup(a){const d=s(),p=o();let v=null;const{themeId:f,tenantId:h}=d.query,y=e(),I=()=>{p.push({path:"/compositionProposal",query:d.query})};return t((()=>{f?(async()=>{const{code:a,data:s}=await u({id:f,tenantId:h});"10000"===a&&(y.value=s.showConfig,v=setTimeout((()=>{I()}),3e3))})():I()})),r((()=>{clearTimeout(v)})),(a,s)=>{var o;return n(),c("div",{class:"cover-wrap",onClick:I},[i("img",{src:null==(o=l(y))?void 0:o.frontImage,alt:""},null,8,m)])}}});export{p as default};

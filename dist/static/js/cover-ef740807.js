import{d as a,i as s,h as o,j as t,l as e,c7 as r,o as n,c,a as i,u as l}from"./index-c51609f0.js";import{b as u}from"./compositionProposal-cc33e650.js";const m=["src"],d=a({name:"cover"}),p=a({...d,setup(a){const d=s(),p=o();let f=null;const{themeId:v,tenantId:h}=d.query,y=t(),I=()=>{p.push({path:"/compositionProposal",query:d.query})};return e((()=>{v?(async()=>{const{code:a,data:s}=await u({id:v,tenantId:h});"10000"===a&&(y.value=s.showConfig,f=setTimeout((()=>{I()}),3e3))})():I()})),r((()=>{clearTimeout(f)})),(a,s)=>{var o;return n(),c("div",{class:"cover-wrap",onClick:I},[i("img",{src:null==(o=l(y))?void 0:o.frontImage,alt:""},null,8,m)])}}});export{p as default};

import{d as a,i as s,h as o,j as e,l as t,bV as r,o as n,c as i,a as c,u as l}from"./index-e61895f6.js";import{b as u}from"./compositionProposal-43976e8b.js";const m=["src"],d=a({name:"cover"}),p=a({...d,setup(a){const d=s(),p=o();let f=null;const{themeId:v,tenantId:h}=d.query,y=e(),I=()=>{p.push({path:"/compositionProposal",query:d.query})};return t((()=>{v?(async()=>{const{code:a,data:s}=await u({id:v,tenantId:h});"10000"===a&&(y.value=s.showConfig,f=setTimeout((()=>{I()}),3e3))})():I()})),r((()=>{clearTimeout(f)})),(a,s)=>{var o;return n(),i("div",{class:"cover-wrap",onClick:I},[c("img",{src:null==(o=l(y))?void 0:o.frontImage,alt:""},null,8,m)])}}});export{p as default};

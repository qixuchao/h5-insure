import{d as a,i as s,h as o,j as e,O as t,bV as r,o as n,c,a as i,u as l}from"./index-ec8e6f24.js";import{b as u}from"./compositionProposal-eba76d73.js";const d=["src"],m=a({name:"cover"}),p=a({...m,setup(a){const m=s(),p=o();let f=null;const{themeId:v,tenantId:h}=m.query,y=e(),I=()=>{p.push({path:"/compositionProposal",query:m.query})};return t((()=>{v?(async()=>{const{code:a,data:s}=await u({id:v,tenantId:h});"10000"===a&&(y.value=s.showConfig,f=setTimeout((()=>{I()}),3e3))})():I()})),r((()=>{clearTimeout(f)})),(a,s)=>{var o;return n(),c("div",{class:"cover-wrap",onClick:I},[i("img",{src:null==(o=l(y))?void 0:o.frontImage,alt:""},null,8,d)])}}});export{p as default};

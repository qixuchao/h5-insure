import{d as a,i as s,h as o,j as t,O as e,bS as r,o as n,c as i,a as c,u as l}from"./index-4f878428.js";import{d as u}from"./compositionProposal-6db4f46f.js";const d=["src"],m=a({name:"cover"}),p=a({...m,setup(a){const m=s(),p=o();let f=null;const{themeId:v,tenantId:h}=m.query,y=t(),I=()=>{p.push({path:"/compositionProposal",query:m.query})};return e((()=>{v?(async()=>{const{code:a,data:s}=await u({id:v,tenantId:h});"10000"===a&&(y.value=s.showConfig,f=setTimeout((()=>{I()}),3e3))})():I()})),r((()=>{clearTimeout(f)})),(a,s)=>{var o;return n(),i("div",{class:"cover-wrap",onClick:I},[c("img",{src:null==(o=l(y))?void 0:o.frontImage,alt:""},null,8,d)])}}});export{p as default};

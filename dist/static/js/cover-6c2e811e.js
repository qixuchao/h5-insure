import{d as a,u as s,a as o,r as t,Z as e,cb as r,b as n,c,i,f as l}from"./index-80cf87ea.js";import{b as u}from"./compositionProposal-50969590.js";const m=["src"],d=a({name:"cover"}),p=a({...d,setup(a){const d=s(),p=o();let f=null;const{themeId:v,tenantId:h}=d.query,y=t(),I=()=>{p.push({path:"/compositionProposal",query:d.query})};return e((()=>{v?(async()=>{const{code:a,data:s}=await u({id:v,tenantId:h});"10000"===a&&(y.value=s.showConfig,f=setTimeout((()=>{I()}),3e3))})():I()})),r((()=>{clearTimeout(f)})),(a,s)=>{var o;return n(),c("div",{class:"cover-wrap",onClick:I},[i("img",{src:null==(o=l(y))?void 0:o.frontImage,alt:""},null,8,m)])}}});export{p as default};

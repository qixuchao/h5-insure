import{d as a,u as s,a as o,r as e,R as t,cq as r,b as n,c,i,f as l}from"./index-5b728ee5.js";import{b as u}from"./compositionProposal-302655a9.js";const m=["src"],d=a({name:"cover"}),p=a({...d,setup(a){const d=s(),p=o();let f=null;const{themeId:v,tenantId:h}=d.query,q=e(),y=()=>{p.push({path:"/compositionProposal",query:d.query})};return t((()=>{v?(async()=>{const{code:a,data:s}=await u({id:v,tenantId:h});"10000"===a&&(q.value=s.showConfig,f=setTimeout((()=>{y()}),3e3))})():y()})),r((()=>{clearTimeout(f)})),(a,s)=>{var o;return n(),c("div",{class:"cover-wrap",onClick:y},[i("img",{src:null==(o=l(q))?void 0:o.frontImage,alt:""},null,8,m)])}}});export{p as default};

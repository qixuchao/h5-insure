import{d as a,u as s,a as o,r as e,R as t,cq as r,b as n,c,i,f as l}from"./index-99a04ebd.js";import{b as u}from"./compositionProposal-88ce32fe.js";const d=["src"],m=a({name:"cover"}),p=a({...m,setup(a){const m=s(),p=o();let f=null;const{themeId:v,tenantId:h}=m.query,q=e(),y=()=>{p.push({path:"/compositionProposal",query:m.query})};return t((()=>{v?(async()=>{const{code:a,data:s}=await u({id:v,tenantId:h});"10000"===a&&(q.value=s.showConfig,f=setTimeout((()=>{y()}),3e3))})():y()})),r((()=>{clearTimeout(f)})),(a,s)=>{var o;return n(),c("div",{class:"cover-wrap",onClick:y},[i("img",{src:null==(o=l(q))?void 0:o.frontImage,alt:""},null,8,d)])}}});export{p as default};

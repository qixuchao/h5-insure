import{d as a,u as s,a as o,r as t,R as e,cq as r,b as n,c,i,f as l}from"./index-6cc8434a.js";import{b as u}from"./compositionProposal-bfe0b05d.js";const d=["src"],m=a({name:"cover"}),p=a({...m,setup(a){const m=s(),p=o();let f=null;const{themeId:v,tenantId:b}=m.query,h=t(),q=()=>{p.push({path:"/compositionProposal",query:m.query})};return e((()=>{v?(async()=>{const{code:a,data:s}=await u({id:v,tenantId:b});"10000"===a&&(h.value=s.showConfig,f=setTimeout((()=>{q()}),3e3))})():q()})),r((()=>{clearTimeout(f)})),(a,s)=>{var o;return n(),c("div",{class:"cover-wrap",onClick:q},[i("img",{src:null==(o=l(h))?void 0:o.frontImage,alt:""},null,8,d)])}}});export{p as default};

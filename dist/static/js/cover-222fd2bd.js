import{d as a,i as s,h as o,j as t,O as e,bY as r,o as n,c as i,a as c,u as l}from"./index-676bb1f1.js";import{b as u}from"./compositionProposal-417de169.js";const d=["src"],m=a({name:"cover"}),p=a({...m,setup(a){const m=s(),p=o();let f=null;const{themeId:v,tenantId:h}=m.query,b=t(),y=()=>{p.push({path:"/compositionProposal",query:m.query})};return e((()=>{v?(async()=>{const{code:a,data:s}=await u({id:v,tenantId:h});"10000"===a&&(b.value=s.showConfig,f=setTimeout((()=>{y()}),3e3))})():y()})),r((()=>{clearTimeout(f)})),(a,s)=>{var o;return n(),i("div",{class:"cover-wrap",onClick:y},[c("img",{src:null==(o=l(b))?void 0:o.frontImage,alt:""},null,8,d)])}}});export{p as default};

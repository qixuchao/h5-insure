import{d as a,u as s,a as o,r as t,a1 as e,ce as r,c,A as n,f as i,g as d}from"./index-cc43bd1d.js";import{b as l}from"./compositionProposal-8fdd2e8c.js";import"./pdfh5-008ca364.js";const u=["src"],m=a({name:"cover"}),p=a({...m,setup(a){const m=s(),p=o();let f=null;const{themeId:v,tenantId:h}=m.query,g=t(),y=()=>{p.push({path:"/compositionProposal",query:m.query})};return e((()=>{v?(async()=>{const{code:a,data:s}=await l({id:v,tenantId:h});"10000"===a&&(g.value=s.showConfig,f=setTimeout((()=>{y()}),3e3))})():y()})),r((()=>{clearTimeout(f)})),(a,s)=>{var o;return c(),n("div",{class:"cover-wrap",onClick:y},[i("img",{src:null==(o=d(g))?void 0:o.frontImage,alt:""},null,8,u)])}}});export{p as default};

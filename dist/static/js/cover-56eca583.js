import{d as a,u as s,a as o,r as t,a1 as e,cf as r,c as n,A as c,f as i,g as l}from"./index-8459a1be.js";import{b as u}from"./compositionProposal-15300740.js";import"./pdfh5-008ca364.js";const m=["src"],p=a({name:"cover"}),d=a({...p,setup(a){const p=s(),d=o();let f=null;const{themeId:v,tenantId:h}=p.query,g=t(),y=()=>{d.push({path:"/compositionProposal",query:p.query})};return e((()=>{v?(async()=>{const{code:a,data:s}=await u({id:v,tenantId:h});"10000"===a&&(g.value=s.showConfig,f=setTimeout((()=>{y()}),3e3))})():y()})),r((()=>{clearTimeout(f)})),(a,s)=>{var o;return n(),c("div",{class:"cover-wrap",onClick:y},[i("img",{src:null==(o=l(g))?void 0:o.frontImage,alt:""},null,8,m)])}}});export{d as default};

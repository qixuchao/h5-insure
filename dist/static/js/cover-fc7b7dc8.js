import{d as a,u as s,a as o,r as t,a1 as e,cf as r,c as n,A as c,f as i,g as l}from"./index-abbaf02a.js";import{b as u}from"./compositionProposal-c8ffa7fb.js";import"./pdfh5-008ca364.js";const m=["src"],p=a({name:"cover"}),d=a({...p,setup(a){const p=s(),d=o();let f=null;const{themeId:v,tenantId:h}=p.query,b=t(),g=()=>{d.push({path:"/compositionProposal",query:p.query})};return e((()=>{v?(async()=>{const{code:a,data:s}=await u({id:v,tenantId:h});"10000"===a&&(b.value=s.showConfig,f=setTimeout((()=>{g()}),3e3))})():g()})),r((()=>{clearTimeout(f)})),(a,s)=>{var o;return n(),c("div",{class:"cover-wrap",onClick:g},[i("img",{src:null==(o=l(b))?void 0:o.frontImage,alt:""},null,8,m)])}}});export{d as default};

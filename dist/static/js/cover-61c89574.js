import{d as a,a as s,u as o,r as e,G as t,bS as r,c as n,h as c,j as i,g as l}from"./index-ac0d8bf0.js";import{b as u}from"./compositionProposal-e94e4e79.js";import"./pdfh5-008ca364.js";const d=["src"],m=a({__name:"cover",setup(a){const m=s(),p=o();let f=null;const{themeId:h,tenantId:v}=m.query,g=e(),j=()=>{p.push({path:"/compositionProposal",query:m.query})};return t((()=>{h?(async()=>{const{code:a,data:s}=await u({id:h,tenantId:v});"10000"===a&&(g.value=s.showConfig,f=setTimeout((()=>{j()}),3e3))})():j()})),r((()=>{clearTimeout(f)})),(a,s)=>{var o;return n(),c("div",{class:"cover-wrap",onClick:j},[i("img",{src:null==(o=l(g))?void 0:o.frontImage,alt:""},null,8,d)])}}});export{m as default};

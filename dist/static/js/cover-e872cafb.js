import{h as a,N as s,a8 as o,C as t,j as e,ag as r,k as n,x as i,y as c}from"./vendor-a7f495fb.js";import{b as l}from"./compositionProposal-88376ac3.js";import"./index-099ce742.js";const u=["src"],m=a({setup(a){const m=s(),p=o();let d=null;const{themeId:f,tenantId:v}=m.query,h=t(),y=()=>{p.push({path:"/compositionProposal",query:m.query})};return e((()=>{f?(async()=>{const{code:a,data:s}=await l({id:f,tenantId:v});"10000"===a&&(h.value=s.showConfig,d=setTimeout((()=>{y()}),3e3))})():y()})),r((()=>{clearTimeout(d)})),(a,s)=>{var o;return n(),i("div",{class:"cover-wrap",onClick:y},[c("img",{src:null==(o=h.value)?void 0:o.frontImage,alt:""},null,8,u)])}}});export{m as default};

import{h as a,N as s,a8 as o,r as t,j as e,af as r,l as n,y as c,z as i}from"./vendor-75ce3ac1.js";import{b as l}from"./compositionProposal-604b5705.js";import"./index-aec22624.js";const u=["src"],m=a({setup(a){const m=s(),p=o();let d=null;const{themeId:v,tenantId:f}=m.query,h=t(),y=()=>{p.push({path:"/compositionProposal",query:m.query})};return e((()=>{v?(async()=>{const{code:a,data:s}=await l({id:v,tenantId:f});"10000"===a&&(h.value=s.showConfig,d=setTimeout((()=>{y()}),3e3))})():y()})),r((()=>{clearTimeout(d)})),(a,s)=>{var o;return n(),c("div",{class:"cover-wrap",onClick:y},[i("img",{src:null==(o=h.value)?void 0:o.frontImage,alt:""},null,8,u)])}}});export{m as default};

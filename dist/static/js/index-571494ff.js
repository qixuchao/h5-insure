import{_ as e,d as s,aB as a,r as o,aj as l,b as t,c,g as n,f as u,B as d,l as r,T as m}from"./index-c46ff1c8.js";const i={class:"com-fixed-button"};var v=e(s({props:{buttonImage:{default:""}},setup(e){const s=e,{buttonImage:v}=a(s),f=o(!1),p=o(null),b=o(0),T=o(0),g=()=>{T.value=document.documentElement.scrollTop||document.body.scrollTop,T.value===b.value&&(f.value=!1)},x=()=>{document.onscroll=()=>{clearTimeout(p.value),p.value=setTimeout(g,800),b.value=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,f.value=!0}},w=()=>{m("历史计划书")};return l((()=>{window.addEventListener("scroll",x)})),(e,s)=>{const a=t("van-image");return c(),n("div",i,[u(a,{class:d(["fixed-box",f.value?"is-screen-fade-in":"is-screen-fade-out"]),src:r(v),onClick:w},null,8,["class","src"])])}}}),[["__scopeId","data-v-28840f02"]]);export{v as P};

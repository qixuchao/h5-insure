import{_ as e,d as a,aE as s,r as o,ao as l,b as t,c as n,g as c,f as u,C as d,l as r,T as m}from"./index-822014a5.js";const i={class:"com-fixed-button"};var v=e(a({props:{buttonImage:{default:""}},setup(e){const a=e,{buttonImage:v}=s(a),p=o(!1),f=o(null),b=o(0),T=o(0),g=()=>{T.value=document.documentElement.scrollTop||document.body.scrollTop,T.value===b.value&&(p.value=!1)},x=()=>{document.onscroll=()=>{clearTimeout(f.value),f.value=setTimeout(g,800),b.value=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,p.value=!0}},w=()=>{m("历史计划书")};return l((()=>{window.addEventListener("scroll",x)})),(e,a)=>{const s=t("van-image");return n(),c("div",i,[u(s,{class:d(["fixed-box",p.value?"is-screen-fade-in":"is-screen-fade-out"]),src:r(v),onClick:w},null,8,["class","src"])])}}}),[["__scopeId","data-v-28840f02"]]);export{v as P};

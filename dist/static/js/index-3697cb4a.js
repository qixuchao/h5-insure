import{_ as e,d as a,aE as s,r as o,an as l,b as t,c as n,g as c,f as u,B as d,l as r,T as m}from"./index-5237a9f4.js";const i={class:"com-fixed-button"};var v=e(a({props:{buttonImage:{default:""}},setup(e){const a=e,{buttonImage:v}=s(a),f=o(!1),p=o(null),b=o(0),T=o(0),g=()=>{T.value=document.documentElement.scrollTop||document.body.scrollTop,T.value===b.value&&(f.value=!1)},x=()=>{document.onscroll=()=>{clearTimeout(p.value),p.value=setTimeout(g,800),b.value=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,f.value=!0}},w=()=>{m("历史计划书")};return l((()=>{window.addEventListener("scroll",x)})),(e,a)=>{const s=t("van-image");return n(),c("div",i,[u(s,{class:d(["fixed-box",f.value?"is-screen-fade-in":"is-screen-fade-out"]),src:r(v),onClick:w},null,8,["class","src"])])}}}),[["__scopeId","data-v-28840f02"]]);export{v as P};

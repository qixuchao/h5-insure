import{h as e,v as o,r as s,o as a,k as l,l as t,y as n,Q as c,J as u,A as r,T as d}from"./vendor-0381d15c.js";import{_ as m}from"./index-e427a2b7.js";const i={class:"com-fixed-button"};var v=m(e({props:{buttonImage:{default:""}},setup(e){const m=e,{buttonImage:v}=o(m),p=s(!1),f=s(null),b=s(0),T=s(0),x=()=>{T.value=document.documentElement.scrollTop||document.body.scrollTop,T.value===b.value&&(p.value=!1)},g=()=>{document.onscroll=()=>{clearTimeout(f.value),f.value=setTimeout(x,800),b.value=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,p.value=!0}},w=()=>{d("历史计划书")};return a((()=>{window.addEventListener("scroll",g)})),(e,o)=>{const s=l("van-image");return t(),n("div",i,[c(s,{class:u(["fixed-box",p.value?"is-screen-fade-in":"is-screen-fade-out"]),src:r(v),onClick:w},null,8,["class","src"])])}}}),[["__scopeId","data-v-28840f02"]]);export{v as P};

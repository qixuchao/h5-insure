import{h as e,v as o,r as s,o as a,k as l,l as t,y as n,Q as c,J as u,A as d,T as r}from"./vendor-d6fdc679.js";import{_ as m}from"./index-ed1d5702.js";const i={class:"com-fixed-button"};var v=m(e({props:{buttonImage:{default:""}},setup(e){const m=e,{buttonImage:v}=o(m),p=s(!1),f=s(null),T=s(0),b=s(0),x=()=>{b.value=document.documentElement.scrollTop||document.body.scrollTop,b.value===T.value&&(p.value=!1)},g=()=>{document.onscroll=()=>{clearTimeout(f.value),f.value=setTimeout(x,800),T.value=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,p.value=!0}},w=()=>{r("历史计划书")};return a((()=>{window.addEventListener("scroll",g)})),(e,o)=>{const s=l("van-image");return t(),n("div",i,[c(s,{class:u(["fixed-box",p.value?"is-screen-fade-in":"is-screen-fade-out"]),src:d(v),onClick:w},null,8,["class","src"])])}}}),[["__scopeId","data-v-28840f02"]]);export{v as P};

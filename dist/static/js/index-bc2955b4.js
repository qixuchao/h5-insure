import{d as e,aC as o,r as s,o as a,ca as l,b as t,c as n,e as c,a0 as u,f as d,ag as r}from"./index-d82845c1.js";const m={class:"com-fixed-button"};var i=r(e({__name:"index",props:{buttonImage:{default:""}},setup(e){const r=e,{buttonImage:i}=o(r),v=s(!1),p=s(null),f=s(0),b=s(0),x=()=>{b.value=document.documentElement.scrollTop||document.body.scrollTop,b.value===f.value&&(v.value=!1)},T=()=>{document.onscroll=()=>{clearTimeout(p.value),p.value=setTimeout(x,800),f.value=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,v.value=!0}},g=()=>{};return a((()=>{window.addEventListener("scroll",T)})),(e,o)=>{const s=l;return t(),n("div",m,[c(s,{class:u(["fixed-box",d(v)?"is-screen-fade-in":"is-screen-fade-out"]),src:d(i),onClick:g},null,8,["class","src"])])}}}),[["__scopeId","data-v-466d5946"]]);export{i as P};

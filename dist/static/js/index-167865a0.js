import{G as e,d as o,an as s,r as a,o as l,a6 as n,b as t,c,e as u,F as d,f as r}from"./index-62040edb.js";const m={class:"com-fixed-button"};var i=e(o({__name:"index",props:{buttonImage:{default:""}},setup(e){const o=e,{buttonImage:i}=s(o),v=a(!1),p=a(null),f=a(0),b=a(0),x=()=>{b.value=document.documentElement.scrollTop||document.body.scrollTop,b.value===f.value&&(v.value=!1)},T=()=>{document.onscroll=()=>{clearTimeout(p.value),p.value=setTimeout(x,800),f.value=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,v.value=!0}},w=()=>{};return l((()=>{window.addEventListener("scroll",T)})),(e,o)=>{const s=n;return t(),c("div",m,[u(s,{class:d(["fixed-box",r(v)?"is-screen-fade-in":"is-screen-fade-out"]),src:r(i),onClick:w},null,8,["class","src"])])}}}),[["__scopeId","data-v-466d5946"]]);export{i as P};

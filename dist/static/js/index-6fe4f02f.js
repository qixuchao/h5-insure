import{d as e,t as o,j as s,aE as a,o as t,c as l,b as n,n as c,u,_ as d,I as r}from"./index-412561aa.js";const m={class:"com-fixed-button"};var i=d(e({__name:"index",props:{buttonImage:{default:""}},setup(e){const d=e,{buttonImage:i}=o(d),v=s(!1),p=s(null),f=s(0),b=s(0),x=()=>{b.value=document.documentElement.scrollTop||document.body.scrollTop,b.value===f.value&&(v.value=!1)},T=()=>{document.onscroll=()=>{clearTimeout(p.value),p.value=setTimeout(x,800),f.value=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,v.value=!0}},_=()=>{};return a((()=>{window.addEventListener("scroll",T)})),(e,o)=>{const s=r;return t(),l("div",m,[n(s,{class:c(["fixed-box",u(v)?"is-screen-fade-in":"is-screen-fade-out"]),src:u(i),onClick:_},null,8,["class","src"])])}}}),[["__scopeId","data-v-466d5946"]]);export{i as P};

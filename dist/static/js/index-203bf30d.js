import{_ as e,d as o,t as s,i as a,av as t,o as l,c as n,b as c,p as u,u as d,I as r}from"./index-27d17939.js";const m={class:"com-fixed-button"};var i=e(o({__name:"index",props:{buttonImage:{default:""}},setup(e){const o=e,{buttonImage:i}=s(o),v=a(!1),p=a(null),f=a(0),b=a(0),x=()=>{b.value=document.documentElement.scrollTop||document.body.scrollTop,b.value===f.value&&(v.value=!1)},T=()=>{document.onscroll=()=>{clearTimeout(p.value),p.value=setTimeout(x,800),f.value=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,v.value=!0}},_=()=>{};return t((()=>{window.addEventListener("scroll",T)})),(e,o)=>{const s=r;return l(),n("div",m,[c(s,{class:u(["fixed-box",d(v)?"is-screen-fade-in":"is-screen-fade-out"]),src:d(i),onClick:_},null,8,["class","src"])])}}}),[["__scopeId","data-v-466d5946"]]);export{i as P};

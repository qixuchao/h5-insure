import{_ as e,d as s,bp as o,r as a,aE as l,I as t,c as n,h as c,f as u,L as d,g as r,T as m}from"./index-589cf96a.js";const i={class:"com-fixed-button"};var p=e(s({__name:"index",props:{buttonImage:{default:""}},setup(e){const s=e,{buttonImage:p}=o(s),v=a(!1),f=a(null),b=a(0),T=a(0),x=()=>{T.value=document.documentElement.scrollTop||document.body.scrollTop,T.value===b.value&&(v.value=!1)},_=()=>{document.onscroll=()=>{clearTimeout(f.value),f.value=setTimeout(x,800),b.value=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,v.value=!0}},g=()=>{m("历史计划书")};return l((()=>{window.addEventListener("scroll",_)})),(e,s)=>{const o=t;return n(),c("div",i,[u(o,{class:d(["fixed-box",r(v)?"is-screen-fade-in":"is-screen-fade-out"]),src:r(p),onClick:g},null,8,["class","src"])])}}}),[["__scopeId","data-v-1e87d274"]]);export{p as P};

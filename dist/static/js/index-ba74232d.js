import{g as m,x as _,E as e,o as p,r as f,j as v,n as x,p as T,L as g,A as E,T as b}from"./vendor-9d7eb2ed.js";import{_ as B}from"./index-c5d88440.js";const C={class:"com-fixed-button"},k=m({props:{buttonImage:{default:""}},setup(c){const a=c,{buttonImage:l}=_(a),o=e(!1),s=e(null),t=e(0),n=e(0),r=()=>{n.value=document.documentElement.scrollTop||document.body.scrollTop,n.value===t.value&&(o.value=!1)},u=()=>{document.onscroll=()=>{clearTimeout(s.value),s.value=setTimeout(r,800),t.value=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,o.value=!0}},d=()=>{b("\u5386\u53F2\u8BA1\u5212\u4E66")};return p(()=>{window.addEventListener("scroll",u)}),(w,y)=>{const i=f("van-image");return v(),x("div",C,[T(i,{class:g(["fixed-box",o.value?"is-screen-fade-in":"is-screen-fade-out"]),src:E(l),onClick:d},null,8,["class","src"])])}}});var F=B(k,[["__scopeId","data-v-28840f02"]]);export{F as P};

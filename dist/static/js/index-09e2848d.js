import{i as m,z as _,r as e,o as p,l as f,m as v,s as x,t as T,M as b,C as g,T as B}from"./vendor-87894311.js";import{_ as C}from"./index-dd334c46.js";const E={class:"com-fixed-button"},k=m({props:{buttonImage:{default:""}},setup(c){const a=c,{buttonImage:l}=_(a),o=e(!1),s=e(null),t=e(0),n=e(0),r=()=>{n.value=document.documentElement.scrollTop||document.body.scrollTop,n.value===t.value&&(o.value=!1)},u=()=>{document.onscroll=()=>{clearTimeout(s.value),s.value=setTimeout(r,800),t.value=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,o.value=!0}},d=()=>{B("\u5386\u53F2\u8BA1\u5212\u4E66")};return p(()=>{window.addEventListener("scroll",u)}),(w,y)=>{const i=f("van-image");return v(),x("div",E,[T(i,{class:b(["fixed-box",o.value?"is-screen-fade-in":"is-screen-fade-out"]),src:g(l),onClick:d},null,8,["class","src"])])}}});var F=C(k,[["__scopeId","data-v-28840f02"]]);export{F as P};

import{h as m,y as _,G as e,o as p,r as f,k as v,p as x,s as T,M as B,B as b,T as g}from"./vendor-d6b13173.js";import{_ as E}from"./index-1d5e84df.js";const k={class:"com-fixed-button"},y=m({props:{buttonImage:{default:""}},setup(c){const a=c,{buttonImage:l}=_(a),o=e(!1),s=e(null),t=e(0),n=e(0),r=()=>{n.value=document.documentElement.scrollTop||document.body.scrollTop,n.value===t.value&&(o.value=!1)},u=()=>{document.onscroll=()=>{clearTimeout(s.value),s.value=setTimeout(r,800),t.value=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,o.value=!0}},d=()=>{g("\u5386\u53F2\u8BA1\u5212\u4E66")};return p(()=>{window.addEventListener("scroll",u)}),(C,h)=>{const i=f("van-image");return v(),x("div",k,[T(i,{class:B(["fixed-box",o.value?"is-screen-fade-in":"is-screen-fade-out"]),src:b(l),onClick:d},null,8,["class","src"])])}}});var F=E(y,[["__scopeId","data-v-28840f02"]]);export{F as P};

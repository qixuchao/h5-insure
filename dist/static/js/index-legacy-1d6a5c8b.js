!function(){var e=document.createElement("style");e.innerHTML=".fixed-box[data-v-28840f02]{position:fixed;bottom:5.69333rem;right:.28rem;width:1.62667rem}.is-screen-fade-in[data-v-28840f02]{right:-.94667rem;transition:all .5s}.is-screen-fade-out[data-v-28840f02]{right:.28rem;transition:all .5s}\n",document.head.appendChild(e),System.register(["./vendor-legacy-c308286a.js","./index-legacy-557f644f.js"],(function(e){"use strict";var t,n,o,s,a,l,c,r,i,u,d,m;return{setters:[function(e){t=e.i,n=e.z,o=e.r,s=e.o,a=e.l,l=e.m,c=e.s,r=e.t,i=e.M,u=e.C,d=e.T},function(e){m=e._}],execute:function(){const f={class:"com-fixed-button"};e("P",m(t({props:{buttonImage:{default:""}},setup(e){const t=e,{buttonImage:m}=n(t),v=o(!1),p=o(null),g=o(0),b=o(0),x=()=>{b.value=document.documentElement.scrollTop||document.body.scrollTop,b.value===g.value&&(v.value=!1)},T=()=>{document.onscroll=()=>{clearTimeout(p.value),p.value=setTimeout(x,800),g.value=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,v.value=!0}},h=()=>{d("历史计划书")};return s((()=>{window.addEventListener("scroll",T)})),(e,t)=>{const n=a("van-image");return l(),c("div",f,[r(n,{class:i(["fixed-box",v.value?"is-screen-fade-in":"is-screen-fade-out"]),src:u(m),onClick:h},null,8,["class","src"])])}}}),[["__scopeId","data-v-28840f02"]]))}}}))}();

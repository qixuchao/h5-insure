import{B as e,a2 as a,d5 as l,J as s,R as n,d as t,j as r,a6 as d,k as i,d6 as o,E as u,d7 as v,V as c,b,M as p,d8 as f,d9 as g,a8 as m,bK as x,aL as y,aM as h,O as k}from"./index-f01d947b.js";import{a as j}from"./index-54383ea9.js";const[B,L]=e("collapse-item"),R=["icon","title","value","label","right-icon"];const z=k(t({name:B,props:a({},l,{name:s,isLink:n,disabled:Boolean,readonly:Boolean,lazyRender:n}),setup(e,{slots:a}){const s=r(),n=r(),{parent:t,index:k}=d(j);if(!t)return;const B=i((()=>{var a;return null!=(a=e.name)?a:k.value})),z=i((()=>t.isExpanded(B.value))),C=r(z.value),E=o((()=>C.value||!e.lazyRender)),M=()=>{z.value?s.value&&(s.value.style.height=""):C.value=!1};u(z,((e,a)=>{if(null===a)return;e&&(C.value=!0);(e?p:f)((()=>{if(!n.value||!s.value)return;const{offsetHeight:a}=n.value;if(a){const l=`${a}px`;s.value.style.height=e?"0":l,v((()=>{s.value&&(s.value.style.height=e?l:"0")}))}else M()}))}));const O=(e=!z.value)=>{t.toggle(B.value,e)},w=()=>{e.disabled||e.readonly||O()},H=()=>{const{border:s,disabled:n,readonly:t}=e,r=g(e,Object.keys(l));return t&&(r.isLink=!1),(n||t)&&(r.clickable=!1),b(x,m({role:"button",class:L("title",{disabled:n,expanded:z.value,borderless:!s}),"aria-expanded":String(z.value),onClick:w},r),g(a,R))},J=E((()=>{var e;return y(b("div",{ref:s,class:L("wrapper"),onTransitionend:M},[b("div",{ref:n,class:L("content")},[null==(e=a.default)?void 0:e.call(a)])]),[[h,C.value]])}));return c({toggle:O,expanded:z,itemName:B}),()=>b("div",{class:[L({border:k.value&&e.border})]},[H(),J()])}}));export{z as C};

import{v as e,X as a,c_ as l,C as s,K as n,d as t,j as r,cj as i,k as o,c$ as d,z as u,d0 as v,Q as c,b,E as p,d1 as f,$ as g,a0 as m,bx as x,V as y,W as h,H as k}from"./index-1eabcd9c.js";import{a as j}from"./index-4ffb00f4.js";const[z,C]=e("collapse-item"),$=["icon","title","value","label","right-icon"];const B=k(t({name:z,props:a({},l,{name:s,isLink:n,disabled:Boolean,readonly:Boolean,lazyRender:n}),setup(e,{slots:a}){const s=r(),n=r(),{parent:t,index:k}=i(j);if(!t)return;const z=o((()=>{var a;return null!=(a=e.name)?a:k.value})),B=o((()=>t.isExpanded(z.value))),E=r(B.value),H=d((()=>E.value||!e.lazyRender)),L=()=>{B.value?s.value&&(s.value.style.height=""):E.value=!1};u(B,((e,a)=>{if(null===a)return;e&&(E.value=!0);(e?p:f)((()=>{if(!n.value||!s.value)return;const{offsetHeight:a}=n.value;if(a){const l=`${a}px`;s.value.style.height=e?"0":l,v((()=>{s.value&&(s.value.style.height=e?l:"0")}))}else L()}))}));const R=(e=!B.value)=>{t.toggle(z.value,e)},w=()=>{e.disabled||e.readonly||R()},K=()=>{const{border:s,disabled:n,readonly:t}=e,r=g(e,Object.keys(l));return t&&(r.isLink=!1),(n||t)&&(r.clickable=!1),b(x,m({role:"button",class:C("title",{disabled:n,expanded:B.value,borderless:!s}),"aria-expanded":String(B.value),onClick:w},r),g(a,$))},N=H((()=>{var e;return y(b("div",{ref:s,class:C("wrapper"),onTransitionend:L},[b("div",{ref:n,class:C("content")},[null==(e=a.default)?void 0:e.call(a)])]),[[h,E.value]])}));return c({toggle:R,expanded:B,itemName:z}),()=>b("div",{class:[C({border:k.value&&e.border})]},[K(),N()])}}));export{B as C};

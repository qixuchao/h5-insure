import{aA as e,bL as a,c3 as l,aH as s,aG as n,d as r,r as t,c4 as i,K as o,c5 as d,Q as u,c6 as v,bY as c,i as b,Z as p,c7 as f,bQ as g,aw as m,av as x,ab as y,an as h,aO as k}from"./index-27dbf893.js";import{a as j}from"./index-95928a56.js";const[L,w]=e("collapse-item"),z=["icon","title","value","label","right-icon"];const B=k(r({name:L,props:a({},l,{name:s,isLink:n,disabled:Boolean,readonly:Boolean,lazyRender:n}),setup(e,{slots:a}){const s=t(),n=t(),{parent:r,index:k}=i(j);if(!r)return;const L=o((()=>{var a;return null!=(a=e.name)?a:k.value})),B=o((()=>r.isExpanded(L.value))),C=t(B.value),H=d((()=>C.value||!e.lazyRender)),O=()=>{B.value?s.value&&(s.value.style.height=""):C.value=!1};u(B,((e,a)=>{if(null===a)return;e&&(C.value=!0);(e?p:f)((()=>{if(!n.value||!s.value)return;const{offsetHeight:a}=n.value;if(a){const l=`${a}px`;s.value.style.height=e?"0":l,v((()=>{s.value&&(s.value.style.height=e?l:"0")}))}else O()}))}));const Q=(e=!B.value)=>{r.toggle(L.value,e)},R=()=>{e.disabled||e.readonly||Q()},A=()=>{const{border:s,disabled:n,readonly:r}=e,t=g(e,Object.keys(l));return r&&(t.isLink=!1),(n||r)&&(t.clickable=!1),b(x,m({role:"button",class:w("title",{disabled:n,expanded:B.value,borderless:!s}),"aria-expanded":String(B.value),onClick:R},t),g(a,z))},E=H((()=>{var e;return y(b("div",{ref:s,class:w("wrapper"),onTransitionend:O},[b("div",{ref:n,class:w("content")},[null==(e=a.default)?void 0:e.call(a)])]),[[h,C.value]])}));return c({toggle:Q,expanded:B,itemName:L}),()=>b("div",{class:[w({border:k.value&&e.border})]},[A(),E()])}}));export{B as C};

import{aA as a,bL as e,c3 as l,aH as s,aG as n,d as r,r as t,c4 as i,K as o,c5 as d,Q as u,c6 as v,bY as c,i as b,Z as p,c7 as f,bQ as g,aw as m,av as x,ab as y,an as h,aO as k}from"./index-14b87a0a.js";import{a as j}from"./index-33acebcf.js";const[L,w]=a("collapse-item"),z=["icon","title","value","label","right-icon"];const B=k(r({name:L,props:e({},l,{name:s,isLink:n,disabled:Boolean,readonly:Boolean,lazyRender:n}),setup(a,{slots:e}){const s=t(),n=t(),{parent:r,index:k}=i(j);if(!r)return;const L=o((()=>{var e;return null!=(e=a.name)?e:k.value})),B=o((()=>r.isExpanded(L.value))),C=t(B.value),H=d((()=>C.value||!a.lazyRender)),O=()=>{B.value?s.value&&(s.value.style.height=""):C.value=!1};u(B,((a,e)=>{if(null===e)return;a&&(C.value=!0);(a?p:f)((()=>{if(!n.value||!s.value)return;const{offsetHeight:e}=n.value;if(e){const l=`${e}px`;s.value.style.height=a?"0":l,v((()=>{s.value&&(s.value.style.height=a?l:"0")}))}else O()}))}));const Q=(a=!B.value)=>{r.toggle(L.value,a)},R=()=>{a.disabled||a.readonly||Q()},A=()=>{const{border:s,disabled:n,readonly:r}=a,t=g(a,Object.keys(l));return r&&(t.isLink=!1),(n||r)&&(t.clickable=!1),b(x,m({role:"button",class:w("title",{disabled:n,expanded:B.value,borderless:!s}),"aria-expanded":String(B.value),onClick:R},t),g(e,z))},E=H((()=>{var a;return y(b("div",{ref:s,class:w("wrapper"),onTransitionend:O},[b("div",{ref:n,class:w("content")},[null==(a=e.default)?void 0:a.call(e)])]),[[h,C.value]])}));return c({toggle:Q,expanded:B,itemName:L}),()=>b("div",{class:[w({border:k.value&&a.border})]},[A(),E()])}}));export{B as C};

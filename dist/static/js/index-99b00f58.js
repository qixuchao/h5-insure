import{aw as a,aX as e,bI as l,az as s,aZ as n,d as r,r as t,bJ as i,E as o,bK as d,an as u,bL as v,bw as b,f as c,b6 as p,bM as f,b2 as g,b1 as m,C as x,A as y,a4 as h,aC as k}from"./index-a4b875ae.js";import{a as C}from"./index-a92860ca.js";const[j,w]=a("collapse-item"),z=["icon","title","value","label","right-icon"];const L=k(r({name:j,props:e({},l,{name:s,isLink:n,disabled:Boolean,readonly:Boolean,lazyRender:n}),setup(a,{slots:e}){const s=t(),n=t(),{parent:r,index:k}=i(C);if(!r)return;const j=o((()=>{var e;return null!=(e=a.name)?e:k.value})),L=o((()=>r.isExpanded(j.value))),B=t(L.value),E=d((()=>B.value||!a.lazyRender)),R=()=>{L.value?s.value&&(s.value.style.height=""):B.value=!1};u(L,((a,e)=>{if(null===e)return;a&&(B.value=!0);(a?p:f)((()=>{if(!n.value||!s.value)return;const{offsetHeight:e}=n.value;if(e){const l=`${e}px`;s.value.style.height=a?"0":l,v((()=>{s.value&&(s.value.style.height=a?l:"0")}))}else R()}))}));const A=(a=!L.value)=>{r.toggle(j.value,a)},H=()=>{a.disabled||a.readonly||A()},I=()=>{const{border:s,disabled:n,readonly:r}=a,t=g(a,Object.keys(l));return r&&(t.isLink=!1),(n||r)&&(t.clickable=!1),c(x,m({role:"button",class:w("title",{disabled:n,expanded:L.value,borderless:!s}),"aria-expanded":String(L.value),onClick:H},t),g(e,z))},J=E((()=>{var a;return y(c("div",{ref:s,class:w("wrapper"),onTransitionend:R},[c("div",{ref:n,class:w("content")},[null==(a=e.default)?void 0:a.call(e)])]),[[h,B.value]])}));return b({toggle:A,expanded:L,itemName:j}),()=>c("div",{class:[w({border:k.value&&a.border})]},[I(),J()])}}));export{L as C};

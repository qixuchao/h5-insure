import{v as e,X as a,cz as l,C as s,K as n,d as t,j as r,c6 as i,k as o,cA as d,z as u,cB as v,Q as c,b,E as p,cC as f,$ as g,a0 as m,bp as x,V as y,W as h,H as k}from"./index-6db00c9c.js";import{a as j}from"./index-a29b8ded.js";const[z,C]=e("collapse-item"),B=["icon","title","value","label","right-icon"];const E=k(t({name:z,props:a({},l,{name:s,isLink:n,disabled:Boolean,readonly:Boolean,lazyRender:n}),setup(e,{slots:a}){const s=r(),n=r(),{parent:t,index:k}=i(j);if(!t)return;const z=o((()=>{var a;return null!=(a=e.name)?a:k.value})),E=o((()=>t.isExpanded(z.value))),H=r(E.value),L=d((()=>H.value||!e.lazyRender)),R=()=>{E.value?s.value&&(s.value.style.height=""):H.value=!1};u(E,((e,a)=>{if(null===a)return;e&&(H.value=!0);(e?p:f)((()=>{if(!n.value||!s.value)return;const{offsetHeight:a}=n.value;if(a){const l=`${a}px`;s.value.style.height=e?"0":l,v((()=>{s.value&&(s.value.style.height=e?l:"0")}))}else R()}))}));const $=(e=!E.value)=>{t.toggle(z.value,e)},w=()=>{e.disabled||e.readonly||$()},A=()=>{const{border:s,disabled:n,readonly:t}=e,r=g(e,Object.keys(l));return t&&(r.isLink=!1),(n||t)&&(r.clickable=!1),b(x,m({role:"button",class:C("title",{disabled:n,expanded:E.value,borderless:!s}),"aria-expanded":String(E.value),onClick:w},r),g(a,B))},K=L((()=>{var e;return y(b("div",{ref:s,class:C("wrapper"),onTransitionend:R},[b("div",{ref:n,class:C("content")},[null==(e=a.default)?void 0:e.call(a)])]),[[h,H.value]])}));return c({toggle:$,expanded:E,itemName:z}),()=>b("div",{class:[C({border:k.value&&e.border})]},[A(),K()])}}));export{E as C};

import{v as e,X as a,cK as l,C as s,K as n,d as t,j as r,ce as i,k as o,cL as d,z as u,cM as v,Q as c,b as p,E as b,cN as f,$ as g,a0 as m,bt as x,V as y,W as h,H as k}from"./index-4f878428.js";import{a as j}from"./index-9d595f29.js";const[z,C]=e("collapse-item"),L=["icon","title","value","label","right-icon"];const B=k(t({name:z,props:a({},l,{name:s,isLink:n,disabled:Boolean,readonly:Boolean,lazyRender:n}),setup(e,{slots:a}){const s=r(),n=r(),{parent:t,index:k}=i(j);if(!t)return;const z=o((()=>{var a;return null!=(a=e.name)?a:k.value})),B=o((()=>t.isExpanded(z.value))),E=r(B.value),H=d((()=>E.value||!e.lazyRender)),K=()=>{B.value?s.value&&(s.value.style.height=""):E.value=!1};u(B,((e,a)=>{if(null===a)return;e&&(E.value=!0);(e?b:f)((()=>{if(!n.value||!s.value)return;const{offsetHeight:a}=n.value;if(a){const l=`${a}px`;s.value.style.height=e?"0":l,v((()=>{s.value&&(s.value.style.height=e?l:"0")}))}else K()}))}));const N=(e=!B.value)=>{t.toggle(z.value,e)},R=()=>{e.disabled||e.readonly||N()},$=()=>{const{border:s,disabled:n,readonly:t}=e,r=g(e,Object.keys(l));return t&&(r.isLink=!1),(n||t)&&(r.clickable=!1),p(x,m({role:"button",class:C("title",{disabled:n,expanded:B.value,borderless:!s}),"aria-expanded":String(B.value),onClick:R},r),g(a,L))},w=H((()=>{var e;return y(p("div",{ref:s,class:C("wrapper"),onTransitionend:K},[p("div",{ref:n,class:C("content")},[null==(e=a.default)?void 0:e.call(a)])]),[[h,E.value]])}));return c({toggle:N,expanded:B,itemName:z}),()=>p("div",{class:[C({border:k.value&&e.border})]},[$(),w()])}}));export{B as C};

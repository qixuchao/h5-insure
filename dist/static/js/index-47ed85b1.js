import{B as e,a2 as a,cW as l,J as s,R as n,d as t,j as r,a6 as i,k as o,cX as d,E as u,cY as v,V as c,b,M as p,cZ as f,c_ as g,a8 as m,by as y,aV as x,aW as h,O as k}from"./index-b49e6838.js";import{a as j}from"./index-3221dbc3.js";const[B,R]=e("collapse-item"),z=["icon","title","value","label","right-icon"];const C=k(t({name:B,props:a({},l,{name:s,isLink:n,disabled:Boolean,readonly:Boolean,lazyRender:n}),setup(e,{slots:a}){const s=r(),n=r(),{parent:t,index:k}=i(j);if(!t)return;const B=o((()=>{var a;return null!=(a=e.name)?a:k.value})),C=o((()=>t.isExpanded(B.value))),E=r(C.value),L=d((()=>E.value||!e.lazyRender)),O=()=>{C.value?s.value&&(s.value.style.height=""):E.value=!1};u(C,((e,a)=>{if(null===a)return;e&&(E.value=!0);(e?p:f)((()=>{if(!n.value||!s.value)return;const{offsetHeight:a}=n.value;if(a){const l=`${a}px`;s.value.style.height=e?"0":l,v((()=>{s.value&&(s.value.style.height=e?l:"0")}))}else O()}))}));const V=(e=!C.value)=>{t.toggle(B.value,e)},W=()=>{e.disabled||e.readonly||V()},w=()=>{const{border:s,disabled:n,readonly:t}=e,r=g(e,Object.keys(l));return t&&(r.isLink=!1),(n||t)&&(r.clickable=!1),b(y,m({role:"button",class:R("title",{disabled:n,expanded:C.value,borderless:!s}),"aria-expanded":String(C.value),onClick:W},r),g(a,z))},H=L((()=>{var e;return x(b("div",{ref:s,class:R("wrapper"),onTransitionend:O},[b("div",{ref:n,class:R("content")},[null==(e=a.default)?void 0:e.call(a)])]),[[h,E.value]])}));return c({toggle:V,expanded:C,itemName:B}),()=>b("div",{class:[R({border:k.value&&e.border})]},[w(),H()])}}));export{C};

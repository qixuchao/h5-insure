import{B as e,a2 as a,d6 as l,J as s,R as n,d as t,j as r,a6 as d,k as i,d7 as o,E as u,d8 as v,V as c,b as p,M as b,d9 as f,da as g,a8 as m,bR as x,aU as y,aV as h,O as k}from"./index-fef381c5.js";import{a as j}from"./index-2307d65a.js";const[R,B]=e("collapse-item"),z=["icon","title","value","label","right-icon"];const C=k(t({name:R,props:a({},l,{name:s,isLink:n,disabled:Boolean,readonly:Boolean,lazyRender:n}),setup(e,{slots:a}){const s=r(),n=r(),{parent:t,index:k}=d(j);if(!t)return;const R=i((()=>{var a;return null!=(a=e.name)?a:k.value})),C=i((()=>t.isExpanded(R.value))),E=r(C.value),L=o((()=>E.value||!e.lazyRender)),O=()=>{C.value?s.value&&(s.value.style.height=""):E.value=!1};u(C,((e,a)=>{if(null===a)return;e&&(E.value=!0);(e?b:f)((()=>{if(!n.value||!s.value)return;const{offsetHeight:a}=n.value;if(a){const l=`${a}px`;s.value.style.height=e?"0":l,v((()=>{s.value&&(s.value.style.height=e?l:"0")}))}else O()}))}));const V=(e=!C.value)=>{t.toggle(R.value,e)},w=()=>{e.disabled||e.readonly||V()},H=()=>{const{border:s,disabled:n,readonly:t}=e,r=g(e,Object.keys(l));return t&&(r.isLink=!1),(n||t)&&(r.clickable=!1),p(x,m({role:"button",class:B("title",{disabled:n,expanded:C.value,borderless:!s}),"aria-expanded":String(C.value),onClick:w},r),g(a,z))},J=L((()=>{var e;return y(p("div",{ref:s,class:B("wrapper"),onTransitionend:O},[p("div",{ref:n,class:B("content")},[null==(e=a.default)?void 0:e.call(a)])]),[[h,E.value]])}));return c({toggle:V,expanded:C,itemName:R}),()=>p("div",{class:[B({border:k.value&&e.border})]},[H(),J()])}}));export{C};

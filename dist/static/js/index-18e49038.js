import{v as e,X as a,cj as l,C as s,K as n,d as t,i as r,bo as i,j as o,ck as d,z as u,cl as v,Q as c,b as p,E as b,cm as f,$ as m,a0 as g,ap as x,V as y,W as h,H as k}from"./index-8adcf781.js";import{a as j}from"./index-b89ee569.js";const[z,C]=e("collapse-item"),B=["icon","title","value","label","right-icon"];const E=k(t({name:z,props:a({},l,{name:s,isLink:n,disabled:Boolean,readonly:Boolean,lazyRender:n}),setup(e,{slots:a}){const s=r(),n=r(),{parent:t,index:k}=i(j);if(!t)return;const z=o((()=>{var a;return null!=(a=e.name)?a:k.value})),E=o((()=>t.isExpanded(z.value))),H=r(E.value),L=d((()=>H.value||!e.lazyRender)),R=()=>{E.value?s.value&&(s.value.style.height=""):H.value=!1};u(E,((e,a)=>{if(null===a)return;e&&(H.value=!0);(e?b:f)((()=>{if(!n.value||!s.value)return;const{offsetHeight:a}=n.value;if(a){const l=`${a}px`;s.value.style.height=e?"0":l,v((()=>{s.value&&(s.value.style.height=e?l:"0")}))}else R()}))}));const $=(e=!E.value)=>{t.toggle(z.value,e)},w=()=>{e.disabled||e.readonly||$()},K=()=>{const{border:s,disabled:n,readonly:t}=e,r=m(e,Object.keys(l));return t&&(r.isLink=!1),(n||t)&&(r.clickable=!1),p(x,g({role:"button",class:C("title",{disabled:n,expanded:E.value,borderless:!s}),"aria-expanded":String(E.value),onClick:w},r),m(a,B))},N=L((()=>{var e;return y(p("div",{ref:s,class:C("wrapper"),onTransitionend:R},[p("div",{ref:n,class:C("content")},[null==(e=a.default)?void 0:e.call(a)])]),[[h,H.value]])}));return c({toggle:$,expanded:E,itemName:z}),()=>p("div",{class:[C({border:k.value&&e.border})]},[K(),N()])}}));export{E as C};

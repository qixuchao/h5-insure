import{aw as e,bS as a,c9 as l,aE as s,aD as n,d as r,r as t,ca as i,L as o,cb as d,R as u,cc as c,c3 as v,i as b,$ as p,cd as f,bX as g,a9 as m,aT as x,ag as y,aA as h,aL as k}from"./index-c52adfe3.js";import{a as L}from"./index-f1c18b8b.js";const[j,R]=e("collapse-item"),w=["icon","title","value","label","right-icon"];const z=k(r({name:j,props:a({},l,{name:s,isLink:n,disabled:Boolean,readonly:Boolean,lazyRender:n}),setup(e,{slots:a}){const s=t(),n=t(),{parent:r,index:k}=i(L);if(!r)return;const j=o((()=>{var a;return null!=(a=e.name)?a:k.value})),z=o((()=>r.isExpanded(j.value))),B=t(z.value),C=d((()=>B.value||!e.lazyRender)),E=()=>{z.value?s.value&&(s.value.style.height=""):B.value=!1};u(z,((e,a)=>{if(null===a)return;e&&(B.value=!0);(e?p:f)((()=>{if(!n.value||!s.value)return;const{offsetHeight:a}=n.value;if(a){const l=`${a}px`;s.value.style.height=e?"0":l,c((()=>{s.value&&(s.value.style.height=e?l:"0")}))}else E()}))}));const S=(e=!z.value)=>{r.toggle(j.value,e)},T=()=>{e.disabled||e.readonly||S()},$=()=>{const{border:s,disabled:n,readonly:r}=e,t=g(e,Object.keys(l));return r&&(t.isLink=!1),(n||r)&&(t.clickable=!1),b(x,m({role:"button",class:R("title",{disabled:n,expanded:z.value,borderless:!s}),"aria-expanded":String(z.value),onClick:T},t),g(a,w))},A=C((()=>{var e;return y(b("div",{ref:s,class:R("wrapper"),onTransitionend:E},[b("div",{ref:n,class:R("content")},[null==(e=a.default)?void 0:e.call(a)])]),[[h,B.value]])}));return v({toggle:S,expanded:z,itemName:j}),()=>b("div",{class:[R({border:k.value&&e.border})]},[$(),A()])}}));export{z as C};

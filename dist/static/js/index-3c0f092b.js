import{ax as e,bS as a,c9 as l,aF as s,aE as n,d as r,r as t,ca as i,L as o,cb as d,R as u,cc as c,c3 as v,i as b,$ as p,cd as f,bX as g,aa as m,aV as x,ah as h,aB as y,aM as k}from"./index-1c56e4ee.js";import{a as j}from"./index-1c3ac3a4.js";const[B,L]=e("collapse-item"),R=["icon","title","value","label","right-icon"];const z=k(r({name:B,props:a({},l,{name:s,isLink:n,disabled:Boolean,readonly:Boolean,lazyRender:n}),setup(e,{slots:a}){const s=t(),n=t(),{parent:r,index:k}=i(j);if(!r)return;const B=o((()=>{var a;return null!=(a=e.name)?a:k.value})),z=o((()=>r.isExpanded(B.value))),C=t(z.value),E=d((()=>C.value||!e.lazyRender)),S=()=>{z.value?s.value&&(s.value.style.height=""):C.value=!1};u(z,((e,a)=>{if(null===a)return;e&&(C.value=!0);(e?p:f)((()=>{if(!n.value||!s.value)return;const{offsetHeight:a}=n.value;if(a){const l=`${a}px`;s.value.style.height=e?"0":l,c((()=>{s.value&&(s.value.style.height=e?l:"0")}))}else S()}))}));const $=(e=!z.value)=>{r.toggle(B.value,e)},w=()=>{e.disabled||e.readonly||$()},F=()=>{const{border:s,disabled:n,readonly:r}=e,t=g(e,Object.keys(l));return r&&(t.isLink=!1),(n||r)&&(t.clickable=!1),b(x,m({role:"button",class:L("title",{disabled:n,expanded:z.value,borderless:!s}),"aria-expanded":String(z.value),onClick:w},t),g(a,R))},H=E((()=>{var e;return h(b("div",{ref:s,class:L("wrapper"),onTransitionend:S},[b("div",{ref:n,class:L("content")},[null==(e=a.default)?void 0:e.call(a)])]),[[y,C.value]])}));return v({toggle:$,expanded:z,itemName:B}),()=>b("div",{class:[L({border:k.value&&e.border})]},[F(),H()])}}));export{z as C};

import{ax as a,bS as e,c9 as l,aF as s,aE as n,d as r,r as t,ca as i,L as o,cb as d,R as u,cc as c,c3 as v,i as b,$ as p,cd as f,bX as g,aa as m,aV as x,ah as h,aB as y,aM as k}from"./index-cfc9ba08.js";import{a as j}from"./index-1a414e63.js";const[B,L]=a("collapse-item"),R=["icon","title","value","label","right-icon"];const z=k(r({name:B,props:e({},l,{name:s,isLink:n,disabled:Boolean,readonly:Boolean,lazyRender:n}),setup(a,{slots:e}){const s=t(),n=t(),{parent:r,index:k}=i(j);if(!r)return;const B=o((()=>{var e;return null!=(e=a.name)?e:k.value})),z=o((()=>r.isExpanded(B.value))),C=t(z.value),E=d((()=>C.value||!a.lazyRender)),S=()=>{z.value?s.value&&(s.value.style.height=""):C.value=!1};u(z,((a,e)=>{if(null===e)return;a&&(C.value=!0);(a?p:f)((()=>{if(!n.value||!s.value)return;const{offsetHeight:e}=n.value;if(e){const l=`${e}px`;s.value.style.height=a?"0":l,c((()=>{s.value&&(s.value.style.height=a?l:"0")}))}else S()}))}));const $=(a=!z.value)=>{r.toggle(B.value,a)},w=()=>{a.disabled||a.readonly||$()},F=()=>{const{border:s,disabled:n,readonly:r}=a,t=g(a,Object.keys(l));return r&&(t.isLink=!1),(n||r)&&(t.clickable=!1),b(x,m({role:"button",class:L("title",{disabled:n,expanded:z.value,borderless:!s}),"aria-expanded":String(z.value),onClick:w},t),g(e,R))},H=E((()=>{var a;return h(b("div",{ref:s,class:L("wrapper"),onTransitionend:S},[b("div",{ref:n,class:L("content")},[null==(a=e.default)?void 0:a.call(e)])]),[[y,C.value]])}));return v({toggle:$,expanded:z,itemName:B}),()=>b("div",{class:[L({border:k.value&&a.border})]},[F(),H()])}}));export{z as C};

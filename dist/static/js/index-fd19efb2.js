import{av as e,aX as a,bI as l,ay as s,aZ as n,d as r,r as t,bJ as i,E as o,bK as d,am as u,bL as v,bw as c,f as b,b6 as p,bM as f,b2 as m,b1 as g,C as y,A as x,a4 as h,aB as k}from"./index-8dcf7554.js";import{a as j}from"./index-c00014f4.js";const[B,C]=e("collapse-item"),L=["icon","title","value","label","right-icon"];const w=k(r({name:B,props:a({},l,{name:s,isLink:n,disabled:Boolean,readonly:Boolean,lazyRender:n}),setup(e,{slots:a}){const s=t(),n=t(),{parent:r,index:k}=i(j);if(!r)return;const B=o((()=>{var a;return null!=(a=e.name)?a:k.value})),w=o((()=>r.isExpanded(B.value))),z=t(w.value),E=d((()=>z.value||!e.lazyRender)),R=()=>{w.value?s.value&&(s.value.style.height=""):z.value=!1};u(w,((e,a)=>{if(null===a)return;e&&(z.value=!0);(e?p:f)((()=>{if(!n.value||!s.value)return;const{offsetHeight:a}=n.value;if(a){const l=`${a}px`;s.value.style.height=e?"0":l,v((()=>{s.value&&(s.value.style.height=e?l:"0")}))}else R()}))}));const A=(e=!w.value)=>{r.toggle(B.value,e)},H=()=>{e.disabled||e.readonly||A()},I=()=>{const{border:s,disabled:n,readonly:r}=e,t=m(e,Object.keys(l));return r&&(t.isLink=!1),(n||r)&&(t.clickable=!1),b(y,g({role:"button",class:C("title",{disabled:n,expanded:w.value,borderless:!s}),"aria-expanded":String(w.value),onClick:H},t),m(a,L))},J=E((()=>{var e;return x(b("div",{ref:s,class:C("wrapper"),onTransitionend:R},[b("div",{ref:n,class:C("content")},[null==(e=a.default)?void 0:e.call(a)])]),[[h,z.value]])}));return c({toggle:A,expanded:w,itemName:B}),()=>b("div",{class:[C({border:k.value&&e.border})]},[I(),J()])}}));export{w as C};

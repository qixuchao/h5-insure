import{B as e,d as a,j as t,Y as o,Z as n,R as s,J as l,H as r,b as i,$ as c,a0 as d,a1 as u,O as v,a2 as p,a3 as m,a4 as f,a5 as b,a6 as x,k as g,a7 as h,a8 as C,a9 as B,aa as k}from"./index-8e0def42.js";const[y,P]=e("tabbar"),S={route:Boolean,fixed:s,border:s,zIndex:l,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:r(0),safeAreaInsetBottom:{type:Boolean,default:null}},A=Symbol(y);const I=v(a({name:y,props:S,emits:["change","update:modelValue"],setup(e,{emit:a,slots:s}){const l=t(),{linkChildren:r}=o(A),v=n(l,P),p=()=>{var a;return null!=(a=e.safeAreaInsetBottom)?a:e.fixed},m=()=>{var a;const{fixed:t,zIndex:o,border:n}=e;return i("div",{ref:l,role:"tablist",style:c(o),class:[P({fixed:t}),{[d]:n,"van-safe-area-bottom":p()}]},[null==(a=s.default)?void 0:a.call(s)])};return r({props:e,setActive:(t,o)=>{u(e.beforeChange,{args:[t],done(){a("update:modelValue",t),a("change",t),o()}})}}),()=>e.fixed&&e.placeholder?v(m):m()}})),[V,j]=e("tabbar-item");const $=v(a({name:V,props:p({},m,{dot:Boolean,icon:String,name:l,badge:l,badgeProps:Object,iconPrefix:String}),emits:["click"],setup(e,{emit:a,slots:t}){const o=f(),n=b().proxy,{parent:s,index:l}=x(A);if(!s)return;const r=g((()=>{var a;const{route:t,modelValue:o}=s.props;if(t&&"$route"in n){const{$route:a}=n,{to:t}=e,o=B(t)?t:{path:t};return!!a.matched.find((e=>{const a="path"in o&&o.path===e.path,t="name"in o&&o.name===e.name;return a||t}))}return(null!=(a=e.name)?a:l.value)===o})),c=t=>{var n;r.value||s.setActive(null!=(n=e.name)?n:l.value,o),a("click",t)},d=()=>t.icon?t.icon({active:r.value}):e.icon?i(k,{name:e.icon,classPrefix:e.iconPrefix},null):void 0;return()=>{var a;const{dot:o,badge:n}=e,{activeColor:l,inactiveColor:u}=s.props,v=r.value?l:u;return i("div",{role:"tab",class:j({active:r.value}),style:{color:v},tabindex:0,"aria-selected":r.value,onClick:c},[i(h,C({dot:o,class:j("icon"),content:n},e.badgeProps),{default:d}),i("div",{class:j("text")},[null==(a=t.default)?void 0:a.call(t,{active:r.value})])])}}}));export{$ as T,I as a};

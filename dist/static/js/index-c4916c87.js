import{B as a,d as e,j as t,Y as o,Z as n,R as s,J as l,H as r,b as i,$ as c,a0 as d,a1 as u,O as v,a2 as p,a3 as m,a4 as f,a5 as b,a6 as x,k as g,a7 as h,a8 as C,a9 as B,aa as k}from"./index-1028b15c.js";const[y,P]=a("tabbar"),S={route:Boolean,fixed:s,border:s,zIndex:l,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:r(0),safeAreaInsetBottom:{type:Boolean,default:null}},A=Symbol(y);const I=v(e({name:y,props:S,emits:["change","update:modelValue"],setup(a,{emit:e,slots:s}){const l=t(),{linkChildren:r}=o(A),v=n(l,P),p=()=>{var e;return null!=(e=a.safeAreaInsetBottom)?e:a.fixed},m=()=>{var e;const{fixed:t,zIndex:o,border:n}=a;return i("div",{ref:l,role:"tablist",style:c(o),class:[P({fixed:t}),{[d]:n,"van-safe-area-bottom":p()}]},[null==(e=s.default)?void 0:e.call(s)])};return r({props:a,setActive:(t,o)=>{u(a.beforeChange,{args:[t],done(){e("update:modelValue",t),e("change",t),o()}})}}),()=>a.fixed&&a.placeholder?v(m):m()}})),[V,j]=a("tabbar-item");const $=v(e({name:V,props:p({},m,{dot:Boolean,icon:String,name:l,badge:l,badgeProps:Object,iconPrefix:String}),emits:["click"],setup(a,{emit:e,slots:t}){const o=f(),n=b().proxy,{parent:s,index:l}=x(A);if(!s)return;const r=g((()=>{var e;const{route:t,modelValue:o}=s.props;if(t&&"$route"in n){const{$route:e}=n,{to:t}=a,o=B(t)?t:{path:t};return!!e.matched.find((a=>{const e="path"in o&&o.path===a.path,t="name"in o&&o.name===a.name;return e||t}))}return(null!=(e=a.name)?e:l.value)===o})),c=t=>{var n;r.value||s.setActive(null!=(n=a.name)?n:l.value,o),e("click",t)},d=()=>t.icon?t.icon({active:r.value}):a.icon?i(k,{name:a.icon,classPrefix:a.iconPrefix},null):void 0;return()=>{var e;const{dot:o,badge:n}=a,{activeColor:l,inactiveColor:u}=s.props,v=r.value?l:u;return i("div",{role:"tab",class:j({active:r.value}),style:{color:v},tabindex:0,"aria-selected":r.value,onClick:c},[i(h,C({dot:o,class:j("icon"),content:n},a.badgeProps),{default:d}),i("div",{class:j("text")},[null==(e=t.default)?void 0:e.call(t,{active:r.value})])])}}}));export{$ as T,I as a};

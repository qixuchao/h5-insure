import{B as s,a2 as a,dp as e,R as n,dq as t,Q as c,dr as o,d as l,b as i,a8 as d,da as r,cq as p,aa as u,bY as m,L as b,M as f,O as g}from"./index-fef381c5.js";const[v,k]=s("action-sheet"),x=a({},e,{title:String,round:n,actions:t(),closeIcon:c("cross"),closeable:n,cancelText:String,description:String,closeOnPopstate:n,closeOnClickAction:Boolean,safeAreaInsetBottom:n}),h=[...o,"round","closeOnPopstate","safeAreaInsetBottom"];const A=g(l({name:v,props:x,emits:["select","cancel","update:show"],setup(s,{slots:a,emit:e}){const n=s=>e("update:show",s),t=()=>{n(!1),e("cancel")},c=()=>{if(s.title)return i("div",{class:k("header")},[s.title,s.closeable&&i(u,{name:s.closeIcon,class:[k("close"),m],onClick:t},null)])},o=()=>{if(a.cancel||s.cancelText)return[i("div",{class:k("gap")},null),i("button",{type:"button",class:k("cancel"),onClick:t},[a.cancel?a.cancel():s.cancelText])]},l=(s,e)=>s.loading?i(b,{class:k("loading-icon")},null):a.action?a.action({action:s,index:e}):[i("span",{class:k("name")},[s.name]),s.subname&&i("div",{class:k("subname")},[s.subname])],g=(a,t)=>{const{color:c,loading:o,callback:d,disabled:r,className:p}=a;return i("button",{type:"button",style:{color:c},class:[k("item",{loading:o,disabled:r}),p],onClick:()=>{r||o||(d&&d(a),s.closeOnClickAction&&n(!1),f((()=>e("select",a,t))))}},[l(a,t)])},v=()=>{if(s.description||a.description){const e=a.description?a.description():s.description;return i("div",{class:k("description")},[e])}};return()=>i(p,d({class:k(),position:"bottom","onUpdate:show":n},r(s,h)),{default:()=>{var e;return[c(),v(),i("div",{class:k("content")},[s.actions.map(g),null==(e=a.default)?void 0:e.call(a)]),o()]}})}}));export{A};

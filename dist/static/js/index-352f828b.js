import{v as s,X as e,dg as a,K as t,dh as n,J as c,di as o,d as l,b as i,a0 as d,$ as r,ce as u,bt as p,bN as b,L as m,E as f,H as g}from"./index-9122cfbb.js";const[v,h]=s("action-sheet"),k=e({},a,{title:String,round:t,actions:n(),closeIcon:c("cross"),closeable:t,cancelText:String,description:String,closeOnPopstate:t,closeOnClickAction:Boolean,safeAreaInsetBottom:t}),x=[...o,"round","closeOnPopstate","safeAreaInsetBottom"];const A=g(l({name:v,props:k,emits:["select","cancel","update:show"],setup(s,{slots:e,emit:a}){const t=s=>a("update:show",s),n=()=>{t(!1),a("cancel")},c=()=>{if(s.title)return i("div",{class:h("header")},[s.title,s.closeable&&i(p,{name:s.closeIcon,class:[h("close"),b],onClick:n},null)])},o=()=>{if(e.cancel||s.cancelText)return[i("div",{class:h("gap")},null),i("button",{type:"button",class:h("cancel"),onClick:n},[e.cancel?e.cancel():s.cancelText])]},l=(s,a)=>s.loading?i(m,{class:h("loading-icon")},null):e.action?e.action({action:s,index:a}):[i("span",{class:h("name")},[s.name]),s.subname&&i("div",{class:h("subname")},[s.subname])],g=(e,n)=>{const{color:c,loading:o,callback:d,disabled:r,className:u}=e;return i("button",{type:"button",style:{color:c},class:[h("item",{loading:o,disabled:r}),u],onClick:()=>{r||o||(d&&d(e),s.closeOnClickAction&&t(!1),f((()=>a("select",e,n))))}},[l(e,n)])},v=()=>{if(s.description||e.description){const a=e.description?e.description():s.description;return i("div",{class:h("description")},[a])}};return()=>i(u,d({class:h(),position:"bottom","onUpdate:show":t},r(s,x)),{default:()=>{var a;return[c(),v(),i("div",{class:h("content")},[s.actions.map(g),null==(a=e.default)?void 0:a.call(e)]),o()]}})}}));export{A};

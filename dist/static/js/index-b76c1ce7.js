import{v as s,X as a,dh as e,K as t,di as c,J as n,dj as o,d as l,b as i,a0 as d,$ as r,cf as u,bt as p,bL as m,L as b,E as f,H as g}from"./index-0aeac8ce.js";const[v,h]=s("action-sheet"),k=a({},e,{title:String,round:t,actions:c(),closeIcon:n("cross"),closeable:t,cancelText:String,description:String,closeOnPopstate:t,closeOnClickAction:Boolean,safeAreaInsetBottom:t}),x=[...o,"round","closeOnPopstate","safeAreaInsetBottom"];const A=g(l({name:v,props:k,emits:["select","cancel","update:show"],setup(s,{slots:a,emit:e}){const t=s=>e("update:show",s),c=()=>{t(!1),e("cancel")},n=()=>{if(s.title)return i("div",{class:h("header")},[s.title,s.closeable&&i(p,{name:s.closeIcon,class:[h("close"),m],onClick:c},null)])},o=()=>{if(a.cancel||s.cancelText)return[i("div",{class:h("gap")},null),i("button",{type:"button",class:h("cancel"),onClick:c},[a.cancel?a.cancel():s.cancelText])]},l=(s,e)=>s.loading?i(b,{class:h("loading-icon")},null):a.action?a.action({action:s,index:e}):[i("span",{class:h("name")},[s.name]),s.subname&&i("div",{class:h("subname")},[s.subname])],g=(a,c)=>{const{color:n,loading:o,callback:d,disabled:r,className:u}=a;return i("button",{type:"button",style:{color:n},class:[h("item",{loading:o,disabled:r}),u],onClick:()=>{r||o||(d&&d(a),s.closeOnClickAction&&t(!1),f((()=>e("select",a,c))))}},[l(a,c)])},v=()=>{if(s.description||a.description){const e=a.description?a.description():s.description;return i("div",{class:h("description")},[e])}};return()=>i(u,d({class:h(),position:"bottom","onUpdate:show":t},r(s,x)),{default:()=>{var e;return[n(),v(),i("div",{class:h("content")},[s.actions.map(g),null==(e=a.default)?void 0:e.call(a)]),o()]}})}}));export{A};

import{ax as s,bS as a,bT as e,aE as n,bU as t,bV as c,bW as o,d as l,i,aa as r,bX as d,bE as u,aw as b,aC as p,bu as m,$ as f,aM as g}from"./index-e38eab4b.js";const[v,x]=s("action-sheet"),k=a({},e,{title:String,round:n,actions:t(),closeIcon:c("cross"),closeable:n,cancelText:String,description:String,closeOnPopstate:n,closeOnClickAction:Boolean,safeAreaInsetBottom:n}),C=[...o,"round","closeOnPopstate","safeAreaInsetBottom"];const h=g(l({name:v,props:k,emits:["select","cancel","update:show"],setup(s,{slots:a,emit:e}){const n=s=>e("update:show",s),t=()=>{n(!1),e("cancel")},c=()=>{if(s.title)return i("div",{class:x("header")},[s.title,s.closeable&&i(b,{name:s.closeIcon,class:[x("close"),p],onClick:t},null)])},o=()=>{if(a.cancel||s.cancelText)return[i("div",{class:x("gap")},null),i("button",{type:"button",class:x("cancel"),onClick:t},[a.cancel?a.cancel():s.cancelText])]},l=(s,e)=>s.loading?i(m,{class:x("loading-icon")},null):a.action?a.action({action:s,index:e}):[i("span",{class:x("name")},[s.name]),s.subname&&i("div",{class:x("subname")},[s.subname])],g=(a,t)=>{const{color:c,loading:o,callback:r,disabled:d,className:u}=a;return i("button",{type:"button",style:{color:c},class:[x("item",{loading:o,disabled:d}),u],onClick:()=>{d||o||(r&&r(a),s.closeOnClickAction&&n(!1),f((()=>e("select",a,t))))}},[l(a,t)])},v=()=>{if(s.description||a.description){const e=a.description?a.description():s.description;return i("div",{class:x("description")},[e])}};return()=>i(u,r({class:x(),position:"bottom","onUpdate:show":n},d(s,C)),{default:()=>{var e;return[c(),v(),i("div",{class:x("content")},[s.actions.map(g),null==(e=a.default)?void 0:e.call(a)]),o()]}})}}));export{h as A};

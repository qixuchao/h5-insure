import{aE as s,bP as a,bQ as e,aK as n,bR as t,bS as c,bT as o,d as l,i,a9 as r,bU as d,bB as u,ax as p,aI as b,bk as m,$ as f,aS as g}from"./index-d6f83575.js";const[k,v]=s("action-sheet"),x=a({},e,{title:String,round:n,actions:t(),closeIcon:c("cross"),closeable:n,cancelText:String,description:String,closeOnPopstate:n,closeOnClickAction:Boolean,safeAreaInsetBottom:n}),h=[...o,"round","closeOnPopstate","safeAreaInsetBottom"];const A=g(l({name:k,props:x,emits:["select","cancel","update:show"],setup(s,{slots:a,emit:e}){const n=s=>e("update:show",s),t=()=>{n(!1),e("cancel")},c=()=>{if(s.title)return i("div",{class:v("header")},[s.title,s.closeable&&i(p,{name:s.closeIcon,class:[v("close"),b],onClick:t},null)])},o=()=>{if(a.cancel||s.cancelText)return[i("div",{class:v("gap")},null),i("button",{type:"button",class:v("cancel"),onClick:t},[a.cancel?a.cancel():s.cancelText])]},l=(s,e)=>s.loading?i(m,{class:v("loading-icon")},null):a.action?a.action({action:s,index:e}):[i("span",{class:v("name")},[s.name]),s.subname&&i("div",{class:v("subname")},[s.subname])],g=(a,t)=>{const{color:c,loading:o,callback:r,disabled:d,className:u}=a;return i("button",{type:"button",style:{color:c},class:[v("item",{loading:o,disabled:d}),u],onClick:()=>{d||o||(r&&r(a),s.closeOnClickAction&&n(!1),f((()=>e("select",a,t))))}},[l(a,t)])},k=()=>{if(s.description||a.description){const e=a.description?a.description():s.description;return i("div",{class:v("description")},[e])}};return()=>i(u,r({class:v(),position:"bottom","onUpdate:show":n},d(s,h)),{default:()=>{var e;return[c(),k(),i("div",{class:v("content")},[s.actions.map(g),null==(e=a.default)?void 0:e.call(a)]),o()]}})}}));export{A};

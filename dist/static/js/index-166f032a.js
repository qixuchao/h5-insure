import{B as s,a2 as a,dr as e,R as t,ds as c,Q as n,dt as o,d as l,b as i,a8 as r,dc as d,cr as u,aa as p,bY as m,L as b,M as f,O as g}from"./index-ac3e839b.js";const[v,k]=s("action-sheet"),x=a({},e,{title:String,round:t,actions:c(),closeIcon:n("cross"),closeable:t,cancelText:String,description:String,closeOnPopstate:t,closeOnClickAction:Boolean,safeAreaInsetBottom:t}),h=[...o,"round","closeOnPopstate","safeAreaInsetBottom"];const A=g(l({name:v,props:x,emits:["select","cancel","update:show"],setup(s,{slots:a,emit:e}){const t=s=>e("update:show",s),c=()=>{t(!1),e("cancel")},n=()=>{if(s.title)return i("div",{class:k("header")},[s.title,s.closeable&&i(p,{name:s.closeIcon,class:[k("close"),m],onClick:c},null)])},o=()=>{if(a.cancel||s.cancelText)return[i("div",{class:k("gap")},null),i("button",{type:"button",class:k("cancel"),onClick:c},[a.cancel?a.cancel():s.cancelText])]},l=(s,e)=>s.loading?i(b,{class:k("loading-icon")},null):a.action?a.action({action:s,index:e}):[i("span",{class:k("name")},[s.name]),s.subname&&i("div",{class:k("subname")},[s.subname])],g=(a,c)=>{const{color:n,loading:o,callback:r,disabled:d,className:u}=a;return i("button",{type:"button",style:{color:n},class:[k("item",{loading:o,disabled:d}),u],onClick:()=>{d||o||(r&&r(a),s.closeOnClickAction&&t(!1),f((()=>e("select",a,c))))}},[l(a,c)])},v=()=>{if(s.description||a.description){const e=a.description?a.description():s.description;return i("div",{class:k("description")},[e])}};return()=>i(u,r({class:k(),position:"bottom","onUpdate:show":t},d(s,h)),{default:()=>{var e;return[n(),v(),i("div",{class:k("content")},[s.actions.map(g),null==(e=a.default)?void 0:e.call(a)]),o()]}})}}));export{A};

import{v as s,X as e,cQ as a,K as c,cR as n,J as t,cS as o,d as l,b as i,a0 as r,$ as d,cu as u,bl as p,bH as m,L as b,E as f,H as g}from"./index-2251e077.js";const[v,k]=s("action-sheet"),x=e({},a,{title:String,round:c,actions:n(),closeIcon:t("cross"),closeable:c,cancelText:String,description:String,closeOnPopstate:c,closeOnClickAction:Boolean,safeAreaInsetBottom:c}),h=[...o,"round","closeOnPopstate","safeAreaInsetBottom"];const A=g(l({name:v,props:x,emits:["select","cancel","update:show"],setup(s,{slots:e,emit:a}){const c=s=>a("update:show",s),n=()=>{c(!1),a("cancel")},t=()=>{if(s.title)return i("div",{class:k("header")},[s.title,s.closeable&&i(p,{name:s.closeIcon,class:[k("close"),m],onClick:n},null)])},o=()=>{if(e.cancel||s.cancelText)return[i("div",{class:k("gap")},null),i("button",{type:"button",class:k("cancel"),onClick:n},[e.cancel?e.cancel():s.cancelText])]},l=(s,a)=>s.loading?i(b,{class:k("loading-icon")},null):e.action?e.action({action:s,index:a}):[i("span",{class:k("name")},[s.name]),s.subname&&i("div",{class:k("subname")},[s.subname])],g=(e,n)=>{const{color:t,loading:o,callback:r,disabled:d,className:u}=e;return i("button",{type:"button",style:{color:t},class:[k("item",{loading:o,disabled:d}),u],onClick:()=>{d||o||(r&&r(e),s.closeOnClickAction&&c(!1),f((()=>a("select",e,n))))}},[l(e,n)])},v=()=>{if(s.description||e.description){const a=e.description?e.description():s.description;return i("div",{class:k("description")},[a])}};return()=>i(u,r({class:k(),position:"bottom","onUpdate:show":c},d(s,h)),{default:()=>{var a;return[t(),v(),i("div",{class:k("content")},[s.actions.map(g),null==(a=e.default)?void 0:a.call(e)]),o()]}})}}));export{A};

import{v as s,X as a,c6 as e,K as c,c7 as n,J as t,c8 as o,d as l,b as i,a0 as r,$ as d,bR as u,aN as p,bA as m,L as b,E as f,H as g}from"./index-13276606.js";const[v,k]=s("action-sheet"),x=a({},e,{title:String,round:c,actions:n(),closeIcon:t("cross"),closeable:c,cancelText:String,description:String,closeOnPopstate:c,closeOnClickAction:Boolean,safeAreaInsetBottom:c}),A=[...o,"round","closeOnPopstate","safeAreaInsetBottom"];const h=g(l({name:v,props:x,emits:["select","cancel","update:show"],setup(s,{slots:a,emit:e}){const c=s=>e("update:show",s),n=()=>{c(!1),e("cancel")},t=()=>{if(s.title)return i("div",{class:k("header")},[s.title,s.closeable&&i(p,{name:s.closeIcon,class:[k("close"),m],onClick:n},null)])},o=()=>{if(a.cancel||s.cancelText)return[i("div",{class:k("gap")},null),i("button",{type:"button",class:k("cancel"),onClick:n},[a.cancel?a.cancel():s.cancelText])]},l=(s,e)=>s.loading?i(b,{class:k("loading-icon")},null):a.action?a.action({action:s,index:e}):[i("span",{class:k("name")},[s.name]),s.subname&&i("div",{class:k("subname")},[s.subname])],g=(a,n)=>{const{color:t,loading:o,callback:r,disabled:d,className:u}=a;return i("button",{type:"button",style:{color:t},class:[k("item",{loading:o,disabled:d}),u],onClick:()=>{d||o||(r&&r(a),s.closeOnClickAction&&c(!1),f((()=>e("select",a,n))))}},[l(a,n)])},v=()=>{if(s.description||a.description){const e=a.description?a.description():s.description;return i("div",{class:k("description")},[e])}};return()=>i(u,r({class:k(),position:"bottom","onUpdate:show":c},d(s,A)),{default:()=>{var e;return[t(),v(),i("div",{class:k("content")},[s.actions.map(g),null==(e=a.default)?void 0:e.call(a)]),o()]}})}}));export{h as A};

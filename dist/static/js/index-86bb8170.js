import{v as s,X as a,cG as e,K as c,cH as n,J as t,cI as o,d as l,b as i,a0 as r,$ as d,cg as u,bg as p,bK as b,L as m,E as g,H as f}from"./index-70866bb3.js";const[v,k]=s("action-sheet"),x=a({},e,{title:String,round:c,actions:n(),closeIcon:t("cross"),closeable:c,cancelText:String,description:String,closeOnPopstate:c,closeOnClickAction:Boolean,safeAreaInsetBottom:c}),h=[...o,"round","closeOnPopstate","safeAreaInsetBottom"];const A=f(l({name:v,props:x,emits:["select","cancel","update:show"],setup(s,{slots:a,emit:e}){const c=s=>e("update:show",s),n=()=>{c(!1),e("cancel")},t=()=>{if(s.title)return i("div",{class:k("header")},[s.title,s.closeable&&i(p,{name:s.closeIcon,class:[k("close"),b],onClick:n},null)])},o=()=>{if(a.cancel||s.cancelText)return[i("div",{class:k("gap")},null),i("button",{type:"button",class:k("cancel"),onClick:n},[a.cancel?a.cancel():s.cancelText])]},l=(s,e)=>s.loading?i(m,{class:k("loading-icon")},null):a.action?a.action({action:s,index:e}):[i("span",{class:k("name")},[s.name]),s.subname&&i("div",{class:k("subname")},[s.subname])],f=(a,n)=>{const{color:t,loading:o,callback:r,disabled:d,className:u}=a;return i("button",{type:"button",style:{color:t},class:[k("item",{loading:o,disabled:d}),u],onClick:()=>{d||o||(r&&r(a),s.closeOnClickAction&&c(!1),g((()=>e("select",a,n))))}},[l(a,n)])},v=()=>{if(s.description||a.description){const e=a.description?a.description():s.description;return i("div",{class:k("description")},[e])}};return()=>i(u,r({class:k(),position:"bottom","onUpdate:show":c},d(s,h)),{default:()=>{var e;return[t(),v(),i("div",{class:k("content")},[s.actions.map(f),null==(e=a.default)?void 0:e.call(a)]),o()]}})}}));export{A};

import{B as s,a2 as a,dc as e,R as c,dd as n,Q as t,de as o,d as l,b as i,a8 as d,c_ as r,cb as u,aa as p,bF as m,L as b,M as f,O as g}from"./index-e61895f6.js";const[v,k]=s("action-sheet"),x=a({},e,{title:String,round:c,actions:n(),closeIcon:t("cross"),closeable:c,cancelText:String,description:String,closeOnPopstate:c,closeOnClickAction:Boolean,safeAreaInsetBottom:c}),h=[...o,"round","closeOnPopstate","safeAreaInsetBottom"];const A=g(l({name:v,props:x,emits:["select","cancel","update:show"],setup(s,{slots:a,emit:e}){const c=s=>e("update:show",s),n=()=>{c(!1),e("cancel")},t=()=>{if(s.title)return i("div",{class:k("header")},[s.title,s.closeable&&i(p,{name:s.closeIcon,class:[k("close"),m],onClick:n},null)])},o=()=>{if(a.cancel||s.cancelText)return[i("div",{class:k("gap")},null),i("button",{type:"button",class:k("cancel"),onClick:n},[a.cancel?a.cancel():s.cancelText])]},l=(s,e)=>s.loading?i(b,{class:k("loading-icon")},null):a.action?a.action({action:s,index:e}):[i("span",{class:k("name")},[s.name]),s.subname&&i("div",{class:k("subname")},[s.subname])],g=(a,n)=>{const{color:t,loading:o,callback:d,disabled:r,className:u}=a;return i("button",{type:"button",style:{color:t},class:[k("item",{loading:o,disabled:r}),u],onClick:()=>{r||o||(d&&d(a),s.closeOnClickAction&&c(!1),f((()=>e("select",a,n))))}},[l(a,n)])},v=()=>{if(s.description||a.description){const e=a.description?a.description():s.description;return i("div",{class:k("description")},[e])}};return()=>i(u,d({class:k(),position:"bottom","onUpdate:show":c},r(s,h)),{default:()=>{var e;return[t(),v(),i("div",{class:k("content")},[s.actions.map(g),null==(e=a.default)?void 0:e.call(a)]),o()]}})}}));export{A};

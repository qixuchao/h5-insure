import{b9 as s,bK as a,bL as e,be as n,bM as t,bN as c,bO as o,d as l,e as i,a9 as r,bP as d,ai as b,ah as u,bc as p,bs as m,W as f,bm as g}from"./index-c26f5a93.js";const[v,h]=s("action-sheet"),k=a({},e,{title:String,round:n,actions:t(),closeIcon:c("cross"),closeable:n,cancelText:String,description:String,closeOnPopstate:n,closeOnClickAction:Boolean,safeAreaInsetBottom:n}),x=[...o,"round","closeOnPopstate","safeAreaInsetBottom"];const A=g(l({name:v,props:k,emits:["select","cancel","update:show"],setup(s,{slots:a,emit:e}){const n=s=>e("update:show",s),t=()=>{n(!1),e("cancel")},c=()=>{if(s.title)return i("div",{class:h("header")},[s.title,s.closeable&&i(u,{name:s.closeIcon,class:[h("close"),p],onClick:t},null)])},o=()=>{if(a.cancel||s.cancelText)return[i("div",{class:h("gap")},null),i("button",{type:"button",class:h("cancel"),onClick:t},[a.cancel?a.cancel():s.cancelText])]},l=(s,e)=>s.loading?i(m,{class:h("loading-icon")},null):a.action?a.action({action:s,index:e}):[i("span",{class:h("name")},[s.name]),s.subname&&i("div",{class:h("subname")},[s.subname])],g=(a,t)=>{const{color:c,loading:o,callback:r,disabled:d,className:b}=a;return i("button",{type:"button",style:{color:c},class:[h("item",{loading:o,disabled:d}),b],onClick:()=>{d||o||(r&&r(a),s.closeOnClickAction&&n(!1),f((()=>e("select",a,t))))}},[l(a,t)])},v=()=>{if(s.description||a.description){const e=a.description?a.description():s.description;return i("div",{class:h("description")},[e])}};return()=>i(b,r({class:h(),position:"bottom","onUpdate:show":n},d(s,x)),{default:()=>{var e;return[c(),v(),i("div",{class:h("content")},[s.actions.map(g),null==(e=a.default)?void 0:e.call(a)]),o()]}})}}));export{A};

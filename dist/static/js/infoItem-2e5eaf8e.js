import{_ as e,d as t,U as a,dJ as n,o,c as s,n as l,e as c,f as i,u as d,g as p,a as m,cJ as u,b as r,T as y,ae as f}from"./index-e55a5aab.js";const b={class:"content"},v=["onClick"];var k=e(t({__name:"infoItem",props:{label:{type:String,default:""},content:{type:String,default:""},line:{type:Boolean,default:!1},isCopy:{type:Boolean,default:!1},minWidth:{type:String,default:""}},setup(e){const t=e,k=a();n();const C=()=>{const e=document.createElement("input");e.setAttribute("value",t.content),document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),y("复制成功")};return(t,a)=>{const n=f;return o(),s("div",{class:l(["com-field-info",e.line?"com-field-info-line":""])},[e.label?(o(),s("div",{key:0,class:l(["label",e.minWidth])},c(e.label),3)):i("",!0),d(k).label?p(t.$slots,"label",{key:1},void 0,!0):i("",!0),m("div",b,c(e.content),1),d(k).content?p(t.$slots,"content",{key:2},void 0,!0):i("",!0),e.isCopy&&e.content?(o(),s("div",{key:3,class:"link",onClick:u(C,["stop"])},[r(n,{name:"copy",class:"icon"})],8,v)):i("",!0)],2)}}}),[["__scopeId","data-v-29af9cc1"]]);export{k as I};

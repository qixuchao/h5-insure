import{d as e,dB as t,dR as n,o as a,c as o,n as s,e as l,f as c,u as i,g as d,a as p,cS as m,b as u,_ as f,aH as r,T as y}from"./index-1a2f17f4.js";const b={class:"content"},v=["onClick"];var k=f(e({__name:"infoItem",props:{label:{type:String,default:""},content:{type:String,default:""},line:{type:Boolean,default:!1},isCopy:{type:Boolean,default:!1},minWidth:{type:String,default:""}},setup(e){const f=e,k=t();n();const C=()=>{const e=document.createElement("input");e.setAttribute("value",f.content),document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),y("复制成功")};return(t,n)=>{const f=r;return a(),o("div",{class:s(["com-field-info",e.line?"com-field-info-line":""])},[e.label?(a(),o("div",{key:0,class:s(["label",e.minWidth])},l(e.label),3)):c("",!0),i(k).label?d(t.$slots,"label",{key:1},void 0,!0):c("",!0),p("div",b,l(e.content),1),i(k).content?d(t.$slots,"content",{key:2},void 0,!0):c("",!0),e.isCopy&&e.content?(a(),o("div",{key:3,class:"link",onClick:m(C,["stop"])},[u(f,{name:"copy",class:"icon"})],8,v)):c("",!0)],2)}}}),[["__scopeId","data-v-29af9cc1"]]);export{k as I};

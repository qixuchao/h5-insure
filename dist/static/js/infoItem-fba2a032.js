import{d as e,U as t,dj as n,o,c as a,p as s,e as l,q as i,u as c,f as d,a as p,cn as r,b as y,_ as f,ae as u,T as m}from"./index-c89a6da4.js";const b={class:"content"},v=["onClick"];var k=f(e({__name:"infoItem",props:{label:{type:String,default:""},content:{type:String,default:""},line:{type:Boolean,default:!1},isCopy:{type:Boolean,default:!1},minWidth:{type:String,default:""}},setup(e){const f=e,k=t(),{copy:_,copied:g,isSupported:C}=n(),S=()=>{console.log(f.content,"props.content====="),_(f.content),m("复制成功")};return(t,n)=>{const f=u;return o(),a("div",{class:s(["com-field-info",e.line?"com-field-info-line":""])},[e.label?(o(),a("div",{key:0,class:s(["label",e.minWidth])},l(e.label),3)):i("",!0),c(k).label?d(t.$slots,"label",{key:1},void 0,!0):i("",!0),p("div",b,l(e.content),1),c(k).content?d(t.$slots,"content",{key:2},void 0,!0):i("",!0),e.isCopy&&e.content?(o(),a("div",{key:3,class:"link",onClick:r(S,["stop"])},[y(f,{name:"copy",class:"icon"})],8,v)):i("",!0)],2)}}}),[["__scopeId","data-v-0b866896"]]);export{k as I};
